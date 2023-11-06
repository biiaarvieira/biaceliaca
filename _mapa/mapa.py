import folium
import ast
from folium.plugins import LocateControl

brasil = folium.Map(
#    location=[-16.1237611, -59.9219642],
#    zoom_start=4
    location=[-15.8308464,-47.9057899],
    zoom_start=11
)

icones = {
    'Parceiro Acelbra': ['green', 'shield-heart', 'Certificado pela Associação dos Celíacos da UF'],
    'Seguro': ['blue', 'thumbs-up', 'Seguro para pessoas celíacas'],
    'Mercado': ['pink', 'cart-shopping', 'Mercado com produtos sem glúten'],
    'Cozinha compartilhada': ['red', 'wheat-awn-circle-exclamation', 'Risco de contaminação cruzada'],
}

def create_layers(icones):
    grupos = {}
    for icone in icones:
        grupos[icone] = folium.FeatureGroup(icone)
    return grupos

def get_class(icones, arg):
    return icones.get(arg)

if __name__ == "__main__":
    LocateControl(auto_start=True).add_to(brasil)
    grupos = create_layers(icones)
    file = open("_mapa/estabelecimentos.txt", "r")
    contents = file.read()
    empresas = ast.literal_eval(contents)
    for empresa in empresas:
        cor, icon, legenda = get_class(
            icones, empresas[empresa]['classificação']
        )
        content = (
            f'<b>{empresa}</b>' +
            f'<br><i>{legenda}</i>' +
            f'<br><br>{"<br>".join(empresas[empresa]["observação"])}'
        )
        folium.Marker(
            location=empresas[empresa]['local'],
            icon=folium.Icon(color=cor, icon=icon, prefix="fa"),
            tooltip=content,
            popup=content,
        ).add_to(grupos[empresas[empresa]['classificação']])
    for grupo in grupos:
        grupos[grupo].add_to(brasil)

    folium.LayerControl().add_to(brasil)
    brasil.save('mapa.html')
