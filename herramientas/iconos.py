"""Dibuja el icono del programa: un punto y tres ondas de sonido, amarillo sobre negro.

Uso:  python3 herramientas/iconos.py
Deja los archivos en la carpeta iconos/. Solo hay que correrlo si se quiere cambiar el dibujo.
"""
import os
from PIL import Image, ImageDraw

AMARILLO = (255, 214, 10)
NEGRO = (0, 0, 0)
BASE = 1024  # se dibuja grande y luego se reduce, para que los bordes queden suaves
DESTINO = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "iconos")


def dibujar():
    img = Image.new("RGB", (BASE, BASE), NEGRO)
    d = ImageDraw.Draw(img)
    cx, cy = 340, 512
    # El dibujo cabe en el círculo central, para que ningún celular lo recorte.
    d.ellipse([cx - 92, cy - 92, cx + 92, cy + 92], fill=AMARILLO)
    for radio in (240, 380, 520):
        d.arc([cx - radio, cy - radio, cx + radio, cy + radio], start=-40, end=40, fill=AMARILLO, width=68)
    return img


if __name__ == "__main__":
    os.makedirs(DESTINO, exist_ok=True)
    grande = dibujar()
    for lado in (180, 192, 512):
        ruta = os.path.join(DESTINO, "icono-%d.png" % lado)
        grande.resize((lado, lado), Image.LANCZOS).save(ruta, optimize=True)
        print("Listo:", os.path.relpath(ruta))
