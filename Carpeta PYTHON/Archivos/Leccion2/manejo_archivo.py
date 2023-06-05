# declaramos una variable

try:
    archivo = open('prueva.txt', 'w', encoding='utf8')  # la w es write que indica que significa escribir
    archivo.write('Programamos con diferente tipos de archivo hora en txt.\n')
    archivo.write('los acentos son importantes para las palabras\n')
    archivo.write('como por ejemplo : accion , ejecucion')
    archivo.write('las letras son:\nr read leer , \na append anexa , \nw  write escribe , \nx crear un archivo')
    archivo.write('con esto terminamos')
except Exception as e:
    print(e)
finally:  # siempre se ejecuta
    archivo.close()  # con esto se cierra el archivo
#archivo.write('todo quedo perfecto'): este es un error
