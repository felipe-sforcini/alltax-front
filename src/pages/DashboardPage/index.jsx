import { useState } from "react";
import SelectorField from "../../components/SelectorField";
import * as api from "../../services/api";
import './styles.scss';

export default function DashboardPage() {
    const [selectedCategory, setSelectedCategory] = useState(api.categories[0].id);

    const selectCategory = (id) => {
        setSelectedCategory(parseInt(id));
    }

    return (
        <div className="dashboard-page">
            <div className="dashboard-page__filter-selections">
                <div className="dashboard-page__filter-selections__item">
                    <SelectorField
                        onChange={({ target }) => selectCategory(target.value)}
                        label="Category: "
                        data={api.categories}
                    />
                </div>
                <div className="dashboard-page__filter-selections__item">
                    <SelectorField
                        onChange={({ target }) => selectCategory(target.value)}
                        label="Product: "
                        data={api.products}
                    />
                </div>
                <div className="dashboard-page__filter-selections__item">
                    <SelectorField
                        onChange={({ target }) => selectCategory(target.value)}
                        label="Brand: "
                        data={api.brands}
                    />
                </div>
            </div>
        </div>
    )
}