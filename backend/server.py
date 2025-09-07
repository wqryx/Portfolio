from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime
# from email.message import EmailMessage # Eliminado para SendGrid
# import aiosmtplib # Eliminado para SendGrid
import ssl # Importar el módulo SSL
from sendgrid import SendGridAPIClient # Importar SendGridClient
from sendgrid.helpers.mail import Email, Mail, Content # Importar Email y Mail


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Obtener las variables de entorno para el correo
EMAIL_USERNAME = os.getenv('EMAIL_USERNAME')
SENDGRID_API_KEY = os.getenv('SENDGRID_API_KEY') # Nueva variable para SendGrid
# EMAIL_PASSWORD = os.getenv('EMAIL_PASSWORD') # Eliminado para SendGrid
# EMAIL_HOST = os.getenv('EMAIL_HOST') # Eliminado para SendGrid
# EMAIL_PORT = int(os.getenv('EMAIL_PORT', 587)) # Eliminado para SendGrid

# Crear un contexto SSL/TLS predeterminado para una mejor compatibilidad
ssl_context = ssl.create_default_context()

# MongoDB connection
# mongo_url = os.environ['MONGO_URL']
# client = AsyncIOMotorClient(mongo_url)
# db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
# class StatusCheck(BaseModel):
#     id: str = Field(default_factory=lambda: str(uuid.uuid4()))
#     client_name: str
#     timestamp: datetime = Field(default_factory=datetime.utcnow)

# class StatusCheckCreate(BaseModel):
#     client_name: str

class ContactForm(BaseModel):
    name: str
    email: str
    subject: str
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

# @api_router.post("/status", response_model=StatusCheck)
# async def create_status_check(input: StatusCheckCreate):
#     status_dict = input.dict()
#     status_obj = StatusCheck(**status_dict)
#     _ = await db.status_checks.insert_one(status_obj.dict())
#     return status_obj

@api_router.post("/contact", status_code=200)
async def send_contact_email(form_data: ContactForm):
    try:
        # msg = EmailMessage() # Eliminado para SendGrid
        # msg['From'] = EMAIL_USERNAME # Eliminado para SendGrid
        # msg['To'] = EMAIL_USERNAME  # Envía el correo a ti mismo # Eliminado para SendGrid
        # msg['Subject'] = f"Mensaje de Contacto del Portfolio: {form_data.subject}" # Eliminado para SendGrid
        # msg.set_content(f"Nombre: {form_data.name}\nEmail: {form_data.email}\nMensaje:\n{form_data.message}") # Eliminado para SendGrid

        # await aiosmtplib.send( # Eliminado para SendGrid
        #     msg, # Eliminado para SendGrid
        #     hostname=EMAIL_HOST, # Eliminado para SendGrid
        #     port=EMAIL_PORT, # Eliminado para SendGrid
        #     username=EMAIL_USERNAME, # Eliminado para SendGrid
        #     password=EMAIL_PASSWORD, # Eliminado para SendGrid
        #     use_tls=True,  # Usar TLS para seguridad (STARTTLS) # Eliminado para SendGrid
        #     tls_context=ssl_context # Usar el contexto SSL/TLS # Eliminado para SendGrid
        # ) # Eliminado para SendGrid

        # logger.info(f"Correo enviado de {form_data.email} con asunto: {form_data.subject}") # Eliminado para SendGrid

        # Nuevo código para SendGrid
        message = Mail(
            from_email=Email("Portfolio Contacto", EMAIL_USERNAME),
            to_emails=Email("Roberto", EMAIL_USERNAME),
            subject=f"Mensaje de Contacto del Portfolio: {form_data.subject}",
            html_content=f"Nombre: {form_data.name}<br>Email: {form_data.email}<br>Mensaje:<br>{form_data.message}"
        )

        sg = SendGridAPIClient(SENDGRID_API_KEY)
        response = sg.send(message)
        logger.info(f"Correo enviado de {form_data.email} con asunto: {form_data.subject}")
        return {"message": "Correo enviado con éxito"}
    except Exception as e:
        logger.error(f"Error al enviar correo: {e}")
        raise HTTPException(status_code=500, detail=f"Error al enviar correo: {e}")

# @api_router.get("/status", response_model=List[StatusCheck])
# async def get_status_checks():
#     status_checks = await db.status_checks.find().to_list(1000)
#     return [StatusCheck(**status_check) for status_check in status_checks]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# @app.on_event("shutdown")
# async def shutdown_db_client():
#     client.close()
