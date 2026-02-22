# 🎥 YouTube Insight AI  
### RAG-Based Chrome Extension for Contextual YouTube Q&A

YouTube Insight AI is a Retrieval-Augmented Generation (RAG) powered Chrome Extension that enables users to ask contextual questions about any YouTube video and receive transcript-aware AI responses in real time.

It combines transcript extraction, semantic search, vector embeddings, and LLM-based answer generation to deliver accurate, context-grounded answers.

---

## 🚀 Features

- 🔍 Dynamically extracts YouTube transcripts
- 🧠 Implements Retrieval-Augmented Generation (RAG)
- 📚 Semantic text chunking with overlap
- 📌 Vector similarity search using FAISS
- 🤖 LLaMA 3.1 integration via Groq API
- 🌐 Custom Chrome Extension frontend
- ⚡ FastAPI backend for real-time processing

---

## 🏗️ System Architecture

User (Chrome Extension)  
        ↓  
FastAPI Backend  
        ↓  
YouTube Transcript Extraction  
        ↓  
Text Chunking  
        ↓  
Embedding Generation (HuggingFace MiniLM)  
        ↓  
FAISS Vector Index  
        ↓  
Relevant Context Retrieval  
        ↓  
LLaMA (Groq API) Answer Generation  
        ↓  
Response Displayed in Extension  

---

## 🧰 Tech Stack

### Languages
- Python
- JavaScript
- HTML
- CSS

### Backend
- FastAPI
- Uvicorn
- REST API Development

### AI / NLP
- Retrieval-Augmented Generation (RAG)
- LangChain
- HuggingFace Sentence Transformers (MiniLM)
- LLaMA 3.1 (via Groq API)
- Prompt Engineering

### Vector Search
- FAISS
- Semantic Similarity Search

### Frontend
- Chrome Extension API
- Fetch API (Async Requests)

### Tools
- Git
- GitHub
- VS Code

---

## 📂 Project Structure

```
youtube-insight-ai/
│
├── Backend/
│   ├── main.py
│   ├── rag_pipeline.py
│   ├── requirements.txt
│   └── .env (not pushed)
│
├── extension/
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.js
│   └── styles.css
│
└── README.md
```

---

## ⚙️ How It Works

1. User opens a YouTube video.
2. Chrome Extension captures the video ID.
3. Question is sent to FastAPI backend.
4. Transcript is extracted using YouTube Transcript API.
5. Text is chunked and converted into embeddings.
6. FAISS retrieves the most relevant chunks.
7. Retrieved context is passed to LLaMA (Groq API).
8. Model generates a contextual answer.
9. Response is displayed inside the extension popup.

---

## 🛠️ Local Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ayeushmaan1/youtube-insight-ai.git
cd youtube-insight-ai
```

---

### 2️⃣ Backend Setup

```bash
cd Backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
```

Create a `.env` file inside `Backend/`:

```
GROQ_API_KEY=your_groq_api_key_here
```

Run the server:

```bash
python -m uvicorn main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

### 3️⃣ Load Chrome Extension

1. Open Chrome
2. Go to `chrome://extensions`
3. Enable **Developer Mode**
4. Click **Load Unpacked**
5. Select the `extension` folder

---

## 🔐 Environment Variables

Create a `.env` file inside `Backend/`:

```
GROQ_API_KEY=your_api_key
```

---

## 📈 Future Improvements

- Backend deployment (Render / Railway)
- Embedding caching for performance optimization
- Improved UI/UX design
- Automatic video summary feature
- Multi-model support
- Production-level scalability improvements

---

## 🎯 Resume Value

This project demonstrates:

- End-to-end RAG pipeline implementation
- Vector database integration (FAISS)
- LLM API integration
- Browser extension development
- Full-stack architecture design
- Semantic search systems

---

## 📜 License

This project is for educational and research purposes.
