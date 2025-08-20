# Text2MathVideoAI

A tool that takes mathematical problems as input and generates explanation videos trying to solve them using AI.

## 🎯 Overview

Text2MathVideoAI is an innovative application that combines the power of artificial intelligence with mathematical problem-solving to create educational videos. Simply input a mathematical problem as text, and the system will generate a comprehensive video explanation showing how to solve it step by step.

## ✨ Features

- **Text-to-Video Generation**: Convert mathematical problems into engaging video explanations
- **AI-Powered Solutions**: Leverages advanced AI to understand and solve mathematical problems
- **Step-by-Step Explanations**: Provides detailed, educational breakdowns of problem-solving processes
- **Multiple Math Domains**: Supports various types of mathematical problems

## 🚀 Quick Start

### Prerequisites

- **Backend**: 
  - Python 3.7+
  - Conda (recommended)
  - pip package manager
- **Frontend**: 
  - Node.js (v14+)
  - npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SieamShahriare/Text2MathVideoAI.git
cd Text2MathVideoAI
```

2. **Backend Setup**:
```bash
cd backend

# Create conda environment
conda create -n text2mathvideo python=3.8
conda activate text2mathvideo

# Install Python dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your API keys and configurations
```

3. **Frontend Setup**:
```bash
cd ../frontend

# Install Node.js dependencies
npm install
```

## 🖥️ Usage

### Running the Application

#### 1. Start the Backend Server

```bash
cd backend

# Activate conda environment
conda activate text2mathvideo

# Start the server using Gunicorn
gunicorn --bind 0.0.0.0:5500 --workers 1 --threads 1 --timeout 0 app:app
```

**Backend Server Configuration:**
- **Host**: `0.0.0.0` (accessible from all interfaces)
- **Port**: `5500`
- **Workers**: 1 (single worker process)
- **Threads**: 1 (single thread per worker)
- **Timeout**: 0 (no timeout limit for long-running video generation)

#### 2. Start the Frontend

In a new terminal:

```bash
cd frontend

# Start the development server
npm start
```

The frontend will typically be available at `http://localhost:3000`

### Using the Application

1. Open your web browser and navigate to the frontend URL
2. Enter a mathematical problem in the input field
3. Click generate to create an explanation video
4. Wait for the AI to process and generate the video
5. Download or view the generated explanation video


## 🛠️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration
GEMINI_API_KEY=your_gemini_api_key_here
```


## 📋 Requirements

### System Requirements
- Python 3.7 or higher
- FFmpeg (for video processing)
- LaTeX distribution (for mathematical notation rendering)
- Minimum 4GB RAM (8GB recommended for complex problems)
- 2GB free disk space for video output

### Python Dependencies
- Flask/FastAPI (web framework)
- Gunicorn (WSGI server)
- Gemini API client
- Manim (mathematical animation engine)
- NumPy, SciPy (mathematical computations)
- Pillow (image processing)
- MoviePy (video editing)

## 🐛 Troubleshooting

### Common Issues

**Server won't start:**
- Check if port 5500 is available
- Verify all dependencies are installed
- Check environment variables are set correctly

**Video generation fails:**
- Ensure FFmpeg is installed and in PATH
- Check LaTeX installation for mathematical notation
- Verify sufficient disk space in output directory

**AI API errors:**
- Confirm API keys are valid and have sufficient credits
- Check internet connection for API calls
- Verify API rate limits haven't been exceeded

---

**Made with ❤️ by [SieamShahriare](https://github.com/SieamShahriare)**