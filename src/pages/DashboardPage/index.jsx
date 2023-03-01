import { useState, useEffect } from "react";
import SelectorField from "../../components/SelectorField";
import * as api from "../../services/api";
import './styles.scss';
import Charts from "../../components/Charts";

export default function DashboardPage() {
    const [selectedCategory, setSelectedCategory] = useState(api.categories[0].id);
    const [selectedProduct, setSelectedProduct] = useState();
    const [_, setSelectedBrand] = useState();
    const [selectedSales, setSelectedSales] = useState([]);

    const filteredProducts = api.products.filter((item) => {
        return item.categoryId === selectedCategory;
    });

    const filteredBrands = api.brands.filter((item) => {
        return item.productId === selectedProduct;
    });

    const selectCategory = (id) => {
        setSelectedCategory(parseInt(id));
    }

    const selectProduct = (id) => {
        setSelectedProduct(parseInt(id));
    }

    const selectBrand = (id) => {
        setSelectedBrand(parseInt(id));

        const status = api.brandSales.find(item => {
            return item.brandId === parseInt(id);
        }) || [];

        setSelectedSales(status.sales);
    }

    useEffect(() => {
        if (selectedCategory) {
            setSelectedProduct(filteredProducts[0].id);
        }
    }, [selectedCategory]);

    useEffect(function () {
        if (selectedProduct) {
            selectBrand(filteredBrands[0].id);
        }
    }, [selectedProduct]);

    return (
        <div className="dashboard-page">
            <div className="dashboard-page__filter-selections">
                <div className="dashboard-page__filter-selections__item">
                    <SelectorField
                        onChange={(event) => selectCategory(event.target.value)}
                        label="Category: "
                        data={api.categories}
                    />
                </div>
                <div className="dashboard-page__filter-selections__item">
                    <SelectorField
                        onChange={(event) => selectProduct(event.target.value)}
                        label="Product: "
                        data={filteredProducts}
                    />
                </div>
                <div className="dashboard-page__filter-selections__item">
                    <SelectorField
                        onChange={(event) => selectBrand(event.target.value)}
                        label="Brand: "
                        data={filteredBrands}
                    />
                </div>
            </div>
            <div className="sales-chart">
                <Charts
                    data={selectedSales}
                />
            </div>
        </div>
    )
}