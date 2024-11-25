# Personalized Learning Platform Using Elasticsearch and Kibana

This project is a **Personalized Learning Platform** built using **Elasticsearch** for course and student data management, and **Kibana** for data visualization. The platform enables users to:
- Search courses based on keywords such as title, description, or tags.
- Visualize course data and student performance using Kibana dashboards.

## Features
1. **Personalized Course Recommendations:**
   - Search courses using keywords like "AI" or "Data Science."
   - Retrieve results filtered by title, description, and tags.

2. **Real-Time Data Visualization:**
   - Interactive dashboards for course tags, difficulty levels, and student performance.
   - Kibana-powered visualizations for data insights.

3. **Elasticsearch Integration:**
   - Backend API for managing and querying course and student data.
   - Fast and scalable search using Elasticsearch.

## Prerequisites
- [Node.js](https://nodejs.org/) (v18.x or above)
- [Docker](https://www.docker.com/)
- [Elasticsearch](https://www.elastic.co/elasticsearch/)
- [Kibana](https://www.elastic.co/kibana/)

## Project Setup

1. Clone the Repository
```bash
git clone https://github.com/nishad2725/personalized-learning-using-Elasticsearch.git
cd personalized-learning-using-Elasticsearch

2. Start Elasticsearch
Run Elasticsearch using Docker:

docker run --name elasticsearch-container -p 9200:9200 -p 9300:9300 \
-e "discovery.type=single-node" \
-e "xpack.security.enabled=false" \
docker.elastic.co/elasticsearch/elasticsearch:8.10.2
3. Start Kibana
Run Kibana using Docker:

docker run --name kibana-container -p 5601:5601 --link elasticsearch-container:elasticsearch \
-e "ELASTICSEARCH_HOSTS=http://elasticsearch:9200" \
docker.elastic.co/kibana/kibana:8.10.2
4. Seed Data
Seed the Elasticsearch database with courses and students:

node server.js
5. Start the Backend Server
Run the backend server for handling API requests:

node server.js
6. Start the Frontend
Run the React frontend:

npm start
