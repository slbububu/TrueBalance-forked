from fastapi import FastAPI
from google.cloud import bigquery
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",
    "https://frontend-699424466777.europe-west3.run.app",
    "https://frontend-bttvfxlysa-ey.a.run.app"
]

app.add_middleware(
    CORSMiddleware,    
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

client_bq = bigquery.Client()
TEST_DATASET_ID="me-test-project-489908.my_test_dataset"

@app.get("/test-data")
def get_test_data():
    query = f"""
        SELECT * FROM `{TEST_DATASET_ID}.my_test_table`
    """

    query_job = client_bq.query(query)
    results = [dict(row) for row in query_job.result()]
    return results