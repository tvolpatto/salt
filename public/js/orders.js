/* eslint-disable linebreak-style */
$.get("/api/deliveries", function (data) {
  if (data.length !== 0) {
    var orderData = data;
    var gridDataSource = new kendo.data.DataSource({
      data: orderData,
      schema: {
        parse : function (response) {
          var orders = [];
          for (var i = 0; i < response.length; i++) {
            var user = response[i].user.name;
            var order = response[i];
            order.user = user;
            orders.push(order);
          }
          return orders;
        },
        model: {
          fields: {
            id: { type: "number" },
            address: { type: "string" },
            phone: { type: "string" },
            date: { type: "string" },
            time: { type: "string" },
            quantity: { type: "integer" },
            total: { type: "integer" },
            user: { template: "string"},
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
