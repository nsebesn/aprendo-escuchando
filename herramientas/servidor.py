"""Servidor local para probar el programa mientras se edita.

Sirve la carpeta del programa sin guardar nada en la memoria del navegador,
para que cada recarga muestre los archivos tal como están en el disco.

Uso:  python3 herramientas/servidor.py [puerto]
"""
import http.server
import os
import sys

PUERTO = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
CARPETA = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")


class SinMemoria(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=CARPETA, **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


if __name__ == "__main__":
    with http.server.ThreadingHTTPServer(("127.0.0.1", PUERTO), SinMemoria) as servidor:
        print("Abra http://localhost:%d" % PUERTO)
        servidor.serve_forever()
