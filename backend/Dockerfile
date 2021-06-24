FROM python:3.9-buster

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD ["gunicorn", "-w", "4", "-t", "0", "-b", "0.0.0.0", "app:create_app()"]