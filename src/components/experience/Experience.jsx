import React from 'react';
import './experience.css';

function Experience() {
  return (
    <article className="Experience">
        <h1>Experience</h1>
        <div className="OneExperience">
            <h3>Real-Time Fleet Telemetry & Anomaly Detection Platform<span> - </span><span>Personal Project</span></h3>
            <div>
                {/* <time ></time> */}
                <p>Designed and implemented a real-time, event-driven telemetry processing platform to ingest and analyze high-frequency vehicle data with sub-second latency</p>
                <p>Built a Kafka-based streaming pipeline to decouple telemetry producers, stream processors, and downstream consumers.</p>
                <p>Developed a Stream Processor Service using Spring Boot + WebFlux, enabling nonblocking consumption, backpressure handling, and asynchronous ML inference calls</p>
                <p>Integrated a Machine Learning inference service (Python, Autoencoder-based anomaly detection) via REST to classify telemetry events as normal or anomalous in real time.</p>
                <p>Implemented WebSocket-based data delivery to push enriched telemetry and anomaly alerts to connected clients without polling</p>
                <p>Applied out-of-distribution detection using reconstruction error thresholds trained exclusively on normal driving behavior</p>
                <p>Containerized all services using Docker and Docker Compose for local orchestration and reproducibility.</p>
                <p>Focused on scalability, loose coupling, and fault isolation, following patterns used in large-scale streaming and IoT systems.</p>
            </div>          
        </div>
        <div className="OneExperience">
            <h3>ALL-IN-ONE<span> - </span><span>Personal Project</span></h3>
            <div>
                {/* <time></time> */}
                <p>Built a web application to centralize social media and personal links in one hub.</p>
                <p> Developed RESTful API with Java + Spring Boot, implementing JWT
                authentication, data validation, and role-based access control.</p>
                <p>Managed persistence with PostgreSQL using Spring Data JPA and Hibernate.</p>
                <p>Documented endpoints with Swagger / OpenAPI</p>
                <p>Deployed frontend on Netlify, backend on Render, and database on Neon (PostgreSQL).</p>
            </div>          
        </div>
    </article>
  );
}

export { Experience };