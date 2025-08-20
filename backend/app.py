from flask import Flask, request, jsonify, send_file
from werkzeug.utils import secure_filename
import os
import tempfile
from main import AnimationGenerator
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB limit
app.config['UPLOAD_FOLDER'] = tempfile.mkdtemp()

@app.route('/api/generate', methods=['POST'])
def generate_animation():
    if 'prompt' not in request.json or not request.json['prompt']:
        return jsonify({'error': 'Prompt is required'}), 400
    
    try:
        prompt = request.json['prompt']
        generator = AnimationGenerator()
        result = generator.process(prompt)
        
        if not result:
            return jsonify({'error': 'Failed to generate animation'}), 500
            
        return send_file(
            result,
            mimetype='video/mp4',
            as_attachment=True,
            download_name='animation.mp4'
        )
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/health')
def health_check():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5500, debug=True)