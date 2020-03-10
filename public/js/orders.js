/* eslint-disable linebreak-style */
$.get("/api/deliveries", function (data) {
  if (data.length !== 0) {
    var orderData = data;
    var gridDataSource = new kendo.data.DataSource({
      data: orderData,
      schema: {
        model: {
          fields: {
            id: { type: "number" },
            address: { type: "string" },
            phone: { type: "string" },
            date: { type: "string" },
            time: { type: "string" },
            quantity: { type: "integer" },
            total: { type: "integer" },
            user: { type: "string"},
          }
        }
      },
      pageSize: 10,
      sort: {
        field: "date",
        dir: "asc"
      }
    });

    $("#ordersGrid").kendoGrid({
      dataSource: gridDataSource,
      height: 500,
      pageable: true,
      sortable: true,
      mobile: true,
      columns: [{
        field: "id",
        title: "Order ID",
        width: 160
      }, {
        field: "address",
        width: 250,
      }, {
        field: "phone",
        title: "Contact Phone Number",
        width: 160,
      }, {
        field: "date",
        title: "Order Date",
        width: 250
      }, {
        field: "time",
        title: "Delivery Time",
        width: 160,
      },
      {
        field: "quantity",
        title: "Quantity",
        width: 160,
      },
      {
        field: "total",
        title: "Total",
        width: 160,
      },
      {
        field: "user",
        title: "Client",
        width: 160,
      }]
    });
  }
});
