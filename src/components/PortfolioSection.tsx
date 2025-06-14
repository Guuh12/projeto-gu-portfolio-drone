import { PortfolioCategoryCard } from './PortfolioCategoryCard';

const portfolioCategories = [
	{
		title: 'Videos',
		imageUrl: '/Capa-video-animated.gif',
		imageHint: 'drone video',
		link: '/portfolio/videos',
	},
	{
		title: 'Fotos',
		imageUrl: '/Capa-foto-animated.gif', 
		imageHint: 'drone photo',
		link: '/portfolio/photos',
	},
	// Nature category removed
];

export function PortfolioSection() {
	const numCategories = portfolioCategories.length;
	let gridLayoutClasses = 'grid grid-cols-1 gap-8';

	if (numCategories === 2) {
		// For 2 categories, use 2 columns on sm and lg screens
		gridLayoutClasses += ' sm:grid-cols-2 lg:grid-cols-2';
	} else if (numCategories >= 3) {
		// For 3 or more categories, use 2 columns on sm (3rd+ will wrap) and 3 columns on lg
		gridLayoutClasses += ' sm:grid-cols-2 lg:grid-cols-3';
	}
	// If numCategories is 1, it remains "grid grid-cols-1 gap-8",
	// meaning 1 column on all screen sizes.

	return (
		<section id="portfolio" className="w-full py-16 sm:py-24 bg-background">
			<div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-4 text-foreground">
					Portfolio
				</h2>
				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Para saber mais sobre meu trabalho, escolha um dos tópicos abaixo e clique para ver todos os detalhes.
				</p>
				<div className={gridLayoutClasses}>
					{portfolioCategories.map((category) => (
						<PortfolioCategoryCard
							key={category.title}
							title={category.title}
							imageUrl={category.imageUrl}
							imageHint={category.imageHint}
							link={category.link}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
