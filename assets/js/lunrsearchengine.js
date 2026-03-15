
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "/about",
    "title": "Mediumish",
    "body": "This website is built with Jekyll and Mediumish template for Jekyll. It's for demonstration purposes, no real content can be found. Mediumish template for Jekyll is compatible with Github pages, in fact even this demo is created with Github Pages and hosted with Github.  Documentation: Please, read the docs here. Questions or bug reports?: Head over to our Github repository! "
    }, {
    "id": 2,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "/",
    "title": "Home",
    "body": "      Destaques:                                                                                                                                                                                                           O que é Doença Celíaca?                              :               A Doença Celíaca (DC) - também conhecida por enteropatia sensível ao glúten - é uma doença de origem imunológica e é caracterizada por uma reação. . . :                                                                                                                                                                       Bia                                12 Nov 2023                                                                                                                                                                                                                                                                                                                  Quem sou eu?                              :               Oie!Eu sou a Beatriz, mas todos me chamam de Bia 😁:                                                                                                                                                                       Bia                                06 Nov 2023                                                                                                                      Publicações:             "
    }, {
    "id": 4,
    "url": "/map",
    "title": "Mapa",
    "body": "&gt;"
    }, {
    "id": 5,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "/o-que-%C3%A9-DC/",
    "title": "O que é Doença Celíaca?",
    "body": "2023/11/12 - A Doença Celíaca (DC) - também conhecida por enteropatia sensível ao glúten - é uma doença de origem imunológica e é caracterizada por uma reação inflamatória no intestino delgado quando se consome glúten. Essa inflamação do intestino, quando severa, pode causar má absorção de nutrientes e acabar desencadeando outras patologias. Por ser uma doença de origem autoimune não deve ser confundida com uma alergia ao glúten. A Doença Celíaca é relativamente comum, mas por ter sintomas diversos, muitos pacientes acabam tendo um diagnóstico muito demorado (meses ou até anos) e até um diagnóstico incorreto. A maior parte dos pacientes com DC apresentam uma forma mais branda da doença, com poucos ou nenhum sintoma. Alguns dos sintomas causados pela Doença Celíaca (não tratada) são::  Diarréia; Constipação; Inchaço; Anemia; Dor nas articulações; Deficiências nutricionais; Queda de Cabelo; Distúrbios menstruais; Infertilidade; Ansiedade; Enxaqueca; Depressão; Fadiga, etc. A DC tem um forte fator hereditário e por isso é possível que parentes de primeiro grau de celíacos também sejam portadores da doença. E, apesar de poder acontecer em qualquer pessoa, pacientes portadores de outras doenças autoimunes apresentam um risco maior de desenvolver a doença celíaca do que outras pessoas. Alguns exemplos de Doenças Autoimunes são::  Diabetes Mellitus (tipo 1); Tireoidite de Hashimoto; Lúpus; Artrite Reumatóide; Doença de Addison, etc. Exemplos de doenças sem origem autoimune que também estão relacionadas à maior incidência de Doença Celíaca::  Fibromialgia; Síndrome de Down, etc. O diagnóstico da DC pode ser difícil porque existem diversos sintomas, inclusive sintomas não-intestinais. Caso você tenha sintomas que possam indicar a Doença Celíaca, procure um médico gastroenterologista e não corte o glúten da sua alimentação. É importante manter o consumo do glúten, caso contrário, pode acabar indicando índices mais baixos dos anticorpos e atrapalhar o seu diagnóstico. Fontes: https://www. mdsaude. com/gastroenterologia/doenca-celiaca-gluten/https://doencaceliaca. com. br/ "
    }, {
    "id": 7,
    "url": "/apresentacao/",
    "title": "Quem sou eu?",
    "body": "2023/11/06 - Oie!Eu sou a Beatriz, mas todos me chamam de Bia 😁 Tenho 30 anos e fechei o diagnóstico da Doença Celíaca em 11 de março de 2021 - mas o processo de desconfiança começou no final de 2020, quando uma reumatologista notou meu PCR aumentado e resolveu investigar exames antigos e achou um dos exames sorológicos feitos para o diagnóstico da DC feito em março/2017, que estava bastante alterado e foi solicitado por um médico que eu não voltei e o exame acabou se perdendo. Com isso ela me orientou a procurar um gastroenterologista para investigar possíveis doenças autoimunes do trato intestinal. E a partir daí, fiz os exames, incluindo a biópsia de duodeno (exame ouro para o diagnóstico da DC) e todos deram positivos. A vida inteira eu passei mal e tive diarréias loucas e fulminantes com comidas que já havia comido e nunca descobri o porquê. Minha mãe sempre brincou comigo dizendo que desde pequena eu queria conhecer os banheiros de todos os lugares que nós íamos, como se fosse uma forma de chamar atenção - só que nunca foi pra chamar atenção, eu tinha alguma coisa que ninguém desconfiava e/ou sabia o que poderia ser. Muitos anos se passaram e acabei descobrindo que tenho a doença celíaca. Então foi um diagnóstico difícil, mas também foi bom, porque finalmente pude entender o motivo de tantos anos passando mal em momentos diversos e que nunca fizeram sentido. Agora são pouco mais de 2 anos de diagnóstico e uma biópsia de duodeno com Marsh 0 🥳👏🏻E nesse tempo tenho lido bastante para me informar mais sobre a doença, ensinar aos meus familiares e amigos sobre todo os cuidados que preciso e aprender a lidar e me cuidar da melhor forma possível para ter uma vida saudável e feliz - e mais importante, sem glúten. Então criei esse blog para compartilhar conhecimento e trocar experiências com outros Celíacos 🤍 "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});