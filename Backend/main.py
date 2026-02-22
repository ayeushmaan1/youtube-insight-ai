from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from rag_pipeline import process_question

app = FastAPI()

# Allow Chrome extension to call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class RequestBody(BaseModel):
    video_id: str
    question: str

@app.post("/ask")
def ask(data: RequestBody):
    answer = process_question(data.video_id, data.question)
    return {"answer": answer}