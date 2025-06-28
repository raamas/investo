<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	import { BarChart, LineChart } from 'layerchart';
	import { scaleBand, scaleUtc } from 'd3-scale';
	import { curveLinear } from 'd3-shape';
	import ChartContainer from '$lib/components/ui/chart/chart-container.svelte';
	import ChartTooltip from '$lib/components/ui/chart/chart-tooltip.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import { cubicInOut } from 'svelte/easing';

	let { data } = $props();

	const chartData = [
		{ month: 'January', desktop: 186, mobile: 80 },
		{ month: 'February', desktop: 305, mobile: 200 },
		{ month: 'March', desktop: 237, mobile: 120 },
		{ month: 'April', desktop: 73, mobile: 190 },
		{ month: 'May', desktop: 209, mobile: 130 },
		{ month: 'June', desktop: 214, mobile: 140 }
	];

	const chartConfig = {
		price: { label: 'Price', color: '#34d399' }
	};

	let context = $state();
	// let
	// console.log(data.chart);
</script>

<header class="flex w-screen flex-row items-center justify-between">
	<PageTitle>{data.name}</PageTitle>
	<div class="m-8 text-lg font-light text-gray-700">
		${data.market_data.current_price.usd.toLocaleString()} USD
	</div>
</header>
<div class="flex flex-col justify-center p-4 text-center">
	<Button class="text-md rounded-2xl bg-emerald-400 p-6">Track</Button>

	<Card class="mt-8 w-full shadow-2xs	">
		<CardHeader>
			<CardTitle>Pricing Trends</CardTitle>
		</CardHeader>
		<CardContent>
			<ChartContainer config={chartConfig} class="mt-8 min-h-[200px] w-full">
				<LineChart
					data={data.chart}
					x="month"
					xScale={scaleBand().padding(0.2)}
					axis="x"
					series={[{ key: 'price', label: 'Price', color: '#34d399' }]}
					seriesLayout="stack"
					props={{
						line: {
							curve: curveLinear,
							'stroke-width': 2,
							motion: { duration: 500, easing: cubicInOut }
						},
						xAxis: {
							format: (v) => v.toLocaleDateString('en-US', { month: 'short' }),
							tickRotation: -45
						},
						yAxis: { format: (v) => `$${v.toLocaleString()} USD` }
					}}
				>
					{#snippet tooltip()}
						<ChartTooltip hideLabel />
					{/snippet}
				</LineChart>
			</ChartContainer>
		</CardContent>
	</Card>

	<div class="info mx-3 mt-8 text-start">
		<h3 class="mb-4 text-lg font-bold">
			About
			<a href={data.links.homepage} class="text-gray-800 underline decoration-2">{data.name}</a>
		</h3>
		<span class="content">
			{data.description.en}
		</span>
	</div>
</div>
