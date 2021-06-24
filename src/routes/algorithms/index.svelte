<script context="module">
	export function preload() {
		return this.fetch(`algorithms.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}

	ul li a:hover, ul li a:focus {
     color:rgb(255,62,0);
    }

</style>

<svelte:head>
	<title>Algoritmos</title>
</svelte:head>

<h1>Algoritmos</h1>

<br>
<h3>Explicación</h3>
<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel="prefetch" href="algorithms/{post.slug}">{post.title}</a></li>
	{/each}
</ul>

<br>
<h3>Uso</h3>
<ul>
	<li><a rel="prefetch" href="algorithms/k-Means">k-Means</a></li>
	<li><a rel="prefetch" href="algorithms/Silhouette">Coeficiente de silueta</a></li>
	<li><a rel="prefetch" href="algorithms/Dunn-index">Índice de Dunn</a></li>
	<li><a rel="prefetch" href="algorithms/DB-index">Índice de Davies-Bouldin</a></li>
</ul>
