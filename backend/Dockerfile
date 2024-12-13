FROM python:3.12-slim

RUN apt-get update && apt-get install -y g++

WORKDIR /app

COPY . /app 

RUN g++ -o credit credit.cpp

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

ENV PORT=8000 

CMD ["python", "server.py"]