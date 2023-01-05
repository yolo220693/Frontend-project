$(document).ready(function () {

  //Không chứa ký tự đặc biệt
  var regexName = /^[a-zA-Z0-9\s]+$/;
  //Số điện thoại bắt đầu bằng .... Và có 9 chữ số
  var regexphone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  //Email theo cú pháp
  var regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //2 chữ cái trở lên không chứa ký tự đặc biệt bao gồm số
  var regexaddress = /^[A-Za-z0-9]*[\s][A-Za-z0-9]*$/;
  //2 chữ cái trở lên không chứa ký tự đặc biệt không gồm số
  var regexcity = /^[A-Za-z]*[\s][A-Za-z]*$/;
  //Số có 5 chữ số
  var regexzip = /(([0-9]{5})\b)/g;
  //2 chữ cái trở lên không chứa ký tự đặc biệt không gồm số
  var regexnameoncard = /^[A-Za-z]*[\s][A-Za-z]*$/;
  //Số có 16 chữ số
  // var regexcredit = /(([0-9]{16})\b)/g;
  var regexcredit = /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/g;
  //Tháng
  var regexmonth = /(0[1-9]|[0-9]|1[012])/;
  //Năm 
  var regexyear = /((20)+([012]{1})+([0-9]{1})\b)/g;
  //Mã CVV gồm 3 số
  var regexCVV = /(([0-9]{3})\b)/g;

  
  //[NUMBER] (Lớn hơn 0)
    isNumber = function (selector) {
      // alert('isNumber');
      let number = parseInt($(selector).val());
      if ($(selector).val() == "") {
        $(selector).addClass("is-invalid");
        $(selector).next().html("Bạn chưa nhập kìa !!!");
        console.log('oday')
        return false;
      } else if (number <= 0) {
        $(selector).addClass("is-invalid");
        $(selector).next().html("Bạn nhập vào phải lớn hơn 0 ");
        return false;
      }else if (isNaN(number)) {
          $(selector).addClass("is-invalid");
          $(selector).next().html("Bạn nhập vào không phải là số ");
          return false;
      } else {
        $(selector).removeClass("is-invalid");
        return true;
      }
    };

    //Check một số lớn hơn 100
    isNumberMoreThan100 = function (selector) {
      // alert('isNumber');
      let number = parseInt($(selector).val());
      if ($(selector).val() == "") {
        $(selector).addClass("is-invalid");
        $(selector).next().html("Bạn chưa nhập kìa !!!");
        console.log('oday')
        return false;
      } else if (number <= 100) {
        $(selector).addClass("is-invalid");
        $(selector).next().html("Bạn nhập vào phải lớn hơn 100 ");
        return false;
      }else if (isNaN(number)) {
          $(selector).addClass("is-invalid");
          $(selector).next().html("Bạn nhập vào không phải là số ");
          return false;
      } else {
        $(selector).removeClass("is-invalid");
        return true;
      }
    };


  // [TEXT] Validate hoten, diachi,ghichu (Không chứa ký tự đặc biệt)
  isText = function (selector) {
    let regex = /^[a-zA-Z0-9\s]+$/;
    if ($(selector).val() == "") {
      $(selector).addClass("is-invalid");
      $(selector).next().html("Bạn chưa nhập kìa");
      return false;
    } else if (!regex.test($(selector).val())) {
      $(selector).addClass("is-invalid");
      $(selector).next().html("Yêu cầu nhập lại");
      return false;
    } else {
      $(selector).removeClass("is-invalid");
      return true;
    }
  };


  // [TEXT] Validate hoten, diachi,ghichu (Không chứa ký tự đặc biệt)
  isMatch = function (selector) {
    let regex = /^[a-zA-Z0-9\s]+$/;
    if ($(selector).val() == "") {
      $(selector).addClass("is-invalid");
      $(selector).next().html("Bạn chưa nhập kìa");
      return false;
    } else if (!regex.test($(selector).val())) {
      $(selector).addClass("is-invalid");
      $(selector).next().html("Yêu cầu nhập lại");
      return false;
    } else {
      $(selector).removeClass("is-invalid");
      return true;
    }
  };


  // [NUMBER] Validate cmnd (Số có 9 chữ số)
    isMatchCMND = function (selector) {
      let regex = /^[0-9]{9}$/;
      if ($(selector).val() == "") {
        $(selector).addClass("is-invalid");
        $(selector).next().html("Không để trống");
        return false;
      } else if (!regex.test($(selector).val())) {
        $(selector).addClass("is-invalid");
        $(selector).next().html(" Yêu cầu nhập cmnd");
        return false;
      } else {
        $(selector).removeClass("is-invalid");
        return true
      }

  };


// [DATE] Validate (ngày tháng nhỏ hơn ngày hiện tại) 
isDateLessThanToday = function(selector){
        if ($(selector).val() == "") {
            $(selector).addClass("is-invalid");
            $(selector).next().html("Bạn chưa chọn ngày tháng");
            return false;
          } else if (new Date() < new Date($(selector).val())) {
            $(selector).addClass("is-invalid");
            $(selector).next().html("Bạn phải nhập ngày nhỏ hơn ngày hiện tại");
            return false;
          } else {
            $(selector).removeClass("is-invalid");
            return true;
          }
    }

  // [EMAIL] Validate Email
  isMatchEmail = function (selector) {
      // let regex = /^\w+([\.-]?\w+)*@fsoft[\.]com[\.]vn$/;
      let regex = /^[a-zA-Z][a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if ($(selector).val() == "") {
        $(selector).addClass("is-invalid");
        $(selector).next().html("ban chưa nhập kìa");
        return false;
      } else if (!regex.test($(selector).val())) {
        console.log("ok");
        $(selector).addClass("is-invalid");
        $(selector).next().html(" bạn nhập khong đúng định dạng mail ");
        return false;
      } else {
        $(selector).removeClass("is-invalid");
        return true;
      }

  };

  // [NUMBER] validate Điểm
  isScore = function (selector) {
    let score = parseInt($(selector).val());
    if ($(selector).val() == "") {
      $(selector).addClass("is-invalid");
      $(selector).next().html("Bạn chưa nhập kìa !!!");
      console.log('oday')
      return false;
    } else if (score <= 0) {
      $(selector).addClass("is-invalid");
      $(selector).next().html("Bạn nhập vào phải lớn hơn 0 ");
      return false;
    }else if (isNaN(score)) {
        $(selector).addClass("is-invalid");
        $(selector).next().html("Bạn nhập vào không phải là số ");
        return false;
    } else {
      $(selector).removeClass("is-invalid");
      return true;
    }
  };

  // Validate selection
  // chỗ chọn select chọn á

  isSelect = function (selector) {
    if ($(selector).val() == $("option:first-child").val()) {
      $(selector).addClass("is-invalid");
      $(selector).next().html("ban chưa nhập kìa");
      return false;
    } else {
      $(selector).removeClass("is-invalid");
      return true;
    }
  };


  // Validate checkbox

  isCheckBox = function(){
    let selector = 'input[type="checkbox"]';
    if (!$(selector).is(':checked')){
      $(selector).addClass("is-invalid");
      $(selector).next().next().html("ban chưa nhập kìa");
      return false;
    } else{
      $(selector).removeClass("is-invalid");
      return true;
    }
  };


   // validate bắt buộc và leng i
   isRequired = function (selector,i) {
  //   //   let regex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
  //   //   if (!regex.test($(selector).val().trim()) ){
  //   //     $(selector).addClass("is-invalid");
  //   //     $(selector).next().html("Nhập đủ 16 số nhé!!");
  //   //     return false;
  //   //   } else {
  //   //     $(selector).removeClass("is-invalid");
  //   //     return true;
  //   //   }
  //   // }
      if ($(selector).val().trim() == "" || $(selector).val().length != i) {
        $(selector).addClass("is-invalid");
        $(selector).next().html("Nhập đủ 16 số nhé!!");
        return false;
      } else {
        $(selector).removeClass("is-invalid");
        return true;
      }
    };

    //validate cõ chữ T đầu 
    isMatch2= function (selector) {
      let regex = /^[T][a-zA-Z]+$/;
      if ($(selector).val() == "") {
        $(selector).addClass("is-invalid");
        $(selector).next().html("Không được để trống");
        return false;
      } else if (!regex.test($(selector).val())) {
        $(selector).addClass("is-invalid");
        $(selector).next().html("Chỉ nhập được kí tự !!!!");
        return false;
      } else {
        $(selector).removeClass("is-invalid");
        return true;
      }
    };
  

  // validate cvv
    isMatchCVV = function (selector) {
      let regex = /^[0-9]{3}$/;
      if ($(selector).val() == "") {
        $(selector).addClass("is-invalid");
        $(selector).next().html("Không được để trống");
        return false;
      } else if (!regex.test($(selector).val())) {
        $(selector).addClass("is-invalid");
        $(selector).next().html("Số CVV gồm 3 số!");
        return false;
      } else {
        $(selector).removeClass("is-invalid");
        return true
      }
  
    };
  
    // Validate cái mã chi đó 
    isMatchZipCode = function (selector) {
      let regex = /^[0-9]{5}$/;
      if ($(selector).val() == "") {
        $(selector).addClass("is-invalid");
        $(selector).next().html("Không được để trống");
        return false;
      } else if (!regex.test($(selector).val())) {
        $(selector).addClass("is-invalid");
        $(selector).next().html("ZipCode gồm 5 số");
        return false;
      } else {
        $(selector).removeClass("is-invalid");
        return true
      };
    };

    // validate cho tháng
    isMatchMonth = function (selector) {
      let regex = /^0[1-9]|1[0-2]$/;
      if ($(selector).val() == "") {
        $(selector).addClass("is-invalid");
        $(selector).next().html("Không được để trống");
        return false;
      } else if (!regex.test($(selector).val())) {
        $(selector).addClass("is-invalid");
        $(selector).next().html("Nhập sai tháng rồi!");
        return false;
      } else {
        $(selector).removeClass("is-invalid");
        return true
      };
    };

    // validate năm >=2000
    isMatchYear = function (selector) {
    //   // let regex = /^[2][2][2][2]$/;
    //   // let regex = /2222/g;
  
      let regex = /^[2][0-9]{3}$/;
      if ($(selector).val() == "") {
        $(selector).addClass("is-invalid");
        $(selector).next().html("Không được để trống");
        return false;
      } else if (!regex.test($(selector).val())) {
        $(selector).addClass("is-invalid");
        $(selector).next().html("Sai năm");
        return false;
      } else {
        $(selector).removeClass("is-invalid");
        return true
      }
    };

    // validate số điện thoại
    isMatchPhone = function (selector, i) {
      let regex = /^[0][0-9]{9}$/;
      if ($(selector).val() == "") {
        $(selector).addClass("is-invalid");
        $(selector).next().html("Không được để trống");
        return false;
      } else if (!regex.test($(selector).val())) {
        $(selector).addClass("is-invalid");
        $(selector).next().html("Nhập sai format rồi nhé!");
        return false;
      } else {
        $(selector).removeClass("is-invalid");
        return true
      }
    };
  
    // nhập 4 số là thêm -
    isCodeMatch = function (selector) {
      let string = "";
      let string1 = "";
      $(selector).keyup(function () {
        let regex = /^[0-9]$/;
        let lastChar = $(selector).val().substr($(selector).val().length - 1);
    //     // lấy số cuối 
    //     // nếu nó thuộc 0-9
  
        if (regex.test(lastChar)) {
    //       //nếu length =19, 3 dấu - và 16 số
  
          if ($(selector).val().length == 19) {
            string1 = $(selector).val();
          }
    //       // nếu length <= 19 thì 
  
          if ($(selector).val().length <= 19) {
            if ($(selector).val().length == 4 || $(selector).val().length == 9 || $(selector).val().length == 14) {
              string = $(selector).val();// gán dãy số đó cho string
              $(selector).val(string + "-");// tự động thêm dấu -
            }
          } else {// nếu length > 19 thì nhập thế nào nó cũng về string1
            $(selector).val(string1);
          }
    //       //nếu nó ko match vs 0-9 thì set value = ""
        } else {
          $(selector).val("");
        }
      });
    }

});