//SE LLAMO EL JSON "REMUME.JS" DESDE EL REPOSITORIO DE GITHUB
let jsonUrl = 'https://raw.githubusercontent.com/Leonardoq1/curriculum/master/js/resume.json';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
}
//funcion para cargar el json.
function cargarJson (){
    fetch(jsonUrl)
    .then(respuesta =>respuesta.json()) //indicamos el formato en que se desea optener.
    .then(informacion => mostrarDato(informacion))//mostramos informacion.
    .catch(error => console.log(error)) 
};
cargarJson();



curriculum = `
<header class="header">
<div class="contenedor flex-centrar">
    <div class="barra barras__espacios">
        <a class="foto_link" href="/index.html">
            <div class="foto">
                <img class="foto__img no-margin centrar-texto" src="/img/foto.jpg" alt="foto">
            </div>
        </a>
        <div class="nombre">
            <h1>{nombre}</h1>
        </div>
    </div>
</div>
</header>
 <!-- contenido principal -->
    <div class="contenedor sombra contenido-principal">
        <main class="curriculum">
            <!-- <h2> Mi información</h2> -->
            <article class="informacion">
                <div class="informacion__contenido">
                    <h4 class="no-margin subtitulos">Contacto</h4>
                    <p><span class="informacion__bold" >Num: </span> <span> {numTel} </span></p>
                    <p><span class="informacion__bold">Correo: </span><span> {correo} </span></p>
                    <p><span class="informacion__bold">Ciudad: </span><span> {ciudad}  </span></p>
                </div>
            </article>
            <!--.informcion-->

            <article class="informacion">
                <div class="informacion__contenido">
                    <h4 class="no-margin  subtitulos">Quién soy</h4>
                    <p>{quienSoy}</p>

                </div>
            </article>
            <!--.informcion-->

            <article class="informacion">
                <div class="informacion__contenido">
                    <h4 class="no-margin  subtitulos">Lenguajes usados</h4>
                    <p>
                        <ul>
                            <li>{lenguaje}</li>
                            <li>{lenguaje}</li>
                            <li>{lenguaje}</li>
                            <li>{lenguaje}</li>
                            <li>{lenguaje}</li>
                            <li>{lenguaje}</li>
                        </ul>
                    </p>
                </div>
            </article>
            <!--.informcion-->

            <article class="informacion">
                <div class="informacion__contenido">
                    <h4 class="no-margin  subtitulos">Bases de Datos</h4>
                    <p>
                        <ul>
                            <li>{db}</li>
                            <li>{db}</li>
                            <li>{db}</li>
                            <li>{db}</li>
                        </ul>
                    </p>
                </div>
            </article>
            <!--.informcion-->

            <article class="informacion">
                <div class="informacion__contenido">
                    <h4 class="no-margin  subtitulos">Paqueteria Office</h4>
                    <p>
                        <ul>
                            <li>{offi}</li>
                            <li>{offi}</li>
                            <li>{offi}</li>
                        </ul>
                    </p>
                </div>
            </article>
            <!--.informcion-->
        </main>
        <aside class="sidebar">
            <article class="informacion">
                <div class="informacion__contenido">
                    <h4 class="no-margin  subtitulos">Experiencia profesional</h4>
                    <p> <span class="informacion__bold">Empresa: </span><span>{empresa}</span></p>
                    <p><span class="informacion__bold">Puesto: </span><span>{puestoAsig}</span></p>
                    <p><span class="informacion__bold">Fecha de ingreso: </span><span>{ingreso}</span> </p>
                    <p><span class="informacion__bold">Fecha de termino: </span><span>{termino}</span</p>
                    <p><span class="informacion__bold">Responsabilidades:</span>
                        <ol>
                            <li>{exp}</li>
                            <li>{exp}</li>
                            <li>{exp}</li>
                            <li>{exp}</li>
                            <li>{exp}</li>
                            <li>{exp}</li>
                        </ol>
                    </p>
                </div>
            </article>
            <!--.informcion-->

            <article class="informacion">
                <div class="informacion__contenido">
                    <h4 class="no-margin  subtitulos">Educación</h4>
                    <p><span class="informacion__bold">Escuela: </span> <span>{escula}</span></p>
                    <p><span class="informacion__bold">Grado de estudio: </span><span>{estudio}</span></p>
                    <p><span class="informacion__bold">Fecha de ingreso: </span><span>{ingreSchoo}</span></p>
                    <p><span class="informacion__bold">Fecha de termino: </span><span>{finSchoo}</span></p>
                    <p><span class="informacion__bold">Carrera: </span><span>{carrera}</span></p>
                </div>
            </article>
            <!--.informcion-->

            <article class="informacion">
                <div class="informacion__contenido">
                    <h4 class="no-margin  subtitulos">Puesto solicitado</h4>
                    <p><span class="informacion__bold">Puesto: </span><span>{puesto}</span></p>
                    <p><span class="informacion__bold">Puesto: </span><span>Programardor senior</span></p>

                </div>
            </article>
            <!--.informcion-->
        </aside>
    </div>

`
function mostrarDato (informacion){
        let Nombre = informacion.nombre;
        let NumTel = informacion.telefono;
        let Correo = informacion.correo;
        let ciudad = informacion.ciudad;

        //quien soy
        let quiensoy = informacion.Resumen;
        //Lenguajes
        let Lenguaje = informacion.lenguages;

        //DB
        let Db = informacion.baseDeDatos;

        //office
        let Offi = informacion.paqueterias;
       
        //experiencia personal
        let Empresa = informacion.experienciaLaboral[0].empresa;
        let PuestoAsig = informacion.experienciaLaboral[0].Puesto;
        let Ingreso= informacion.experienciaLaboral[0].fechaIngreso;
        let Termino= informacion.experienciaLaboral[0].fechaTermino;
        let Exp= informacion.experienciaLaboral[0].responsabilidades;

        //educacion
        let Escuela = informacion.educacion[0].escuela;
        let Estudio = informacion.educacion[0].gradoEstudio;
        let IngreSchoo = informacion.educacion[0].fechaIngreso;
        let FinSchoo = informacion.educacion[0].fechaTermino;
        let Carrera = informacion.educacion[0].carrera;
        //PuestoSoli
        let Puesto=informacion.puestoSolicitado;
        
        //madar el contenido del curriculum al html
        let html = curriculum;

    
        html=html.replace("{nombre}", Nombre);
        html=html.replace("{numTel}", NumTel);
        html=html.replace("{correo}", Correo);
        html=html.replace("{ciudad}", ciudad);
        //quien soy
        html=html.replace("{quienSoy}", quiensoy);
        //lenguaje
        html=html.replace("{lenguaje}", Lenguaje[0]);
        html=html.replace("{lenguaje}", Lenguaje[1]);
        html=html.replace("{lenguaje}", Lenguaje[2]);
        html=html.replace("{lenguaje}", Lenguaje[3]);
        html=html.replace("{lenguaje}", Lenguaje[4]);
        html=html.replace("{lenguaje}", Lenguaje[5]);
        //DB
        html=html.replace("{db}", Db[0]);
        html=html.replace("{db}", Db[1]);
        html=html.replace("{db}", Db[2]);
        html=html.replace("{db}", Db[3]);
        //office
        html=html.replace("{offi}", Offi[0]);
        html=html.replace("{offi}", Offi[1]);
        html=html.replace("{offi}", Offi[2]);
        //Expprerincia 
        html=html.replace("{empresa}", Empresa);
        html=html.replace("{puestoAsig}", PuestoAsig);
        html=html.replace("{ingreso}", Ingreso);
        html=html.replace("{termino}", Termino);
        html=html.replace("{exp}", Exp[0]);
        html=html.replace("{exp}", Exp[1]);
        html=html.replace("{exp}", Exp[2]);
        html=html.replace("{exp}", Exp[3]);
        html=html.replace("{exp}", Exp[4]);
        html=html.replace("{exp}", Exp[5]);
        
        //educacion
        html=html.replace("{escula}", Escuela);
        html=html.replace("{estudio}", Estudio);
        html=html.replace("{ingreSchoo}", IngreSchoo);
        html=html.replace("{finSchoo}", FinSchoo);
        html=html.replace("{carrera}", Carrera);

        //puestoSoli
        html=html.replace("{puesto}", Puesto);

     
        document.getElementById('contenido').innerHTML +=html;
    
};



//ver el json en consola
function verJson (){
    fetch(jsonUrl)
    .then(res =>res.json()) //indicamos el formato en que se desea optener.
    .then(info => console.log(info))//mostramos informacion.
    
};
verJson();