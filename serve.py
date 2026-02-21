# Simple local server helper (Python 3)
import http.server, socketserver, sys

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

if __name__ == '__main__':
    try:
        with socketserver.TCPServer(('', PORT), Handler) as httpd:
            print(f"Serving at http://localhost:{PORT}")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print('\nServer stopped')
    except Exception as e:
        print('Error:', e)
        sys.exit(1)
