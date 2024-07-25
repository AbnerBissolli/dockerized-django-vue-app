# Use the official Python image from the Docker Hub
FROM python:3.10

# Install system dependencies including GDAL
RUN apt-get update 
RUN apt-get install -y gdal-bin libgdal-dev build-essential libpq-dev
RUN apt-get install -y postgresql-client

# Set the working directory
WORKDIR /app

# Install dependencies
COPY ./requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt

# Copy the rest of the application code
COPY ./project_name /app

# Set environment variables
ENV PYTHONUNBUFFERED=1

# Expose the port on which Django will run
EXPOSE 8000

# Run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
