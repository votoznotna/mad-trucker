(function (module) {
   "use strict";

   module.directive('numericMask', function () {
      return {
         restrict: 'A',
         require: 'ngModel',
         link: function (scope, elem, attrs, ctrl) {
            var pasteMap = {91: true, 86: true};

            function getValue() {
               var value = $(elem).val();
               if(typeof value === 'string') {
                  return parseInt(value);
               } else if(typeof value === 'number') {
                  return value;
               }
               return 0;
            }

            function ingnoreInput (event) {
               event.stopPropagation();
               event.preventDefault();
            }

            elem.bind('paste', function(event) {
               var value = event.originalEvent.clipboardData.getData('Text');
               if(!/^[\d,]+$/.test(value)){
                  ingnoreInput(event);
               }
            })

            elem.bind("keydown", function(event) {
               if (event.keyCode in pasteMap) {
                  pasteMap[event.keyCode] = true;
                  if (!pasteMap[91] || !pasteMap[86]) {
                     ingnoreInput(event);
                  };
               } else if ((event.keyCode >= 48 && event.keyCode <= 57) &&
                  event.shiftKey ||
                  (event.keyCode < 48
                     || event.keyCode > 57)  // 9
                  && $.inArray(event.keyCode, [
                     37, // LEFT
                     38, // UP
                     39, // RIGHT,
                     40, // DOWN
                     46, // DELETE
                     8,  // BACKSPACE
                     9,  // TAB

                     //NumPad Below - safari fix
                     96,     // 0
                     97,     // 1
                     98,     // 2
                     99,     // 3
                     100,    // 4
                     101,    // 5
                     102,    // 6
                     103,    // 7
                     104,    // 8
                     105     // 9
                  ]) == -1) {
                  ingnoreInput(event);
               } else if (getValue() < 0) {
                  ingnoreInput(event);
               }
            });

            elem.bind("keyup", function(event) {
               if (event.keyCode === 86 || event.keyCode === 91) {
                  pasteMap[event.keyCode] = false;
               }
            });

         }
      };
   });
}(angular.module('madTrucker')));