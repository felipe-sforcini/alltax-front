import ApexChart from 'react-apexcharts'

export default function Dashboard() {

    const options = {
        chart: {
            id: 'apexchart-example'
        },
        xaxis: {
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set']
        },
        chart: {
            height: 350,
            type: 'bar'
        },
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
            }
        },
        yaxis: {
            title: "Vendas"
        }
    }

    const series =
        [{
            name: 'series-1',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }]


    return (
        <ApexChart
            options={options}
            series={series}
            type="bar"
            width={1200}
        />
    )
}

