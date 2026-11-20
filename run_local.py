#!/usr/bin/env python3
"""Serve locally so ES modules, iframe and assets work correctly."""
import http.server
import os
from pathlib import Path
os.chdir(Path(__file__).resolve().parent)
print('The Mad Engineer & Co. -> http://localhost:8000')
print('Press Ctrl+C to stop.')
http.server.ThreadingHTTPServer(('localhost',8000),http.server.SimpleHTTPRequestHandler).serve_forever()
