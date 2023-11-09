import "./HomePage.scss";
import HomeMenu from "../../components/Menu/HomeMenu";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import ProductCategory from "../../components/ProductCategory/ProductCategory";
import MoreProducts from "../../components/MoreProducts/MoreProducts";

export default function HomePage() {
  return (
    <section className="home-page">
      <HomeMenu />

      <div className="hero-text">
        <h2>Hi, Andrea</h2>
        <span>What are you looking for today?</span>
      </div>
      <SearchComponent />
      <main className="home-page__main">
        <ProductCategory />

        <MoreProducts heading="featured products"></MoreProducts>
      </main>
    </section>
  );
}
