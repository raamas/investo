<script>
	let { data } = $props();
	console.log(data);
</script>

<div class="flex flex-col justify-center text-center">
	<div
		class="min-h-[30vh] w-screen bg-cover bg-fixed bg-bottom bg-no-repeat"
		style="background-image: url({data.image.large});"
	>
		<div
			class="absolute left-0 min-h-[30vh] w-full bg-linear-to-t from-zinc-900 via-zinc-900 opacity-30"
		></div>
		<!-- <img src={data.image.large} class=" w-full" alt="" /> -->
	</div>
	<h2 class="mt-2 text-2xl font-bold">{data.name}</h2>
	<div class="content">
		<div>
			${data.market_data.current_price.usd} USD
		</div>
		<div>
			Market Cap Rank: {data.market_data.market_cap_rank}
		</div>
		<div>
			Last Month: %{data.market_data.price_change_percentage_30d}
		</div>

		CHART HERE
	</div>
</div>
