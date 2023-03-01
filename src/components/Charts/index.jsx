import ApexChart from 'react-apexcharts'

export default function Dashboard({ data }) {

    const options = {
        chart: {
            id: 'apexchart-example',
            title: "Vendas"
        },
        xaxis: {
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            title: {
                text: 'Vendas'
            }
        },
        chart: {
            height: 350,
            type: 'bar'
        },
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true
            }
        },
    }

    const series =
        [{
            name: 'Vendas',
            // data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
            data: data
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

