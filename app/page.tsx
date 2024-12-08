import { Container, Filters, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10  ">
        <Title text="Все пиццы" size="lg" className="font-bold mb-6" />
        <TopBar />

        <div className="inline-flex gap-15 mt-3">
          <Filters />
          <div>Список пицц</div>
        </div>
      </Container>
    </>
  );
}
