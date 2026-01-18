#!/usr/bin/env python3
"""
SHAHID RESTRO - Local Server Launcher
This script starts a local HTTP server for the restaurant website
"""

import http.server
import socketserver
import webbrowser
import os
import sys
import threading
import time

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers to allow all origins
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def log_message(self, format, *args):
        # Custom logging
        print(f"[{time.strftime('%H:%M:%S')}] {format % args}")

def start_server(port=3000):
    """Start the HTTP server"""
    try:
        os.chdir(os.path.dirname(os.path.abspath(__file__)))
        
        with socketserver.TCPServer(("", port), CustomHTTPRequestHandler) as httpd:
            print("=" * 60)
            print("🍽️  SHAHID RESTRO - Local Server Starting")
            print("=" * 60)
            print(f"✅ Server running at: http://localhost:{port}")
            print(f"✅ Main website: http://localhost:{port}/index.html")
            print(f"✅ Helper page: http://localhost:{port}/serve.html")
            print("=" * 60)
            print("📱 Copy one of the URLs above and paste in your browser")
            print("🔴 Press Ctrl+C to stop the server")
            print("=" * 60)
            
            # Auto-open browser after a short delay
            def open_browser():
                time.sleep(2)
                try:
                    webbrowser.open(f'http://localhost:{port}')
                    print(f"🌐 Browser opened automatically!")
                except:
                    print("⚠️  Could not auto-open browser. Please open manually.")
            
            threading.Thread(target=open_browser, daemon=True).start()
            
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n🔴 Server stopped by user")
        sys.exit(0)
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"❌ Port {port} is already in use. Trying port {port + 1}...")
            start_server(port + 1)
        else:
            print(f"❌ Error starting server: {e}")
            sys.exit(1)

if __name__ == "__main__":
    start_server()
