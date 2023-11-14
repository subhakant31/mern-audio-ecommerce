import "./HomePage.scss";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import ProductCategory from "../../components/ProductCategory/ProductCategory";
import MoreProducts from "../../components/MoreProducts/MoreProducts";
import PageHeaders from "../../components/PageHeaders/PageHeaders";

export default function HomePage() {
  return (
    <section className="home-page">
      <PageHeaders
        heading="hi, andrea"
        subHeading="What are you looking for today?"
      />

      <SearchComponent />
      <main className="home-page__main">
        <ProductCategory />

        <MoreProducts heading="featured products"></MoreProducts>
      </main>
    </section>
  );
}
