//quan trọng là mọi chỗ cần validate, ô nhập, nói chung có sửa trong bài là phải có I


var donGia1 = $('.donGia1').html();
var donGia;

function addProduct() {
    //Thêm row mới vào bảng Danh sách hàng hóa
    var trTable1 =
        `<tr>
            <td>
                <input class="input maSP" type="text" id="maSP" name="">
                <div class="invalid-feedback"></div>
            </td>
            <td>
                <input class="input tenSP" type="text" id="tenSP" name="">
                <div class="invalid-feedback"></div>
            </td>
            <td>
                <input class="input soLuong" type="text" id="soLuong" name="">
                <div class="invalid-feedback"></div>
            </td>
            <td>
                <input class="input donGia" type="text" id="donGia" name="">
                <div class="invalid-feedback"></div>
            </td>
            <td>
                <input class="input moTa" type="text" id="moTa" name="">
                <div class="invalid-feedback"></div>
            </td>
            <td>
                <button class="btn btn-primary addRow" onclick="addRowTable(this);">Thêm</button>
                <button class="btn btn-danger cancel" onclick="cancelRow(this);">Hủy</button>
            </td>
        </tr>`;
    $('#listProduct').append(trTable1);

    //disabled button [THÊM HÀNG HÓA]
    $('#themHangHoa').attr('disabled', true);

};





function cancelRow(btn) {
    $(btn).parent().parent().remove(); //btn -> td -> tr
};





function addRowTable(btn) {
    // alert("Tới đây rồi 1");
    //validate

    check_maSP = isText("#maSP"); // bản chất kiểm tra input nó có đúng không -> t/f   check_maSP = input?
    // alert(check_maSP);
    check_tenSP = isText("#tenSP");
    // alert(check_tenSP);
    check_soLuong = isNumber('#soLuong');
    // alert(check_soLuong);
    check_donGia = isNumber("#donGia");
    // alert(check_donGia);
    check_moTa = isText("#moTa");
    // alert(check_moTa);

    var maSP = $('.maSP').val();
    var tenSP = $('.tenSP').val();
    var soLuong = $('.soLuong').val();
    donGia = $('.donGia').val();
    var moTa = $('.moTa').val();

    if (check_maSP && check_tenSP && check_soLuong && check_donGia && check_moTa) {
        // alert("Tới đây rồi 2");
        
        $(btn).parent().parent().remove();

        trTable2 = '<tr><td class ="maSP1">' + maSP + '</td><td class ="tenSP1">' + tenSP + '</td><td class ="soLuong1">' + soLuong + '</td><td class ="donGia1">' + donGia + '</td><td class ="moTa1">' + moTa + '</td><td><button class="btn btn-primary addRow" onclick="oder(this);">Đặt Hàng</button><button class="btn btn-danger cancel" onclick="cancelRow(this);">Xóa</button></td></tr>';

        $('#listProduct').append(trTable2);
            //disabled button [THÊM HÀNG HÓA]
    $('#themHangHoa').attr('disabled', false);
    }
};

function oder(btn) {

    var maSP1 = $('.maSP1').html();
    var tenSP1 = $('.tenSP1').html();
    var soLuong1 = $('.soLuong1').html();
    // donGia = $('.donGia1').val();

    $(btn).parent().parent().remove();

    $('.maSP2, .tenSP2, .soLuong2').prop('disabled', false); //disable -> active
    $('.maSP2, .tenSP2, .soLuong2').addClass('bg-light');

    $('.maSP2').val(maSP1);
    $('.tenSP2').val(tenSP1);
    $('.soLuong2').val(soLuong1);
};

function cancelOder() {
    $('.maSP2, .tenSP2, .soLuong2').val('');
    $('.maSP2, .tenSP2, .soLuong2').prop('disabled', true);
    $('.maSP2, .tenSP2, .soLuong2').removeClass('bg-light');
}

let stt = 3;

function buyOder() {

    var maSP2 = $('.maSP2').val();
    var tenSP2 = $('.tenSP2').val();
    var soLuong2 = $('.soLuong2').val();

    if ($('.maSP2, .tenSP2, .soLuong2').val() !== '') {
        var tableBuy = 
        '<tr><td>' + stt + '</td>'+
        '<td class ="maSP3">' + maSP2 + '</td>'+
        '<td class ="tenSP3">' + tenSP2 + '</td>'+
        '<td class ="soLuong3">' + soLuong2 + '</td>'+
        '<td class ="thanhTien">' + soLuong2 * donGia + '</td>';

        $('.listBuy').append(tableBuy);
        
        stt++;
    }

    $('.maSP2, .tenSP2, .soLuong2').val('');
    $('.maSP2, .tenSP2, .soLuong2').prop('disabled', true);
    $('.maSP2, .tenSP2, .soLuong2').removeClass('bg-light');
}


//TÌM KIẾM THEO CỘT (SỐ LƯỢNG)
function findSoLuong() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];  //Cột số 3 trong bảng
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  //TÌM KIẾM TOÀN BỘ BẢNG
  function searchTable() {
    var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("myInput"); //Đặt Id table cần tìm
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByClassName("data"); //Đặt ClassName để tìm kiếm
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
}

