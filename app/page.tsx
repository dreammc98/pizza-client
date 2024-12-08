import { Container, Filters, ProductCard, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <Container className="mt-10  ">
      <Title text="Все пиццы" size="lg" className="font-bold mb-6" />
      <TopBar />

      <div className="inline-flex gap-20 mt-3">
        <Filters />
        <div className="flex flex-wrap gap-11 py-7">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </Container>
  );
}
