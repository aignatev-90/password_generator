FROM python:3.10-slim

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip

COPY requirements.txt .
RUN pip install -r requirements.txt

CMD python3 manage.py runserver 0.0.0.0:8080