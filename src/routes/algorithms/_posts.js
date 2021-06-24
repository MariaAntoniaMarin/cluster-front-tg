// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/algorithms/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'k-Means',
		slug: 'k-Means-description',
		html: `
			<p>K-means es un algoritmo de clasificación no supervisada (clusterización). k-Means agrupa objetos en k grupos basándose en sus características.</p>

			<h3>El algoritmo consta de tres pasos:</h3>
			<ul>
			  <li><b>Inicialización:</b> una vez escogido el número de grupos, k, se establecen k centroides aleatoriamente en el espacio de los datos.</li>
			  <li><b>Asignación objetos a los centroides:</b> cada objeto de los datos es asignado a su centroide más cercano.</li>
			  <li><b>Actualización centroides:</b> se actualiza la posición del centroide de cada grupo tomando como nuevo centroide la posición del promedio de los objetos pertenecientes a dicho grupo.</li>
			</ul>

			<h3>Limitaciones del algoritmo:</h3>
			<ul>
			  <li><b>Número de grupos:</b> el número de grupos debe ser especificado de antemano, esto requiere un conocimiento previo
			  del conjunto de datos o, alternativamente, estimar su valor más adecuado mediante la maximización de criterios de validez.</li>
			  <li><b>Elección aleatoria de centroides:</b> podría causar la formación de grupos pobres; dado que ésta es la naturaleza del
			  algoritmo, este problema es inevitable.</li>
			  <li><b>Sensible a valores atípicos:</b> podría causar que los centroides se formen de forma inadecuada.</li><br>
			</ul>

			<h2>El algoritmo k-Means se utiliza de manera recurrente cuando son desconocidos los antecedentes grupales, para así lograr identificar grupos de individuos</h2>

			<a href="algorithms/k-Means" class="button-algorithms">Usar Algoritmo</a>

			<style>
			a.button-algorithms {
				text-decoration: none;
				background-color: #333;
				padding: 2%;
				color: white;
				display: inherit;
                text-align: center;
				margin-top: 5%;
			}

			a.button-algorithms:hover {
				background-color: rgb(255,62,0);
			}
            </style>
		`
	},

	{
		title: 'Coeficiente de silueta',
		slug: 'Silhouette-description',
		html: `
			<p>El coeficiente de Silueta es una métrica para evaluar la calidad del agrupamiento obtenido con algoritmos de clustering. El objetivo de Silueta es identificar cuál es el número óptimo deagrupamientos.</p>
			<p>El coeficiente de Silueta que contrasta la distancia media dentro del clúster (elementos del mismo grupo), con la distancia media entre clústeres (elementos de otros grupos).</p>
			<p>El coeficiente de Silueta es un valor comprendido entre -1 y 1.</p>
			<div align='center'>
			  <p>−1 ≤ k(i) ≤ 1</p>
            </div>

			<h3>Posibles resultados:</h3>
			<ul>
			  <li><b>k(i)=1</b> agrupación optima.</li>
			  <li><b>k(i)=0</b> la gran mayoria de puntos se encuentran entre dos grupos.</li>
			  <li><b>k(i)=-1</b> agrupación mal asignada</li><br>
			</ul>

			<a href="algorithms/Silhouette" class="button-algorithms">Usar Algoritmo</a>

			<style>
			  a.button-algorithms {
			  	text-decoration: none;
			  	background-color: #333;
			  	padding: 2%;
			  	color: white;
			  	display: inherit;
                  text-align: center;
			  	margin-top: 5%;
			  }
  
			  a.button-algorithms:hover {
			  	background-color: rgb(255,62,0);
			  }
            </style>
		`
	},

	{
		title: 'Índice de Dunn',
		slug: 'Dunn-index-description',
		html: `

		<a href="algorithms/Dunn-index" class="button-algorithms">Usar Algoritmo</a>

		<style>
		  a.button-algorithms {
		  	text-decoration: none;
		  	background-color: #333;
		  	padding: 2%;
		  	color: white;
		  	display: inherit;
              text-align: center;
		  	margin-top: 5%;
		  }
		  
		  a.button-algorithms:hover {
		  	background-color: rgb(255,62,0);
		  }
        </style>
			
		`
	},

	{
		title: 'Índice de Davies-Bouldin',
		slug: 'DB-index-description',
		html: `

		<a href="algorithms/DB-index" class="button-algorithms">Usar Algoritmo</a>

		<style>
		  a.button-algorithms {
		  	text-decoration: none;
		  	background-color: #333;
		  	padding: 2%;
		  	color: white;
		  	display: inherit;
              text-align: center;
		  	margin-top: 5%;
		  }
		  
		  a.button-algorithms:hover {
		  	background-color: rgb(255,62,0);
		  }
        </style>
			
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
