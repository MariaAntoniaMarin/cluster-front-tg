<script>
	import HeaderChart from './_headerChart.svelte';
</script>

<style>

	div.header-chart {
	  height: 300px;
	  width: auto;
	}

	h1, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class='header-chart'>
    <HeaderChart />
</div>

<h1>Agrupamiento de datos GPS con algoritmo Kmeans</h1>

<div class='text'>
  <p><strong>Aplicación web para el agrupamiento validado de datos de georreferenciación usando el algoritmo k-means.</strong></p>
  <p>Trabajo de grado de la Universidad nacional sede manizales.</p>
</div>
