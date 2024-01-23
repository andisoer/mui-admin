(function($) {
  'use strict';
  $(function() {
    $('#order-listing').DataTable({
      "aLengthMenu": [
        [5, 10, 15, -1],
        [5, 10, 15, "All"]
      ],
      "iDisplayLength": 10,
      "language": {
        search: ""
      }
    });
    $('#order-listing').each(function() {
      var datatable = $(this);
      // SEARCH - Add the placeholder for Search and Turn this into in-line form control
      var search_input = datatable.closest('.dataTables_wrapper').find('div[id$=_filter] input');
      search_input.attr('placeholder', 'Search');
      search_input.removeClass('form-control-sm');
      // LENGTH - Inline-Form control
      var length_sel = datatable.closest('.dataTables_wrapper').find('div[id$=_length] select');
      length_sel.removeClass('form-control-sm');
    });

    $('#table-data-fatwa').DataTable({
      ajax:{
        url: 'http://127.0.0.1:8000/fatwa/',
        dataSrc:'',
      },
      // "aLengthMenu": [
      //   [5, 10, 15, -1],
      //   [5, 10, 15, "All"]
      // ],
      columns: [
        {
          // Column for the "Show" button
          data: null,
          render: function (data, type, row) {
              // Assuming the ID is stored in the 'id' property of the row
              return '<img style="width: 200px !important; height: auto !important; border-radius: 0;" src="' + row.thumbnail + '"/>';
          }
        },
        { data:'no_fatwa' },
        { data:'title' },
        { data:'date' },
        {
          // Column for the "Show" button
          data: null,
          render: function (data, type, row) {
            // Assuming the ID is stored in the 'id' property of the row
            return '<a href="' + row.lampiran_fatwa + '" target ="_blank" class="btn btn-mui me-2" style="padding: 12px 24px;">Buka Lampiran</a>';
          }
          // render: function (data, type, row) {
          //     // Assuming the ID is stored in the 'id' property of the row
          //     return '<button onclick="lampiranFatwaModal(\'' + row.lampiran_fatwa + '\')" class="btn btn-mui me-2" style="padding: 12px 24px;">Buka Lampiran</button>';
          // }
        },
        {
          data: null,
          render: function (data, type, row) {
            // Assuming the ID is stored in the 'id' property of the row
            return `
              <button class="btn btn-primary update-btn" onclick="ubahFatwaModal('${row.id}')" style="padding: 12px 24px;">Update</button>
					    <button class="btn btn-danger delete-btn" onclick="hapusFatwaModal('${row.id}', '${row.no_fatwa}')" style="padding: 12px 24px;">Hapus</button>
            `;
        }
        }
      ]
    });
  });
})(jQuery);
