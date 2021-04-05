function app() {
	let JkLangLongIntegerIterator = {};
	JkLangLongIntegerIterator.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangLongIntegerIterator"] === true;
	};
	let JkLangString = function() {
	};
	JkLangString.prototype._t = { "JkLangString" : true };
	JkLangString.prototype._tobj = JkLangString;
	JkLangString.NEW = function() {
		var v = new JkLangString;
		return v.CTOR_JkLangString();
	};
	JkLangString.prototype.CTOR_JkLangString = function() {
		return this;
	};
	JkLangString.asString = function(obj) {
		if(!(obj != null)) {
			return null;
		}
		if(typeof obj === "string") {
			return obj;
		}
		if(JkLangStringObject.IS_INSTANCE && JkLangStringObject.IS_INSTANCE(obj)) {
			var os = obj;
			return os.toString();
		}
		if(typeof obj === "number") {
			return JkLangString.forInteger((~(~obj)));
		}
		if(JkLangIntegerObject.IS_INSTANCE && JkLangIntegerObject.IS_INSTANCE(obj)) {
			return JkLangString.forInteger((obj.toInteger()));
		}
		if(typeof obj === "number") {
			return JkLangString.forLongInteger((~(~obj)));
		}
		if(JkLangLongIntegerObject.IS_INSTANCE && JkLangLongIntegerObject.IS_INSTANCE(obj)) {
			return JkLangString.forLongInteger((obj.toLong()));
		}
		if(typeof obj === "number") {
			return JkLangString.forDouble(obj);
		}
		if(JkLangDoubleObject.IS_INSTANCE && JkLangDoubleObject.IS_INSTANCE(obj)) {
			return JkLangString.forDouble((obj.toDouble()));
		}
		if(typeof obj === "boolean") {
			return JkLangString.forBoolean(obj);
		}
		if(JkLangBooleanObject.IS_INSTANCE && JkLangBooleanObject.IS_INSTANCE(obj)) {
			return JkLangString.forBoolean((obj.toBoolean()));
		}
		if(typeof obj === "string") {
			return JkLangString.forCharacter(obj);
		}
		if(JkLangCharacterObject.IS_INSTANCE && JkLangCharacterObject.IS_INSTANCE(obj)) {
			return JkLangString.forCharacter((obj.toCharacter()));
		}
		if(obj instanceof ArrayBuffer) {
			return JkLangString.forBufferHex(obj);
		}
		if(JkLangBufferObject.IS_INSTANCE && JkLangBufferObject.IS_INSTANCE(obj)) {
			var v = obj.toBuffer();
			if(!(v != null)) {
				return "";
			}
			return JkLangString.forBufferHex(v);
		}
		return null;
	};
	JkLangString.forObject = function(obj) {
		return JkLangString.asString(obj);
	};
	JkLangString.safeString = function(str) {
		if(!(str != null)) {
			return "";
		}
		return str;
	};
	JkLangString.isEmpty = function(str) {
		if(!(str != null)) {
			return true;
		}
		if(JkLangString.getLength(str) < 1) {
			return true;
		}
		return false;
	};
	JkLangString.isNotEmpty = function(str) {
		return !JkLangString.isEmpty(str);
	};
	JkLangString.forBuffer = function(data, encoding) {
		if(!(data != null)) {
			return null;
		}
		if(JkLangString.equalsIgnoreCase("UTF8", encoding) || JkLangString.equalsIgnoreCase("UTF-8", encoding)) {
			return JkLangString.forUTF8Buffer(data);
		}
		if(JkLangString.equalsIgnoreCase("UCS2", encoding) || JkLangString.equalsIgnoreCase("UCS-2", encoding)) {
			return JkLangString.forUCS2Buffer(data);
		}
		if(JkLangString.equalsIgnoreCase("ASCII", encoding)) {
			return JkLangString.forASCIIBuffer(data);
		}
		return null;
	};
	JkLangString.forASCIIBuffer = function(data) {
		if(!(data != null)) {
			return null;
		}
		var sb = JkLangStringBuilder.NEW();
		var uintArray = null;
		uintArray = new Uint8Array(data);
		;
		for(var i = 0 ; i < uintArray.length ; i++) {
			sb.appendString((String.fromCharCode(uintArray[i])));
		}
		return sb.toString();
	};
	JkLangString.forUTF8Buffer = function(data) {
		if(!(data != null)) {
			return null;
		}
		return (new TextDecoder()).decode(data);
	};
	JkLangString.forUCS2Buffer = function(data) {
		if(data == null) {
			return null;
		}
		if(data == null) {
			return null;
		}
		return data.toString("ucs2");
	};
	JkLangString.forCharArray = function(chars, offset, count) {
		if(!(chars != null)) {
			return null;
		}
		var str = null;
		if(offset < chars.length && count <= chars.length && offset < count) {
			str = "";
			for(var ind = offset ; ind < count ; ind++) {
				str += chars[ind];
			}
		}
		;
		return str;
	};
	JkLangString.forBoolean = function(vv) {
		if(vv == true) {
			return "true";
		}
		return "false";
	};
	JkLangString.forInteger = function(vv) {
		return (~(~vv)).toString();
	};
	JkLangString.forLongInteger = function(vv) {
		return parseInt(vv).toString();
	};
	JkLangString.forIntegerWithPadding = function(vv, _length, paddingString) {
		var r = JkLangString.forInteger(vv);
		if(!(r != null)) {
			return null;
		}
		var ll = JkLangString.getLength(r);
		if(ll >= _length) {
			return r;
		}
		var ps = paddingString;
		if(ps == null) {
			ps = "0";
		}
		var sb = JkLangStringBuilder.NEW();
		var n = 0;
		for(n = 0 ; n < _length - ll ; n++) {
			sb.appendString(ps);
		}
		sb.appendString(r);
		return sb.toString();
	};
	JkLangString.forIntegerHex = function(vv, minlength) {
		var v = null;
		v = (~(~vv)).toString(16);
		if(!(v != null)) {
			return null;
		}
		if(minlength > 0) {
			while(JkLangString.getLength(v) < minlength){
				v = "0" + JkLangString.safeString(v);
			}
		}
		return v;
	};
	JkLangString.forLongIntegerHex = function(vv, minlength) {
		var v = null;
		v = (~(~vv)).toString(16);
		if(!(v != null)) {
			return null;
		}
		if(minlength > 0) {
			while(JkLangString.getLength(v) < minlength){
				v = "0" + JkLangString.safeString(v);
			}
		}
		return v;
	};
	JkLangString.forIntegerOctal = function(vv) {
		var v = null;
		v = (~(~vv)).toString(8);
		return v;
	};
	JkLangString.forIntegerBinary = function(vv) {
		var v = null;
		v = (~(~vv)).toString(2);
		return v;
	};
	JkLangString.forBufferHex = function(buffer) {
		var size = JkLangBuffer.getSize(buffer);
		if(!(size != 0)) {
			return null;
		}
		var sb = JkLangStringBuilder.NEW();
		var p = 0;
		while(p < size){
			var s = JkLangString.forIntegerHex((JkLangBuffer.getByte(buffer, p)), 0);
			if(JkLangString.getLength(s) < 2) {
				sb.appendCharacter(("0".charCodeAt()));
			}
			sb.appendString(s);
			p++;
		}
		return sb.toString();
	};
	JkLangString.forCharacter = function(vv) {
		return String.fromCharCode(vv);
	};
	JkLangString.forFloat = function(vv) {
		return vv.toString();
	};
	JkLangString.forDouble = function(vv) {
		return vv.toString();
	};
	JkLangString.toUTF8Buffer = function(str) {
		if(!(str != null)) {
			return null;
		}
		var bytes = JkLangString.getBytesUnsigned(str, "UTF-8");
		if(!(bytes != null)) {
			return null;
		}
		var c = bytes.length;
		var bb = new ArrayBuffer(c);
		var n = 0;
		for(n = 0 ; n < c ; n++) {
			JkLangBuffer.setByte(bb, n, bytes[n]);
		}
		return bb;
	};
	JkLangString.toBuffer = function(str, charset) {
		if(!(str != null)) {
			return null;
		}
		if(!(charset != null)) {
			return null;
		}
		if(JkLangString.equalsIgnoreCase("UTF8", charset) || JkLangString.equalsIgnoreCase("UTF-8", charset)) {
			return JkLangString.toUTF8Buffer(str);
		}
		var bytes = JkLangString.getBytesUnsigned(str, charset);
		if(!(bytes != null)) {
			return null;
		}
		var c = bytes.length;
		var bb = new ArrayBuffer(c);
		var n = 0;
		for(n = 0 ; n < c ; n++) {
			JkLangBuffer.setByte(bb, n, bytes[n]);
		}
		return bb;
	};
	JkLangString.getBytesUnsignedUTF8 = function(str) {
		return JkLangString.getBytesUnsigned(str, "UTF-8");
	};
	JkLangString.getBytesUnsigned = function(str, charset) {
		if(!(str != null)) {
			return null;
		}
		if(!(charset != null)) {
			return null;
		}
		var uintArray = null;
		if(JkLangString.equalsIgnoreCase(charset, "UTF-8") || JkLangString.equalsIgnoreCase(charset, "UTF8")) {
			uintArray = [];
			for(var i = 0 ; i < str.length ; i++) {
				var cc = str.charCodeAt(i);
				if(cc < 0x80) {
					uintArray.push(cc);
				}
				else if(cc < 0x800) {
					uintArray.push((0xc0 | cc >> 6));
					uintArray.push((0x80 | cc & 0x3f));
				}
				else if(cc < 0xd800 || cc >= 0xe000) {
					uintArray.push((0xe0 | cc >> 12));
					uintArray.push((0x80 | cc >> 6 & 0x3f));
					uintArray.push((0x80 | cc & 0x3f));
				}
				else {
					i++;
					cc = ((cc & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff) + 0x10000;
					uintArray.push((0xf0 | cc >> 18));
					uintArray.push((0x80 | cc >> 12 & 0x3f));
					uintArray.push((0x80 | cc >> 6 & 0x3f));
					uintArray.push((0x80 | cc & 0x3f));
				}
			}
			;
		}
		else if(JkLangString.equalsIgnoreCase(charset, "UTF-16") || JkLangString.equalsIgnoreCase(charset, "UTF16")) {
			uintArray = new Uint8Array(str.length);
			for(var c = 0 ; c < str.length ; c++) {
				uintArray[c] = str.charCodeAt(c);
			}
			;
		}
		return uintArray;
	};
	JkLangString.getBytesSignedUTF8 = function(str) {
		return JkLangString.getBytesSigned(str, "UTF-8");
	};
	JkLangString.getBytesSigned = function(str, charset) {
		if(str == null || charset == null) {
			return null;
		}
		var intArray = null;
		intArray = new Int8Array(str.length);
		for(var c = 0 ; c < str.length ; c++) {
			intArray[c] = str.charCodeAt(c);
		}
		;
		return intArray;
	};
	JkLangString.getLength = function(str) {
		if(str == null) {
			return 0;
		}
		return str.length;
	};
	JkLangString.appendString = function(str1, str2) {
		if(str1 == null) {
			return str2;
		}
		if(str2 == null) {
			return str1;
		}
		return str1.concat(str2);
	};
	JkLangString.appendInteger = function(str, intvalue) {
		return JkLangString.appendString(str, (JkLangString.forInteger(intvalue)));
	};
	JkLangString.appendCharacter = function(str, charvalue) {
		return JkLangString.appendString(str, (JkLangString.forCharacter(charvalue)));
	};
	JkLangString.appendFloat = function(str, floatvalue) {
		return JkLangString.appendString(str, (JkLangString.forFloat(floatvalue)));
	};
	JkLangString.appendDouble = function(str, doublevalue) {
		return JkLangString.appendString(str, (JkLangString.forDouble(doublevalue)));
	};
	JkLangString.appendBoolean = function(str, boolvalue) {
		return JkLangString.appendString(str, (JkLangString.forBoolean(boolvalue)));
	};
	JkLangString.toLowerCase = function(str) {
		if(!(str != null)) {
			return null;
		}
		return str.toLowerCase();
	};
	JkLangString.toUpperCase = function(str) {
		if(!(str != null)) {
			return null;
		}
		return str.toUpperCase();
	};
	JkLangString.capitalize = function(str) {
		if(!(str != null)) {
			return null;
		}
		var c = JkLangString.getChar(str, 0);
		if(JkLangCharacter.isLowercaseAlpha(c) == false) {
			return str;
		}
		return JkLangString.safeString((JkLangString.forCharacter((JkLangCharacter.toUppercase(c))))) + JkLangString.safeString((JkLangString.getEndOfString(str, 1)));
	};
	JkLangString.getChar = function(str, index) {
		if(str == null || index < 0) {
			return 0;
		}
		return str == null || index < 0 || index >= str.length ? 0 : str.charCodeAt(index);
	};
	JkLangString.equals = function(str1, str2) {
		if(str1 == null && str2 == null) {
			return true;
		}
		if(!(str1 != null && str2 != null)) {
			return false;
		}
		return str1 === str2;
	};
	JkLangString.isNotEqual = function(str1, str2) {
		return !JkLangString.equals(str1, str2);
	};
	JkLangString.equalsIgnoreCase = function(str1, str2) {
		if(str1 == null && str2 == null) {
			return true;
		}
		if(!(str1 != null && str2 != null)) {
			return false;
		}
		return str1.toLowerCase() === str2.toLowerCase();
	};
	JkLangString.compare = function(str1, str2) {
		if(str1 == null || str2 == null) {
			return 0;
		}
		return str1.localeCompare(str2);
	};
	JkLangString.compareToIgnoreCase = function(str1, str2) {
		if(str1 == null || str2 == null) {
			return 0;
		}
		return str1.toLowerCase().localeCompare((str2.toLowerCase()));
	};
	JkLangString.getHashCode = function(str) {
		if(str == null) {
			return 0;
		}
		var hash = 0;
		var it = JkLangString.iterate(str);
		while(it != null){
			var ch = it.getNextChar();
			if(JkLangCharacter.isEOF(ch)) {
				break;
			}
			hash = (hash << 5) - hash + ch;
			hash = hash & hash;
		}
		return hash;
	};
	JkLangString.getIndexOfCharacter = function(str, c, start) {
		if(str == null || c == 0) {
			return -1;
		}
		return str.indexOf((String.fromCharCode(c)), start);
	};
	JkLangString.getIndexOfString = function(str, s, start) {
		if(str == null || s == null) {
			return -1;
		}
		if(JkLangString.isEmpty(s)) {
			return 0;
		}
		return str.indexOf(s, start);
	};
	JkLangString.getLastIndexOfCharacter = function(str, c, start) {
		if(str == null) {
			return -1;
		}
		if(start <= 0) {
			return str.lastIndexOf((String.fromCharCode(c)));
		}
		return str.lastIndexOf((String.fromCharCode(c)), start);
	};
	JkLangString.getLastIndexOfString = function(str, s, start) {
		if(str == null) {
			return -1;
		}
		if(start <= 0) {
			return str.lastIndexOf(s);
		}
		return str.lastIndexOf(s, start);
	};
	JkLangString.getEndOfString = function(str, start) {
		if(!(str != null)) {
			return null;
		}
		var ss = start;
		if(ss < 0) {
			ss = 0;
		}
		return str.substring(ss);
	};
	JkLangString.getSubString = function(str, start, _length) {
		if(!(str != null)) {
			return null;
		}
		var ss = start;
		if(ss < 0) {
			ss = 0;
		}
		return str.substring(ss, (ss + _length));
	};
	JkLangString.contains = function(str1, str2) {
		if(!(str1 != null)) {
			return false;
		}
		if(!(str2 != null)) {
			return false;
		}
		var x = false;
		if(!str1.includes) {
			x = str1.indexOf(str2) !== -1;
		}
		else {
			x = str1.includes(str2);
		}
		;
		return x;
	};
	JkLangString.startsWith = function(str1, str2, offset) {
		if(!(str1 != null)) {
			return false;
		}
		if(!(str2 != null)) {
			return false;
		}
		var nstr = null;
		if(offset > 0) {
			nstr = JkLangString.getEndOfString(str1, offset);
		}
		else {
			nstr = str1;
		}
		var x = false;
		if(!nstr.startsWith) {
			x = nstr.indexOf(str2) === 0;
		}
		else {
			x = nstr.startsWith(str2);
		}
		;
		return x;
	};
	JkLangString.startsWithAny = function(str, strings) {
		if(strings != null) {
			var n = 0;
			var m = strings.length;
			for(n = 0 ; n < m ; n++) {
				var str2 = (function(o) {
					if(typeof o === "string") {
						return o;
					}
					return null;
				}.bind(this))(strings[n]);
				if(str2 != null) {
					if(JkLangString.startsWith(str, str2, 0)) {
						return str2;
					}
				}
			}
		}
		return null;
	};
	JkLangString.startsWithIgnoreCase = function(str1, str2, offset) {
		return JkLangString.startsWith((JkLangString.toLowerCase(str1)), (JkLangString.toLowerCase(str2)), offset);
	};
	JkLangString.startsWithAnyIgnoreCase = function(str, strings) {
		var ostr = JkLangString.toLowerCase(str);
		if(strings != null) {
			var n = 0;
			var m = strings.length;
			for(n = 0 ; n < m ; n++) {
				var str2 = (function(o) {
					if(typeof o === "string") {
						return o;
					}
					return null;
				}.bind(this))(strings[n]);
				if(str2 != null) {
					if(JkLangString.startsWith(ostr, (JkLangString.toLowerCase(str2)), 0)) {
						return str2;
					}
				}
			}
		}
		return null;
	};
	JkLangString.endsWith = function(str1, str2) {
		if(!(str1 != null)) {
			return false;
		}
		if(!(str2 != null)) {
			return false;
		}
		var x = false;
		if(!str1.endsWith) {
			x = str1.indexOf(str2) === str1.length - str2.length;
		}
		else {
			x = str1.endsWith(str2);
		}
		;
		return x;
	};
	JkLangString.endsWithAny = function(str, strings) {
		if(strings != null) {
			var n = 0;
			var m = strings.length;
			for(n = 0 ; n < m ; n++) {
				var str2 = (function(o) {
					if(typeof o === "string") {
						return o;
					}
					return null;
				}.bind(this))(strings[n]);
				if(str2 != null) {
					if(JkLangString.endsWith(str, str2)) {
						return str2;
					}
				}
			}
		}
		return null;
	};
	JkLangString.endsWithIgnoreCase = function(str1, str2) {
		return JkLangString.endsWith((JkLangString.toLowerCase(str1)), (JkLangString.toLowerCase(str2)));
	};
	JkLangString.endsWithAnyIgnoreCase = function(str, strings) {
		var ostr = JkLangString.toLowerCase(str);
		if(strings != null) {
			var n = 0;
			var m = strings.length;
			for(n = 0 ; n < m ; n++) {
				var str2 = (function(o) {
					if(typeof o === "string") {
						return o;
					}
					return null;
				}.bind(this))(strings[n]);
				if(str2 != null) {
					if(JkLangString.endsWith(ostr, (JkLangString.toLowerCase(str2)))) {
						return str2;
					}
				}
			}
		}
		return null;
	};
	JkLangString.strip = function(str) {
		if(!(str != null)) {
			return null;
		}
		return str.trim();
	};
	JkLangString.stripFromEnd = function(str) {
		if(!(str != null)) {
			return null;
		}
		var ll = JkLangString.getLength(str);
		if(ll < 1) {
			return str;
		}
		var n = 0;
		while(true){
			var c = JkLangString.getChar(str, (ll - 1 - n));
			if(c == " ".charCodeAt() || c == "\t".charCodeAt() || c == "\r".charCodeAt() || c == "\n".charCodeAt()) {
				n++;
			}
			else {
				break;
			}
		}
		if(n < 1) {
			return str;
		}
		return JkLangString.getSubString(str, 0, (ll - n));
	};
	JkLangString.stripFromStart = function(str) {
		if(!(str != null)) {
			return null;
		}
		var n = 0;
		while(true){
			var c = JkLangString.getChar(str, n);
			if(c == " ".charCodeAt() || c == "\t".charCodeAt() || c == "\r".charCodeAt() || c == "\n".charCodeAt()) {
				n++;
			}
			else {
				break;
			}
		}
		if(n < 1) {
			return str;
		}
		return JkLangString.getEndOfString(str, n);
	};
	JkLangString.replaceCharacter = function(str, oldChar, newChar) {
		if(!(str != null)) {
			return null;
		}
		return str.replace(oldChar, newChar);
	};
	JkLangString.replaceString = function(str, target, replacement) {
		if(!(str != null)) {
			return null;
		}
		if(JkLangString.isEmpty(target)) {
			return str;
		}
		var rr = replacement;
		if(!(rr != null)) {
			rr = "";
		}
		return str.replace(target, rr);
	};
	JkLangString.toCharArray = function(str) {
		if(!(str != null)) {
			return null;
		}
		var v = null;
		v = [];
		for(var i = 0 ; i < str.length ; i++) {
			v[i] = str.charAt(i).charCodeAt();
		}
		;
		return v;
	};
	JkLangString.split = function(str, delim, max) {
		var v = new Array;
		if(str == null) {
			return v;
		}
		var n = 0;
		while(true){
			if(max > 0 && JkLangVector.getSize(v) >= max - 1) {
				JkLangVector.append(v, (JkLangString.getEndOfString(str, n)));
				break;
			}
			var x = JkLangString.getIndexOfCharacter(str, delim, n);
			if(x < 0) {
				JkLangVector.append(v, (JkLangString.getEndOfString(str, n)));
				break;
			}
			JkLangVector.append(v, (JkLangString.getSubString(str, n, (x - n))));
			n = x + 1;
		}
		return v;
	};
	JkLangString.isInteger = function(str) {
		if(!(str != null)) {
			return false;
		}
		var it = JkLangString.iterate(str);
		if(!(it != null)) {
			return false;
		}
		while(true){
			var c = it.getNextChar();
			if(c < 1) {
				break;
			}
			if(c < "0".charCodeAt() || c > "9".charCodeAt()) {
				return false;
			}
		}
		return true;
	};
	JkLangString.toInteger = function(str) {
		if(JkLangString.isEmpty(str)) {
			return 0;
		}
		var iter = JkLangString.iterate(str);
		if(!(iter != null)) {
			return 0;
		}
		var v = 0;
		var first = true;
		var negative = false;
		while(true){
			var c = iter.getNextChar();
			if(first && c == "-".charCodeAt()) {
				negative = true;
				first = false;
				continue;
			}
			if(c >= "0".charCodeAt() && c <= "9".charCodeAt()) {
				v = v * 10;
				v += ~(~(c - "0".charCodeAt()));
			}
			else {
				break;
			}
			first = false;
		}
		if(negative) {
			v *= -1;
		}
		return v;
	};
	JkLangString.toLong = function(str) {
		if(JkLangString.isEmpty(str)) {
			return 0;
		}
		var iter = JkLangString.iterate(str);
		if(!(iter != null)) {
			return ~(~0);
		}
		var v = ~(~0);
		var first = true;
		var negative = false;
		while(true){
			var c = iter.getNextChar();
			if(first && c == "-".charCodeAt()) {
				negative = true;
				first = false;
				continue;
			}
			if(c >= "0".charCodeAt() && c <= "9".charCodeAt()) {
				v = v * 10;
				v += ~(~(c - "0".charCodeAt()));
			}
			else {
				break;
			}
			first = false;
		}
		if(negative) {
			v *= -1;
		}
		return v;
	};
	JkLangString.toIntegerFromHex = function(str) {
		if(JkLangString.isEmpty(str)) {
			return 0;
		}
		var iter = JkLangString.iterate(str);
		if(!(iter != null)) {
			return 0;
		}
		var v = 0;
		while(true){
			var c = iter.getNextChar();
			if(c >= "0".charCodeAt() && c <= "9".charCodeAt()) {
				v = v * 16;
				v += ~(~(c - "0".charCodeAt()));
			}
			else if(c >= "a".charCodeAt() && c <= "f".charCodeAt()) {
				v = v * 16;
				v += ~(~(10 + c - "a".charCodeAt()));
			}
			else if(c >= "A".charCodeAt() && c <= "F".charCodeAt()) {
				v = v * 16;
				v += ~(~(10 + c - "A".charCodeAt()));
			}
			else {
				break;
			}
		}
		return v;
	};
	JkLangString.toLongIntegerFromHex = function(str) {
		if(JkLangString.isEmpty(str)) {
			return 0;
		}
		var iter = JkLangString.iterate(str);
		if(!(iter != null)) {
			return ~(~0);
		}
		var v = 0;
		while(true){
			var c = iter.getNextChar();
			if(c >= "0".charCodeAt() && c <= "9".charCodeAt()) {
				v = v * 16;
				v += ~(~(c - "0".charCodeAt()));
			}
			else if(c >= "a".charCodeAt() && c <= "f".charCodeAt()) {
				v = v * 16;
				v += ~(~(10 + c - "a".charCodeAt()));
			}
			else if(c >= "A".charCodeAt() && c <= "F".charCodeAt()) {
				v = v * 16;
				v += ~(~(10 + c - "A".charCodeAt()));
			}
			else {
				break;
			}
		}
		return v;
	};
	JkLangString.toIntegerFromOctal = function(str) {
		if(JkLangString.isEmpty(str)) {
			return 0;
		}
		var iter = JkLangString.iterate(str);
		if(!(iter != null)) {
			return 0;
		}
		var v = 0;
		while(true){
			var c = iter.getNextChar();
			if(c >= "0".charCodeAt() && c <= "7".charCodeAt()) {
				v = v * 8;
				v += ~(~(c - "0".charCodeAt()));
			}
			else {
				break;
			}
		}
		return v;
	};
	JkLangString.toIntegerFromBinary = function(str) {
		if(JkLangString.isEmpty(str)) {
			return 0;
		}
		var iter = JkLangString.iterate(str);
		if(!(iter != null)) {
			return 0;
		}
		var v = 0;
		while(true){
			var c = iter.getNextChar();
			if(c >= "0".charCodeAt() && c <= "1".charCodeAt()) {
				v = v * 2;
				v += ~(~(c - "0".charCodeAt()));
			}
			else {
				break;
			}
		}
		return v;
	};
	JkLangString.toDouble = function(str) {
		if(str == null) {
			return 0.0;
		}
		var v = 0.0;
		v = parseFloat(str);
		if(isNaN(v)) {
			v = 0.0;
		}
		;
		return v;
	};
	JkLangString.iterate = function(value) {
		return JkLangCharacterIteratorForString.forString(value);
	};
	JkLangString.reverse = function(value) {
		if(!(value != null)) {
			return null;
		}
		var sb = JkLangStringBuilder.NEW();
		var it = JkLangString.iterate(value);
		var c = "".charCodeAt();
		while((c = it.getNextChar()) > 0){
			sb.insertCharacter(0, c);
		}
		return sb.toString();
	};
	JkLangString.iterateReverse = function(value) {
		return JkLangString.iterate((JkLangString.reverse(value)));
	};
	JkLangString.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangString"] === true;
	};
	let JkLangCharacterIterator = {};
	JkLangCharacterIterator.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangCharacterIterator"] === true;
	};
	let JkLangBooleanObject = {};
	JkLangBooleanObject.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangBooleanObject"] === true;
	};
	let JkLangMatrix = function() {
		this.vector = null;
		this.columnCount = 0;
	};
	JkLangMatrix.prototype._t = { "JkLangMatrix" : true };
	JkLangMatrix.prototype._tobj = JkLangMatrix;
	JkLangMatrix.NEW_IntegerInteger = function(rowSize, columnSize) {
		var v = new JkLangMatrix;
		return v.CTOR_JkLangMatrix_IntegerInteger(rowSize, columnSize);
	};
	JkLangMatrix.prototype.CTOR_JkLangMatrix_IntegerInteger = function(rowSize, columnSize) {
		this.columnCount = 0;
		this.vector = null;
		this.vector = new Array;
		this.setSize(rowSize, columnSize);
		return this;
	};
	JkLangMatrix.prototype.set = function(row, column, val) {
		if(!(this.vector != null)) {
			return;
		}
		if(!(row >= 0 || column >= 0)) {
			return;
		}
		var size = row * this.columnCount + column;
		if(!(JkLangVector.getSize(this.vector) > size)) {
			return;
		}
		JkLangVector.set(this.vector, size, val);
	};
	JkLangMatrix.prototype.get = function(row, column) {
		if(!(this.vector != null)) {
			return null;
		}
		if(!(row >= 0 || column >= 0)) {
			return null;
		}
		var size = row * this.columnCount + column;
		if(!(JkLangVector.getSize(this.vector) > size)) {
			return null;
		}
		return JkLangVector.get(this.vector, size);
	};
	JkLangMatrix.prototype.setSize = function(rowSize, colSize) {
		if(!(this.vector != null)) {
			return null;
		}
		this.columnCount = colSize;
		JkLangVector.setSize(this.vector, (rowSize * colSize));
		return this;
	};
	JkLangMatrix.prototype.getRowCount = function() {
		if(!(this.vector != null)) {
			return 0;
		}
		return this.vector.length / this.columnCount;
	};
	JkLangMatrix.prototype.getColumnCount = function() {
		if(!(this.vector != null)) {
			return 0;
		}
		return this.columnCount;
	};
	JkLangMatrix.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangMatrix"] === true;
	};
	let JkLangObjectWithSize = {};
	JkLangObjectWithSize.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangObjectWithSize"] === true;
	};
	let JkLangArray = function() {
	};
	JkLangArray.prototype._t = { "JkLangArray" : true };
	JkLangArray.prototype._tobj = JkLangArray;
	JkLangArray.NEW = function() {
		var v = new JkLangArray;
		return v.CTOR_JkLangArray();
	};
	JkLangArray.prototype.CTOR_JkLangArray = function() {
		return this;
	};
	JkLangArray.asObject = function(array) {
		var v = JkLangArrayMyArrayObject.NEW();
		v.setArray(array);
		return v;
	};
	JkLangArray.isEmpty = function(array) {
		if(array == null) {
			return true;
		}
		if(array.length < 1) {
			return true;
		}
		return false;
	};
	JkLangArray.isNotEmpty = function(array) {
		return !JkLangArray.isEmpty(array);
	};
	JkLangArray.contains = function(array, element) {
		if(!(array != null)) {
			return false;
		}
		return array.includes(element);
	};
	JkLangArray.toVector = function(array) {
		return JkLangVector.forArray(array);
	};
	JkLangArray.copyFrom = function(array, src, soffset, doffset, size) {
		if(!(array != null)) {
			return;
		}
		if(!(src != null)) {
			return;
		}
		for(var n = 0 ; n < size ; n++) {
			array[doffset + n] = src[soffset + n];
		}
	};
	JkLangArray.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangArray"] === true;
	};
	let JkLangDoubleObject = {};
	JkLangDoubleObject.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangDoubleObject"] === true;
	};
	let JkLangKeyValueList = function() {
		this.values = null;
	};
	JkLangKeyValueList.prototype._t = { "JkLangKeyValueList" : true };
	JkLangKeyValueList.prototype._tobj = JkLangKeyValueList;
	JkLangKeyValueList.NEW = function() {
		var v = new JkLangKeyValueList;
		return v.CTOR_JkLangKeyValueList();
	};
	JkLangKeyValueList.prototype.CTOR_JkLangKeyValueList = function() {
		this.values = null;
		return this;
	};
	JkLangKeyValueList.prototype.add = function(key, val) {
		if(this.values == null) {
			this.values = new Array;
		}
		var kvp = JkLangKeyValuePair.NEW();
		kvp.key = key;
		kvp.value = val;
		this.values.push(kvp);
	};
	JkLangKeyValueList.prototype.addPair = function(pair) {
		if(this.values == null) {
			this.values = new Array;
		}
		this.values.push(pair);
	};
	JkLangKeyValueList.prototype.prepend = function(key, val) {
		if(this.values == null) {
			this.values = new Array;
		}
		var kvp = JkLangKeyValuePair.NEW();
		kvp.key = key;
		kvp.value = val;
		JkLangVector.prepend(this.values, kvp);
	};
	JkLangKeyValueList.prototype.prependPair = function(pair) {
		if(this.values == null) {
			this.values = new Array;
		}
		JkLangVector.prepend(this.values, pair);
	};
	JkLangKeyValueList.prototype.iterate = function() {
		var v = JkLangVector.iterate(this.values);
		return v;
	};
	JkLangKeyValueList.prototype.asVector = function() {
		return this.values;
	};
	JkLangKeyValueList.prototype.dup = function() {
		var v = JkLangKeyValueList.NEW();
		var it = this.iterate();
		while(true){
			var kvp = it.next();
			if(kvp == null) {
				break;
			}
			v.add(kvp.key, kvp.value);
		}
		return v;
	};
	JkLangKeyValueList.prototype.getKey = function(index) {
		if(this.values == null) {
			return null;
		}
		var kvp = JkLangVector.get(this.values, index);
		if(kvp == null) {
			return null;
		}
		return kvp.key;
	};
	JkLangKeyValueList.prototype.getValue = function(index) {
		if(this.values == null) {
			return null;
		}
		var kvp = JkLangVector.get(this.values, index);
		if(kvp == null) {
			return null;
		}
		return kvp.value;
	};
	JkLangKeyValueList.prototype.count = function() {
		if(this.values == null) {
			return 0;
		}
		return JkLangVector.getSize(this.values);
	};
	JkLangKeyValueList.prototype.remove = function(index) {
		JkLangVector.remove(this.values, index);
	};
	JkLangKeyValueList.prototype.clear = function() {
		this.values = null;
	};
	JkLangKeyValueList.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangKeyValueList"] === true;
	};
	let JkLangBooleanIterator = {};
	JkLangBooleanIterator.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangBooleanIterator"] === true;
	};
	let JkLangIterator = {};
	JkLangIterator.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangIterator"] === true;
	};
	let JkLangVector = function() {
	};
	JkLangVector.prototype._t = { "JkLangVector" : true };
	JkLangVector.prototype._tobj = JkLangVector;
	JkLangVector.NEW = function() {
		var v = new JkLangVector;
		return v.CTOR_JkLangVector();
	};
	JkLangVector.prototype.CTOR_JkLangVector = function() {
		return this;
	};
	JkLangVector.asVector = function(obj) {
		var vo = (function(o) {
			if(JkLangVectorObject.IS_INSTANCE && JkLangVectorObject.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))(obj);
		if(!(vo != null)) {
			return null;
		}
		return vo.toVector();
	};
	JkLangVector.asObjectVector = function(o) {
		var it = JkLangDynamicObject.iterate(o);
		if(!(it != null)) {
			return null;
		}
		var v = new Array;
		while(true){
			var oo = it.next();
			if(!(oo != null)) {
				break;
			}
			v.push(oo);
		}
		return v;
	};
	JkLangVector.forIterator = function(iterator) {
		if(!(iterator != null)) {
			return null;
		}
		var v = new Array;
		while(true){
			var o = iterator.next();
			if(o == null) {
				break;
			}
			v.push(o);
		}
		return v;
	};
	JkLangVector.forArray = function(array) {
		if(!(array != null)) {
			return null;
		}
		var v = new Array;
		for(var n = 0 ; n < array.length ; n++) {
			v.push(array[n]);
		}
		return v;
	};
	JkLangVector.toVectorOfObject = function(collection) {
		if(!(collection != null)) {
			return null;
		}
		var nvec = new Array;
		if(collection != null) {
			var n = 0;
			var m = collection.length;
			for(n = 0 ; n < m ; n++) {
				var item = collection[n];
				if(item != null) {
					nvec.push(item);
				}
			}
		}
		return nvec;
	};
	JkLangVector.dupObjectVector = function(vector) {
		if(!(vector != null)) {
			return null;
		}
		var v = new Array;
		if(vector != null) {
			var n = 0;
			var m = vector.length;
			for(n = 0 ; n < m ; n++) {
				var o = vector[n];
				if(o != null) {
					v.push(o);
				}
			}
		}
		return v;
	};
	JkLangVector.contains = function(vector, item) {
		if(!(vector != null)) {
			return false;
		}
		return vector.includes(item);
	};
	JkLangVector.append = function(vector, item) {
		vector.push(item);
		;
	};
	JkLangVector.prepend = function(vector, item) {
		JkLangVector.insert(vector, item, 0);
	};
	JkLangVector.insert = function(vector, item, index) {
		vector.splice(index, 0, item);
		;
	};
	JkLangVector.setCapacity = function(vector, capacity) {
		if(!(vector != null)) {
			return;
		}
	};
	JkLangVector.setSize = function(vector, newSize) {
		if(!(vector != null)) {
			return null;
		}
		var sz = newSize;
		if(sz < 0) {
			sz = 0;
		}
		var osz = JkLangVector.getSize(vector);
		if(sz == osz) {
			return vector;
		}
		if(sz < osz) {
			for(var n = osz - 1 ; n >= sz ; n--) {
				JkLangVector.remove(vector, n);
			}
		}
		else {
			for(var n1 = osz ; n1 < sz ; n1++) {
				vector.push(null);
			}
		}
		return vector;
	};
	JkLangVector.getSize = function(vector) {
		if(vector == null) {
			return 0;
		}
		return vector.length;
	};
	JkLangVector.getAt = function(vector, index) {
		return JkLangVector.get(vector, index);
	};
	JkLangVector.get = function(vector, index) {
		if(index < 0 || index >= JkLangVector.getSize(vector)) {
			return null;
		}
		return vector[index];
	};
	JkLangVector.getFirst = function(vector) {
		return JkLangVector.get(vector, 0);
	};
	JkLangVector.getLast = function(vector) {
		return JkLangVector.get(vector, (JkLangVector.getSize(vector) - 1));
	};
	JkLangVector.set = function(vector, index, val) {
		if(index < 0 || index >= JkLangVector.getSize(vector)) {
			return;
		}
		vector.splice(index, 1, val);
		;
	};
	JkLangVector.remove = function(vector, index) {
		var sz = JkLangVector.getSize(vector);
		if(index < 0 || index >= sz) {
			return null;
		}
		return vector.splice(index, 1);
	};
	JkLangVector.popFirst = function(vector) {
		if(vector == null || JkLangVector.getSize(vector) < 1) {
			return null;
		}
		var v = JkLangVector.get(vector, 0);
		JkLangVector.removeFirst(vector);
		return v;
	};
	JkLangVector.removeFirst = function(vector) {
		if(vector == null || JkLangVector.getSize(vector) < 1) {
			return;
		}
		JkLangVector.remove(vector, 0);
	};
	JkLangVector.popLast = function(vector) {
		var sz = JkLangVector.getSize(vector);
		if(vector == null || sz < 1) {
			return null;
		}
		var v = JkLangVector.get(vector, (sz - 1));
		JkLangVector.removeLast(vector);
		return v;
	};
	JkLangVector.removeLast = function(vector) {
		if(vector == null) {
			return;
		}
		var sz = JkLangVector.getSize(vector);
		if(sz < 1) {
			return;
		}
		JkLangVector.remove(vector, (sz - 1));
	};
	JkLangVector.removeValue = function(vector, value) {
		var n = 0;
		for(n = 0 ; n < vector.length ; n++) {
			if(!Object.is) {
				if(vector[n] === value) {
					this.remove(vector, n);
					return n;
				}
			}
			else if(Object.is(vector[n], value)) {
				this.remove(vector, n);
				return n;
			}
			;
		}
		return -1;
	};
	JkLangVector.clear = function(vector) {
		vector.splice(0, vector.length);
		;
	};
	JkLangVector.isEmpty = function(vector) {
		return JkLangVector.getSize(vector) < 1;
	};
	JkLangVector.isNotEmpty = function(vector) {
		return !JkLangVector.isEmpty(vector);
	};
	JkLangVector.removeRange = function(vector, index, count) {
		vector.splice(index, count);
		;
	};
	JkLangVector.iterate = function(vector) {
		return JkLangVectorVectorIterator.NEW_VectorInteger(vector, 1);
	};
	JkLangVector.iterateReverse = function(vector) {
		return JkLangVectorVectorIterator.NEW_VectorInteger(vector, (-1));
	};
	JkLangVector.sort = function(vector, comparer) {
		if(!(vector != null)) {
			return;
		}
		vector.sort(function(a, b) {
			return comparer(a, b);
		});
		;
	};
	JkLangVector.sortReverse = function(vector, comparer) {
		var cc = comparer;
		JkLangVector.sort(vector, (function(a1, b1) {
			return -cc(a1, b1);
		}.bind(this)));
	};
	JkLangVector.sortAsStrings = function(vector) {
		JkLangVector.sort(vector, (function(a1, b1) {
			return JkLangString.compare((JkLangString.asString(a1)), (JkLangString.asString(b1)));
		}.bind(this)));
	};
	JkLangVector.sortAsStringsReverse = function(vector) {
		JkLangVector.sortReverse(vector, (function(a1, b1) {
			return JkLangString.compare((JkLangString.asString(a1)), (JkLangString.asString(b1)));
		}.bind(this)));
	};
	JkLangVector.reverse = function(vector) {
		if(!(vector != null)) {
			return;
		}
		var a = 0;
		var b = JkLangVector.getSize(vector) - 1;
		while(a < b){
			var t = JkLangVector.getAt(vector, b);
			JkLangVector.set(vector, b, (JkLangVector.getAt(vector, a)));
			JkLangVector.set(vector, a, t);
			a++;
			b--;
		}
	};
	JkLangVector.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangVector"] === true;
	};
	let JkLangBoolean = function() {
		this.value = false;
	};
	JkLangBoolean.prototype._t = {
		"JkLangBoolean" : true,
		"JkLangBooleanObject" : true
	};
	JkLangBoolean.prototype._tobj = JkLangBoolean;
	JkLangBoolean.NEW = function() {
		var v = new JkLangBoolean;
		return v.CTOR_JkLangBoolean();
	};
	JkLangBoolean.prototype.CTOR_JkLangBoolean = function() {
		this.value = false;
		return this;
	};
	JkLangBoolean.asObject = function(value) {
		var v = JkLangBoolean.NEW();
		v.setValue(value);
		return v;
	};
	JkLangBoolean.asBoolean = function(obj, defaultValue) {
		if(obj == null) {
			return false;
		}
		if(typeof obj === "boolean") {
			return obj;
		}
		if(JkLangBooleanObject.IS_INSTANCE && JkLangBooleanObject.IS_INSTANCE(obj)) {
			var bo = obj;
			return bo.toBoolean();
		}
		if(typeof obj === "number") {
			if(~(~obj) == 0) {
				return false;
			}
			return true;
		}
		if(JkLangIntegerObject.IS_INSTANCE && JkLangIntegerObject.IS_INSTANCE(obj)) {
			if(obj.toInteger() == 0) {
				return false;
			}
			return true;
		}
		if(typeof obj === "number") {
			if(~(~obj) == 0) {
				return false;
			}
			return true;
		}
		if(JkLangLongIntegerObject.IS_INSTANCE && JkLangLongIntegerObject.IS_INSTANCE(obj)) {
			if(obj.toLong() == 0) {
				return false;
			}
			return true;
		}
		if(typeof obj === "string") {
			var str = JkLangString.toLowerCase(obj);
			if(str == "yes" || str == "true" || str == "1") {
				return true;
			}
			if(str == "no" || str == "false" || str == "0") {
				return false;
			}
			return defaultValue;
		}
		if(JkLangStringObject.IS_INSTANCE && JkLangStringObject.IS_INSTANCE(obj)) {
			var str1 = obj.toString();
			if(str1 != null) {
				str1 = JkLangString.toLowerCase(str1);
				if(str1 == "yes" || str1 == "true" || str1 == "1") {
					return true;
				}
				if(str1 == "no" || str1 == "false" || str1 == "0") {
					return false;
				}
			}
			return defaultValue;
		}
		if(typeof obj === "number") {
			if(obj == 0.0) {
				return false;
			}
			return true;
		}
		if(JkLangDoubleObject.IS_INSTANCE && JkLangDoubleObject.IS_INSTANCE(obj)) {
			if(obj.toDouble() == 0.0) {
				return false;
			}
			return true;
		}
		if(typeof obj === "string") {
			if(~(~obj) == 0) {
				return false;
			}
			return true;
		}
		if(JkLangCharacterObject.IS_INSTANCE && JkLangCharacterObject.IS_INSTANCE(obj)) {
			if(~(~obj.toCharacter()) == 0) {
				return false;
			}
			return true;
		}
		if(JkLangObjectWithSize.IS_INSTANCE && JkLangObjectWithSize.IS_INSTANCE(obj)) {
			var sz = obj.getSize();
			if(sz == 0) {
				return false;
			}
			return true;
		}
		return defaultValue;
	};
	JkLangBoolean.prototype.toBoolean = function() {
		return this.value;
	};
	JkLangBoolean.prototype.getValue = function() {
		return this.value;
	};
	JkLangBoolean.prototype.setValue = function(v) {
		this.value = v;
		return this;
	};
	JkLangBoolean.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangBoolean"] === true;
	};
	let JkLangClosable = {};
	JkLangClosable.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangClosable"] === true;
	};
	let JkLangDuplicateable = {};
	JkLangDuplicateable.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangDuplicateable"] === true;
	};
	let JkLangSet = function() {
	};
	JkLangSet.prototype._t = { "JkLangSet" : true };
	JkLangSet.prototype._tobj = JkLangSet;
	JkLangSet.NEW = function() {
		var v = new JkLangSet;
		return v.CTOR_JkLangSet();
	};
	JkLangSet.prototype.CTOR_JkLangSet = function() {
		return this;
	};
	JkLangSet.add = function(set, value) {
		if(!(set != null)) {
			return;
		}
		set.add(value);
	};
	JkLangSet.remove = function(set, value) {
		if(!(set != null)) {
			return;
		}
		set.delete(value);
	};
	JkLangSet.clear = function(set) {
		if(!(set != null)) {
			return;
		}
		set.clear();
	};
	JkLangSet.getSize = function(set) {
		if(!(set != null)) {
			return 0;
		}
		return set.size;
	};
	JkLangSet.contains = function(set, value) {
		if(!(set != null)) {
			return false;
		}
		return set.has(value);
	};
	JkLangSet.getValues = function(set) {
		if(!(set != null)) {
			return null;
		}
		var v = new Array;
		data.forEach(function(value, key, oset) {
			this.push(value);
		}, v);
		;
		return v;
	};
	JkLangSet.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangSet"] === true;
	};
	let JkLangStringObject = {};
	JkLangStringObject.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangStringObject"] === true;
	};
	let JkLangIntegerIterator = {};
	JkLangIntegerIterator.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangIntegerIterator"] === true;
	};
	let JkLangDynamicMapObject = {};
	JkLangDynamicMapObject.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangDynamicMapObject"] === true;
	};
	let JkLangIterateable = {};
	JkLangIterateable.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangIterateable"] === true;
	};
	let JkLangLongIntegerObject = {};
	JkLangLongIntegerObject.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangLongIntegerObject"] === true;
	};
	let JkLangStringIterator = {};
	JkLangStringIterator.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangStringIterator"] === true;
	};
	let JkLangDoubleIterator = {};
	JkLangDoubleIterator.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangDoubleIterator"] === true;
	};
	let JkLangArrayObject = {};
	JkLangArrayObject.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangArrayObject"] === true;
	};
	let JkLangRunnable = {};
	JkLangRunnable.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangRunnable"] === true;
	};
	let JkLangIntegerObject = {};
	JkLangIntegerObject.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangIntegerObject"] === true;
	};
	let JkLangCharacterDecoder = function() {
		this.encoding = 0;
		this.current = 0;
		this.surrogatePair = null;
		this.counter = 0;
		this.currentSize = 0;
		this.ended = false;
	};
	JkLangCharacterDecoder.prototype._t = {
		"JkLangCharacterIterator" : true,
		"JkLangCharacterDecoder" : true
	};
	JkLangCharacterDecoder.prototype._tobj = JkLangCharacterDecoder;
	JkLangCharacterDecoder.NEW = function() {
		var v = new JkLangCharacterDecoder;
		return v.CTOR_JkLangCharacterDecoder();
	};
	JkLangCharacterDecoder.prototype.CTOR_JkLangCharacterDecoder = function() {
		this.ended = false;
		this.currentSize = 0;
		this.counter = 0;
		this.surrogatePair = null;
		this.current = 0;
		this.encoding = 0;
		return this;
	};
	JkLangCharacterDecoder.prototype.resetDecoder = function() {
		this.current = 0;
		this.surrogatePair = null;
		this.counter = 0;
		this.currentSize = 0;
		this.ended = false;
	};
	JkLangCharacterDecoder.prototype.copyTo = function(o) {
		o.encoding = this.encoding;
		o.current = this.current;
		o.currentSize = this.currentSize;
		o.ended = this.ended;
	};
	JkLangCharacterDecoder.prototype.moveToPreviousByte = function() {
		return false;
	};
	JkLangCharacterDecoder.prototype.moveToNextByte = function() {
		return false;
	};
	JkLangCharacterDecoder.prototype.getCurrentByte = function() {
		return 0;
	};
	JkLangCharacterDecoder.prototype.setEncoding = function(ee) {
		if(JkLangString.equalsIgnoreCase(ee, "UTF8") || JkLangString.equalsIgnoreCase(ee, "UTF-8")) {
			this.encoding = JkLangCharacterDecoder.UTF8;
			this.currentSize = 1;
			return this;
		}
		if(JkLangString.equalsIgnoreCase(ee, "ASCII")) {
			this.encoding = JkLangCharacterDecoder.ASCII;
			this.currentSize = 1;
			return this;
		}
		if(JkLangString.equalsIgnoreCase(ee, "UCS2") || JkLangString.equalsIgnoreCase(ee, "UCS-2")) {
			this.encoding = JkLangCharacterDecoder.UCS2;
			this.currentSize = 2;
			return this;
		}
		return null;
	};
	JkLangCharacterDecoder.prototype.getEncoding = function() {
		return this.encoding;
	};
	JkLangCharacterDecoder.prototype.moveToPreviousChar = function() {
		var op = this.getCurrentPosition();
		var cs = this.currentSize;
		if(cs > 1) {
			var n = 0;
			for(n = 0 ; n < cs - 1 ; n++) {
				if(!this.moveToPreviousByte()) {
					return false;
				}
			}
		}
		var v = this.doMoveToPreviousChar();
		if(!v) {
			this.setCurrentPosition(op);
		}
		if(v && this.ended) {
			this.ended = false;
		}
		return v;
	};
	JkLangCharacterDecoder.prototype.convertToChar = function(v) {
		var rr = "".charCodeAt();
		if(!String.fromCodePoint) {
			var fromCodePoint = function(_) {
				var codeUnits = [];
				var index = -1;
				var result = "";
				var lengthOfArgs = arguments.length;
				while(++index < lengthOfArgs){
					var codePoint = Number(arguments[index]);
					if(!isFinite(codePoint) || codePoint < 0 || codePoint > 0x10ffff || Math.floor(codePoint) != codePoint) {
						console.log("Invalid code point");
					}
					if(codePoint <= 0xffff) {
						codeUnits.push(codePoint);
					}
					else {
						codePoint -= 0x10000;
						codeUnits.push(((codePoint >> 10) + 0xd800), (codePoint % 0x400 + 0xdc00));
					}
					if(index + 1 == lengthOfArgs || codeUnits.length > 0x4000) {
						result += String.fromCharCode.apply(null, codeUnits);
						codeUnits.length = 0;
					}
				}
				return result;
			};
			String.fromCodePoint = fromCodePoint;
		}
		;
		rr = String.fromCodePoint(v);
		;
		return rr;
	};
	JkLangCharacterDecoder.prototype.getSurrogatePair = function() {
		if(!(this.surrogatePair != null)) {
			return "".charCodeAt();
		}
		var c = this.surrogatePair[this.counter];
		this.counter++;
		if(this.counter == 2) {
			this.counter = 0;
			this.surrogatePair = null;
		}
		return c;
	};
	JkLangCharacterDecoder.prototype.doMoveToPreviousChar = function() {
		if(this.encoding == JkLangCharacterDecoder.UTF8) {
			if(!this.moveToPreviousByte()) {
				return false;
			}
			var c2 = ~(~this.getCurrentByte());
			if(c2 <= 0x7f) {
				this.current = c2;
				this.currentSize = 1;
				return true;
			}
			if(!this.moveToPreviousByte()) {
				return false;
			}
			var c1 = ~(~this.getCurrentByte());
			if((c1 & 0xc0) == 0xc0) {
				if(!this.moveToNextByte()) {
					return false;
				}
				var v = ~(~((c1 & 0x1f) << 6));
				v += ~(~(c2 & 0x3f));
				this.current = this.convertToChar(v);
				this.currentSize = 2;
				return true;
			}
			if(!this.moveToPreviousByte()) {
				return false;
			}
			var c0 = ~(~this.getCurrentByte());
			if((c0 & 0xe0) == 0xe0) {
				if(!this.moveToNextByte()) {
					return false;
				}
				if(!this.moveToNextByte()) {
					return false;
				}
				var v1 = ~(~((c0 & 0xf) << 12));
				v1 += ~(~((c1 & 0x3f) << 6));
				v1 += ~(~(c2 & 0x3f));
				this.current = this.convertToChar(v1);
				this.currentSize = 3;
				return true;
			}
			if(!this.moveToPreviousByte()) {
				return false;
			}
			var cm1 = ~(~this.getCurrentByte());
			if((cm1 & 0xf0) == 0xf0) {
				if(!this.moveToNextByte()) {
					return false;
				}
				if(!this.moveToNextByte()) {
					return false;
				}
				if(!this.moveToNextByte()) {
					return false;
				}
				var v2 = ~(~((cm1 & 0x7) << 18));
				v2 += ~(~((c0 & 0x3f) << 12));
				v2 += ~(~((c1 & 0x3f) << 6));
				v2 += ~(~(c2 & 0x3f));
				this.current = this.convertToChar(v2);
				this.currentSize = 4;
				return true;
			}
			this.moveToNextByte();
			this.moveToNextByte();
			this.moveToNextByte();
			this.current = "?".charCodeAt();
			this.currentSize = 1;
			return true;
		}
		if(this.encoding == JkLangCharacterDecoder.ASCII) {
			if(!this.moveToPreviousByte()) {
				return false;
			}
			this.current = this.getCurrentByte();
			return true;
		}
		if(this.encoding == JkLangCharacterDecoder.UCS2) {
			if(!this.moveToPreviousByte()) {
				return false;
			}
			var c11 = ~(~this.getCurrentByte());
			if(!this.moveToPreviousByte()) {
				return false;
			}
			var c01 = ~(~this.getCurrentByte());
			if(!this.moveToNextByte()) {
				return false;
			}
			this.current = c01 << 8 & c11;
			return true;
		}
		console.log(("Unsupported encoding in CharacterDecoder: " + JkLangString.safeString((JkLangString.forInteger(this.encoding)))));
		return false;
	};
	JkLangCharacterDecoder.prototype.moveToNextChar = function() {
		var v = this.doMoveToNextChar();
		if(v == false) {
			this.current = 0;
			this.ended = true;
		}
		return v;
	};
	JkLangCharacterDecoder.prototype.doMoveToNextChar = function() {
		if(this.encoding == JkLangCharacterDecoder.UTF8) {
			if(this.surrogatePair != null) {
				this.current = this.getSurrogatePair();
				return true;
			}
			if(!this.moveToNextByte()) {
				return false;
			}
			var b1 = this.getCurrentByte();
			var v = -1;
			if(b1 <= 0x7f) {
				v = ~(~b1);
				this.currentSize = 1;
			}
			else if(b1 >= 0xf0) {
				v = ~(~((b1 & 0x7) << 18));
				if(!this.moveToNextByte()) {
					return false;
				}
				var b2 = this.getCurrentByte();
				v += ~(~((b2 & 0x3f) << 12));
				if(!this.moveToNextByte()) {
					return false;
				}
				var b3 = this.getCurrentByte();
				v += ~(~((b3 & 0x3f) << 6));
				if(!this.moveToNextByte()) {
					return false;
				}
				var b4 = this.getCurrentByte();
				v += ~(~(b4 & 0x3f));
				this.currentSize = 4;
			}
			else if(b1 >= 0xe0) {
				v = ~(~((b1 & 0xf) << 12));
				if(!this.moveToNextByte()) {
					return false;
				}
				var b21 = this.getCurrentByte();
				v += ~(~((b21 & 0x3f) << 6));
				if(!this.moveToNextByte()) {
					return false;
				}
				var b31 = this.getCurrentByte();
				v += ~(~(b31 & 0x3f));
				this.currentSize = 3;
			}
			else if(b1 >= 0xc0) {
				v = ~(~((b1 & 0x1f) << 6));
				if(!this.moveToNextByte()) {
					return false;
				}
				var b22 = this.getCurrentByte();
				v += ~(~(b22 & 0x3f));
				this.currentSize = 2;
			}
			else {
				v = ~(~"?".charCodeAt());
				this.currentSize = 1;
			}
			this.current = this.convertToChar(v);
			return true;
		}
		if(this.encoding == JkLangCharacterDecoder.ASCII) {
			if(!this.moveToNextByte()) {
				return false;
			}
			this.current = this.getCurrentByte();
			return true;
		}
		if(this.encoding == JkLangCharacterDecoder.UCS2) {
			if(!this.moveToNextByte()) {
				return false;
			}
			var c0 = ~(~this.getCurrentByte());
			if(!this.moveToNextByte()) {
				return false;
			}
			var c1 = ~(~this.getCurrentByte());
			this.current = c0 << 8 & c1;
			return true;
		}
		console.log(("Unsupported encoding in CharacterDecoder: " + JkLangString.safeString((JkLangString.forInteger(this.encoding)))));
		return false;
	};
	JkLangCharacterDecoder.prototype.getCurrentChar = function() {
		return this.current;
	};
	JkLangCharacterDecoder.prototype.getNextChar = function() {
		if(this.moveToNextChar() == false) {
			return 0;
		}
		return this.current;
	};
	JkLangCharacterDecoder.prototype.hasEnded = function() {
		return this.ended;
	};
	JkLangCharacterDecoder.prototype.getCurrentPosition = function() {
	};
	JkLangCharacterDecoder.prototype.setCurrentPosition = function(position) {
	};
	JkLangCharacterDecoder.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangCharacterDecoder"] === true;
	};
	JkLangCharacterDecoder.UTF8 = 0;
	JkLangCharacterDecoder.ASCII = 1;
	JkLangCharacterDecoder.UCS2 = 2;
	let JkLangLogicOp = function() {
	};
	JkLangLogicOp.prototype._t = { "JkLangLogicOp" : true };
	JkLangLogicOp.prototype._tobj = JkLangLogicOp;
	JkLangLogicOp.NEW = function() {
		var v = new JkLangLogicOp;
		return v.CTOR_JkLangLogicOp();
	};
	JkLangLogicOp.prototype.CTOR_JkLangLogicOp = function() {
		return this;
	};
	JkLangLogicOp.prototype.or = function(v1, v2) {
		return v1 || v2;
	};
	JkLangLogicOp.prototype.and = function(v1, v2) {
		return v1 && v2;
	};
	JkLangLogicOp.prototype.not = function(v) {
		return !v;
	};
	JkLangLogicOp.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangLogicOp"] === true;
	};
	let JkLangException = function() {
	};
	JkLangException.prototype._t = { "JkLangException" : true };
	JkLangException.prototype._tobj = JkLangException;
	JkLangException.NEW = function() {
		var v = new JkLangException;
		return v.CTOR_JkLangException();
	};
	JkLangException.prototype.CTOR_JkLangException = function() {
		;
		return this;
	};
	JkLangException.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangException"] === true;
	};
	let JkLangStringBuilder = function() {
		this.builder = null;
	};
	JkLangStringBuilder.prototype._t = {
		"JkLangStringObject" : true,
		"JkLangStringBuilder" : true
	};
	JkLangStringBuilder.prototype._tobj = JkLangStringBuilder;
	JkLangStringBuilder.NEW = function() {
		var v = new JkLangStringBuilder;
		return v.CTOR_JkLangStringBuilder();
	};
	JkLangStringBuilder.prototype.CTOR_JkLangStringBuilder = function() {
		this.builder = null;
		this.initialize();
		return this;
	};
	JkLangStringBuilder.forString = function(initial) {
		var v = JkLangStringBuilder.NEW();
		v.appendString(initial);
		return v;
	};
	JkLangStringBuilder.dup = function(initial) {
		var v = JkLangStringBuilder.NEW();
		if(initial != null) {
			v.appendString((initial.toString()));
		}
		return v;
	};
	JkLangStringBuilder.prototype.initialize = function() {
		this.builder = new String();
		;
	};
	JkLangStringBuilder.prototype.clear = function() {
		this.initialize();
	};
	JkLangStringBuilder.prototype.count = function() {
		return this.builder.length;
	};
	JkLangStringBuilder.prototype.appendLong = function(c) {
		return this.appendString((JkLangString.forLongInteger(c)));
	};
	JkLangStringBuilder.prototype.appendInteger = function(c) {
		return this.appendString((JkLangString.forInteger(c)));
	};
	JkLangStringBuilder.prototype.appendDouble = function(c) {
		return this.appendString((JkLangString.forDouble(c)));
	};
	JkLangStringBuilder.prototype.appendFloat = function(c) {
		return this.appendString((JkLangString.forFloat(c)));
	};
	JkLangStringBuilder.prototype.appendCharacter = function(c) {
		if(c == 0 || c == -1) {
			return this;
		}
		return this.appendString((JkLangString.forCharacter(c)));
	};
	JkLangStringBuilder.prototype.appendString = function(str) {
		if(str == null) {
			return this;
		}
		this.builder += str;
		;
		return this;
	};
	JkLangStringBuilder.prototype.insertInteger = function(index, c) {
		return this.insertString(index, (JkLangString.forInteger(c)));
	};
	JkLangStringBuilder.prototype.insertCharacter = function(index, c) {
		if(c == 0) {
			return this;
		}
		return this.insertString(index, (JkLangString.forCharacter(c)));
	};
	JkLangStringBuilder.prototype.insertDouble = function(index, c) {
		return this.insertString(index, (JkLangString.forDouble(c)));
	};
	JkLangStringBuilder.prototype.insertFloat = function(index, c) {
		return this.insertString(index, (JkLangString.forFloat(c)));
	};
	JkLangStringBuilder.prototype.insertString = function(index, str) {
		if(str == null) {
			return this;
		}
		var fp = null;
		var lp = null;
		fp = this.builder.substring(0, index);
		lp = this.builder.substring(index, this.builder.length);
		this.builder = fp + str + lp;
		;
		return this;
	};
	JkLangStringBuilder.prototype.remove = function(index, _length) {
		if(_length < 1) {
			return this;
		}
		var fp = null;
		var lp = null;
		fp = this.builder.substring(0, index);
		lp = this.builder.substring((index + length), this.builder.length);
		this.builder = fp + lp;
		;
		return this;
	};
	JkLangStringBuilder.prototype.removeLastCharacter = function() {
		var c = this.count();
		if(c > 0) {
			this.remove((c - 1), 1);
		}
		return this;
	};
	JkLangStringBuilder.prototype.toString = function() {
		return this.builder.toString();
	};
	JkLangStringBuilder.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangStringBuilder"] === true;
	};
	let JkLangStringObjectWithDebug = {};
	JkLangStringObjectWithDebug.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangStringObjectWithDebug"] === true;
	};
	let JkLangVectorVectorIterator = function() {
		this.vector = null;
		this.index = 0;
		this.increment = 1;
	};
	JkLangVectorVectorIterator.prototype._t = {
		"JkLangVectorVectorIterator" : true,
		"JkLangIterator" : true
	};
	JkLangVectorVectorIterator.prototype._tobj = JkLangVectorVectorIterator;
	JkLangVectorVectorIterator.NEW_VectorInteger = function(vector, increment) {
		var v = new JkLangVectorVectorIterator;
		return v.CTOR_JkLangVectorVectorIterator_VectorInteger(vector, increment);
	};
	JkLangVectorVectorIterator.prototype.CTOR_JkLangVectorVectorIterator_VectorInteger = function(vector, increment) {
		this.increment = 1;
		this.index = 0;
		this.vector = null;
		this.vector = vector;
		this.increment = increment;
		if(increment < 0 && vector != null) {
			this.index = vector.length - 1;
		}
		return this;
	};
	JkLangVectorVectorIterator.prototype.next = function() {
		if(this.vector == null) {
			return null;
		}
		if(this.index < 0 || this.index >= this.vector.length) {
			return null;
		}
		var v = this.vector[this.index];
		this.index += this.increment;
		return v;
	};
	JkLangVectorVectorIterator.prototype.hasNext = function() {
		if(!(this.vector != null)) {
			return false;
		}
		if(!(this.index < this.vector.length)) {
			return false;
		}
		return true;
	};
	JkLangVectorVectorIterator.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangVectorVectorIterator"] === true;
	};
	let JkLangTask = {};
	JkLangTask.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangTask"] === true;
	};
	let JkLangStringSet = function() {
		this.data = null;
	};
	JkLangStringSet.prototype._t = { "JkLangStringSet" : true };
	JkLangStringSet.prototype._tobj = JkLangStringSet;
	JkLangStringSet.NEW = function() {
		var v = new JkLangStringSet;
		return v.CTOR_JkLangStringSet();
	};
	JkLangStringSet.prototype.CTOR_JkLangStringSet = function() {
		this.data = null;
		this.data = new Map;
		return this;
	};
	JkLangStringSet.prototype.add = function(value) {
		JkLangMap.setValue(this.data, value, (JkLangBoolean.asObject(true)));
	};
	JkLangStringSet.prototype.remove = function(value) {
		JkLangMap.remove(this.data, value);
	};
	JkLangStringSet.prototype.count = function() {
		return JkLangMap.count(this.data);
	};
	JkLangStringSet.prototype.contains = function(value) {
		if(JkLangMap.getValue(this.data, value) != null) {
			return true;
		}
		return false;
	};
	JkLangStringSet.prototype.getAll = function() {
		var v = JkLangMap.getKeys(this.data);
		return v;
	};
	JkLangStringSet.prototype.clear = function() {
		JkLangMap.clear(this.data);
	};
	JkLangStringSet.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangStringSet"] === true;
	};
	let JkLangLongInteger = function() {
		this.value = 0;
	};
	JkLangLongInteger.prototype._t = {
		"JkLangLongIntegerObject" : true,
		"JkLangLongInteger" : true
	};
	JkLangLongInteger.prototype._tobj = JkLangLongInteger;
	JkLangLongInteger.NEW = function() {
		var v = new JkLangLongInteger;
		return v.CTOR_JkLangLongInteger();
	};
	JkLangLongInteger.prototype.CTOR_JkLangLongInteger = function() {
		this.value = 0;
		return this;
	};
	JkLangLongInteger.forValue = function(value) {
		return JkLangLongInteger.asObject(value);
	};
	JkLangLongInteger.asObject = function(value) {
		var v = JkLangLongInteger.NEW();
		v.setValue(value);
		return v;
	};
	JkLangLongInteger.asLong = function(obj) {
		if(!(obj != null)) {
			return 0;
		}
		if(typeof obj === "number") {
			return ~(~obj);
		}
		if(JkLangLongIntegerObject.IS_INSTANCE && JkLangLongIntegerObject.IS_INSTANCE(obj)) {
			var oi = obj;
			return oi.toLong();
		}
		if(typeof obj === "number") {
			var v = ~(~obj);
			return ~(~v);
		}
		if(JkLangIntegerObject.IS_INSTANCE && JkLangIntegerObject.IS_INSTANCE(obj)) {
			var oi1 = obj;
			return ~(~oi1.toInteger());
		}
		if(typeof obj === "string") {
			return JkLangString.toLong(obj);
		}
		if(JkLangStringObject.IS_INSTANCE && JkLangStringObject.IS_INSTANCE(obj)) {
			return JkLangString.toLong((obj.toString()));
		}
		if(typeof obj === "number") {
			var v1 = obj;
			return ~(~v1);
		}
		if(JkLangDoubleObject.IS_INSTANCE && JkLangDoubleObject.IS_INSTANCE(obj)) {
			var od = obj;
			return ~(~od.toDouble());
		}
		if(typeof obj === "boolean") {
			if(obj == true) {
				return 1;
			}
			return 0;
		}
		if(JkLangBooleanObject.IS_INSTANCE && JkLangBooleanObject.IS_INSTANCE(obj)) {
			if(obj.toBoolean()) {
				return 1;
			}
			return 0;
		}
		if(typeof obj === "string") {
			var v2 = obj;
			return ~(~v2);
		}
		if(JkLangCharacterObject.IS_INSTANCE && JkLangCharacterObject.IS_INSTANCE(obj)) {
			var oc = obj;
			return ~(~oc.toCharacter());
		}
		return 0;
	};
	JkLangLongInteger.prototype.add = function(amount) {
		this.value += amount;
	};
	JkLangLongInteger.prototype.toLong = function() {
		return this.value;
	};
	JkLangLongInteger.prototype.getValue = function() {
		return this.value;
	};
	JkLangLongInteger.prototype.setValue = function(v) {
		this.value = v;
		return this;
	};
	JkLangLongInteger.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangLongInteger"] === true;
	};
	let JkLangStringDataReceiver = {};
	JkLangStringDataReceiver.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangStringDataReceiver"] === true;
	};
	let JkLangBufferObject = {};
	JkLangBufferObject.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangBufferObject"] === true;
	};
	let JkLangBufferBuilder = function() {
		this.buffer = null;
		this.pointer = 0;
	};
	JkLangBufferBuilder.prototype._t = { "JkLangBufferBuilder" : true };
	JkLangBufferBuilder.prototype._tobj = JkLangBufferBuilder;
	JkLangBufferBuilder.NEW = function() {
		var v = new JkLangBufferBuilder;
		return v.CTOR_JkLangBufferBuilder();
	};
	JkLangBufferBuilder.prototype.CTOR_JkLangBufferBuilder = function() {
		this.pointer = 0;
		this.buffer = null;
		return this;
	};
	JkLangBufferBuilder.prototype.allocate = function(sz) {
		if(this.buffer == null) {
			this.buffer = new ArrayBuffer(8192);
			return;
		}
		var needed = this.pointer + sz;
		var csz = JkLangBuffer.getSize(this.buffer);
		if(csz >= needed) {
			return;
		}
		var nsz = csz;
		while(nsz < needed){
			nsz += 1024;
		}
		this.buffer = JkLangBuffer.resize(this.buffer, nsz);
	};
	JkLangBufferBuilder.prototype.getSize = function() {
		return ~(~this.pointer);
	};
	JkLangBufferBuilder.prototype.appendInteger = function(value) {
		this.allocate((this.pointer + 1));
		JkLangBuffer.setByte(this.buffer, this.pointer, (~(~value)));
		this.pointer++;
	};
	JkLangBufferBuilder.prototype.appendBuffer = function(sbuffer) {
		this.appendSubBuffer(sbuffer, 0, (JkLangBuffer.getSize(sbuffer)));
	};
	JkLangBufferBuilder.prototype.appendSubBuffer = function(sbuffer, offset, size) {
		if(!(sbuffer != null)) {
			return;
		}
		if(!(offset >= 0)) {
			return;
		}
		if(!(size >= 0)) {
			return;
		}
		this.allocate((this.pointer + size));
		JkLangBuffer.copyFrom(this.buffer, sbuffer, offset, this.pointer, size);
		this.pointer += size;
	};
	JkLangBufferBuilder.prototype.toBuffer = function() {
		return JkLangBuffer.getSubBuffer(this.buffer, 0, this.pointer, false);
	};
	JkLangBufferBuilder.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangBufferBuilder"] === true;
	};
	let JkLangSerializer = function() {
	};
	JkLangSerializer.prototype._t = { "JkLangSerializer" : true };
	JkLangSerializer.prototype._tobj = JkLangSerializer;
	JkLangSerializer.NEW = function() {
		var v = new JkLangSerializer;
		return v.CTOR_JkLangSerializer();
	};
	JkLangSerializer.prototype.CTOR_JkLangSerializer = function() {
		return this;
	};
	JkLangSerializer.toBuffer = function(value) {
		if(!(value != null)) {
			return null;
		}
		console.log("[jk.lang.Serializer.toBuffer] (Serializer.sling:34:3): Not implemented.");
		return null;
	};
	JkLangSerializer.fromBuffer = function(buffer) {
		if(!(buffer != null)) {
			return null;
		}
		console.log("[jk.lang.Serializer.fromBuffer] (Serializer.sling:54:3): Not implemented.");
		return null;
	};
	JkLangSerializer.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangSerializer"] === true;
	};
	let JkLangVectorObject = {};
	JkLangVectorObject.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangVectorObject"] === true;
	};
	let JkLangMapObject = {};
	JkLangMapObject.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangMapObject"] === true;
	};
	let JkLangMap = function() {
	};
	JkLangMap.prototype._t = { "JkLangMap" : true };
	JkLangMap.prototype._tobj = JkLangMap;
	JkLangMap.NEW = function() {
		var v = new JkLangMap;
		return v.CTOR_JkLangMap();
	};
	JkLangMap.prototype.CTOR_JkLangMap = function() {
		return this;
	};
	JkLangMap.asObject = function(map) {
		if(!(map != null)) {
			return null;
		}
		var v = JkLangMapMyMapObject.NEW();
		v.setMap(map);
		return v;
	};
	JkLangMap.asMap = function(o) {
		if(!(o != null)) {
			return null;
		}
		var v = new Map;
		for(var k in o){
			if(o.hasOwnProperty(k)) {
				v.set(k, o[k]);
			}
		}
		;
		return v;
	};
	JkLangMap.getWithDefault = function(map, key, ddf) {
		if(map == null || key == null) {
			return ddf;
		}
		if(JkLangMap.containsKey(map, key) == false) {
			return ddf;
		}
		return JkLangMap.getValue(map, key);
	};
	JkLangMap.get = function(map, key) {
		return JkLangMap.getValue(map, key);
	};
	JkLangMap.getValue = function(map, key) {
		if(map == null || key == null) {
			return null;
		}
		return map.get(key);
	};
	JkLangMap.set = function(data, key, val) {
		if(!(data != null)) {
			return false;
		}
		if(!(key != null)) {
			return false;
		}
		data.set(key, val);
		;
		return true;
	};
	JkLangMap.setValue = function(data, key, val) {
		return JkLangMap.set(data, key, val);
	};
	JkLangMap.remove = function(data, key) {
		if(!(data != null)) {
			return;
		}
		if(!(key != null)) {
			return;
		}
		data.delete(key);
		;
	};
	JkLangMap.count = function(data) {
		if(data == null) {
			return 0;
		}
		return data.size;
	};
	JkLangMap.containsKey = function(data, key) {
		if(!(data != null)) {
			return false;
		}
		if(!(key != null)) {
			return false;
		}
		return data.has(key);
	};
	JkLangMap.containsValue = function(data, val) {
		if(!(data != null)) {
			return false;
		}
		if(!(val != null)) {
			return false;
		}
		var vals = JkLangMap.getValues(data);
		return vals.includes(val);
	};
	JkLangMap.clear = function(data) {
		if(!(data != null)) {
			return;
		}
		data.clear();
		;
	};
	JkLangMap.dup = function(data) {
		if(!(data != null)) {
			return null;
		}
		return new Map(data);
	};
	JkLangMap.getKeys = function(data) {
		if(!(data != null)) {
			return null;
		}
		var v = new Array;
		data.forEach(function(value, key) {
			this.push(key);
		}, v);
		;
		return v;
	};
	JkLangMap.getValues = function(data) {
		if(!(data != null)) {
			return null;
		}
		var v = new Array;
		data.forEach(function(value, keys) {
			this.push(value);
		}, v);
		;
		return v;
	};
	JkLangMap.iterateKeys = function(data) {
		return JkLangVector.iterate((JkLangMap.getKeys(data)));
	};
	JkLangMap.iterateValues = function(data) {
		return JkLangVector.iterate((JkLangMap.getValues(data)));
	};
	JkLangMap.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangMap"] === true;
	};
	let JkLangCharacterIteratorForString = function() {
		this.characters = null;
		this.currentIndex = -1;
	};
	JkLangCharacterIteratorForString.prototype._t = {
		"JkLangCharacterIterator" : true,
		"JkLangCharacterIteratorForString" : true,
		"JkLangDuplicateable" : true
	};
	JkLangCharacterIteratorForString.prototype._tobj = JkLangCharacterIteratorForString;
	JkLangCharacterIteratorForString.NEW = function() {
		var v = new JkLangCharacterIteratorForString;
		return v.CTOR_JkLangCharacterIteratorForString();
	};
	JkLangCharacterIteratorForString.prototype.CTOR_JkLangCharacterIteratorForString = function() {
		this.currentIndex = -1;
		this.characters = null;
		return this;
	};
	JkLangCharacterIteratorForString.forString = function(value) {
		var v = JkLangCharacterIteratorForString.NEW();
		v.setString(value);
		return v;
	};
	JkLangCharacterIteratorForString.prototype.duplicate = function() {
		var v = JkLangCharacterIteratorForString.NEW();
		v.characters = this.characters;
		v.currentIndex = this.currentIndex;
		return v;
	};
	JkLangCharacterIteratorForString.prototype.getCurrentChar = function() {
		if(this.currentIndex < 0 || this.currentIndex >= this.characters.length) {
			return 0;
		}
		return this.characters[this.currentIndex];
	};
	JkLangCharacterIteratorForString.prototype.getNextChar = function() {
		this.moveToNextChar();
		return this.getCurrentChar();
	};
	JkLangCharacterIteratorForString.prototype.moveToNextChar = function() {
		var sc = this.characters.length;
		if(this.currentIndex + 1 <= sc) {
			this.currentIndex++;
		}
		if(this.currentIndex >= sc) {
			return false;
		}
		return true;
	};
	JkLangCharacterIteratorForString.prototype.moveToPreviousChar = function() {
		if(this.currentIndex < 1) {
			return false;
		}
		this.currentIndex--;
		return true;
	};
	JkLangCharacterIteratorForString.prototype.hasEnded = function() {
		if(this.currentIndex >= this.characters.length) {
			return true;
		}
		return false;
	};
	JkLangCharacterIteratorForString.prototype.getCurrentPosition = function() {
		return this.currentIndex;
	};
	JkLangCharacterIteratorForString.prototype.setCurrentPosition = function(position) {
		this.currentIndex = position;
	};
	JkLangCharacterIteratorForString.prototype.setString = function(value) {
		this.characters = JkLangString.toCharArray(value);
		this.currentIndex = -1;
	};
	JkLangCharacterIteratorForString.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangCharacterIteratorForString"] === true;
	};
	let JkLangKeyValueListForStrings = function() {
		JkLangKeyValueList.call(this);
	};
	JkLangKeyValueListForStrings.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkLangKeyValueList.prototype);
	JkLangKeyValueListForStrings.prototype.constructor = JkLangKeyValueListForStrings;
	JkLangKeyValueListForStrings.prototype._t = {
		"JkLangKeyValueListForStrings" : true,
		"JkLangKeyValueList" : true
	};
	JkLangKeyValueListForStrings.prototype._tobj = JkLangKeyValueListForStrings;
	JkLangKeyValueListForStrings.NEW = function() {
		var v = new JkLangKeyValueListForStrings;
		return v.CTOR_JkLangKeyValueListForStrings();
	};
	JkLangKeyValueListForStrings.prototype.CTOR_JkLangKeyValueListForStrings = function() {
		if(JkLangKeyValueList.prototype.CTOR_JkLangKeyValueList.call(this) == null) {
			return null;
		}
		return this;
	};
	JkLangKeyValueListForStrings.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangKeyValueListForStrings"] === true;
	};
	let JkLangObjectWrapper = function() {
		this.value = null;
	};
	JkLangObjectWrapper.prototype._t = { "JkLangObjectWrapper" : true };
	JkLangObjectWrapper.prototype._tobj = JkLangObjectWrapper;
	JkLangObjectWrapper.NEW = function() {
		var v = new JkLangObjectWrapper;
		return v.CTOR_JkLangObjectWrapper();
	};
	JkLangObjectWrapper.prototype.CTOR_JkLangObjectWrapper = function() {
		this.value = null;
		return this;
	};
	JkLangObjectWrapper.prototype.getValue = function() {
		return this.value;
	};
	JkLangObjectWrapper.prototype.setValue = function(v) {
		this.value = v;
		return this;
	};
	JkLangObjectWrapper.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangObjectWrapper"] === true;
	};
	let JkLangDateTime = function() {
		this.timezoneOffset = 0;
		this.weekDay = 0;
		this.dayOfMonth = 0;
		this.month = 0;
		this.year = 0;
		this.hours = 0;
		this.minutes = 0;
		this.seconds = 0;
	};
	JkLangDateTime.prototype._t = {
		"JkLangDateTime" : true,
		"JkLangStringObject" : true
	};
	JkLangDateTime.prototype._tobj = JkLangDateTime;
	JkLangDateTime.NEW = function() {
		var v = new JkLangDateTime;
		return v.CTOR_JkLangDateTime();
	};
	JkLangDateTime.prototype.CTOR_JkLangDateTime = function() {
		this.seconds = 0;
		this.minutes = 0;
		this.hours = 0;
		this.year = 0;
		this.month = 0;
		this.dayOfMonth = 0;
		this.weekDay = 0;
		this.timezoneOffset = 0;
		return this;
	};
	JkLangDateTime.forSeconds = function(seconds) {
		var v = JkLangDateTime.NEW();
		v.updateFromTimestamp(seconds);
		return v;
	};
	JkLangDateTime.forTimeValue = function(tv) {
		if(!(tv != null)) {
			return null;
		}
		var v = JkLangDateTime.NEW();
		v.updateFromTimestamp((tv.getSeconds()));
		return v;
	};
	JkLangDateTime.forString = function(value) {
		if(!(value != null)) {
			return null;
		}
		var comps = JkLangString.split(value, (" ".charCodeAt()), 2);
		if(!(comps != null)) {
			return null;
		}
		var c0 = JkLangVector.get(comps, 0);
		var c1 = JkLangVector.get(comps, 1);
		if(!JkLangString.isNotEmpty(c0)) {
			return null;
		}
		var comps2 = JkLangString.split(c0, ("-".charCodeAt()), 3);
		if(!(comps2 != null)) {
			return null;
		}
		if(!(JkLangVector.getSize(comps2) == 3)) {
			return null;
		}
		var v = JkLangDateTime.NEW();
		v.setYear((JkLangString.toInteger((JkLangVector.get(comps2, 0)))));
		v.setMonth((JkLangString.toInteger((JkLangVector.get(comps2, 1)))));
		v.setDayOfMonth((JkLangString.toInteger((JkLangVector.get(comps2, 2)))));
		if(JkLangString.isNotEmpty(c1)) {
			var tcs = JkLangString.split(c1, (":".charCodeAt()), 3);
			if(JkLangVector.getSize(tcs) == 3) {
				v.setHours((JkLangString.toInteger((JkLangVector.get(tcs, 0)))));
				v.setMinutes((JkLangString.toInteger((JkLangVector.get(tcs, 1)))));
				v.setSeconds((JkLangString.toInteger((JkLangVector.get(tcs, 2)))));
			}
		}
		return v;
	};
	JkLangDateTime.prototype.updateFromTimestamp = function(seconds) {
		var date = new Date(seconds * 1000);
		this.year = date.getFullYear();
		this.month = date.getMonth() + 1;
		this.dayOfMonth = date.getDate();
		this.weekDay = date.getDay() + 1;
		this.hours = date.getHours();
		this.minutes = date.getMinutes();
		this.seconds = date.getSeconds();
		;
	};
	JkLangDateTime.prototype.toStringDate = function(delim) {
		var sb = JkLangStringBuilder.NEW();
		sb.appendString((JkLangString.forIntegerWithPadding((this.getYear()), 4, null)));
		if(delim > 0) {
			sb.appendCharacter(delim);
		}
		sb.appendString((JkLangString.forIntegerWithPadding((this.getMonth()), 2, null)));
		if(delim > 0) {
			sb.appendCharacter(delim);
		}
		sb.appendString((JkLangString.forIntegerWithPadding((this.getDayOfMonth()), 2, null)));
		return sb.toString();
	};
	JkLangDateTime.prototype.toStringTime = function(delim) {
		var sb = JkLangStringBuilder.NEW();
		sb.appendString((JkLangString.forIntegerWithPadding((this.getHours()), 2, null)));
		if(delim > 0) {
			sb.appendCharacter(delim);
		}
		sb.appendString((JkLangString.forIntegerWithPadding((this.getMinutes()), 2, null)));
		if(delim > 0) {
			sb.appendCharacter(delim);
		}
		sb.appendString((JkLangString.forIntegerWithPadding((this.getSeconds()), 2, null)));
		return sb.toString();
	};
	JkLangDateTime.prototype.toStringDateTime = function() {
		var sb = JkLangStringBuilder.NEW();
		sb.appendString((this.toStringDate(("-".charCodeAt()))));
		sb.appendString(" ");
		sb.appendString((this.toStringTime((":".charCodeAt()))));
		return sb.toString();
	};
	JkLangDateTime.prototype.toString = function() {
		return this.toStringDateTime();
	};
	JkLangDateTime.prototype.getTimezoneOffset = function() {
		return this.timezoneOffset;
	};
	JkLangDateTime.prototype.setTimezoneOffset = function(v) {
		this.timezoneOffset = v;
		return this;
	};
	JkLangDateTime.prototype.getWeekDay = function() {
		return this.weekDay;
	};
	JkLangDateTime.prototype.setWeekDay = function(v) {
		this.weekDay = v;
		return this;
	};
	JkLangDateTime.prototype.getDayOfMonth = function() {
		return this.dayOfMonth;
	};
	JkLangDateTime.prototype.setDayOfMonth = function(v) {
		this.dayOfMonth = v;
		return this;
	};
	JkLangDateTime.prototype.getMonth = function() {
		return this.month;
	};
	JkLangDateTime.prototype.setMonth = function(v) {
		this.month = v;
		return this;
	};
	JkLangDateTime.prototype.getYear = function() {
		return this.year;
	};
	JkLangDateTime.prototype.setYear = function(v) {
		this.year = v;
		return this;
	};
	JkLangDateTime.prototype.getHours = function() {
		return this.hours;
	};
	JkLangDateTime.prototype.setHours = function(v) {
		this.hours = v;
		return this;
	};
	JkLangDateTime.prototype.getMinutes = function() {
		return this.minutes;
	};
	JkLangDateTime.prototype.setMinutes = function(v) {
		this.minutes = v;
		return this;
	};
	JkLangDateTime.prototype.getSeconds = function() {
		return this.seconds;
	};
	JkLangDateTime.prototype.setSeconds = function(v) {
		this.seconds = v;
		return this;
	};
	JkLangDateTime.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangDateTime"] === true;
	};
	let JkLangDynamicVector = function() {
		this.vector = null;
	};
	JkLangDynamicVector.prototype._t = {
		"JkLangDuplicateable" : true,
		"JkLangDynamicVector" : true,
		"JkLangObjectWithSize" : true,
		"JkLangIterateable" : true,
		"JkLangVectorObject" : true
	};
	JkLangDynamicVector.prototype._tobj = JkLangDynamicVector;
	JkLangDynamicVector.NEW = function() {
		var v = new JkLangDynamicVector;
		return v.CTOR_JkLangDynamicVector();
	};
	JkLangDynamicVector.prototype.CTOR_JkLangDynamicVector = function() {
		this.vector = null;
		this.vector = new Array;
		return this;
	};
	JkLangDynamicVector.asDynamicVector = function(value) {
		if(!(value != null)) {
			return null;
		}
		if(JkLangDynamicVector.IS_INSTANCE && JkLangDynamicVector.IS_INSTANCE(value)) {
			return value;
		}
		if(value instanceof Array) {
			return JkLangDynamicVector.forArray(value);
		}
		if(value instanceof Array) {
			return JkLangDynamicVector.forObjectVector(value);
		}
		return null;
	};
	JkLangDynamicVector.forStringVector = function(vector) {
		var v = JkLangDynamicVector.NEW();
		if(vector != null) {
			var n = 0;
			var m = vector.length;
			for(n = 0 ; n < m ; n++) {
				var item = vector[n];
				if(item != null) {
					v.appendObject(item);
				}
			}
		}
		return v;
	};
	JkLangDynamicVector.forObjectVector = function(vector) {
		var v = JkLangDynamicVector.NEW();
		if(vector != null) {
			var n = 0;
			var m = vector.length;
			for(n = 0 ; n < m ; n++) {
				var item = vector[n];
				if(item != null) {
					v.appendObject(item);
				}
			}
		}
		return v;
	};
	JkLangDynamicVector.forArray = function(array) {
		var v = JkLangDynamicVector.NEW();
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var item = array[n];
				if(item != null) {
					v.appendObject(item);
				}
			}
		}
		return v;
	};
	JkLangDynamicVector.prototype.toVector = function() {
		return this.vector;
	};
	JkLangDynamicVector.prototype.toVectorOfStrings = function() {
		var v = new Array;
		if(this.vector != null) {
			var n = 0;
			var m = this.vector.length;
			for(n = 0 ; n < m ; n++) {
				var o = this.vector[n];
				if(o != null) {
					var s = JkLangString.asString(o);
					if(s != null) {
						v.push(s);
					}
				}
			}
		}
		return v;
	};
	JkLangDynamicVector.prototype.toVectorOfDynamicMaps = function() {
		var v = new Array;
		if(this.vector != null) {
			var n = 0;
			var m = this.vector.length;
			for(n = 0 ; n < m ; n++) {
				var o = (function(o1) {
					if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o1)) {
						return o1;
					}
					return null;
				}.bind(this))(this.vector[n]);
				if(o != null) {
					v.push(o);
				}
			}
		}
		return v;
	};
	JkLangDynamicVector.prototype.duplicate = function() {
		var v = JkLangDynamicVector.NEW();
		var it = this.iterate();
		while(it != null){
			var o = it.next();
			if(o == null) {
				break;
			}
			v.appendObject(o);
		}
		return v;
	};
	JkLangDynamicVector.prototype.mergeDynamicVector = function(dynamicVector) {
		if(!(dynamicVector != null) || dynamicVector.getSize() < 1) {
			return this;
		}
		return this.mergeVector((dynamicVector.toVector()));
	};
	JkLangDynamicVector.prototype.mergeVector = function(vector) {
		if(vector != null) {
			var n = 0;
			var m = vector.length;
			for(n = 0 ; n < m ; n++) {
				var item = vector[n];
				if(item != null) {
					this.appendObject(item);
				}
			}
		}
		return this;
	};
	JkLangDynamicVector.prototype.appendObject = function(value) {
		this.vector.push(value);
		return this;
	};
	JkLangDynamicVector.prototype.appendString = function(value) {
		this.vector.push(value);
		return this;
	};
	JkLangDynamicVector.prototype.appendInteger = function(value) {
		this.vector.push((JkLangInteger.asObject(value)));
		return this;
	};
	JkLangDynamicVector.prototype.appendLong = function(value) {
		this.vector.push((JkLangLongInteger.asObject(value)));
		return this;
	};
	JkLangDynamicVector.prototype.appendBoolean = function(value) {
		this.vector.push((JkLangBoolean.asObject(value)));
		return this;
	};
	JkLangDynamicVector.prototype.appendDouble = function(value) {
		this.vector.push((JkLangDouble.asObject(value)));
		return this;
	};
	JkLangDynamicVector.prototype.setObject = function(index, value) {
		JkLangVector.set(this.vector, index, value);
		return this;
	};
	JkLangDynamicVector.prototype.setInteger = function(index, value) {
		JkLangVector.set(this.vector, index, (JkLangInteger.asObject(value)));
		return this;
	};
	JkLangDynamicVector.prototype.setLong = function(index, value) {
		JkLangVector.set(this.vector, index, (JkLangLongInteger.asObject(value)));
		return this;
	};
	JkLangDynamicVector.prototype.setBoolean = function(index, value) {
		JkLangVector.set(this.vector, index, (JkLangBoolean.asObject(value)));
		return this;
	};
	JkLangDynamicVector.prototype.setDouble = function(index, value) {
		JkLangVector.set(this.vector, index, (JkLangDouble.asObject(value)));
		return this;
	};
	JkLangDynamicVector.prototype.get = function(index) {
		return JkLangVector.getAt(this.vector, index);
	};
	JkLangDynamicVector.prototype.getString = function(index, defval) {
		var v = JkLangString.asString((this.get(index)));
		if(v == null) {
			return defval;
		}
		return v;
	};
	JkLangDynamicVector.prototype.getInteger = function(index, defval) {
		var vv = this.get(index);
		if(vv == null) {
			return defval;
		}
		return JkLangInteger.asInteger(vv);
	};
	JkLangDynamicVector.prototype.getLongInteger = function(index, defval) {
		var vv = this.get(index);
		if(vv == null) {
			return defval;
		}
		return JkLangLongInteger.asLong(vv);
	};
	JkLangDynamicVector.prototype.getBoolean = function(index, defval) {
		var vv = this.get(index);
		if(vv == null) {
			return defval;
		}
		return JkLangBoolean.asBoolean(vv, false);
	};
	JkLangDynamicVector.prototype.getDouble = function(index, defval) {
		var vv = this.get(index);
		if(vv == null) {
			return defval;
		}
		return JkLangDouble.asDouble(vv);
	};
	JkLangDynamicVector.prototype.getMap = function(index) {
		return (function(o) {
			if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))((this.get(index)));
	};
	JkLangDynamicVector.prototype.getVector = function(index) {
		return (function(o) {
			if(JkLangDynamicVector.IS_INSTANCE && JkLangDynamicVector.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))((this.get(index)));
	};
	JkLangDynamicVector.prototype.iterate = function() {
		var v = JkLangVector.iterate(this.vector);
		return v;
	};
	JkLangDynamicVector.prototype.iterateReverse = function() {
		var v = JkLangVector.iterateReverse(this.vector);
		return v;
	};
	JkLangDynamicVector.prototype.remove = function(index) {
		JkLangVector.remove(this.vector, index);
	};
	JkLangDynamicVector.prototype.removeValue = function(value) {
		JkLangVector.removeValue(this.vector, value);
	};
	JkLangDynamicVector.prototype.clear = function() {
		JkLangVector.clear(this.vector);
	};
	JkLangDynamicVector.prototype.contains = function(value) {
		return JkLangVector.contains(this.vector, value);
	};
	JkLangDynamicVector.prototype.getSize = function() {
		return JkLangVector.getSize(this.vector);
	};
	JkLangDynamicVector.prototype.setCapacity = function(capacity) {
		JkLangVector.setCapacity(this.vector, capacity);
	};
	JkLangDynamicVector.prototype.sort = function() {
		JkLangVector.sort(this.vector, (function(a1, b1) {
			return JkLangString.compare((JkLangString.asString(a1)), (JkLangString.asString(b1)));
		}.bind(this)));
	};
	JkLangDynamicVector.prototype.sortWithComparer = function(comparer) {
		if(comparer == null) {
			this.sort();
			return;
		}
		JkLangVector.sort(this.vector, comparer);
	};
	JkLangDynamicVector.prototype.sortReverse = function() {
		JkLangVector.sortReverse(this.vector, (function(a1, b1) {
			return JkLangString.compare((JkLangString.asString(a1)), (JkLangString.asString(b1)));
		}.bind(this)));
	};
	JkLangDynamicVector.prototype.sortReverseWithComparer = function(comparer) {
		if(comparer == null) {
			this.sortReverse();
			return;
		}
		JkLangVector.sortReverse(this.vector, comparer);
	};
	JkLangDynamicVector.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangDynamicVector"] === true;
	};
	let JkLangError = function() {
		this.code = null;
		this.detail = null;
	};
	JkLangError.prototype._t = {
		"JkLangStringObjectWithDebug" : true,
		"JkLangError" : true,
		"JkLangStringObject" : true
	};
	JkLangError.prototype._tobj = JkLangError;
	JkLangError.NEW = function() {
		var v = new JkLangError;
		return v.CTOR_JkLangError();
	};
	JkLangError.prototype.CTOR_JkLangError = function() {
		this.detail = null;
		this.code = null;
		return this;
	};
	JkLangError._throw = function(code, detail) {
		throw JkLangExceptionWithError.forError((JkLangError.forCode(code, detail)));
	};
	JkLangError.forCode = function(code, detail) {
		return JkLangError.NEW().setCode(code).setDetail(detail);
	};
	JkLangError.asString = function(error) {
		if(!(error != null)) {
			return "error";
		}
		return error.toString();
	};
	JkLangError.set = function(error, code, detail) {
		if(!(error != null)) {
			return null;
		}
		error.setCode(code);
		error.setDetail(detail);
		return error;
	};
	JkLangError.setErrorCode = function(error, code) {
		return JkLangError.set(error, code, null);
	};
	JkLangError.setErrorDetail = function(error, detail) {
		return JkLangError.set(error, null, detail);
	};
	JkLangError.isError = function(o) {
		if(!(o != null)) {
			return false;
		}
		if(!(JkLangError.IS_INSTANCE && JkLangError.IS_INSTANCE(o))) {
			return false;
		}
		var e = o;
		if(JkLangString.isEmpty((e.getCode()))) {
			return false;
		}
		return true;
	};
	JkLangError.prototype.clear = function() {
		this.code = null;
		this.detail = null;
		return this;
	};
	JkLangError.prototype.toStringWithDefault = function(debug, defaultError) {
		var details = null;
		if(JkLangStringObjectWithDebug.IS_INSTANCE && JkLangStringObjectWithDebug.IS_INSTANCE(this.detail)) {
			details = this.detail.toStringWithDebug(debug);
		}
		else {
			details = JkLangString.asString(this.detail);
		}
		if(JkLangString.isEmpty(this.code) == false) {
			if(JkLangString.isEmpty(details) == false) {
				return JkLangString.safeString(this.code) + ":" + JkLangString.safeString(details);
			}
			return this.code;
		}
		if(JkLangString.isEmpty(details) == false) {
			return "errorWithDetail:" + JkLangString.safeString(details);
		}
		return defaultError;
	};
	JkLangError.prototype.toStringWithDebug = function(debug) {
		return this.toStringWithDefault(debug, "unknownError");
	};
	JkLangError.prototype.toString = function() {
		return this.toStringWithDebug(false);
	};
	JkLangError.prototype.getCode = function() {
		return this.code;
	};
	JkLangError.prototype.setCode = function(v) {
		this.code = v;
		return this;
	};
	JkLangError.prototype.getDetail = function() {
		return this.detail;
	};
	JkLangError.prototype.setDetail = function(v) {
		this.detail = v;
		return this;
	};
	JkLangError.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangError"] === true;
	};
	let JkLangRangeRangeIterator = function() {
		this.lowerBound = 0;
		this.upperBound = 0;
		this.increment = 0;
		this.current = null;
	};
	JkLangRangeRangeIterator.prototype._t = {
		"JkLangIterator" : true,
		"JkLangRangeRangeIterator" : true
	};
	JkLangRangeRangeIterator.prototype._tobj = JkLangRangeRangeIterator;
	JkLangRangeRangeIterator.NEW_IntegerInteger = function(lowerBound, upperBound) {
		var v = new JkLangRangeRangeIterator;
		return v.CTOR_JkLangRangeRangeIterator_IntegerInteger(lowerBound, upperBound);
	};
	JkLangRangeRangeIterator.prototype.CTOR_JkLangRangeRangeIterator_IntegerInteger = function(lowerBound, upperBound) {
		this.current = null;
		this.increment = 0;
		this.upperBound = 0;
		this.lowerBound = 0;
		this.lowerBound = lowerBound;
		this.upperBound = upperBound;
		if(lowerBound <= upperBound) {
			this.increment = 1;
		}
		else {
			this.increment = -1;
		}
		return this;
	};
	JkLangRangeRangeIterator.prototype.next = function() {
		if(!(this.current != null)) {
			this.current = JkLangInteger.forValue(this.lowerBound);
		}
		else {
			this.current.add(this.increment);
		}
		return this.current.getValue();
	};
	JkLangRangeRangeIterator.prototype.hasNext = function() {
		if(!(this.current != null)) {
			return true;
		}
		if(this.increment > 0) {
			return this.current.getValue() < this.upperBound;
		}
		return this.current.getValue() > this.upperBound;
	};
	JkLangRangeRangeIterator.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangRangeRangeIterator"] === true;
	};
	let JkLangRange = function() {
		this.lowerBound = 0.0;
		this.upperBound = 0.0;
		this.exclusionType = 0;
	};
	JkLangRange.prototype._t = {
		"JkLangIterateable" : true,
		"JkLangRange" : true
	};
	JkLangRange.prototype._tobj = JkLangRange;
	JkLangRange.NEW = function() {
		var v = new JkLangRange;
		return v.CTOR_JkLangRange();
	};
	JkLangRange.prototype.CTOR_JkLangRange = function() {
		this.exclusionType = 0;
		this.upperBound = 0.0;
		this.lowerBound = 0.0;
		;
		return this;
	};
	JkLangRange.forIntegerValues = function(lowerBound, upperBound, exclusionType) {
		var v = JkLangRange.NEW();
		v.setLowerBound(lowerBound);
		v.setUpperBound(upperBound);
		v.setExclusionType(exclusionType);
		return v;
	};
	JkLangRange.forDoubleValues = function(lowerBound, upperBound, exclusionType) {
		var v = JkLangRange.NEW();
		v.setLowerBound(lowerBound);
		v.setUpperBound(upperBound);
		v.setExclusionType(exclusionType);
		return v;
	};
	JkLangRange.forValues = function(lowerBound, upperBound, exclusionType) {
		if(typeof lowerBound === "number" && typeof upperBound === "number") {
			return JkLangRange.forDoubleValues(lowerBound, upperBound, exclusionType);
		}
		if(typeof lowerBound === "number" && typeof upperBound === "number") {
			return JkLangRange.forIntegerValues((~(~lowerBound)), (~(~upperBound)), exclusionType);
		}
		return null;
	};
	JkLangRange.prototype.setLowerBound = function(lowerBound) {
		this.lowerBound = lowerBound;
	};
	JkLangRange.prototype.setUpperBound = function(upperBound) {
		this.upperBound = upperBound;
	};
	JkLangRange.prototype.setExclusionType = function(exclusionType) {
		this.exclusionType = exclusionType;
	};
	JkLangRange.prototype.getLowerBoundAsInteger = function() {
		return ~(~this.lowerBound);
	};
	JkLangRange.prototype.getLowerBoundAsDouble = function() {
		return this.lowerBound;
	};
	JkLangRange.prototype.getUpperBoundAsInteger = function() {
		return ~(~this.upperBound);
	};
	JkLangRange.prototype.getUpperBoundAsDouble = function() {
		return this.upperBound;
	};
	JkLangRange.prototype.containsIntegerValue = function(value) {
		return this.containsDoubleValue(value);
	};
	JkLangRange.prototype.containsDoubleValue = function(value) {
		if(this.exclusionType == JkLangRange.TYPE_NONE) {
			return value >= this.lowerBound && value <= this.upperBound;
		}
		else if(this.exclusionType == JkLangRange.TYPE_EXCLUDE_UPPER_BOUND) {
			return value >= this.lowerBound && value < this.upperBound;
		}
		else if(this.exclusionType == JkLangRange.TYPE_EXCLUDE_LOWER_BOUND) {
			return value > this.lowerBound && value <= this.upperBound;
		}
		else if(this.exclusionType == JkLangRange.TYPE_EXCLUDE_BOTH_BOUNDS) {
			return value > this.lowerBound && value < this.upperBound;
		}
		return false;
	};
	JkLangRange.prototype.iterate = function() {
		var lv = ~(~this.lowerBound);
		var uv = ~(~this.upperBound);
		if(this.exclusionType == JkLangRange.TYPE_NONE) {
			;
		}
		if(this.exclusionType == JkLangRange.TYPE_EXCLUDE_UPPER_BOUND) {
			uv = uv - 1;
		}
		else if(this.exclusionType == JkLangRange.TYPE_EXCLUDE_LOWER_BOUND) {
			lv = lv + 1;
		}
		else if(this.exclusionType == JkLangRange.TYPE_EXCLUDE_BOTH_BOUNDS) {
			uv = uv - 1;
			lv = lv + 1;
		}
		return JkLangRangeRangeIterator.NEW_IntegerInteger(lv, uv);
	};
	JkLangRange.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangRange"] === true;
	};
	JkLangRange.TYPE_NONE = 0;
	JkLangRange.TYPE_EXCLUDE_UPPER_BOUND = 1;
	JkLangRange.TYPE_EXCLUDE_LOWER_BOUND = 2;
	JkLangRange.TYPE_EXCLUDE_BOTH_BOUNDS = 3;
	let JkLangStackTrace = function() {
	};
	JkLangStackTrace.prototype._t = { "JkLangStackTrace" : true };
	JkLangStackTrace.prototype._tobj = JkLangStackTrace;
	JkLangStackTrace.NEW = function() {
		var v = new JkLangStackTrace;
		return v.CTOR_JkLangStackTrace();
	};
	JkLangStackTrace.prototype.CTOR_JkLangStackTrace = function() {
		return this;
	};
	JkLangStackTrace.generate = function() {
		console.log("[jk.lang.StackTrace.generate] (StackTrace.sling:60:3): Not implemented");
		return null;
	};
	JkLangStackTrace.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangStackTrace"] === true;
	};
	let JkLangVariableReference = function() {
		this.setter = null;
		this.getter = null;
	};
	JkLangVariableReference.prototype._t = { "JkLangVariableReference" : true };
	JkLangVariableReference.prototype._tobj = JkLangVariableReference;
	JkLangVariableReference.NEW_FunctionFunction = function(setter, getter) {
		var v = new JkLangVariableReference;
		return v.CTOR_JkLangVariableReference_FunctionFunction(setter, getter);
	};
	JkLangVariableReference.prototype.CTOR_JkLangVariableReference_FunctionFunction = function(setter, getter) {
		this.getter = null;
		this.setter = null;
		this.setter = setter;
		this.getter = getter;
		return this;
	};
	JkLangVariableReference.prototype.set = function(value) {
		this.setter(value);
		return this;
	};
	JkLangVariableReference.prototype.get = function() {
		return this.getter();
	};
	JkLangVariableReference.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangVariableReference"] === true;
	};
	let JkLangQueue = function() {
		this.data = null;
	};
	JkLangQueue.prototype._t = { "JkLangQueue" : true };
	JkLangQueue.prototype._tobj = JkLangQueue;
	JkLangQueue.NEW = function() {
		var v = new JkLangQueue;
		return v.CTOR_JkLangQueue();
	};
	JkLangQueue.prototype.CTOR_JkLangQueue = function() {
		this.data = null;
		this.data = new Array;
		return this;
	};
	JkLangQueue.prototype.clear = function() {
		this.data = new Array;
	};
	JkLangQueue.prototype.push = function(o) {
		JkLangVector.append(this.data, o);
	};
	JkLangQueue.prototype.pop = function() {
		var sz = JkLangVector.getSize(this.data);
		if(sz < 1) {
			return null;
		}
		var v = JkLangVector.getAt(this.data, 0);
		JkLangVector.remove(this.data, 0);
		return v;
	};
	JkLangQueue.prototype.peek = function() {
		var sz = JkLangVector.getSize(this.data);
		if(sz < 1) {
			return null;
		}
		return JkLangVector.getAt(this.data, 0);
	};
	JkLangQueue.prototype.isEmpty = function() {
		return this.getSize() < 1;
	};
	JkLangQueue.prototype.getSize = function() {
		return JkLangVector.getSize(this.data);
	};
	JkLangQueue.prototype.getData = function() {
		return this.data;
	};
	JkLangQueue.prototype.setData = function(v) {
		this.data = v;
		return this;
	};
	JkLangQueue.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangQueue"] === true;
	};
	let JkLangEventLoop = {};
	JkLangEventLoop.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangEventLoop"] === true;
	};
	let JkLangInteger = function() {
		this.value = 0;
	};
	JkLangInteger.prototype._t = {
		"JkLangIntegerObject" : true,
		"JkLangInteger" : true
	};
	JkLangInteger.prototype._tobj = JkLangInteger;
	JkLangInteger.NEW = function() {
		var v = new JkLangInteger;
		return v.CTOR_JkLangInteger();
	};
	JkLangInteger.prototype.CTOR_JkLangInteger = function() {
		this.value = 0;
		return this;
	};
	JkLangInteger.forValue = function(value) {
		return JkLangInteger.asObject(value);
	};
	JkLangInteger.asObject = function(integer) {
		var v = JkLangInteger.NEW();
		v.setValue(integer);
		return v;
	};
	JkLangInteger.asInteger = function(obj) {
		if(!(obj != null)) {
			return 0;
		}
		if(typeof obj === "number") {
			return ~(~obj);
		}
		if(JkLangIntegerObject.IS_INSTANCE && JkLangIntegerObject.IS_INSTANCE(obj)) {
			var oi = obj;
			return oi.toInteger();
		}
		if(typeof obj === "number") {
			var v = ~(~obj);
			return ~(~v);
		}
		if(JkLangLongIntegerObject.IS_INSTANCE && JkLangLongIntegerObject.IS_INSTANCE(obj)) {
			var oi1 = obj;
			return ~(~oi1.toLong());
		}
		if(typeof obj === "string") {
			return JkLangString.toInteger(obj);
		}
		if(JkLangStringObject.IS_INSTANCE && JkLangStringObject.IS_INSTANCE(obj)) {
			return JkLangString.toInteger((obj.toString()));
		}
		if(typeof obj === "number") {
			var v1 = obj;
			return ~(~v1);
		}
		if(JkLangDoubleObject.IS_INSTANCE && JkLangDoubleObject.IS_INSTANCE(obj)) {
			var od = obj;
			return ~(~od.toDouble());
		}
		if(typeof obj === "boolean") {
			if(obj == true) {
				return 1;
			}
			return 0;
		}
		if(JkLangBooleanObject.IS_INSTANCE && JkLangBooleanObject.IS_INSTANCE(obj)) {
			if(obj.toBoolean()) {
				return 1;
			}
			return 0;
		}
		if(typeof obj === "string") {
			var v2 = obj;
			return ~(~v2);
		}
		if(JkLangCharacterObject.IS_INSTANCE && JkLangCharacterObject.IS_INSTANCE(obj)) {
			var oc = obj;
			return ~(~oc.toCharacter());
		}
		return 0;
	};
	JkLangInteger.prototype.add = function(amount) {
		this.value += amount;
	};
	JkLangInteger.prototype.toInteger = function() {
		return this.value;
	};
	JkLangInteger.prototype.getValue = function() {
		return this.value;
	};
	JkLangInteger.prototype.setValue = function(v) {
		this.value = v;
		return this;
	};
	JkLangInteger.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangInteger"] === true;
	};
	let JkLangMapMyMapObject = function() {
		this.map = null;
	};
	JkLangMapMyMapObject.prototype._t = {
		"JkLangMapObject" : true,
		"JkLangMapMyMapObject" : true
	};
	JkLangMapMyMapObject.prototype._tobj = JkLangMapMyMapObject;
	JkLangMapMyMapObject.NEW = function() {
		var v = new JkLangMapMyMapObject;
		return v.CTOR_JkLangMapMyMapObject();
	};
	JkLangMapMyMapObject.prototype.CTOR_JkLangMapMyMapObject = function() {
		this.map = null;
		return this;
	};
	JkLangMapMyMapObject.prototype.toMap = function() {
		return this.map;
	};
	JkLangMapMyMapObject.prototype.getMap = function() {
		return this.map;
	};
	JkLangMapMyMapObject.prototype.setMap = function(v) {
		this.map = v;
		return this;
	};
	JkLangMapMyMapObject.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangMapMyMapObject"] === true;
	};
	let JkLangCharacterIteratorForBuffer = function() {
		JkLangCharacterDecoder.call(this);
		this.buffer = null;
		this.bufferSize = 0;
		this.currentPosition = -1;
	};
	JkLangCharacterIteratorForBuffer.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkLangCharacterDecoder.prototype);
	JkLangCharacterIteratorForBuffer.prototype.constructor = JkLangCharacterIteratorForBuffer;
	JkLangCharacterIteratorForBuffer.prototype._t = {
		"JkLangCharacterIterator" : true,
		"JkLangCharacterDecoder" : true,
		"JkLangDuplicateable" : true,
		"JkLangCharacterIteratorForBuffer" : true
	};
	JkLangCharacterIteratorForBuffer.prototype._tobj = JkLangCharacterIteratorForBuffer;
	JkLangCharacterIteratorForBuffer.NEW = function() {
		var v = new JkLangCharacterIteratorForBuffer;
		return v.CTOR_JkLangCharacterIteratorForBuffer();
	};
	JkLangCharacterIteratorForBuffer.prototype.CTOR_JkLangCharacterIteratorForBuffer = function() {
		this.currentPosition = -1;
		this.bufferSize = 0;
		this.buffer = null;
		if(JkLangCharacterDecoder.prototype.CTOR_JkLangCharacterDecoder.call(this) == null) {
			return null;
		}
		return this;
	};
	JkLangCharacterIteratorForBuffer.forBuffer = function(buffer) {
		var v = JkLangCharacterIteratorForBuffer.NEW();
		v.setBuffer(buffer);
		return v;
	};
	JkLangCharacterIteratorForBuffer.prototype.setBuffer = function(buffer) {
		this.resetDecoder();
		this.buffer = buffer;
		this.bufferSize = JkLangBuffer.getSize(buffer);
		this.currentPosition = -1;
	};
	JkLangCharacterIteratorForBuffer.prototype.moveToPreviousByte = function() {
		if(this.currentPosition < 1) {
			return false;
		}
		this.currentPosition--;
		return true;
	};
	JkLangCharacterIteratorForBuffer.prototype.moveToNextByte = function() {
		var n = this.currentPosition + 1;
		if(n >= this.bufferSize) {
			return false;
		}
		this.currentPosition = n;
		return true;
	};
	JkLangCharacterIteratorForBuffer.prototype.getCurrentByte = function() {
		var v = ~(~(this.buffer[this.currentPosition] & 0xff));
		return v;
	};
	JkLangCharacterIteratorForBuffer.prototype.getCurrentPosition = function() {
		return this.currentPosition;
	};
	JkLangCharacterIteratorForBuffer.prototype.setCurrentPosition = function(position) {
		if(position < 0) {
			this.current = 0;
			this.currentPosition = -1;
		}
		else {
			this.currentPosition = position + 1;
			this.doMoveToPreviousChar();
		}
	};
	JkLangCharacterIteratorForBuffer.prototype.duplicate = function() {
		var v = JkLangCharacterIteratorForBuffer.NEW();
		JkLangCharacterDecoder.prototype.copyTo.call(this, v);
		v.buffer = this.buffer;
		v.bufferSize = this.bufferSize;
		v.currentPosition = this.currentPosition;
		return v;
	};
	JkLangCharacterIteratorForBuffer.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangCharacterIteratorForBuffer"] === true;
	};
	let JkLangRunnableFunction = function() {
		this._function = null;
	};
	JkLangRunnableFunction.prototype._t = {
		"JkLangRunnable" : true,
		"JkLangRunnableFunction" : true
	};
	JkLangRunnableFunction.prototype._tobj = JkLangRunnableFunction;
	JkLangRunnableFunction.NEW = function() {
		var v = new JkLangRunnableFunction;
		return v.CTOR_JkLangRunnableFunction();
	};
	JkLangRunnableFunction.prototype.CTOR_JkLangRunnableFunction = function() {
		this._function = null;
		return this;
	};
	JkLangRunnableFunction.forFunction = function(_function) {
		var v = JkLangRunnableFunction.NEW();
		v.setFunction(_function);
		return v;
	};
	JkLangRunnableFunction.prototype.run = function() {
		if(this._function != null) {
			this._function();
		}
	};
	JkLangRunnableFunction.prototype.getFunction = function() {
		return this._function;
	};
	JkLangRunnableFunction.prototype.setFunction = function(v) {
		this._function = v;
		return this;
	};
	JkLangRunnableFunction.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangRunnableFunction"] === true;
	};
	let JkLangDynamicObjectVectorIteratorWrapper = function() {
		this.vector = null;
		this.size = 0;
		this.position = 0;
	};
	JkLangDynamicObjectVectorIteratorWrapper.prototype._t = {
		"JkLangDynamicObjectVectorIteratorWrapper" : true,
		"JkLangIterator" : true
	};
	JkLangDynamicObjectVectorIteratorWrapper.prototype._tobj = JkLangDynamicObjectVectorIteratorWrapper;
	JkLangDynamicObjectVectorIteratorWrapper.NEW = function() {
		var v = new JkLangDynamicObjectVectorIteratorWrapper;
		return v.CTOR_JkLangDynamicObjectVectorIteratorWrapper();
	};
	JkLangDynamicObjectVectorIteratorWrapper.prototype.CTOR_JkLangDynamicObjectVectorIteratorWrapper = function() {
		this.position = 0;
		this.size = 0;
		this.vector = null;
		return this;
	};
	JkLangDynamicObjectVectorIteratorWrapper.prototype.next = function() {
		if(!(this.vector != null)) {
			return null;
		}
		if(this.position >= this.size) {
			return null;
		}
		var v = this.vector[this.position];
		this.position++;
		return v;
	};
	JkLangDynamicObjectVectorIteratorWrapper.prototype.hasNext = function() {
		if(!(this.vector != null)) {
			return false;
		}
		if(!(this.position < this.size - 1)) {
			return false;
		}
		return true;
	};
	JkLangDynamicObjectVectorIteratorWrapper.prototype.getVector = function() {
		return this.vector;
	};
	JkLangDynamicObjectVectorIteratorWrapper.prototype.setVector = function(v) {
		this.vector = v;
		return this;
	};
	JkLangDynamicObjectVectorIteratorWrapper.prototype.getSize = function() {
		return this.size;
	};
	JkLangDynamicObjectVectorIteratorWrapper.prototype.setSize = function(v) {
		this.size = v;
		return this;
	};
	JkLangDynamicObjectVectorIteratorWrapper.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangDynamicObjectVectorIteratorWrapper"] === true;
	};
	let JkLangDynamicObjectArrayIteratorWrapper = function() {
		this.array = null;
		this.size = 0;
		this.position = 0;
	};
	JkLangDynamicObjectArrayIteratorWrapper.prototype._t = {
		"JkLangDynamicObjectArrayIteratorWrapper" : true,
		"JkLangIterator" : true
	};
	JkLangDynamicObjectArrayIteratorWrapper.prototype._tobj = JkLangDynamicObjectArrayIteratorWrapper;
	JkLangDynamicObjectArrayIteratorWrapper.NEW = function() {
		var v = new JkLangDynamicObjectArrayIteratorWrapper;
		return v.CTOR_JkLangDynamicObjectArrayIteratorWrapper();
	};
	JkLangDynamicObjectArrayIteratorWrapper.prototype.CTOR_JkLangDynamicObjectArrayIteratorWrapper = function() {
		this.position = 0;
		this.size = 0;
		this.array = null;
		return this;
	};
	JkLangDynamicObjectArrayIteratorWrapper.prototype.next = function() {
		if(!(this.array != null)) {
			return null;
		}
		if(this.position >= this.size) {
			return null;
		}
		var v = this.array[this.position];
		this.position++;
		return v;
	};
	JkLangDynamicObjectArrayIteratorWrapper.prototype.hasNext = function() {
		if(!(this.array != null)) {
			return false;
		}
		if(!(this.position < this.size - 1)) {
			return false;
		}
		return true;
	};
	JkLangDynamicObjectArrayIteratorWrapper.prototype.getArray = function() {
		return this.array;
	};
	JkLangDynamicObjectArrayIteratorWrapper.prototype.setArray = function(v) {
		this.array = v;
		return this;
	};
	JkLangDynamicObjectArrayIteratorWrapper.prototype.getSize = function() {
		return this.size;
	};
	JkLangDynamicObjectArrayIteratorWrapper.prototype.setSize = function(v) {
		this.size = v;
		return this;
	};
	JkLangDynamicObjectArrayIteratorWrapper.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangDynamicObjectArrayIteratorWrapper"] === true;
	};
	let JkLangDynamicObjectBufferIteratorWrapper = function() {
		this.buffer = null;
		this.size = 0;
		this.position = 0;
	};
	JkLangDynamicObjectBufferIteratorWrapper.prototype._t = {
		"JkLangDynamicObjectBufferIteratorWrapper" : true,
		"JkLangIterator" : true
	};
	JkLangDynamicObjectBufferIteratorWrapper.prototype._tobj = JkLangDynamicObjectBufferIteratorWrapper;
	JkLangDynamicObjectBufferIteratorWrapper.NEW = function() {
		var v = new JkLangDynamicObjectBufferIteratorWrapper;
		return v.CTOR_JkLangDynamicObjectBufferIteratorWrapper();
	};
	JkLangDynamicObjectBufferIteratorWrapper.prototype.CTOR_JkLangDynamicObjectBufferIteratorWrapper = function() {
		this.position = 0;
		this.size = 0;
		this.buffer = null;
		return this;
	};
	JkLangDynamicObjectBufferIteratorWrapper.prototype.next = function() {
		if(!(this.buffer != null)) {
			return null;
		}
		if(this.position >= this.size) {
			return null;
		}
		var v = this.buffer[this.position];
		this.position++;
		return v;
	};
	JkLangDynamicObjectBufferIteratorWrapper.prototype.hasNext = function() {
		if(!(this.buffer != null)) {
			return false;
		}
		if(!(this.position < this.size - 1)) {
			return false;
		}
		return true;
	};
	JkLangDynamicObjectBufferIteratorWrapper.prototype.getBuffer = function() {
		return this.buffer;
	};
	JkLangDynamicObjectBufferIteratorWrapper.prototype.setBuffer = function(v) {
		this.buffer = v;
		return this;
	};
	JkLangDynamicObjectBufferIteratorWrapper.prototype.getSize = function() {
		return this.size;
	};
	JkLangDynamicObjectBufferIteratorWrapper.prototype.setSize = function(v) {
		this.size = v;
		return this;
	};
	JkLangDynamicObjectBufferIteratorWrapper.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangDynamicObjectBufferIteratorWrapper"] === true;
	};
	let JkLangDynamicObjectStringIteratorWrapper = function() {
		this.iterator = null;
	};
	JkLangDynamicObjectStringIteratorWrapper.prototype._t = {
		"JkLangIterator" : true,
		"JkLangDynamicObjectStringIteratorWrapper" : true
	};
	JkLangDynamicObjectStringIteratorWrapper.prototype._tobj = JkLangDynamicObjectStringIteratorWrapper;
	JkLangDynamicObjectStringIteratorWrapper.NEW = function() {
		var v = new JkLangDynamicObjectStringIteratorWrapper;
		return v.CTOR_JkLangDynamicObjectStringIteratorWrapper();
	};
	JkLangDynamicObjectStringIteratorWrapper.prototype.CTOR_JkLangDynamicObjectStringIteratorWrapper = function() {
		this.iterator = null;
		return this;
	};
	JkLangDynamicObjectStringIteratorWrapper.prototype.next = function() {
		if(!(this.iterator != null)) {
			return null;
		}
		var c = this.iterator.getNextChar();
		if(JkLangCharacter.isEOF(c)) {
			this.iterator = null;
			return null;
		}
		return c;
	};
	JkLangDynamicObjectStringIteratorWrapper.prototype.hasNext = function() {
		if(!(this.iterator != null)) {
			return false;
		}
		return !this.iterator.hasEnded();
	};
	JkLangDynamicObjectStringIteratorWrapper.prototype.getIterator = function() {
		return this.iterator;
	};
	JkLangDynamicObjectStringIteratorWrapper.prototype.setIterator = function(v) {
		this.iterator = v;
		return this;
	};
	JkLangDynamicObjectStringIteratorWrapper.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangDynamicObjectStringIteratorWrapper"] === true;
	};
	let JkLangDynamicObject = function() {
	};
	JkLangDynamicObject.prototype._t = { "JkLangDynamicObject" : true };
	JkLangDynamicObject.prototype._tobj = JkLangDynamicObject;
	JkLangDynamicObject.NEW = function() {
		var v = new JkLangDynamicObject;
		return v.CTOR_JkLangDynamicObject();
	};
	JkLangDynamicObject.prototype.CTOR_JkLangDynamicObject = function() {
		return this;
	};
	JkLangDynamicObject.iterate = function(value) {
		if(typeof value === "string") {
			var v = JkLangDynamicObjectStringIteratorWrapper.NEW();
			v.setIterator((JkLangString.iterate(value)));
			return v;
		}
		if(value instanceof ArrayBuffer) {
			var v1 = JkLangDynamicObjectBufferIteratorWrapper.NEW();
			v1.setBuffer(value);
			v1.setSize(value.byteLength);
			return v1;
		}
		if(value instanceof Array) {
			var v2 = JkLangDynamicObjectArrayIteratorWrapper.NEW();
			v2.setArray(value);
			v2.setSize(value.length);
			return v2;
		}
		if(value instanceof Array) {
			var v3 = JkLangDynamicObjectVectorIteratorWrapper.NEW();
			v3.setVector(value);
			v3.setSize(value.length);
			return v3;
		}
		if(value instanceof Map) {
			return JkLangDynamicObject.iterate((JkLangMap.getValues(value)));
		}
		return null;
	};
	JkLangDynamicObject.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangDynamicObject"] === true;
	};
	let JkLangStack = function() {
		this.data = null;
	};
	JkLangStack.prototype._t = { "JkLangStack" : true };
	JkLangStack.prototype._tobj = JkLangStack;
	JkLangStack.NEW = function() {
		var v = new JkLangStack;
		return v.CTOR_JkLangStack();
	};
	JkLangStack.prototype.CTOR_JkLangStack = function() {
		this.data = null;
		this.data = new Array;
		return this;
	};
	JkLangStack.prototype.push = function(o) {
		JkLangVector.append(this.data, o);
	};
	JkLangStack.prototype.pop = function() {
		var sz = JkLangVector.getSize(this.data);
		if(sz < 1) {
			return null;
		}
		var v = JkLangVector.getAt(this.data, (sz - 1));
		JkLangVector.remove(this.data, (sz - 1));
		return v;
	};
	JkLangStack.prototype.peek = function() {
		var sz = JkLangVector.getSize(this.data);
		if(sz < 1) {
			return null;
		}
		return JkLangVector.getAt(this.data, (sz - 1));
	};
	JkLangStack.prototype.isEmpty = function() {
		return this.getSize() < 1;
	};
	JkLangStack.prototype.getSize = function() {
		return JkLangVector.getSize(this.data);
	};
	JkLangStack.prototype.dupData = function() {
		var v = new Array;
		if(this.data != null) {
			var n = 0;
			var m = this.data.length;
			for(n = 0 ; n < m ; n++) {
				var o = this.data[n];
				if(o != null) {
					v.push(o);
				}
			}
		}
		return v;
	};
	JkLangStack.prototype.dup = function() {
		var v = JkLangStack.NEW();
		v.setData((this.dupData()));
		return v;
	};
	JkLangStack.prototype.getData = function() {
		return this.data;
	};
	JkLangStack.prototype.setData = function(v) {
		this.data = v;
		return this;
	};
	JkLangStack.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangStack"] === true;
	};
	let JkLangDynamicIterator = {};
	JkLangDynamicIterator.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangDynamicIterator"] === true;
	};
	let JkLangExceptionWithString = function() {
		JkLangException.call(this);
		this.exceptionMessage = null;
		this.stackTraceString = null;
	};
	JkLangExceptionWithString.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkLangException.prototype);
	JkLangExceptionWithString.prototype.constructor = JkLangExceptionWithString;
	JkLangExceptionWithString.prototype._t = {
		"JkLangException" : true,
		"JkLangExceptionWithString" : true,
		"JkLangStringObject" : true
	};
	JkLangExceptionWithString.prototype._tobj = JkLangExceptionWithString;
	JkLangExceptionWithString.NEW = function() {
		var v = new JkLangExceptionWithString;
		return v.CTOR_JkLangExceptionWithString();
	};
	JkLangExceptionWithString.prototype.CTOR_JkLangExceptionWithString = function() {
		this.stackTraceString = null;
		this.exceptionMessage = null;
		if(JkLangException.prototype.CTOR_JkLangException.call(this) == null) {
			return null;
		}
		return this;
	};
	JkLangExceptionWithString.forString = function(value, allowStackTrace) {
		var v = JkLangExceptionWithString.NEW();
		v.setExceptionMessage(value);
		if(allowStackTrace) {
			v.updateStackTrace();
		}
		return v;
	};
	JkLangExceptionWithString.prototype.updateStackTrace = function() {
		this.setStackTraceString((JkLangStackTrace.generate()));
	};
	JkLangExceptionWithString.prototype.toString = function() {
		if(!(this.stackTraceString != null)) {
			return this.exceptionMessage;
		}
		var v = JkLangStringBuilder.NEW();
		v.appendString(this.exceptionMessage);
		var ss = this.stackTraceString;
		if(JkLangString.getLength(ss) > 0) {
			if(v.count() > 0) {
				v.appendCharacter(("\n".charCodeAt()));
			}
			v.appendString(ss);
		}
		return v.toString();
	};
	JkLangExceptionWithString.prototype.getExceptionMessage = function() {
		return this.exceptionMessage;
	};
	JkLangExceptionWithString.prototype.setExceptionMessage = function(v) {
		this.exceptionMessage = v;
		return this;
	};
	JkLangExceptionWithString.prototype.getStackTraceString = function() {
		return this.stackTraceString;
	};
	JkLangExceptionWithString.prototype.setStackTraceString = function(v) {
		this.stackTraceString = v;
		return this;
	};
	JkLangExceptionWithString.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangExceptionWithString"] === true;
	};
	let JkLangBufferMyBufferObject = function() {
		this.buffer = null;
	};
	JkLangBufferMyBufferObject.prototype._t = {
		"JkLangBufferObject" : true,
		"JkLangBufferMyBufferObject" : true
	};
	JkLangBufferMyBufferObject.prototype._tobj = JkLangBufferMyBufferObject;
	JkLangBufferMyBufferObject.NEW = function() {
		var v = new JkLangBufferMyBufferObject;
		return v.CTOR_JkLangBufferMyBufferObject();
	};
	JkLangBufferMyBufferObject.prototype.CTOR_JkLangBufferMyBufferObject = function() {
		this.buffer = null;
		return this;
	};
	JkLangBufferMyBufferObject.prototype.toBuffer = function() {
		return this.buffer;
	};
	JkLangBufferMyBufferObject.prototype.getBuffer = function() {
		return this.buffer;
	};
	JkLangBufferMyBufferObject.prototype.setBuffer = function(v) {
		this.buffer = v;
		return this;
	};
	JkLangBufferMyBufferObject.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangBufferMyBufferObject"] === true;
	};
	let JkLangBuffer = function() {
	};
	JkLangBuffer.prototype._t = { "JkLangBuffer" : true };
	JkLangBuffer.prototype._tobj = JkLangBuffer;
	JkLangBuffer.NEW = function() {
		var v = new JkLangBuffer;
		return v.CTOR_JkLangBuffer();
	};
	JkLangBuffer.prototype.CTOR_JkLangBuffer = function() {
		return this;
	};
	JkLangBuffer.asObject = function(buffer) {
		var v = JkLangBufferMyBufferObject.NEW();
		v.setBuffer(buffer);
		return v;
	};
	JkLangBuffer.asBuffer = function(obj) {
		if(!(obj != null)) {
			return null;
		}
		if(obj instanceof ArrayBuffer) {
			return obj;
		}
		if(JkLangBufferObject.IS_INSTANCE && JkLangBufferObject.IS_INSTANCE(obj)) {
			var bo = obj;
			return bo.toBuffer();
		}
		if(typeof obj === "number") {
			return JkLangBuffer.forInt32BE((~(~obj)));
		}
		if(typeof obj === "number") {
			return JkLangBuffer.forInt64BE((~(~obj)));
		}
		if(typeof obj === "number") {
			return JkLangBuffer.forDouble64BE(obj);
		}
		return null;
	};
	JkLangBuffer.forInt8Array = function(buf) {
		if(!(buf != null)) {
			return null;
		}
		var sz = buf.length;
		var v = new ArrayBuffer(sz);
		for(var n = 0 ; n < sz ; n++) {
			v[n] = ~(~buf[n]);
		}
		return v;
	};
	JkLangBuffer.toInt8Array = function(buf) {
		if(!(buf != null)) {
			return null;
		}
		var sz = buf.byteLength;
		var v = [];
		for(var n = 0 ; n < sz ; n++) {
			v[n] = ~(~buf[n]);
		}
		return v;
	};
	JkLangBuffer.getSubBuffer = function(buffer, offset, size, alwaysNewBuffer) {
		if(alwaysNewBuffer == false && offset == 0 && size < 0) {
			return buffer;
		}
		var bsz = JkLangBuffer.getSize(buffer);
		var sz = size;
		if(sz < 0) {
			sz = bsz - offset;
		}
		if(alwaysNewBuffer == false && offset == 0 && sz == bsz) {
			return buffer;
		}
		if(sz < 1) {
			return null;
		}
		var v = new ArrayBuffer(sz);
		JkLangBuffer.copyFrom(v, buffer, offset, 0, sz);
		return v;
	};
	JkLangBuffer.getInt8 = function(buffer, offset) {
		if(!(buffer != null)) {
			return ~(~0);
		}
		return (new Uint8Array(buffer))[offset];
	};
	JkLangBuffer.copyFrom = function(array, src, soffset, doffset, size) {
		if(!(array != null)) {
			return;
		}
		if(!(src != null)) {
			return;
		}
		var suint = new Uint8Array(src);
		var sz = size;
		if(soffset + size > suint.byteLength) {
			sz = suint.byteLength - soffset;
		}
		var arrayToCopy = suint.subarray(soffset, sz);
		var duint = new Uint8Array(array);
		duint.set(arrayToCopy, doffset);
		;
	};
	JkLangBuffer.getInt16LE = function(buffer, offset) {
		if(!(buffer != null)) {
			return ~(~0);
		}
		console.log("[jk.lang.Buffer.getInt16LE] (Buffer.sling:327:3): Not implemented");
		return ~(~0);
	};
	JkLangBuffer.getInt16BE = function(buffer, offset) {
		if(!(buffer != null)) {
			return ~(~0);
		}
		console.log("[jk.lang.Buffer.getInt16BE] (Buffer.sling:380:3): Not implemented");
		return ~(~0);
	};
	JkLangBuffer.getInt32LE = function(buffer, offset) {
		console.log("[jk.lang.Buffer.getInt32LE] (Buffer.sling:433:3): Not implemented");
		return ~(~0);
	};
	JkLangBuffer.getInt32BE = function(buffer, offset) {
		console.log("[jk.lang.Buffer.getInt32BE] (Buffer.sling:486:3): Not implemented");
		return ~(~0);
	};
	JkLangBuffer.getInt64LE = function(buffer, offset) {
		console.log("[jk.lang.Buffer.getInt64LE] (Buffer.sling:505:3): Not implemented");
		return 0;
	};
	JkLangBuffer.getInt64BE = function(buffer, offset) {
		console.log("[jk.lang.Buffer.getInt64BE] (Buffer.sling:513:2): Not implemented");
		return 0;
	};
	JkLangBuffer.getFloatLE = function(buffer, offset) {
		console.log("[jk.lang.Buffer.getFloatLE] (Buffer.sling:520:2): Not implemented");
		return 0.0;
	};
	JkLangBuffer.getFloatBE = function(buffer, offset) {
		console.log("[jk.lang.Buffer.getFloatBE] (Buffer.sling:527:2): Not implemented");
		return 0.0;
	};
	JkLangBuffer.getDoubleLE = function(buffer, offset) {
		console.log("[jk.lang.Buffer.getDoubleLE] (Buffer.sling:534:2): Not implemented");
		return 0.0;
	};
	JkLangBuffer.getDoubleBE = function(buffer, offset) {
		console.log("[jk.lang.Buffer.getDoubleBE] (Buffer.sling:541:2): Not implemented");
		return 0.0;
	};
	JkLangBuffer.forInt8 = function(number) {
		var v = new ArrayBuffer(1);
		v[0] = ~(~(number & 0xff));
		return v;
	};
	JkLangBuffer.forInt16BE = function(number) {
		console.log("[jk.lang.Buffer.forInt16BE] (Buffer.sling:558:3): Not implemented");
		return null;
	};
	JkLangBuffer.forInt16LE = function(number) {
		console.log("[jk.lang.Buffer.forInt16LE] (Buffer.sling:569:3): Not implemented");
		return null;
	};
	JkLangBuffer.forInt32BE = function(number) {
		console.log("[jk.lang.Buffer.forInt32BE] (Buffer.sling:580:3): Not implemented");
		return null;
	};
	JkLangBuffer.forInt32LE = function(number) {
		console.log("[jk.lang.Buffer.forInt32LE] (Buffer.sling:591:3): Not implemented");
		return null;
	};
	JkLangBuffer.forInt64BE = function(number) {
		console.log("[jk.lang.Buffer.forInt64BE] (Buffer.sling:602:3): Not implemented");
		return null;
	};
	JkLangBuffer.forInt64LE = function(number) {
		console.log("[jk.lang.Buffer.forInt64LE] (Buffer.sling:613:3): Not implemented");
		return null;
	};
	JkLangBuffer.forFloat32BE = function(number) {
		console.log("[jk.lang.Buffer.forFloat32BE] (Buffer.sling:624:3): Not implemented");
		return null;
	};
	JkLangBuffer.forFloat32LE = function(number) {
		console.log("[jk.lang.Buffer.forFloat32LE] (Buffer.sling:635:3): Not implemented");
		return null;
	};
	JkLangBuffer.forDouble64BE = function(number) {
		console.log("[jk.lang.Buffer.forDouble64BE] (Buffer.sling:646:3): Not implemented");
		return null;
	};
	JkLangBuffer.forDouble64LE = function(number) {
		console.log("[jk.lang.Buffer.forDouble64LE] (Buffer.sling:657:3): Not implemented");
		return null;
	};
	JkLangBuffer.getSize = function(buffer) {
		if(buffer == null) {
			return 0;
		}
		return buffer.byteLength;
	};
	JkLangBuffer.getByte = function(buffer, offset) {
		return JkLangBuffer.getInt8(buffer, offset);
	};
	JkLangBuffer.setByte = function(buffer, offset, value) {
		if(!(buffer != null)) {
			return;
		}
		(new Uint8Array(buffer))[offset] = value;
		;
	};
	JkLangBuffer.allocate = function(size) {
		return new ArrayBuffer(size);
	};
	JkLangBuffer.fill = function(buffer, value) {
		var s = JkLangBuffer.getSize(buffer);
		for(var i = 0 ; i < s ; i++) {
			JkLangBuffer.setByte(buffer, i, value);
		}
	};
	JkLangBuffer.resize = function(buffer, newSize) {
		if(newSize < 1) {
			return null;
		}
		if(!(buffer != null)) {
			return JkLangBuffer.allocate(newSize);
		}
		if(buffer.byteLength == newSize) {
			return buffer;
		}
		var newbuffer = JkLangBuffer.allocate(newSize);
		var uint8 = new Uint8Array(newbuffer);
		uint8.set((new Uint8Array(buffer)));
		;
		return newbuffer;
	};
	JkLangBuffer.append = function(original, toAppend, size) {
		if(toAppend == null || size == 0) {
			return original;
		}
		var sz = size;
		var os = JkLangBuffer.getSize(original);
		var oas = JkLangBuffer.getSize(toAppend);
		if(sz >= 0) {
			oas = sz;
		}
		var nl = os + oas;
		var nb = JkLangBuffer.resize(original, nl);
		JkLangBuffer.copyFrom(nb, toAppend, 0, os, oas);
		return nb;
	};
	JkLangBuffer.forHexString = function(str) {
		if(str == null || JkLangString.getLength(str) % 2 != 0) {
			return null;
		}
		var sb = null;
		var b = JkLangBuffer.allocate((JkLangString.getLength(str) / 2));
		var n = 0;
		var it = JkLangString.iterate(str);
		while(it != null){
			var c = it.getNextChar();
			if(c < 1) {
				break;
			}
			if(sb == null) {
				sb = JkLangStringBuilder.NEW();
			}
			if(c >= "a".charCodeAt() && c <= "f".charCodeAt() || c >= "A".charCodeAt() && c <= "F".charCodeAt() || c >= "0".charCodeAt() && c <= "9".charCodeAt()) {
				sb.appendCharacter(c);
				if(sb.count() == 2) {
					JkLangBuffer.setByte(b, (n++), (~(~JkLangString.toIntegerFromHex((sb.toString())))));
					sb.clear();
				}
			}
			else {
				return null;
			}
		}
		return b;
	};
	JkLangBuffer.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangBuffer"] === true;
	};
	let JkLangCharacterObject = {};
	JkLangCharacterObject.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangCharacterObject"] === true;
	};
	let JkLangBitOp = function() {
	};
	JkLangBitOp.prototype._t = { "JkLangBitOp" : true };
	JkLangBitOp.prototype._tobj = JkLangBitOp;
	JkLangBitOp.NEW = function() {
		var v = new JkLangBitOp;
		return v.CTOR_JkLangBitOp();
	};
	JkLangBitOp.prototype.CTOR_JkLangBitOp = function() {
		return this;
	};
	JkLangBitOp.prototype.or = function(v1, v2) {
		return v1 | v2;
	};
	JkLangBitOp.prototype.and = function(v1, v2) {
		return v1 & v2;
	};
	JkLangBitOp.prototype.xor = function(v1, v2) {
		return v1 ^ v2;
	};
	JkLangBitOp.prototype.not = function(v) {
		return ~v;
	};
	JkLangBitOp.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangBitOp"] === true;
	};
	let JkLangExceptionWithError = function() {
		JkLangException.call(this);
		this.error = null;
	};
	JkLangExceptionWithError.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkLangException.prototype);
	JkLangExceptionWithError.prototype.constructor = JkLangExceptionWithError;
	JkLangExceptionWithError.prototype._t = {
		"JkLangException" : true,
		"JkLangExceptionWithError" : true,
		"JkLangStringObject" : true
	};
	JkLangExceptionWithError.prototype._tobj = JkLangExceptionWithError;
	JkLangExceptionWithError.NEW = function() {
		var v = new JkLangExceptionWithError;
		return v.CTOR_JkLangExceptionWithError();
	};
	JkLangExceptionWithError.prototype.CTOR_JkLangExceptionWithError = function() {
		this.error = null;
		if(JkLangException.prototype.CTOR_JkLangException.call(this) == null) {
			return null;
		}
		return this;
	};
	JkLangExceptionWithError.forError = function(error) {
		var v = JkLangExceptionWithError.NEW();
		v.setError(error);
		return v;
	};
	JkLangExceptionWithError.forCode = function(code, detail) {
		return JkLangExceptionWithError.forError((JkLangError.forCode(code, detail)));
	};
	JkLangExceptionWithError.prototype.getErrorCode = function() {
		if(!(this.error != null)) {
			return null;
		}
		return this.error.getCode();
	};
	JkLangExceptionWithError.prototype.getErrorDetail = function() {
		if(!(this.error != null)) {
			return null;
		}
		return this.error.getDetail();
	};
	JkLangExceptionWithError.prototype.toString = function() {
		return JkLangError.asString(this.error);
	};
	JkLangExceptionWithError.prototype.getError = function() {
		return this.error;
	};
	JkLangExceptionWithError.prototype.setError = function(v) {
		this.error = v;
		return this;
	};
	JkLangExceptionWithError.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangExceptionWithError"] === true;
	};
	let JkLangArrayMyArrayObject = function() {
		this.array = null;
	};
	JkLangArrayMyArrayObject.prototype._t = {
		"JkLangObjectWithSize" : true,
		"JkLangArrayObject" : true,
		"JkLangArrayMyArrayObject" : true
	};
	JkLangArrayMyArrayObject.prototype._tobj = JkLangArrayMyArrayObject;
	JkLangArrayMyArrayObject.NEW = function() {
		var v = new JkLangArrayMyArrayObject;
		return v.CTOR_JkLangArrayMyArrayObject();
	};
	JkLangArrayMyArrayObject.prototype.CTOR_JkLangArrayMyArrayObject = function() {
		this.array = null;
		return this;
	};
	JkLangArrayMyArrayObject.prototype.toArray = function() {
		return this.array;
	};
	JkLangArrayMyArrayObject.prototype.getSize = function() {
		return this.array.length;
	};
	JkLangArrayMyArrayObject.prototype.getArray = function() {
		return this.array;
	};
	JkLangArrayMyArrayObject.prototype.setArray = function(v) {
		this.array = v;
		return this;
	};
	JkLangArrayMyArrayObject.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangArrayMyArrayObject"] === true;
	};
	let JkLangKeyValuePair = function() {
		this.key = null;
		this.value = null;
	};
	JkLangKeyValuePair.prototype._t = { "JkLangKeyValuePair" : true };
	JkLangKeyValuePair.prototype._tobj = JkLangKeyValuePair;
	JkLangKeyValuePair.NEW_KV = function(key, value) {
		var v = new JkLangKeyValuePair;
		return v.CTOR_JkLangKeyValuePair_KV(key, value);
	};
	JkLangKeyValuePair.prototype.CTOR_JkLangKeyValuePair_KV = function(key, value) {
		this.value = null;
		this.key = null;
		this.key = key;
		this.value = value;
		return this;
	};
	JkLangKeyValuePair.NEW = function() {
		var v = new JkLangKeyValuePair;
		return v.CTOR_JkLangKeyValuePair();
	};
	JkLangKeyValuePair.prototype.CTOR_JkLangKeyValuePair = function() {
		this.value = null;
		this.key = null;
		return this;
	};
	JkLangKeyValuePair.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangKeyValuePair"] === true;
	};
	let JkLangTimeValue = function() {
		this.seconds = 0;
		this.microSeconds = 0;
	};
	JkLangTimeValue.prototype._t = { "JkLangTimeValue" : true };
	JkLangTimeValue.prototype._tobj = JkLangTimeValue;
	JkLangTimeValue.NEW = function() {
		var v = new JkLangTimeValue;
		return v.CTOR_JkLangTimeValue();
	};
	JkLangTimeValue.prototype.CTOR_JkLangTimeValue = function() {
		this.microSeconds = 0;
		this.seconds = 0;
		return this;
	};
	JkLangTimeValue.forSeconds = function(seconds) {
		var v = JkLangTimeValue.NEW();
		v.seconds = seconds;
		return v;
	};
	JkLangTimeValue.prototype.toString = function() {
		var sb = JkLangStringBuilder.NEW();
		sb.appendString((JkLangString.forLongInteger(this.seconds)));
		sb.appendCharacter((".".charCodeAt()));
		sb.appendString((JkLangString.forLongInteger(this.microSeconds)));
		return sb.toString();
	};
	JkLangTimeValue.prototype.dup = function() {
		var v = JkLangTimeValue.NEW();
		v.copyFrom(this);
		return v;
	};
	JkLangTimeValue.prototype.reset = function() {
		this.seconds = 0;
		this.microSeconds = 0;
	};
	JkLangTimeValue.prototype.copyFrom = function(tv) {
		this.seconds = tv.seconds;
		this.microSeconds = tv.microSeconds;
	};
	JkLangTimeValue.prototype.set = function(tv) {
		this.seconds = tv.getSeconds();
		this.microSeconds = tv.getMicroSeconds();
	};
	JkLangTimeValue.prototype.setSeconds = function(value) {
		this.seconds = value;
	};
	JkLangTimeValue.prototype.setMilliSeconds = function(value) {
		this.microSeconds = value * 1000;
	};
	JkLangTimeValue.prototype.setMicroSeconds = function(value) {
		this.microSeconds = value;
	};
	JkLangTimeValue.prototype.add = function(s, us) {
		var ts = this.getSeconds() + s;
		var tus = this.getMicroSeconds() + us;
		if(tus > 1000000) {
			ts += tus / 1000000;
			tus = tus % 1000000;
		}
		while(tus < 0){
			ts--;
			tus += 1000000;
		}
		var v = JkLangTimeValue.NEW();
		v.seconds = ts;
		v.microSeconds = tus;
		return v;
	};
	JkLangTimeValue.prototype.addTimeValue = function(tv) {
		if(tv == null) {
			return this;
		}
		return this.add((tv.getSeconds()), (tv.getMicroSeconds()));
	};
	JkLangTimeValue.prototype.subtract = function(tv) {
		if(tv == null) {
			return this;
		}
		return this.add((-tv.getSeconds()), (-tv.getMicroSeconds()));
	};
	JkLangTimeValue.prototype.asMicroSeconds = function() {
		return this.getSeconds() * 1000000 + ~(~this.getMicroSeconds());
	};
	JkLangTimeValue.diff = function(a, b) {
		if(a == null && b == null) {
			return 0;
		}
		if(a == null) {
			return b.asMicroSeconds();
		}
		if(b == null) {
			return a.asMicroSeconds();
		}
		var r = (a.seconds - b.seconds) * 1000000 + (a.microSeconds - b.microSeconds);
		return r;
	};
	JkLangTimeValue.diffDouble = function(a, b) {
		return JkLangTimeValue.diff(a, b) / 1000000.0;
	};
	JkLangTimeValue.prototype.getSeconds = function() {
		return this.seconds;
	};
	JkLangTimeValue.prototype.getMicroSeconds = function() {
		return this.microSeconds;
	};
	JkLangTimeValue.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangTimeValue"] === true;
	};
	let JkLangReflection = function() {
	};
	JkLangReflection.prototype._t = { "JkLangReflection" : true };
	JkLangReflection.prototype._tobj = JkLangReflection;
	JkLangReflection.NEW = function() {
		var v = new JkLangReflection;
		return v.CTOR_JkLangReflection();
	};
	JkLangReflection.prototype.CTOR_JkLangReflection = function() {
		return this;
	};
	JkLangReflection.createClassInstanceByName = function(qualifiedName) {
		if(!JkLangString.isNotEmpty(qualifiedName)) {
			return null;
		}
		console.log("[jk.lang.Reflection.createClassInstanceByName] (Reflection.sling:36:3): Not implemented.");
		return null;
	};
	JkLangReflection.createClassInstanceByTypeinfo = function(type) {
		console.log("[jk.lang.Reflection.createClassInstanceByTypeinfo] (Reflection.sling:50:3): Not implemented.");
		return null;
	};
	JkLangReflection.callMethod = function(objectInstance, methodName, _arguments) {
		console.log("[jk.lang.Reflection.callMethod] (Reflection.sling:77:3): Not implemented.");
		return null;
	};
	JkLangReflection.getDataTypeInfo = function(variable) {
		return typeof variable;
	};
	JkLangReflection.isSameType = function(primary, other) {
		if(primary == null && other == null) {
			return true;
		}
		if(primary == null || other == null) {
			return false;
		}
		var ta = typeof primary;
		var tb = typeof other;
		if(ta == tb) {
			return true;
		}
		return false;
	};
	JkLangReflection.isInstanceOf = function(objectInstance, type) {
		if(!(objectInstance != null)) {
			return false;
		}
		console.log("[jk.lang.Reflection.isInstanceOf] (Reflection.sling:113:3): Not implemented");
		return false;
	};
	JkLangReflection.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangReflection"] === true;
	};
	let JkLangBufferDataReceiver = {};
	JkLangBufferDataReceiver.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangBufferDataReceiver"] === true;
	};
	let JkLangCharacter = function() {
		this.character = "".charCodeAt();
	};
	JkLangCharacter.prototype._t = {
		"JkLangCharacter" : true,
		"JkLangCharacterObject" : true
	};
	JkLangCharacter.prototype._tobj = JkLangCharacter;
	JkLangCharacter.NEW = function() {
		var v = new JkLangCharacter;
		return v.CTOR_JkLangCharacter();
	};
	JkLangCharacter.prototype.CTOR_JkLangCharacter = function() {
		this.character = "".charCodeAt();
		return this;
	};
	JkLangCharacter.asObject = function(character) {
		var v = JkLangCharacter.NEW();
		v.setCharacter(character);
		return v;
	};
	JkLangCharacter.toUppercase = function(c) {
		if(c >= "a".charCodeAt() && c <= "z".charCodeAt()) {
			return c - "a".charCodeAt() + "A".charCodeAt();
		}
		return c;
	};
	JkLangCharacter.toLowercase = function(c) {
		if(c >= "A".charCodeAt() && c <= "Z".charCodeAt()) {
			return c - "A".charCodeAt() + "a".charCodeAt();
		}
		return c;
	};
	JkLangCharacter.isDigit = function(c) {
		return c >= "0".charCodeAt() && c <= "9".charCodeAt();
	};
	JkLangCharacter.isLowercaseAlpha = function(c) {
		return c >= "a".charCodeAt() && c <= "z".charCodeAt();
	};
	JkLangCharacter.isUppercaseAlpha = function(c) {
		return c >= "A".charCodeAt() && c <= "Z".charCodeAt();
	};
	JkLangCharacter.isHexDigit = function(c) {
		var v = c >= "a".charCodeAt() && c <= "f".charCodeAt() || c >= "A".charCodeAt() && c <= "F".charCodeAt() || c >= "0".charCodeAt() && c <= "9".charCodeAt();
		return v;
	};
	JkLangCharacter.isAlnum = function(c) {
		var v = c >= "a".charCodeAt() && c <= "z".charCodeAt() || c >= "A".charCodeAt() && c <= "Z".charCodeAt() || c >= "0".charCodeAt() && c <= "9".charCodeAt();
		return v;
	};
	JkLangCharacter.isAlpha = function(c) {
		var v = c >= "a".charCodeAt() && c <= "z".charCodeAt() || c >= "A".charCodeAt() && c <= "Z".charCodeAt();
		return v;
	};
	JkLangCharacter.isAlphaNumeric = function(c) {
		var v = c >= "a".charCodeAt() && c <= "z".charCodeAt() || c >= "A".charCodeAt() && c <= "Z".charCodeAt() || c >= "0".charCodeAt() && c <= "9".charCodeAt();
		return v;
	};
	JkLangCharacter.isLowercaseAlphaNumeric = function(c) {
		var v = c >= "a".charCodeAt() && c <= "z".charCodeAt() || c >= "0".charCodeAt() && c <= "9".charCodeAt();
		return v;
	};
	JkLangCharacter.isUppercaseAlphaNumeric = function(c) {
		var v = c >= "A".charCodeAt() && c <= "Z".charCodeAt() || c >= "0".charCodeAt() && c <= "9".charCodeAt();
		return v;
	};
	JkLangCharacter.prototype.toCharacter = function() {
		return this.character;
	};
	JkLangCharacter.isEOF = function(c) {
		return c == 0 || c == -1;
	};
	JkLangCharacter.getHexDigit = function(c) {
		var v = 0;
		if(c >= "0".charCodeAt() && c <= "9".charCodeAt()) {
			v = ~(~(c - "0".charCodeAt()));
		}
		else if(c >= "a".charCodeAt() && c <= "f".charCodeAt()) {
			v = ~(~(10 + c - "a".charCodeAt()));
		}
		else if(c >= "A".charCodeAt() && c <= "F".charCodeAt()) {
			v = ~(~(10 + c - "A".charCodeAt()));
		}
		else {
			return 0;
		}
		return v;
	};
	JkLangCharacter.prototype.getCharacter = function() {
		return this.character;
	};
	JkLangCharacter.prototype.setCharacter = function(v) {
		this.character = v;
		return this;
	};
	JkLangCharacter.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangCharacter"] === true;
	};
	let JkLangDouble = function() {
		this.value = 0.0;
	};
	JkLangDouble.prototype._t = {
		"JkLangDouble" : true,
		"JkLangDoubleObject" : true
	};
	JkLangDouble.prototype._tobj = JkLangDouble;
	JkLangDouble.NEW = function() {
		var v = new JkLangDouble;
		return v.CTOR_JkLangDouble();
	};
	JkLangDouble.prototype.CTOR_JkLangDouble = function() {
		this.value = 0.0;
		return this;
	};
	JkLangDouble.forValue = function(value) {
		return JkLangDouble.asObject(value);
	};
	JkLangDouble.asObject = function(value) {
		var v = JkLangDouble.NEW();
		v.setValue(value);
		return v;
	};
	JkLangDouble.asDouble = function(obj) {
		if(!(obj != null)) {
			return 0.0;
		}
		if(typeof obj === "number") {
			return obj;
		}
		if(JkLangDoubleObject.IS_INSTANCE && JkLangDoubleObject.IS_INSTANCE(obj)) {
			var od = obj;
			return od.toDouble();
		}
		if(typeof obj === "number") {
			var v = ~(~obj);
			return v;
		}
		if(JkLangIntegerObject.IS_INSTANCE && JkLangIntegerObject.IS_INSTANCE(obj)) {
			var oi = obj;
			return oi.toInteger();
		}
		if(typeof obj === "number") {
			var v1 = ~(~obj);
			return v1;
		}
		if(JkLangLongIntegerObject.IS_INSTANCE && JkLangLongIntegerObject.IS_INSTANCE(obj)) {
			var oi1 = obj;
			return oi1.toLong();
		}
		if(typeof obj === "string") {
			return JkLangString.toDouble(obj);
		}
		if(JkLangStringObject.IS_INSTANCE && JkLangStringObject.IS_INSTANCE(obj)) {
			return JkLangString.toDouble((obj.toString()));
		}
		if(typeof obj === "string") {
			var v2 = obj;
			return v2;
		}
		if(JkLangCharacterObject.IS_INSTANCE && JkLangCharacterObject.IS_INSTANCE(obj)) {
			var oc = obj;
			return oc.toCharacter();
		}
		if(typeof obj === "boolean") {
			if(obj == true) {
				return 1.0;
			}
			return 0.0;
		}
		if(JkLangBooleanObject.IS_INSTANCE && JkLangBooleanObject.IS_INSTANCE(obj)) {
			if(obj.toBoolean()) {
				return 1.0;
			}
			return 0.0;
		}
		return 0.0;
	};
	JkLangDouble.longBitsToDouble = function(vv) {
		console.log("[jk.lang.Double.longBitsToDouble] (Double.sling:97:3): Not implemented");
		return 0.0;
	};
	JkLangDouble.doubleToLongBits = function(vv) {
		console.log("[jk.lang.Double.doubleToLongBits] (Double.sling:111:3): Not implemented");
		return 0;
	};
	JkLangDouble.prototype.add = function(amount) {
		this.value += amount;
	};
	JkLangDouble.prototype.toDouble = function() {
		return this.value;
	};
	JkLangDouble.prototype.getValue = function() {
		return this.value;
	};
	JkLangDouble.prototype.setValue = function(v) {
		this.value = v;
		return this;
	};
	JkLangDouble.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangDouble"] === true;
	};
	let JkLangDynamicMap = function() {
		this.map = null;
	};
	JkLangDynamicMap.prototype._t = {
		"JkLangIterateable" : true,
		"JkLangDynamicMap" : true,
		"JkLangDuplicateable" : true
	};
	JkLangDynamicMap.prototype._tobj = JkLangDynamicMap;
	JkLangDynamicMap.NEW = function() {
		var v = new JkLangDynamicMap;
		return v.CTOR_JkLangDynamicMap();
	};
	JkLangDynamicMap.prototype.CTOR_JkLangDynamicMap = function() {
		this.map = null;
		this.map = new Map;
		return this;
	};
	JkLangDynamicMap.asDynamicMap = function(value) {
		if(!(value != null)) {
			return null;
		}
		if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(value)) {
			return value;
		}
		if(value instanceof Map) {
			return JkLangDynamicMap.forObjectMap(value);
		}
		return null;
	};
	JkLangDynamicMap.forObjectMap = function(map) {
		var v = JkLangDynamicMap.NEW();
		if(map != null) {
			var it = JkLangMap.iterateKeys(map);
			while(it != null){
				var key = it.next();
				if(key == null) {
					break;
				}
				if(typeof key === "string" == false) {
					continue;
				}
				v.setObject(key, (JkLangMap.getValue(map, key)));
			}
		}
		return v;
	};
	JkLangDynamicMap.forStringMap = function(map) {
		var v = JkLangDynamicMap.NEW();
		if(map != null) {
			var it = JkLangMap.iterateKeys(map);
			while(it != null){
				var key = it.next();
				if(key == null) {
					break;
				}
				v.setString(key, (JkLangMap.getValue(map, key)));
			}
		}
		return v;
	};
	JkLangDynamicMap.forDynamicMaps = function(map1, map2) {
		var v = JkLangDynamicMap.NEW();
		v.mergeFrom(map1);
		v.mergeFrom(map2);
		return v;
	};
	JkLangDynamicMap.forDynamicMap = function(map) {
		if(!(map != null)) {
			return null;
		}
		return map.duplicateMap();
	};
	JkLangDynamicMap.prototype.asMap = function() {
		return this.map;
	};
	JkLangDynamicMap.prototype.asStringMap = function() {
		return this.toStringMap();
	};
	JkLangDynamicMap.prototype.toStringMap = function() {
		var v = new Map;
		var it = this.iterateKeys();
		while(it != null){
			var key = it.next();
			if(!(key != null)) {
				break;
			}
			JkLangMap.set(v, key, (this.getString(key, null)));
		}
		return v;
	};
	JkLangDynamicMap.prototype.toObjectMap = function() {
		var v = new Map;
		var it = this.iterateKeys();
		while(it != null){
			var key = it.next();
			if(!(key != null)) {
				break;
			}
			JkLangMap.set(v, key, (this.getString(key, null)));
		}
		return v;
	};
	JkLangDynamicMap.prototype.duplicate = function() {
		return this.duplicateMap();
	};
	JkLangDynamicMap.prototype.duplicateMap = function() {
		var v = JkLangDynamicMap.NEW();
		var it = this.iterateKeys();
		while(it != null){
			var key = it.next();
			if(key == null) {
				break;
			}
			v.setObject(key, (this.get(key)));
		}
		return v;
	};
	JkLangDynamicMap.prototype.mergeFrom = function(other) {
		if(other == null) {
			return this;
		}
		var it = other.iterateKeys();
		while(it != null){
			var key = it.next();
			if(key == null) {
				break;
			}
			this.setObject(key, (other.get(key)));
		}
		return this;
	};
	JkLangDynamicMap.prototype.setObject = function(key, value) {
		if(key != null) {
			this.map.set(key, value);
		}
		return this;
	};
	JkLangDynamicMap.prototype.setString = function(key, value) {
		if(key != null) {
			this.map.set(key, value);
		}
		return this;
	};
	JkLangDynamicMap.prototype.setBuffer = function(key, value) {
		if(!(key == null) && value == null) {
			this.map.set(key, null);
			return this;
		}
		return this.setObject(key, (JkLangBuffer.asObject(value)));
	};
	JkLangDynamicMap.prototype.setInteger = function(key, value) {
		return this.setObject(key, (JkLangInteger.asObject(value)));
	};
	JkLangDynamicMap.prototype.setLong = function(key, value) {
		return this.setObject(key, (JkLangLongInteger.asObject(value)));
	};
	JkLangDynamicMap.prototype.setLongInteger = function(key, value) {
		return this.setObject(key, (JkLangLongInteger.asObject(value)));
	};
	JkLangDynamicMap.prototype.setBoolean = function(key, value) {
		return this.setObject(key, (JkLangBoolean.asObject(value)));
	};
	JkLangDynamicMap.prototype.setDouble = function(key, value) {
		return this.setObject(key, (JkLangDouble.asObject(value)));
	};
	JkLangDynamicMap.prototype.get = function(key) {
		var v = JkLangMap.getValue(this.map, key);
		return v;
	};
	JkLangDynamicMap.prototype.getString = function(key, defval) {
		var v = JkLangString.asString((this.get(key)));
		if(v == null) {
			return defval;
		}
		return v;
	};
	JkLangDynamicMap.prototype.getInteger = function(key, defval) {
		var vv = this.get(key);
		if(vv == null) {
			return defval;
		}
		return JkLangInteger.asInteger(vv);
	};
	JkLangDynamicMap.prototype.getLongInteger = function(key, defval) {
		var vv = this.get(key);
		if(vv == null) {
			return defval;
		}
		return JkLangLongInteger.asLong(vv);
	};
	JkLangDynamicMap.prototype.getBoolean = function(key, defval) {
		var vv = this.get(key);
		if(vv == null) {
			return defval;
		}
		return JkLangBoolean.asBoolean(vv, false);
	};
	JkLangDynamicMap.prototype.getDouble = function(key, defval) {
		var vv = this.get(key);
		if(vv == null) {
			return defval;
		}
		return JkLangDouble.asDouble(vv);
	};
	JkLangDynamicMap.prototype.getBuffer = function(key) {
		var vv = this.get(key);
		if(!(vv != null)) {
			return null;
		}
		return JkLangBuffer.asBuffer(vv);
	};
	JkLangDynamicMap.prototype.getDynamicVector = function(key) {
		var vv = (function(o) {
			if(JkLangDynamicVector.IS_INSTANCE && JkLangDynamicVector.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))((this.get(key)));
		if(vv != null) {
			return vv;
		}
		var v = this.getVector(key);
		if(v != null) {
			return JkLangDynamicVector.forObjectVector(v);
		}
		return null;
	};
	JkLangDynamicMap.prototype.getVector = function(key) {
		var val = this.get(key);
		if(!(val != null)) {
			return null;
		}
		if(val instanceof Array) {
			return val;
		}
		if(JkLangVectorObject.IS_INSTANCE && JkLangVectorObject.IS_INSTANCE(val)) {
			var vo = val;
			var vv = vo.toVector();
			return vv;
		}
		return null;
	};
	JkLangDynamicMap.prototype.getDynamicMap = function(key) {
		return (function(o) {
			if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))((this.get(key)));
	};
	JkLangDynamicMap.prototype.getKeys = function() {
		var v = JkLangMap.getKeys(this.map);
		return v;
	};
	JkLangDynamicMap.prototype.getValues = function() {
		var v = JkLangMap.getValues(this.map);
		return v;
	};
	JkLangDynamicMap.prototype.iterate = function() {
		var v = JkLangMap.iterateKeys(this.map);
		return v;
	};
	JkLangDynamicMap.prototype.iterateKeys = function() {
		var v = JkLangMap.iterateKeys(this.map);
		return v;
	};
	JkLangDynamicMap.prototype.iterateValues = function() {
		return JkLangVector.iterate((this.getValues()));
	};
	JkLangDynamicMap.prototype.remove = function(key) {
		JkLangMap.remove(this.map, key);
	};
	JkLangDynamicMap.prototype.clear = function() {
		JkLangMap.clear(this.map);
	};
	JkLangDynamicMap.prototype.getCount = function() {
		return JkLangMap.count(this.map);
	};
	JkLangDynamicMap.prototype.containsKey = function(key) {
		return JkLangMap.containsKey(this.map, key);
	};
	JkLangDynamicMap.prototype.removeNullValues = function() {
		var keys = this.getKeys();
		if(keys != null) {
			var n = 0;
			var m = keys.length;
			for(n = 0 ; n < m ; n++) {
				var key = keys[n];
				if(key != null) {
					var value = this.get(key);
					if(value == null) {
						this.remove(key);
					}
				}
			}
		}
		return this;
	};
	JkLangDynamicMap.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLangDynamicMap"] === true;
	};
	let JkUrlQueryString = function() {
	};
	JkUrlQueryString.prototype._t = { "JkUrlQueryString" : true };
	JkUrlQueryString.prototype._tobj = JkUrlQueryString;
	JkUrlQueryString.NEW = function() {
		var v = new JkUrlQueryString;
		return v.CTOR_JkUrlQueryString();
	};
	JkUrlQueryString.prototype.CTOR_JkUrlQueryString = function() {
		return this;
	};
	JkUrlQueryString.parse = function(queryString) {
		var v = new Map;
		if(JkLangString.isEmpty(queryString)) {
			return v;
		}
		var array = JkLangString.split(queryString, ("&".charCodeAt()), 0);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var qs = array[n];
				if(qs != null) {
					if(JkLangString.isEmpty(qs)) {
						continue;
					}
					if(JkLangString.getIndexOfCharacter(qs, ("=".charCodeAt()), 0) < 0) {
						JkLangMap.set(v, qs, null);
						continue;
					}
					var qsps = JkLangString.split(qs, ("=".charCodeAt()), 2);
					var key = qsps[0];
					var val = qsps[1];
					if(val == null) {
						val = "";
					}
					if(JkLangString.isEmpty(key) == false) {
						JkLangMap.set(v, (JkUrlURLDecoder.decode(key)), (JkUrlURLDecoder.decode(val)));
					}
				}
			}
		}
		return v;
	};
	JkUrlQueryString.encode = function(queryString) {
		var str = JkLangStringBuilder.NEW();
		var first = true;
		var keys = JkLangMap.getKeys(queryString);
		if(keys != null) {
			var n = 0;
			var m = keys.length;
			for(n = 0 ; n < m ; n++) {
				var key = keys[n];
				if(key != null) {
					if(JkLangString.isEmpty(key)) {
						continue;
					}
					var val = JkLangMap.getValue(queryString, key);
					if(!first) {
						str.appendString("&");
					}
					str.appendString((JkUrlURLEncoder.encode(key, false, true)));
					str.appendCharacter(("=".charCodeAt()));
					str.appendString((JkUrlURLEncoder.encode(val, false, true)));
					first = false;
				}
			}
		}
		return str.toString();
	};
	JkUrlQueryString.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUrlQueryString"] === true;
	};
	let JkUrlURLDecoder = function() {
	};
	JkUrlURLDecoder.prototype._t = { "JkUrlURLDecoder" : true };
	JkUrlURLDecoder.prototype._tobj = JkUrlURLDecoder;
	JkUrlURLDecoder.NEW = function() {
		var v = new JkUrlURLDecoder;
		return v.CTOR_JkUrlURLDecoder();
	};
	JkUrlURLDecoder.prototype.CTOR_JkUrlURLDecoder = function() {
		return this;
	};
	JkUrlURLDecoder.xcharToInteger = function(c) {
		if(c >= "0".charCodeAt() && c <= "9".charCodeAt()) {
			var ci = ~(~c);
			return ci - "0".charCodeAt();
		}
		else if(c >= "a".charCodeAt() && c <= "f".charCodeAt()) {
			return 10 + c - "a".charCodeAt();
		}
		else if(c >= "A".charCodeAt() && c <= "F".charCodeAt()) {
			return 10 + c - "A".charCodeAt();
		}
		return 0;
	};
	JkUrlURLDecoder.decode = function(astr) {
		if(!(astr != null)) {
			return null;
		}
		var sb = JkLangStringBuilder.NEW();
		var str = JkLangString.strip(astr);
		var it = JkLangString.iterate(str);
		while(it != null){
			var x = it.getNextChar();
			if(x < 1) {
				break;
			}
			if(x == "%".charCodeAt()) {
				var x1 = it.getNextChar();
				var x2 = it.getNextChar();
				if(x1 > 0 && x2 > 0) {
					sb.appendCharacter((JkUrlURLDecoder.xcharToInteger(x1) * 16 + JkUrlURLDecoder.xcharToInteger(x2)));
				}
				else {
					break;
				}
			}
			else if(x == "+".charCodeAt()) {
				sb.appendCharacter((" ".charCodeAt()));
			}
			else {
				sb.appendCharacter(x);
			}
		}
		return sb.toString();
	};
	JkUrlURLDecoder.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUrlURLDecoder"] === true;
	};
	let JkUrlURL = function() {
		this.scheme = null;
		this.username = null;
		this.password = null;
		this.host = null;
		this.port = null;
		this.path = null;
		this.fragment = null;
		this.rawQueryParameters = null;
		this.queryParameters = null;
		this.original = null;
		this.percentOnly = false;
		this.encodeUnreservedChars = true;
	};
	JkUrlURL.prototype._t = {
		"JkUrlURL" : true,
		"JkLangStringObject" : true
	};
	JkUrlURL.prototype._tobj = JkUrlURL;
	JkUrlURL.NEW = function() {
		var v = new JkUrlURL;
		return v.CTOR_JkUrlURL();
	};
	JkUrlURL.prototype.CTOR_JkUrlURL = function() {
		this.encodeUnreservedChars = true;
		this.percentOnly = false;
		this.original = null;
		this.queryParameters = null;
		this.rawQueryParameters = null;
		this.fragment = null;
		this.path = null;
		this.port = null;
		this.host = null;
		this.password = null;
		this.username = null;
		this.scheme = null;
		return this;
	};
	JkUrlURL.forString = function(str, normalizePath) {
		var v = JkUrlURL.NEW();
		v.parse(str, normalizePath);
		return v;
	};
	JkUrlURL.prototype.dup = function() {
		var v = JkUrlURL.NEW();
		v.setScheme(this.scheme);
		v.setUsername(this.username);
		v.setPassword(this.password);
		v.setHost(this.host);
		v.setPort(this.port);
		v.setPath(this.path);
		v.setFragment(this.fragment);
		if(this.rawQueryParameters != null) {
			v.setRawQueryParameters((this.rawQueryParameters.dup()));
		}
		if(this.queryParameters != null) {
			v.setQueryParameters((JkLangMap.dup(this.queryParameters)));
		}
		return v;
	};
	JkUrlURL.prototype.toString = function() {
		return this.toStringDo(true);
	};
	JkUrlURL.prototype.toStringNohost = function() {
		return this.toStringDo(false);
	};
	JkUrlURL.prototype.toStringDo = function(userhost) {
		var sb = JkLangStringBuilder.NEW();
		if(userhost) {
			if(this.scheme != null) {
				sb.appendString(this.scheme);
				sb.appendString("://");
			}
			if(this.username != null) {
				sb.appendString((JkUrlURLEncoder.encode(this.username, false, true)));
				if(this.password != null) {
					sb.appendCharacter((":".charCodeAt()));
					sb.appendString((JkUrlURLEncoder.encode(this.password, false, true)));
				}
				sb.appendCharacter(("@".charCodeAt()));
			}
			if(this.host != null) {
				sb.appendString(this.host);
				if(this.port != null) {
					sb.appendCharacter((":".charCodeAt()));
					sb.appendString(this.port);
				}
			}
		}
		if(this.path != null) {
			sb.appendString((JkLangString.replaceCharacter(this.path, (" ".charCodeAt()), ("+".charCodeAt()))));
		}
		if(this.rawQueryParameters != null && this.rawQueryParameters.count() > 0) {
			var first = true;
			var it = JkLangMap.iterateKeys(this.queryParameters);
			while(it != null){
				var key = (function(o) {
					if(typeof o === "string") {
						return o;
					}
					return null;
				}.bind(this))((it.next()));
				if(key == null) {
					break;
				}
				if(first) {
					sb.appendCharacter(("?".charCodeAt()));
					first = false;
				}
				else {
					sb.appendCharacter(("&".charCodeAt()));
				}
				sb.appendString(key);
				var val = JkLangMap.get(this.queryParameters, key);
				if(val != null) {
					sb.appendCharacter(("=".charCodeAt()));
					sb.appendString((JkUrlURLEncoder.encode(val, this.percentOnly, this.encodeUnreservedChars)));
				}
			}
		}
		if(this.fragment != null) {
			sb.appendCharacter(("#".charCodeAt()));
			sb.appendString(this.fragment);
		}
		return sb.toString();
	};
	JkUrlURL.prototype.clearQueryParameters = function() {
		this.rawQueryParameters = null;
		this.queryParameters = null;
	};
	JkUrlURL.prototype.normalizePath = function(path) {
		if(!(path != null)) {
			return null;
		}
		var v = JkLangStringBuilder.NEW();
		var comps = JkLangString.split(path, ("/".charCodeAt()), 0);
		if(comps != null) {
			var n = 0;
			var m = comps.length;
			for(n = 0 ; n < m ; n++) {
				var comp = comps[n];
				if(comp != null) {
					if(JkLangString.isEmpty(comp)) {
						;
					}
					else if(comp == ".") {
						;
					}
					else if(comp == "..") {
						var str = v.toString();
						v.clear();
						if(str != null) {
							var slash = JkLangString.getLastIndexOfCharacter(str, ("/".charCodeAt()), (-1));
							if(slash > 0) {
								v.appendString((JkLangString.getSubString(str, 0, slash)));
							}
						}
					}
					else {
						v.appendCharacter(("/".charCodeAt()));
						v.appendString(comp);
					}
				}
			}
		}
		if(v.count() < 2) {
			return "/";
		}
		if(JkLangString.endsWith(path, "/")) {
			v.appendCharacter(("/".charCodeAt()));
		}
		return v.toString();
	};
	JkUrlURL.prototype.parse = function(astr, doNormalizePath) {
		this.setOriginal(astr);
		if(!(astr != null)) {
			return;
		}
		var fsp = JkLangString.split(astr, ("#".charCodeAt()), 2);
		var str = JkLangVector.get(fsp, 0);
		this.fragment = JkLangVector.get(fsp, 1);
		var qsplit = JkLangString.split(str, ("?".charCodeAt()), 2);
		str = JkLangVector.get(qsplit, 0);
		var queryString = JkLangVector.get(qsplit, 1);
		if(JkLangString.isEmpty(queryString) == false) {
			var qss = JkLangString.split(queryString, ("&".charCodeAt()), 0);
			if(qss != null) {
				var n = 0;
				var m = qss.length;
				for(n = 0 ; n < m ; n++) {
					var qs = qss[n];
					if(qs != null) {
						if(!(this.rawQueryParameters != null)) {
							this.rawQueryParameters = JkLangKeyValueList.NEW();
						}
						if(!(this.queryParameters != null)) {
							this.queryParameters = new Map;
						}
						if(JkLangString.getIndexOfCharacter(qs, ("=".charCodeAt()), 0) < 0) {
							JkLangMap.set(this.queryParameters, qs, null);
							this.rawQueryParameters.add(qs, null);
							continue;
						}
						var qsps = JkLangString.split(qs, ("=".charCodeAt()), 2);
						var key = JkLangVector.get(qsps, 0);
						var val = JkLangVector.get(qsps, 1);
						if(JkLangString.isEmpty(key) == false) {
							if(!(val != null)) {
								val = "";
							}
							var udv = JkUrlURLDecoder.decode(val);
							JkLangMap.set(this.queryParameters, key, udv);
							this.rawQueryParameters.add(key, udv);
						}
					}
				}
			}
		}
		var css = JkLangString.getIndexOfString(str, "://", 0);
		if(css >= 0) {
			this.scheme = JkLangString.getSubString(str, 0, css);
			if(JkLangString.getIndexOfCharacter(this.scheme, (":".charCodeAt()), 0) >= 0 || JkLangString.getIndexOfCharacter(this.scheme, ("/".charCodeAt()), 0) >= 0) {
				this.scheme = null;
			}
			else {
				str = JkLangString.getEndOfString(str, (css + 3));
			}
		}
		var pp = null;
		if(JkLangString.getChar(str, 0) == "/".charCodeAt()) {
			pp = str;
		}
		else {
			if(JkLangString.getIndexOfCharacter(str, ("/".charCodeAt()), 0) >= 0) {
				var sssplit = JkLangString.split(str, ("/".charCodeAt()), 2);
				str = JkLangVector.get(sssplit, 0);
				pp = JkLangVector.get(sssplit, 1);
				if(!(pp != null)) {
					pp = "";
				}
				if(JkLangString.getChar(pp, 0) != "/".charCodeAt()) {
					pp = JkLangString.appendString("/", pp);
				}
			}
			if(JkLangString.getIndexOfCharacter(str, ("@".charCodeAt()), 0) >= 0) {
				var asplit = JkLangString.split(str, ("@".charCodeAt()), 2);
				var auth = JkLangVector.get(asplit, 0);
				str = JkLangVector.get(asplit, 1);
				if(JkLangString.getIndexOfCharacter(auth, (":".charCodeAt()), 0) >= 0) {
					var acsplit = JkLangString.split(auth, (":".charCodeAt()), 2);
					this.username = JkUrlURLDecoder.decode((JkLangVector.get(acsplit, 0)));
					this.password = JkUrlURLDecoder.decode((JkLangVector.get(acsplit, 1)));
				}
				else {
					this.username = auth;
				}
			}
			if(JkLangString.getIndexOfCharacter(str, (":".charCodeAt()), 0) >= 0) {
				var hcsplit = JkLangString.split(str, (":".charCodeAt()), 2);
				str = JkLangVector.get(hcsplit, 0);
				this.port = JkLangVector.get(hcsplit, 1);
			}
			this.host = str;
		}
		if(doNormalizePath) {
			this.path = this.normalizePath(pp);
		}
		else {
			this.path = pp;
		}
		if(!(this.port != null) && JkLangString.equals("https", this.scheme) || JkLangString.equals("wss", this.scheme)) {
			this.port = "443";
		}
	};
	JkUrlURL.prototype.getPortInt = function() {
		if(!(this.port != null)) {
			return 0;
		}
		return JkLangString.toInteger(this.port);
	};
	JkUrlURL.prototype.getQueryParameter = function(key) {
		if(!(this.queryParameters != null)) {
			return null;
		}
		return JkLangMap.get(this.queryParameters, key);
	};
	JkUrlURL.prototype.addQueryParameter = function(key, value) {
		if(!(this.rawQueryParameters != null)) {
			this.rawQueryParameters = JkLangKeyValueList.NEW();
		}
		if(!(this.queryParameters != null)) {
			this.queryParameters = new Map;
		}
		JkLangMap.set(this.queryParameters, key, value);
		this.rawQueryParameters.add(key, value);
	};
	JkUrlURL.prototype.getScheme = function() {
		return this.scheme;
	};
	JkUrlURL.prototype.setScheme = function(v) {
		this.scheme = v;
		return this;
	};
	JkUrlURL.prototype.getUsername = function() {
		return this.username;
	};
	JkUrlURL.prototype.setUsername = function(v) {
		this.username = v;
		return this;
	};
	JkUrlURL.prototype.getPassword = function() {
		return this.password;
	};
	JkUrlURL.prototype.setPassword = function(v) {
		this.password = v;
		return this;
	};
	JkUrlURL.prototype.getHost = function() {
		return this.host;
	};
	JkUrlURL.prototype.setHost = function(v) {
		this.host = v;
		return this;
	};
	JkUrlURL.prototype.getPort = function() {
		return this.port;
	};
	JkUrlURL.prototype.setPort = function(v) {
		this.port = v;
		return this;
	};
	JkUrlURL.prototype.getPath = function() {
		return this.path;
	};
	JkUrlURL.prototype.setPath = function(v) {
		this.path = v;
		return this;
	};
	JkUrlURL.prototype.getFragment = function() {
		return this.fragment;
	};
	JkUrlURL.prototype.setFragment = function(v) {
		this.fragment = v;
		return this;
	};
	JkUrlURL.prototype.getRawQueryParameters = function() {
		return this.rawQueryParameters;
	};
	JkUrlURL.prototype.setRawQueryParameters = function(v) {
		this.rawQueryParameters = v;
		return this;
	};
	JkUrlURL.prototype.getQueryParameters = function() {
		return this.queryParameters;
	};
	JkUrlURL.prototype.setQueryParameters = function(v) {
		this.queryParameters = v;
		return this;
	};
	JkUrlURL.prototype.getOriginal = function() {
		return this.original;
	};
	JkUrlURL.prototype.setOriginal = function(v) {
		this.original = v;
		return this;
	};
	JkUrlURL.prototype.getPercentOnly = function() {
		return this.percentOnly;
	};
	JkUrlURL.prototype.setPercentOnly = function(v) {
		this.percentOnly = v;
		return this;
	};
	JkUrlURL.prototype.getEncodeUnreservedChars = function() {
		return this.encodeUnreservedChars;
	};
	JkUrlURL.prototype.setEncodeUnreservedChars = function(v) {
		this.encodeUnreservedChars = v;
		return this;
	};
	JkUrlURL.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUrlURL"] === true;
	};
	let JkUrlURLEncoder = function() {
	};
	JkUrlURLEncoder.prototype._t = { "JkUrlURLEncoder" : true };
	JkUrlURLEncoder.prototype._tobj = JkUrlURLEncoder;
	JkUrlURLEncoder.NEW = function() {
		var v = new JkUrlURLEncoder;
		return v.CTOR_JkUrlURLEncoder();
	};
	JkUrlURLEncoder.prototype.CTOR_JkUrlURLEncoder = function() {
		return this;
	};
	JkUrlURLEncoder.encode = function(str, percentOnly, encodeUnreservedChars) {
		if(!(str != null)) {
			return null;
		}
		var buffer = JkLangString.toUTF8Buffer(str);
		var sb = JkLangStringBuilder.NEW();
		for(var i = 0 ; i < buffer.byteLength ; i++) {
			var c = JkLangBuffer.getByte(buffer, i);
			if(c < 1) {
				break;
			}
			if(c >= "a".charCodeAt() && c <= "z".charCodeAt() || c >= "A".charCodeAt() && c <= "Z".charCodeAt() || c >= "0".charCodeAt() && c <= "9".charCodeAt()) {
				sb.appendCharacter(c);
			}
			else if((c == "-".charCodeAt() || c == ".".charCodeAt() || c == "_".charCodeAt() || c == "~".charCodeAt()) && encodeUnreservedChars == false) {
				sb.appendCharacter(c);
			}
			else if(c == " ".charCodeAt() && percentOnly == false) {
				sb.appendCharacter(("+".charCodeAt()));
			}
			else {
				sb.appendCharacter(("%".charCodeAt()));
				sb.appendString((JkLangString.forIntegerHex((~(~c) & 0xff), 0)));
			}
		}
		return sb.toString();
	};
	JkUrlURLEncoder.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUrlURLEncoder"] === true;
	};
	let JkTimeSystemClock = function() {
	};
	JkTimeSystemClock.prototype._t = { "JkTimeSystemClock" : true };
	JkTimeSystemClock.prototype._tobj = JkTimeSystemClock;
	JkTimeSystemClock.NEW = function() {
		var v = new JkTimeSystemClock;
		return v.CTOR_JkTimeSystemClock();
	};
	JkTimeSystemClock.prototype.CTOR_JkTimeSystemClock = function() {
		return this;
	};
	JkTimeSystemClock.asDateTimeUTC = function() {
		return JkLangDateTime.forSeconds((JkTimeSystemClock.asUTCSeconds()));
	};
	JkTimeSystemClock.asDateTimeLocal = function() {
		var v = JkLangDateTime.forSeconds((JkTimeSystemClock.asSeconds()));
		v.setTimezoneOffset((JkTimeSystemClock.getTimezoneOffsetAsSeconds()));
		return v;
	};
	JkTimeSystemClock.getTimezoneOffsetAsSeconds = function() {
		var v = 0;
		v = -(new Date()).getTimezoneOffset();
		;
		return v * 60;
	};
	JkTimeSystemClock.asUTCSeconds = function() {
		return JkTimeSystemClock.asSeconds() + JkTimeSystemClock.getTimezoneOffsetAsSeconds();
	};
	JkTimeSystemClock.asSeconds = function() {
		var v = 0;
		v = (new Date()).getTime() / 1000;
		;
		v -= JkTimeSystemClock.getTimezoneOffsetAsSeconds();
		return v;
	};
	JkTimeSystemClock.asTimeValue = function() {
		var v = JkLangTimeValue.NEW();
		JkTimeSystemClock.update(v);
		return v;
	};
	JkTimeSystemClock.update = function(v) {
		if(!(v != null)) {
			return;
		}
		var ct = (new Date()).getTime();
		var ms = ct % 1000;
		v.setSeconds((parseInt((ct / 1000))));
		v.setMicroSeconds((parseInt((ms * 1000))));
		;
	};
	JkTimeSystemClock.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkTimeSystemClock"] === true;
	};
	let JkOsOS = function() {
	};
	JkOsOS.prototype._t = { "JkOsOS" : true };
	JkOsOS.prototype._tobj = JkOsOS;
	JkOsOS.NEW = function() {
		var v = new JkOsOS;
		return v.CTOR_JkOsOS();
	};
	JkOsOS.prototype.CTOR_JkOsOS = function() {
		return this;
	};
	JkOsOS.getCurrentPlatformName = function() {
		return "Web5";
	};
	JkOsOS.is32Bit = function() {
		var cpu = JkOsOS.getProcessorType();
		if(cpu == "x86" || cpu == "arm") {
			return true;
		}
		return false;
	};
	JkOsOS.is64Bit = function() {
		var cpu = JkOsOS.getProcessorType();
		if(cpu == "x64" || cpu == "arm64") {
			return true;
		}
		return false;
	};
	JkOsOS.getProcessorType = function() {
		return null;
	};
	JkOsOS.isWindows = function() {
		return false;
	};
	JkOsOS.isLinux = function() {
		return false;
	};
	JkOsOS.isMacOS = function() {
		return false;
	};
	JkOsOS.isOSX = function() {
		return JkOsOS.isMacOS();
	};
	JkOsOS.isAndroid = function() {
		return false;
	};
	JkOsOS.isIOS = function() {
		return false;
	};
	JkOsOS.isSystemType = function(ida) {
		var id = ida;
		if(id == "osx") {
			id = "macos";
		}
		return false;
	};
	JkOsOS.isDirectory = function(path) {
		if(!JkLangString.isNotEmpty(path)) {
			return false;
		}
		console.log("[jk.os.OS.isDirectory] (OS.sling:385:3): Not implemented");
		return false;
	};
	JkOsOS.isFile = function(path) {
		if(!JkLangString.isNotEmpty(path)) {
			return false;
		}
		console.log("[jk.os.OS.isFile] (OS.sling:423:3): Not implemented");
		return false;
	};
	JkOsOS.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkOsOS"] === true;
	};
	let JkLogLoggingContext = {};
	JkLogLoggingContext.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLogLoggingContext"] === true;
	};
	let JkLogLog = function() {
	};
	JkLogLog.prototype._t = { "JkLogLog" : true };
	JkLogLog.prototype._tobj = JkLogLog;
	JkLogLog.NEW = function() {
		var v = new JkLogLog;
		return v.CTOR_JkLogLog();
	};
	JkLogLog.prototype.CTOR_JkLogLog = function() {
		return this;
	};
	JkLogLog.asString = function(context, value) {
		if(context != null && (JkLangStringObjectWithDebug.IS_INSTANCE && JkLangStringObjectWithDebug.IS_INSTANCE(value))) {
			return value.toStringWithDebug((context.isInDebugMode()));
		}
		return JkLangString.asString(value);
	};
	JkLogLog.error = function(context, message) {
		if(context != null) {
			context.logError(message);
		}
	};
	JkLogLog.warning = function(context, message) {
		if(context != null) {
			context.logWarning(message);
		}
	};
	JkLogLog.info = function(context, message) {
		if(context != null) {
			context.logInfo(message);
		}
	};
	JkLogLog.debug = function(context, message) {
		if(context != null) {
			context.logDebug(message);
		}
	};
	JkLogLog.status = function(context, message) {
		if(context != null) {
			context.logStatus(message);
		}
	};
	JkLogLog.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkLogLog"] === true;
	};
	let JkIoReader = {};
	JkIoReader.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoReader"] === true;
	};
	let JkIoSizedReader = {};
	JkIoSizedReader.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoSizedReader"] === true;
	};
	let JkIoFileDescriptor = {};
	JkIoFileDescriptor.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoFileDescriptor"] === true;
	};
	let JkIoLineReader = {};
	JkIoLineReader.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoLineReader"] === true;
	};
	let JkIoWriter = {};
	JkIoWriter.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoWriter"] === true;
	};
	let JkIoDataStream = {};
	JkIoDataStream.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoDataStream"] === true;
	};
	let JkIoFileDescriptorReader = function() {
		this.fd = -1;
	};
	JkIoFileDescriptorReader.prototype._t = {
		"JkIoFileDescriptorReader" : true,
		"JkIoFileDescriptor" : true,
		"JkIoReader" : true,
		"JkLangClosable" : true
	};
	JkIoFileDescriptorReader.prototype._tobj = JkIoFileDescriptorReader;
	JkIoFileDescriptorReader.NEW = function() {
		var v = new JkIoFileDescriptorReader;
		return v.CTOR_JkIoFileDescriptorReader();
	};
	JkIoFileDescriptorReader.prototype.CTOR_JkIoFileDescriptorReader = function() {
		this.fd = -1;
		return this;
	};
	JkIoFileDescriptorReader.forFileDescriptor = function(fd) {
		var v = JkIoFileDescriptorReader.NEW();
		v.setFd(fd);
		return v;
	};
	JkIoFileDescriptorReader.prototype.getFileDescriptor = function() {
		return this.fd;
	};
	JkIoFileDescriptorReader.prototype.read = function(buffer) {
		var v = -1;
		console.log("[jk.io.FileDescriptorReader.read] (FileDescriptorReader.sling:57:3): Not implemented");
		return v;
	};
	JkIoFileDescriptorReader.prototype.close = function() {
		console.log("[jk.io.FileDescriptorReader.close] (FileDescriptorReader.sling:74:3): Not implemented");
	};
	JkIoFileDescriptorReader.prototype.getFd = function() {
		return this.fd;
	};
	JkIoFileDescriptorReader.prototype.setFd = function(v) {
		this.fd = v;
		return this;
	};
	JkIoFileDescriptorReader.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoFileDescriptorReader"] === true;
	};
	let JkIoBinaryReader = function() {
		this.reader = null;
		this.buffer1 = null;
		this.buffer2 = null;
		this.buffer4 = null;
	};
	JkIoBinaryReader.prototype._t = {
		"JkLangClosable" : true,
		"JkIoBinaryReader" : true
	};
	JkIoBinaryReader.prototype._tobj = JkIoBinaryReader;
	JkIoBinaryReader.NEW = function() {
		var v = new JkIoBinaryReader;
		return v.CTOR_JkIoBinaryReader();
	};
	JkIoBinaryReader.prototype.CTOR_JkIoBinaryReader = function() {
		this.buffer4 = null;
		this.buffer2 = null;
		this.buffer1 = null;
		this.reader = null;
		return this;
	};
	JkIoBinaryReader.forReader = function(reader) {
		var v = JkIoBinaryReader.NEW();
		v.setReader(reader);
		return v;
	};
	JkIoBinaryReader.prototype.isOK = function() {
		if(!(this.reader != null)) {
			return false;
		}
		return true;
	};
	JkIoBinaryReader.prototype.close = function() {
		var rc = (function(o) {
			if(JkLangClosable.IS_INSTANCE && JkLangClosable.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))(this.reader);
		if(rc != null) {
			rc.close();
		}
		this.reader = null;
	};
	JkIoBinaryReader.prototype.seek = function(position) {
		var sr = (function(o) {
			if(JkIoSeekableReader.IS_INSTANCE && JkIoSeekableReader.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))(this.reader);
		if(!(sr != null)) {
			return false;
		}
		return sr.setCurrentPosition(position);
	};
	JkIoBinaryReader.prototype.read1 = function() {
		if(!(this.reader != null)) {
			return null;
		}
		if(!(this.buffer1 != null)) {
			this.buffer1 = new ArrayBuffer(1);
		}
		var r = this.reader.read(this.buffer1);
		if(!(r == 1)) {
			this.close();
			return null;
		}
		return this.buffer1;
	};
	JkIoBinaryReader.prototype.read2 = function() {
		if(!(this.reader != null)) {
			return null;
		}
		if(!(this.buffer2 != null)) {
			this.buffer2 = new ArrayBuffer(2);
		}
		var r = this.reader.read(this.buffer2);
		if(!(r == 2)) {
			this.close();
			return null;
		}
		return this.buffer2;
	};
	JkIoBinaryReader.prototype.read4 = function() {
		if(!(this.reader != null)) {
			return null;
		}
		if(!(this.buffer4 != null)) {
			this.buffer4 = new ArrayBuffer(4);
		}
		var r = this.reader.read(this.buffer4);
		if(!(r == 4)) {
			this.close();
			return null;
		}
		return this.buffer4;
	};
	JkIoBinaryReader.prototype.readBuffer = function(size) {
		if(!(this.reader != null)) {
			return null;
		}
		if(!(size > 0)) {
			return null;
		}
		var b = new ArrayBuffer(size);
		var r = this.reader.read(b);
		if(!(r == size)) {
			this.close();
			return null;
		}
		return b;
	};
	JkIoBinaryReader.prototype.readInt8 = function() {
		var b = this.read1();
		if(!(b != null)) {
			return ~(~0);
		}
		return JkLangBuffer.getInt8(b, 0);
	};
	JkIoBinaryReader.prototype.readInt16LE = function() {
		var b = this.read2();
		if(!(b != null)) {
			return ~(~0);
		}
		return JkLangBuffer.getInt16LE(b, 0);
	};
	JkIoBinaryReader.prototype.readInt16BE = function() {
		var b = this.read2();
		if(!(b != null)) {
			return ~(~0);
		}
		return JkLangBuffer.getInt16BE(b, 0);
	};
	JkIoBinaryReader.prototype.readInt32LE = function() {
		var b = this.read4();
		if(!(b != null)) {
			return ~(~0);
		}
		return JkLangBuffer.getInt32LE(b, 0);
	};
	JkIoBinaryReader.prototype.readInt32BE = function() {
		var b = this.read4();
		if(!(b != null)) {
			return ~(~0);
		}
		return JkLangBuffer.getInt32BE(b, 0);
	};
	JkIoBinaryReader.prototype.getReader = function() {
		return this.reader;
	};
	JkIoBinaryReader.prototype.setReader = function(v) {
		this.reader = v;
		return this;
	};
	JkIoBinaryReader.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoBinaryReader"] === true;
	};
	let JkIoBufferWriter = function() {
		this.buffer = null;
		this.pos = 0;
	};
	JkIoBufferWriter.prototype._t = {
		"JkIoBufferWriter" : true,
		"JkIoWriter" : true
	};
	JkIoBufferWriter.prototype._tobj = JkIoBufferWriter;
	JkIoBufferWriter.NEW = function() {
		var v = new JkIoBufferWriter;
		return v.CTOR_JkIoBufferWriter();
	};
	JkIoBufferWriter.prototype.CTOR_JkIoBufferWriter = function() {
		this.pos = 0;
		this.buffer = null;
		return this;
	};
	JkIoBufferWriter.forBuffer = function(buf) {
		var v = JkIoBufferWriter.NEW();
		v.buffer = buf;
		return v;
	};
	JkIoBufferWriter.prototype.getBufferSize = function() {
		return ~(~JkLangBuffer.getSize(this.buffer));
	};
	JkIoBufferWriter.prototype.getBufferPos = function() {
		return 0;
	};
	JkIoBufferWriter.prototype.getBuffer = function() {
		return this.buffer;
	};
	JkIoBufferWriter.prototype.write = function(src, ssize) {
		if(src == null) {
			return 0;
		}
		var size = ssize;
		if(size < 0) {
			size = ~(~JkLangBuffer.getSize(src));
		}
		if(size < 1) {
			return 0;
		}
		if(this.buffer == null) {
			this.buffer = new ArrayBuffer(size);
			if(this.buffer == null) {
				return 0;
			}
			JkLangBuffer.copyFrom(this.buffer, src, 0, 0, size);
			this.pos = size;
		}
		else if(this.pos + size <= JkLangBuffer.getSize(this.buffer)) {
			JkLangBuffer.copyFrom(this.buffer, src, 0, this.pos, size);
			this.pos += size;
		}
		else {
			var nb = JkLangBuffer.resize(this.buffer, (this.pos + size));
			if(nb == null) {
				return 0;
			}
			this.buffer = nb;
			JkLangBuffer.copyFrom(this.buffer, src, 0, this.pos, size);
			this.pos += size;
		}
		return size;
	};
	JkIoBufferWriter.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoBufferWriter"] === true;
	};
	let JkIoCharacterIteratorForReader = function() {
		JkLangCharacterDecoder.call(this);
		this.reader = null;
		this.buffer = null;
		this.bufferStart = -1;
		this.bufferSize = 0;
		this.bufferDataSize = 0;
		this.currentPos = -1;
		this.readPos = 0;
	};
	JkIoCharacterIteratorForReader.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkLangCharacterDecoder.prototype);
	JkIoCharacterIteratorForReader.prototype.constructor = JkIoCharacterIteratorForReader;
	JkIoCharacterIteratorForReader.prototype._t = {
		"JkLangCharacterIterator" : true,
		"JkLangCharacterDecoder" : true,
		"JkIoCharacterIteratorForReader" : true
	};
	JkIoCharacterIteratorForReader.prototype._tobj = JkIoCharacterIteratorForReader;
	JkIoCharacterIteratorForReader.NEW_JkIoReaderInteger = function(reader, bufferSize) {
		var v = new JkIoCharacterIteratorForReader;
		return v.CTOR_JkIoCharacterIteratorForReader_JkIoReaderInteger(reader, bufferSize);
	};
	JkIoCharacterIteratorForReader.prototype.CTOR_JkIoCharacterIteratorForReader_JkIoReaderInteger = function(reader, bufferSize) {
		if(JkLangCharacterDecoder.prototype.CTOR_JkLangCharacterDecoder.call(this) == null) {
			return null;
		}
		this.readPos = 0;
		this.currentPos = -1;
		this.bufferDataSize = 0;
		this.bufferSize = 0;
		this.bufferStart = -1;
		this.buffer = null;
		this.reader = null;
		this.reader = reader;
		this.buffer = new ArrayBuffer(bufferSize);
		this.bufferSize = bufferSize;
		return this;
	};
	JkIoCharacterIteratorForReader.NEW_JkIoReader = function(reader) {
		var v = new JkIoCharacterIteratorForReader;
		return v.CTOR_JkIoCharacterIteratorForReader_JkIoReader(reader);
	};
	JkIoCharacterIteratorForReader.prototype.CTOR_JkIoCharacterIteratorForReader_JkIoReader = function(reader) {
		if(JkLangCharacterDecoder.prototype.CTOR_JkLangCharacterDecoder.call(this) == null) {
			return null;
		}
		this.readPos = 0;
		this.currentPos = -1;
		this.bufferDataSize = 0;
		this.bufferSize = 0;
		this.bufferStart = -1;
		this.buffer = null;
		this.reader = null;
		this.reader = reader;
		this.buffer = new ArrayBuffer(1024);
		this.bufferSize = 1024;
		return this;
	};
	JkIoCharacterIteratorForReader.forReader = function(reader) {
		return JkIoCharacterIteratorForReader.NEW_JkIoReader(reader);
	};
	JkIoCharacterIteratorForReader.forReaderWithBufferSize = function(reader, bufferSize) {
		return JkIoCharacterIteratorForReader.NEW_JkIoReaderInteger(reader, bufferSize);
	};
	JkIoCharacterIteratorForReader.prototype.makeDataAvailable = function(n) {
		if(n >= this.bufferStart && n < this.bufferStart + this.bufferDataSize) {
			return true;
		}
		if(JkIoSeekableReader.IS_INSTANCE && JkIoSeekableReader.IS_INSTANCE(this.reader)) {
			var rs = this.reader;
			var block = n / this.bufferSize;
			var blockPos = block * this.bufferSize;
			if(this.readPos != blockPos) {
				if(!rs.setCurrentPosition(blockPos)) {
					return false;
				}
				this.readPos = blockPos;
			}
		}
		this.bufferDataSize = this.reader.read(this.buffer);
		this.bufferStart = this.readPos;
		this.readPos += this.bufferDataSize;
		if(n >= this.bufferStart && n < this.bufferStart + this.bufferDataSize) {
			return true;
		}
		return false;
	};
	JkIoCharacterIteratorForReader.prototype.moveToPreviousByte = function() {
		if(!this.makeDataAvailable((this.currentPos - 1))) {
			return false;
		}
		this.currentPos--;
		return true;
	};
	JkIoCharacterIteratorForReader.prototype.moveToNextByte = function() {
		if(!this.makeDataAvailable((this.currentPos + 1))) {
			return false;
		}
		this.currentPos++;
		return true;
	};
	JkIoCharacterIteratorForReader.prototype.getCurrentByte = function() {
		return JkLangBuffer.getByte(this.buffer, (this.currentPos - this.bufferStart));
	};
	JkIoCharacterIteratorForReader.prototype.getCurrentPosition = function() {
		return ~(~this.currentPos);
	};
	JkIoCharacterIteratorForReader.prototype.setCurrentPosition = function(position) {
		this.currentPos = position;
	};
	JkIoCharacterIteratorForReader.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoCharacterIteratorForReader"] === true;
	};
	let JkIoPrintWriter = {};
	JkIoPrintWriter.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoPrintWriter"] === true;
	};
	let JkIoFlushableWriter = {};
	JkIoFlushableWriter.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoFlushableWriter"] === true;
	};
	let JkIoStringLineReader = function() {
		this.iterator = null;
	};
	JkIoStringLineReader.prototype._t = {
		"JkIoStringLineReader" : true,
		"JkIoLineReader" : true
	};
	JkIoStringLineReader.prototype._tobj = JkIoStringLineReader;
	JkIoStringLineReader.NEW_String = function(str) {
		var v = new JkIoStringLineReader;
		return v.CTOR_JkIoStringLineReader_String(str);
	};
	JkIoStringLineReader.prototype.CTOR_JkIoStringLineReader_String = function(str) {
		this.iterator = null;
		this.iterator = JkLangCharacterIteratorForString.forString(str);
		return this;
	};
	JkIoStringLineReader.prototype.readLine = function() {
		if(!(this.iterator != null)) {
			return null;
		}
		var sb = JkLangStringBuilder.NEW();
		while(true){
			var c = this.iterator.getNextChar();
			if(c < 1) {
				if(sb.count() < 1) {
					return null;
				}
				break;
			}
			if(c == "\r".charCodeAt()) {
				continue;
			}
			if(c == "\n".charCodeAt()) {
				break;
			}
			sb.appendCharacter(c);
		}
		if(sb.count() < 1) {
			return "";
		}
		return sb.toString();
	};
	JkIoStringLineReader.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoStringLineReader"] === true;
	};
	let JkIoFileDescriptorWriter = function() {
		this.fd = -1;
		this.owned = true;
	};
	JkIoFileDescriptorWriter.prototype._t = {
		"JkIoFileDescriptorWriter" : true,
		"JkIoFileDescriptor" : true,
		"JkLangClosable" : true,
		"JkIoWriter" : true
	};
	JkIoFileDescriptorWriter.prototype._tobj = JkIoFileDescriptorWriter;
	JkIoFileDescriptorWriter.NEW = function() {
		var v = new JkIoFileDescriptorWriter;
		return v.CTOR_JkIoFileDescriptorWriter();
	};
	JkIoFileDescriptorWriter.prototype.CTOR_JkIoFileDescriptorWriter = function() {
		this.owned = true;
		this.fd = -1;
		return this;
	};
	JkIoFileDescriptorWriter.forFileDescriptor = function(fd) {
		var v = JkIoFileDescriptorWriter.NEW();
		v.setFd(fd);
		return v;
	};
	JkIoFileDescriptorWriter.forUnownedFileDescriptor = function(fd) {
		var v = JkIoFileDescriptorWriter.NEW();
		v.setFd(fd);
		v.setOwned(false);
		return v;
	};
	JkIoFileDescriptorWriter.prototype.getFileDescriptor = function() {
		return this.fd;
	};
	JkIoFileDescriptorWriter.prototype.write = function(buf, size) {
		var v = -1;
		console.log("[jk.io.FileDescriptorWriter.write] (FileDescriptorWriter.sling:66:3): Not implemented");
		return v;
	};
	JkIoFileDescriptorWriter.prototype.close = function() {
		if(!this.owned) {
			return;
		}
		console.log("[jk.io.FileDescriptorWriter.close] (FileDescriptorWriter.sling:84:3): Not implemented");
	};
	JkIoFileDescriptorWriter.prototype.getFd = function() {
		return this.fd;
	};
	JkIoFileDescriptorWriter.prototype.setFd = function(v) {
		this.fd = v;
		return this;
	};
	JkIoFileDescriptorWriter.prototype.getOwned = function() {
		return this.owned;
	};
	JkIoFileDescriptorWriter.prototype.setOwned = function(v) {
		this.owned = v;
		return this;
	};
	JkIoFileDescriptorWriter.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoFileDescriptorWriter"] === true;
	};
	let JkIoSeekableReader = {};
	JkIoSeekableReader.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoSeekableReader"] === true;
	};
	let JkIoPrintReader = function() {
		this.reader = null;
		this.iterator = null;
	};
	JkIoPrintReader.prototype._t = {
		"JkIoPrintReader" : true,
		"JkLangClosable" : true,
		"JkIoReader" : true,
		"JkIoLineReader" : true
	};
	JkIoPrintReader.prototype._tobj = JkIoPrintReader;
	JkIoPrintReader.NEW = function() {
		var v = new JkIoPrintReader;
		return v.CTOR_JkIoPrintReader();
	};
	JkIoPrintReader.prototype.CTOR_JkIoPrintReader = function() {
		this.iterator = null;
		this.reader = null;
		return this;
	};
	JkIoPrintReader.forReader = function(reader) {
		if(!(reader != null)) {
			return null;
		}
		if(JkIoPrintReader.IS_INSTANCE && JkIoPrintReader.IS_INSTANCE(reader)) {
			return reader;
		}
		var v = JkIoPrintReader.NEW();
		v.setReader(reader, null);
		return v;
	};
	JkIoPrintReader.forReaderAndEncoding = function(reader, encoding) {
		if(!(reader != null)) {
			return null;
		}
		if(JkIoPrintReader.IS_INSTANCE && JkIoPrintReader.IS_INSTANCE(reader)) {
			return reader;
		}
		var v = JkIoPrintReader.NEW();
		v.setReader(reader, encoding);
		return v;
	};
	JkIoPrintReader.prototype.setReader = function(reader, encoding) {
		this.reader = reader;
		if(reader == null) {
			this.iterator = null;
		}
		else {
			this.iterator = JkIoCharacterIteratorForReader.forReader(reader);
			if(encoding != null) {
				this.iterator.setEncoding(encoding);
			}
		}
	};
	JkIoPrintReader.prototype.readLine = function() {
		if(!(this.iterator != null)) {
			return null;
		}
		var sb = JkLangStringBuilder.NEW();
		while(true){
			var c = this.iterator.getNextChar();
			if(JkLangCharacter.isEOF(c)) {
				if(sb.count() < 1) {
					return null;
				}
				break;
			}
			if(c == "\r".charCodeAt()) {
				continue;
			}
			if(c == "\n".charCodeAt()) {
				break;
			}
			sb.appendCharacter(c);
		}
		if(sb.count() < 1) {
			return "";
		}
		return sb.toString();
	};
	JkIoPrintReader.prototype.readAll = function() {
		if(!(this.iterator != null)) {
			return null;
		}
		var sb = JkLangStringBuilder.NEW();
		while(true){
			var c = this.iterator.getNextChar();
			if(JkLangCharacter.isEOF(c)) {
				break;
			}
			sb.appendCharacter(c);
		}
		if(sb.count() < 1) {
			return null;
		}
		return sb.toString();
	};
	JkIoPrintReader.prototype.hasEnded = function() {
		if(!(this.iterator != null)) {
			return true;
		}
		return this.iterator.hasEnded();
	};
	JkIoPrintReader.prototype.read = function(buffer) {
		if(this.reader == null) {
			return -1;
		}
		return this.reader.read(buffer);
	};
	JkIoPrintReader.prototype.close = function() {
		var rc = (function(o) {
			if(JkLangClosable.IS_INSTANCE && JkLangClosable.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))(this.reader);
		if(rc != null) {
			rc.close();
		}
	};
	JkIoPrintReader.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoPrintReader"] === true;
	};
	let JkIoDataStreamSource = {};
	JkIoDataStreamSource.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoDataStreamSource"] === true;
	};
	let JkIoStaticFileDescriptor = function() {
		this.fileDescriptor = 0;
	};
	JkIoStaticFileDescriptor.prototype._t = {
		"JkIoStaticFileDescriptor" : true,
		"JkIoFileDescriptor" : true
	};
	JkIoStaticFileDescriptor.prototype._tobj = JkIoStaticFileDescriptor;
	JkIoStaticFileDescriptor.NEW = function() {
		var v = new JkIoStaticFileDescriptor;
		return v.CTOR_JkIoStaticFileDescriptor();
	};
	JkIoStaticFileDescriptor.prototype.CTOR_JkIoStaticFileDescriptor = function() {
		this.fileDescriptor = 0;
		return this;
	};
	JkIoStaticFileDescriptor.forFileDescriptor = function(fd) {
		return JkIoStaticFileDescriptor.NEW().setFileDescriptor(fd);
	};
	JkIoStaticFileDescriptor.prototype.getFileDescriptor = function() {
		return this.fileDescriptor;
	};
	JkIoStaticFileDescriptor.prototype.setFileDescriptor = function(v) {
		this.fileDescriptor = v;
		return this;
	};
	JkIoStaticFileDescriptor.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoStaticFileDescriptor"] === true;
	};
	let JkIoPrintWriterWrapper = function() {
		this.writer = null;
	};
	JkIoPrintWriterWrapper.prototype._t = {
		"JkIoWriter" : true,
		"JkIoPrintWriterWrapper" : true,
		"JkIoPrintWriter" : true,
		"JkIoFlushableWriter" : true,
		"JkLangClosable" : true
	};
	JkIoPrintWriterWrapper.prototype._tobj = JkIoPrintWriterWrapper;
	JkIoPrintWriterWrapper.NEW = function() {
		var v = new JkIoPrintWriterWrapper;
		return v.CTOR_JkIoPrintWriterWrapper();
	};
	JkIoPrintWriterWrapper.prototype.CTOR_JkIoPrintWriterWrapper = function() {
		this.writer = null;
		return this;
	};
	JkIoPrintWriterWrapper.forWriter = function(writer) {
		if(writer == null) {
			return null;
		}
		if(JkIoPrintWriter.IS_INSTANCE && JkIoPrintWriter.IS_INSTANCE(writer)) {
			return writer;
		}
		var v = JkIoPrintWriterWrapper.NEW();
		v.setWriter(writer);
		return v;
	};
	JkIoPrintWriterWrapper.closeWriter = function(writer) {
		var wc = (function(o) {
			if(JkLangClosable.IS_INSTANCE && JkLangClosable.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))(writer);
		if(!(wc != null)) {
			return null;
		}
		wc.close();
		return null;
	};
	JkIoPrintWriterWrapper.prototype.print = function(str) {
		if(str == null) {
			return false;
		}
		var buffer = JkLangString.toUTF8Buffer(str);
		if(buffer == null) {
			return false;
		}
		var sz = ~(~JkLangBuffer.getSize(buffer));
		if(this.writer.write(buffer, (-1)) != sz) {
			return false;
		}
		return true;
	};
	JkIoPrintWriterWrapper.prototype.println = function(str) {
		return this.print((JkLangString.safeString(str) + "\n"));
	};
	JkIoPrintWriterWrapper.prototype.writeWholeBuffer = function(buf) {
		return this.write(buf, (-1));
	};
	JkIoPrintWriterWrapper.prototype.write = function(buf, size) {
		if(this.writer == null) {
			return -1;
		}
		return this.writer.write(buf, size);
	};
	JkIoPrintWriterWrapper.prototype.close = function() {
		var cw = (function(o) {
			if(JkLangClosable.IS_INSTANCE && JkLangClosable.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))(this.writer);
		if(cw != null) {
			cw.close();
		}
	};
	JkIoPrintWriterWrapper.prototype.flush = function() {
		var cw = (function(o) {
			if(JkIoFlushableWriter.IS_INSTANCE && JkIoFlushableWriter.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))(this.writer);
		if(cw != null) {
			cw.flush();
		}
	};
	JkIoPrintWriterWrapper.prototype.getWriter = function() {
		return this.writer;
	};
	JkIoPrintWriterWrapper.prototype.setWriter = function(v) {
		this.writer = v;
		return this;
	};
	JkIoPrintWriterWrapper.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoPrintWriterWrapper"] === true;
	};
	let JkIoByteReader = {};
	JkIoByteReader.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoByteReader"] === true;
	};
	let JkIoSeekableWriter = {};
	JkIoSeekableWriter.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoSeekableWriter"] === true;
	};
	let JkIoBufferReader = function() {
		this.buffer = null;
		this.pos = 0;
	};
	JkIoBufferReader.prototype._t = {
		"JkIoSeekableReader" : true,
		"JkIoSizedReader" : true,
		"JkIoReader" : true,
		"JkIoBufferReader" : true
	};
	JkIoBufferReader.prototype._tobj = JkIoBufferReader;
	JkIoBufferReader.NEW = function() {
		var v = new JkIoBufferReader;
		return v.CTOR_JkIoBufferReader();
	};
	JkIoBufferReader.prototype.CTOR_JkIoBufferReader = function() {
		this.pos = 0;
		this.buffer = null;
		return this;
	};
	JkIoBufferReader.readFrom = function(reader) {
		if(!(reader != null)) {
			return null;
		}
		var v = null;
		var tmp = new ArrayBuffer(1024);
		while(true){
			var r = reader.read(tmp);
			if(r < 1) {
				break;
			}
			v = JkLangBuffer.append(v, tmp, r);
			if(v == null) {
				break;
			}
		}
		return v;
	};
	JkIoBufferReader.forBuffer = function(buf) {
		return JkIoBufferReader.NEW().setBuffer(buf);
	};
	JkIoBufferReader.prototype.setCurrentPosition = function(n) {
		this.pos = ~(~n);
		return true;
	};
	JkIoBufferReader.prototype.getCurrentPosition = function() {
		return this.pos;
	};
	JkIoBufferReader.prototype.getBuffer = function() {
		return this.buffer;
	};
	JkIoBufferReader.prototype.setBuffer = function(buf) {
		this.buffer = buf;
		this.pos = 0;
		return this;
	};
	JkIoBufferReader.prototype.rewind = function() {
		this.pos = 0;
	};
	JkIoBufferReader.prototype.getSize = function() {
		if(this.buffer == null) {
			return 0;
		}
		return this.buffer.byteLength;
	};
	JkIoBufferReader.prototype.read = function(buf) {
		if(buf == null || this.buffer == null) {
			return 0;
		}
		var buffersz = this.buffer.byteLength;
		if(this.pos >= buffersz) {
			return 0;
		}
		var size = buf.byteLength;
		if(size > buffersz - this.pos) {
			size = buffersz - this.pos;
		}
		JkLangBuffer.copyFrom(buf, this.buffer, this.pos, 0, size);
		this.pos += size;
		return size;
	};
	JkIoBufferReader.prototype.getPos = function() {
		return this.pos;
	};
	JkIoBufferReader.prototype.setPos = function(v) {
		this.pos = v;
		return this;
	};
	JkIoBufferReader.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkIoBufferReader"] === true;
	};
	let JkFsFileReader = {};
	JkFsFileReader.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkFsFileReader"] === true;
	};
	let JkFsPathInfo = function() {
	};
	JkFsPathInfo.prototype._t = { "JkFsPathInfo" : true };
	JkFsPathInfo.prototype._tobj = JkFsPathInfo;
	JkFsPathInfo.NEW = function() {
		var v = new JkFsPathInfo;
		return v.CTOR_JkFsPathInfo();
	};
	JkFsPathInfo.prototype.CTOR_JkFsPathInfo = function() {
		return this;
	};
	JkFsPathInfo.getPathSeparator = function() {
		return "/".charCodeAt();
	};
	JkFsPathInfo.isAbsolutePath = function(path) {
		if(!(path != null)) {
			return false;
		}
		return JkLangString.startsWith(path, "/", 0);
	};
	JkFsPathInfo.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkFsPathInfo"] === true;
	};
	let JkFsFileInfo = function() {
		this.file = null;
		this.size = 0;
		this.createTime = 0;
		this.accessTime = 0;
		this.modifyTime = 0;
		this.ownerUser = 0;
		this.ownerGroup = 0;
		this.mode = 0;
		this.executable = false;
		this.type = 0;
		this.link = false;
	};
	JkFsFileInfo.prototype._t = { "JkFsFileInfo" : true };
	JkFsFileInfo.prototype._tobj = JkFsFileInfo;
	JkFsFileInfo.NEW = function() {
		var v = new JkFsFileInfo;
		return v.CTOR_JkFsFileInfo();
	};
	JkFsFileInfo.prototype.CTOR_JkFsFileInfo = function() {
		this.link = false;
		this.type = 0;
		this.executable = false;
		this.mode = 0;
		this.ownerGroup = 0;
		this.ownerUser = 0;
		this.modifyTime = 0;
		this.accessTime = 0;
		this.createTime = 0;
		this.size = 0;
		this.file = null;
		return this;
	};
	JkFsFileInfo.forFile = function(file) {
		if(file == null) {
			return JkFsFileInfo.NEW();
		}
		return file.stat();
	};
	JkFsFileInfo.prototype.setFile = function(v) {
		this.file = v;
	};
	JkFsFileInfo.prototype.setSize = function(v) {
		this.size = v;
	};
	JkFsFileInfo.prototype.setCreateTime = function(v) {
		this.createTime = v;
	};
	JkFsFileInfo.prototype.setAccessTime = function(v) {
		this.accessTime = v;
	};
	JkFsFileInfo.prototype.setModifyTime = function(v) {
		this.modifyTime = v;
	};
	JkFsFileInfo.prototype.setOwnerUser = function(v) {
		this.ownerUser = v;
	};
	JkFsFileInfo.prototype.setOwnerGroup = function(v) {
		this.ownerGroup = v;
	};
	JkFsFileInfo.prototype.setMode = function(v) {
		this.mode = v;
	};
	JkFsFileInfo.prototype.setExecutable = function(v) {
		this.executable = v;
	};
	JkFsFileInfo.prototype.setType = function(v) {
		this.type = v;
	};
	JkFsFileInfo.prototype.setLink = function(v) {
		this.link = v;
	};
	JkFsFileInfo.prototype.getFile = function() {
		return this.file;
	};
	JkFsFileInfo.prototype.getSize = function() {
		return this.size;
	};
	JkFsFileInfo.prototype.getCreateTime = function() {
		return this.createTime;
	};
	JkFsFileInfo.prototype.getCreateTimeUTC = function() {
		return this.createTime + JkTimeSystemClock.getTimezoneOffsetAsSeconds();
	};
	JkFsFileInfo.prototype.getAccessTime = function() {
		return this.accessTime;
	};
	JkFsFileInfo.prototype.getAccessTimeUTC = function() {
		return this.accessTime + JkTimeSystemClock.getTimezoneOffsetAsSeconds();
	};
	JkFsFileInfo.prototype.getModifyTime = function() {
		return this.modifyTime;
	};
	JkFsFileInfo.prototype.getModifyTimeUTC = function() {
		return this.modifyTime + JkTimeSystemClock.getTimezoneOffsetAsSeconds();
	};
	JkFsFileInfo.prototype.getOwnerUser = function() {
		return this.ownerUser;
	};
	JkFsFileInfo.prototype.getOwnerGroup = function() {
		return this.ownerGroup;
	};
	JkFsFileInfo.prototype.getMode = function() {
		return this.mode;
	};
	JkFsFileInfo.prototype.getExecutable = function() {
		return this.executable;
	};
	JkFsFileInfo.prototype.getType = function() {
		return this.type;
	};
	JkFsFileInfo.prototype.getLink = function() {
		return this.link;
	};
	JkFsFileInfo.prototype.isFile = function() {
		if(this.type == JkFsFileInfo.FILE_TYPE_FILE) {
			return true;
		}
		return false;
	};
	JkFsFileInfo.prototype.isLink = function() {
		return this.link;
	};
	JkFsFileInfo.prototype.isDirectory = function() {
		if(this.type == JkFsFileInfo.FILE_TYPE_DIR) {
			return true;
		}
		return false;
	};
	JkFsFileInfo.prototype.exists = function() {
		return this.isFile() || this.isDirectory() || this.isLink();
	};
	JkFsFileInfo.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkFsFileInfo"] === true;
	};
	JkFsFileInfo.FILE_TYPE_UNKNOWN = 0;
	JkFsFileInfo.FILE_TYPE_FILE = 1;
	JkFsFileInfo.FILE_TYPE_DIR = 2;
	let JkFsFileWriter = {};
	JkFsFileWriter.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkFsFileWriter"] === true;
	};
	let JkFsCurrentDirectory = function() {
	};
	JkFsCurrentDirectory.prototype._t = { "JkFsCurrentDirectory" : true };
	JkFsCurrentDirectory.prototype._tobj = JkFsCurrentDirectory;
	JkFsCurrentDirectory.NEW = function() {
		var v = new JkFsCurrentDirectory;
		return v.CTOR_JkFsCurrentDirectory();
	};
	JkFsCurrentDirectory.prototype.CTOR_JkFsCurrentDirectory = function() {
		return this;
	};
	JkFsCurrentDirectory.set = function(dir) {
		if(!(dir != null)) {
			return;
		}
		console.log("[jk.fs.CurrentDirectory.set] (CurrentDirectory.sling:36:3): Not implemented");
	};
	JkFsCurrentDirectory.get = function() {
		console.log("[jk.fs.CurrentDirectory.get] (CurrentDirectory.sling:49:3): Not implemented");
		return JkFsFileInvalid.NEW();
	};
	JkFsCurrentDirectory.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkFsCurrentDirectory"] === true;
	};
	let JkFsFileForBrowserMyFileWriter = function() {
		this.key = null;
		this.isAppend = false;
		this.buffWriter = null;
	};
	JkFsFileForBrowserMyFileWriter.prototype._t = {
		"JkIoWriter" : true,
		"JkIoSeekableWriter" : true,
		"JkFsFileWriter" : true,
		"JkFsFileForBrowserMyFileWriter" : true,
		"JkLangClosable" : true
	};
	JkFsFileForBrowserMyFileWriter.prototype._tobj = JkFsFileForBrowserMyFileWriter;
	JkFsFileForBrowserMyFileWriter.NEW = function() {
		var v = new JkFsFileForBrowserMyFileWriter;
		return v.CTOR_JkFsFileForBrowserMyFileWriter();
	};
	JkFsFileForBrowserMyFileWriter.prototype.CTOR_JkFsFileForBrowserMyFileWriter = function() {
		this.buffWriter = null;
		this.isAppend = false;
		this.key = null;
		return this;
	};
	JkFsFileForBrowserMyFileWriter.prototype.write = function(buf, size) {
		if(!(this.buffWriter != null)) {
			this.buffWriter = JkIoBufferWriter.NEW();
		}
		return this.buffWriter.write(buf, size);
	};
	JkFsFileForBrowserMyFileWriter.prototype.close = function() {
		if(!(this.buffWriter != null)) {
			return;
		}
		if(this.isAppend == true) {
			var data = window.localStorage.getItem(this.key);
			var buffer = JkLangBuffer.append((JkLangString.toUTF8Buffer(data)), (this.buffWriter.getBuffer()));
			window.localStorage.setItem(this.key, (JkLangString.forUTF8Buffer(buffer)));
		}
		else {
			window.localStorage.setItem(this.key, (this.buffWriter.getBuffer()));
		}
		;
	};
	JkFsFileForBrowserMyFileWriter.prototype.getKey = function() {
		return this.key;
	};
	JkFsFileForBrowserMyFileWriter.prototype.setKey = function(v) {
		this.key = v;
		return this;
	};
	JkFsFileForBrowserMyFileWriter.prototype.getIsAppend = function() {
		return this.isAppend;
	};
	JkFsFileForBrowserMyFileWriter.prototype.setIsAppend = function(v) {
		this.isAppend = v;
		return this;
	};
	JkFsFileForBrowserMyFileWriter.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkFsFileForBrowserMyFileWriter"] === true;
	};
	let JkFsFileForBrowserMyFileReader = function() {
		this.key = null;
		this.buffReader = null;
	};
	JkFsFileForBrowserMyFileReader.prototype._t = {
		"JkLangClosable" : true,
		"JkIoReader" : true,
		"JkFsFileForBrowserMyFileReader" : true,
		"JkIoSizedReader" : true,
		"JkIoSeekableReader" : true,
		"JkFsFileReader" : true
	};
	JkFsFileForBrowserMyFileReader.prototype._tobj = JkFsFileForBrowserMyFileReader;
	JkFsFileForBrowserMyFileReader.NEW = function() {
		var v = new JkFsFileForBrowserMyFileReader;
		return v.CTOR_JkFsFileForBrowserMyFileReader();
	};
	JkFsFileForBrowserMyFileReader.prototype.CTOR_JkFsFileForBrowserMyFileReader = function() {
		this.buffReader = null;
		this.key = null;
		return this;
	};
	JkFsFileForBrowserMyFileReader.prototype.read = function(buffer) {
		var data = null;
		if(!(this.buffReader != null)) {
			data = window.localStorage.getItem(this.key);
			;
			var buf = JkLangString.toUTF8Buffer(data);
			this.buffReader = JkIoBufferReader.forBuffer(buf);
		}
		return this.buffReader.read(buffer);
	};
	JkFsFileForBrowserMyFileReader.prototype.getKey = function() {
		return this.key;
	};
	JkFsFileForBrowserMyFileReader.prototype.setKey = function(v) {
		this.key = v;
		return this;
	};
	JkFsFileForBrowserMyFileReader.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkFsFileForBrowserMyFileReader"] === true;
	};
	let JkFsFile = function() {
		this.lastErrorDescription = null;
	};
	JkFsFile.prototype._t = {
		"JkLangStringObject" : true,
		"JkFsFile" : true
	};
	JkFsFile.prototype._tobj = JkFsFile;
	JkFsFile.NEW = function() {
		var v = new JkFsFile;
		return v.CTOR_JkFsFile();
	};
	JkFsFile.prototype.CTOR_JkFsFile = function() {
		this.lastErrorDescription = null;
		return this;
	};
	JkFsFile.asFile = function(o) {
		if(!(o != null)) {
			return null;
		}
		if(JkFsFile.IS_INSTANCE && JkFsFile.IS_INSTANCE(o)) {
			return o;
		}
		var ss = JkLangString.asString(o);
		if(ss != null) {
			return JkFsFile.forPath(ss);
		}
		return null;
	};
	JkFsFile.asFileVector = function(o) {
		var it = JkLangDynamicObject.iterate(o);
		if(!(it != null)) {
			return null;
		}
		var v = new Array;
		while(true){
			var oo = it.next();
			if(!(oo != null)) {
				break;
			}
			var ff = JkFsFile.asFile(oo);
			if(ff != null) {
				v.push(ff);
			}
		}
		return v;
	};
	JkFsFile.forPath = function(path) {
		if(path == null || JkLangString.getLength(path) < 1) {
			return JkFsFileInvalid.NEW();
		}
		return JkFsFileForBrowser.forPath(path);
	};
	JkFsFile.forRawPath = function(path) {
		return JkFsFile.forPath(path);
	};
	JkFsFile.forRelativePath = function(path, relativeTo, alwaysSupportWindowsPathnames) {
		if(relativeTo == null) {
			return JkFsFile.forPath(path);
		}
		if(path == null) {
			return JkFsFileInvalid.NEW();
		}
		if(JkFsPathInfo.isAbsolutePath(path)) {
			return JkFsFile.forPath(path);
		}
		var sep = JkFsPathInfo.getPathSeparator();
		if(sep != "/".charCodeAt()) {
			if(JkLangString.getIndexOfCharacter(path, sep, 0) < 0 && JkLangString.getIndexOfCharacter(path, ("/".charCodeAt()), 0) >= 0) {
				sep = "/".charCodeAt();
			}
		}
		else if(alwaysSupportWindowsPathnames) {
			if(JkLangString.getIndexOfCharacter(path, sep, 0) < 0 && JkLangString.getIndexOfCharacter(path, ("\\".charCodeAt()), 0) >= 0) {
				sep = "\\".charCodeAt();
			}
		}
		var f = relativeTo;
		var comps = JkLangString.split(path, sep, 0);
		if(comps != null) {
			var n = 0;
			var m = comps.length;
			for(n = 0 ; n < m ; n++) {
				var comp = comps[n];
				if(comp != null) {
					if(JkLangString.isEmpty(comp)) {
						continue;
					}
					f = f.entry(comp);
				}
			}
		}
		return f;
	};
	JkFsFile.prototype.entry = function(name) {
	};
	JkFsFile.prototype.rawEntry = function(name) {
		return this.entry(name);
	};
	JkFsFile.prototype.entries = function() {
	};
	JkFsFile.prototype.move = function(dest, replace) {
	};
	JkFsFile.prototype.touch = function() {
	};
	JkFsFile.prototype.read = function() {
	};
	JkFsFile.prototype.write = function() {
	};
	JkFsFile.prototype.append = function() {
	};
	JkFsFile.prototype.stat = function() {
	};
	JkFsFile.prototype.createDirectory = function() {
	};
	JkFsFile.prototype.createDirectoryRecursive = function() {
	};
	JkFsFile.prototype.removeDirectory = function() {
	};
	JkFsFile.prototype.getPath = function() {
	};
	JkFsFile.prototype.remove = function() {
	};
	JkFsFile.prototype.makeExecutable = function() {
	};
	JkFsFile.prototype.getRelativePath = function(baseFile, prefix) {
		if(!(baseFile != null)) {
			return null;
		}
		var vp = this.getPath();
		var bp = baseFile.getPath();
		while(JkLangString.endsWith(bp, "/") || JkLangString.endsWith(bp, "\\")){
			bp = JkLangString.getSubString(bp, 0, (JkLangString.getLength(bp) - 1));
		}
		if(JkLangString.startsWith(vp, (JkLangString.safeString(bp) + "/"), 0) || JkLangString.startsWith(vp, (JkLangString.safeString(bp) + "\\"), 0)) {
			if(prefix != null) {
				return JkLangString.safeString(prefix) + JkLangString.safeString((JkLangString.getEndOfString(vp, (JkLangString.getLength(bp)))));
			}
			return JkLangString.getEndOfString(vp, (JkLangString.getLength(bp) + 1));
		}
		return null;
	};
	JkFsFile.prototype.getRelativePathOrBasename = function(baseFile, prefix) {
		var v = this.getRelativePath(baseFile, prefix);
		if(v != null) {
			return v;
		}
		return this.getBasename();
	};
	JkFsFile.prototype.rename = function(newname, replace) {
		return this.move((JkFsFile.forRelativePath(newname, (this.getParent()), false)), replace);
	};
	JkFsFile.prototype.writeFromReader = function(reader, doAppend) {
		this.onError(null);
		if(!(reader != null)) {
			return false;
		}
		var buffer = new ArrayBuffer(1024);
		if(!(buffer != null)) {
			return false;
		}
		var writer = null;
		if(doAppend) {
			writer = this.append();
		}
		else {
			writer = this.write();
		}
		if(!(writer != null)) {
			return false;
		}
		var v = true;
		while(true){
			var r = reader.read(buffer);
			if(r < 1) {
				break;
			}
			var w = writer.write(buffer, r);
			if(w < r) {
				v = false;
				break;
			}
		}
		writer.close();
		return v;
	};
	JkFsFile.prototype.createFifo = function() {
		this.onError("Not supported");
		return false;
	};
	JkFsFile.prototype.isExecutable = function() {
		return false;
	};
	JkFsFile.prototype.exists = function() {
		this.onError(null);
		var fi = this.stat();
		return fi.getType() != JkFsFileInfo.FILE_TYPE_UNKNOWN;
	};
	JkFsFile.prototype.isIdentical = function(file) {
		if(!(file != null)) {
			return false;
		}
		var myrd = this.read();
		if(!(myrd != null)) {
			return false;
		}
		var oord = file.read();
		if(!(oord != null)) {
			return false;
		}
		var mybuf = new ArrayBuffer(1024);
		if(!(mybuf != null)) {
			return false;
		}
		var oobuf = new ArrayBuffer(1024);
		if(!(oobuf != null)) {
			return false;
		}
		var v = true;
		while(v){
			var myr = myrd.read(mybuf);
			var oor = oord.read(oobuf);
			if(myr != oor) {
				v = false;
			}
			else {
				if(myr < 1) {
					break;
				}
				for(var n = 0 ; n < myr ; n++) {
					if(mybuf[n] != oobuf[n]) {
						v = false;
					}
				}
			}
		}
		myrd.close();
		oord.close();
		return v;
	};
	JkFsFile.prototype.getLastErrorDescription = function() {
		return this.lastErrorDescription;
	};
	JkFsFile.prototype.onError = function(v) {
		var pp = this.getPath();
		if(!(v != null)) {
			this.lastErrorDescription = null;
		}
		else if(pp != null) {
			this.lastErrorDescription = JkLangString.safeString(pp) + ": " + JkLangString.safeString(v);
		}
		else {
			this.lastErrorDescription = v;
		}
	};
	JkFsFile.prototype.readLines = function() {
		var rd = JkIoPrintReader.forReader((this.read()));
		if(!(rd != null)) {
			return null;
		}
		return JkFsFileReadLineIterator.NEW().setReader(rd);
	};
	JkFsFile.prototype.readLinesVector = function() {
		var it = this.readLines();
		if(!(it != null)) {
			return null;
		}
		var v = new Array;
		while(true){
			var line = it.next();
			if(!(line != null)) {
				break;
			}
			v.push(line);
		}
		return v;
	};
	JkFsFile.prototype.hasChangedSince = function(originalTimeStamp) {
		var nts = this.getLastModifiedTimeStamp();
		if(nts > originalTimeStamp) {
			return true;
		}
		return false;
	};
	JkFsFile.prototype.getLastModifiedTimeStamp = function() {
		if(this.isFile() == false) {
			return 0;
		}
		var st = this.stat();
		if(st == null) {
			return 0;
		}
		return ~(~st.getModifyTime());
	};
	JkFsFile.prototype.compareModificationTime = function(bf) {
		if(bf == null) {
			return 1;
		}
		var myts = this.getLastModifiedTimeStamp();
		var bfts = bf.getLastModifiedTimeStamp();
		if(myts < bfts) {
			return -1;
		}
		if(myts > bfts) {
			return 1;
		}
		return 0;
	};
	JkFsFile.prototype.isNewerThan = function(bf) {
		return this.compareModificationTime(bf) > 0;
	};
	JkFsFile.prototype.isOlderThan = function(bf) {
		return this.compareModificationTime(bf) < 0;
	};
	JkFsFile.prototype.isSame = function(file) {
		this.onError(null);
		if(!(file != null)) {
			return false;
		}
		var path = this.getPath();
		if(path != null && path == file.getPath()) {
			return true;
		}
		return false;
	};
	JkFsFile.prototype.removeRecursive = function() {
		this.onError(null);
		var finfo = this.stat();
		if(!(finfo != null)) {
			return true;
		}
		if(finfo.isDirectory() == false || finfo.isLink() == true) {
			return this.remove();
		}
		var it = this.entries();
		if(!(it != null)) {
			return false;
		}
		while(it != null){
			var f = it.next();
			if(!(f != null)) {
				break;
			}
			if(!f.removeRecursive()) {
				this.onError((f.getLastErrorDescription()));
				return false;
			}
		}
		return this.removeDirectory();
	};
	JkFsFile.prototype.isFile = function() {
		var st = this.stat();
		if(!(st != null)) {
			return false;
		}
		return st.isFile();
	};
	JkFsFile.prototype.isDirectory = function() {
		var st = this.stat();
		if(!(st != null)) {
			return false;
		}
		return st.isDirectory();
	};
	JkFsFile.prototype.isLink = function() {
		var st = this.stat();
		if(!(st != null)) {
			return false;
		}
		return st.isLink();
	};
	JkFsFile.prototype.getSize = function() {
		var st = this.stat();
		if(st == null) {
			return 0;
		}
		return st.getSize();
	};
	JkFsFile.prototype.setMode = function(mode) {
		this.onError("Not supported");
		return false;
	};
	JkFsFile.prototype.setOwnerUser = function(uid) {
		this.onError("Not supported");
		return false;
	};
	JkFsFile.prototype.setOwnerGroup = function(gid) {
		this.onError("Not supported");
		return false;
	};
	JkFsFile.prototype.withExtension = function(ext) {
		if(!(ext != null)) {
			return this;
		}
		var bn = this.getBasename();
		return this.getSibling((JkLangString.safeString(bn) + "." + JkLangString.safeString(ext)));
	};
	JkFsFile.prototype.asExecutable = function() {
		return this;
	};
	JkFsFile.prototype.getParent = function() {
		this.onError(null);
		var path = this.directoryName();
		if(path == null) {
			return JkFsFileInvalid.NEW();
		}
		return JkFsFile.forPath(path);
	};
	JkFsFile.prototype.getSibling = function(name) {
		var pp = this.getParent();
		if(!(pp != null)) {
			return null;
		}
		if(name == null) {
			return pp;
		}
		return pp.entry(name);
	};
	JkFsFile.prototype.hasExtension = function(ext) {
		var xx = this.extension();
		if(!(xx != null)) {
			return false;
		}
		return JkLangString.equalsIgnoreCase(xx, ext);
	};
	JkFsFile.prototype.extension = function() {
		var bn = this.getBasename();
		if(!(bn != null)) {
			return null;
		}
		var dot = JkLangString.getLastIndexOfCharacter(bn, (".".charCodeAt()), (-1));
		if(dot < 0) {
			return null;
		}
		return JkLangString.getEndOfString(bn, (dot + 1));
	};
	JkFsFile.prototype.directoryName = function() {
		var path = this.getPath();
		if(!(path != null)) {
			return null;
		}
		var delim = JkFsPathInfo.getPathSeparator();
		var dp = JkLangString.getLastIndexOfCharacter(path, delim, (-1));
		if(delim != "/".charCodeAt()) {
			var sdp = JkLangString.getLastIndexOfCharacter(path, ("/".charCodeAt()), (-1));
			if(sdp > dp) {
				dp = sdp;
			}
		}
		if(dp < 0) {
			return ".";
		}
		return JkLangString.getSubString(path, 0, dp);
	};
	JkFsFile.prototype.getBasename = function() {
		var path = this.getPath();
		if(!(path != null)) {
			return null;
		}
		var delim = JkFsPathInfo.getPathSeparator();
		if(JkLangString.endsWith(path, (JkLangString.forCharacter(delim)))) {
			path = JkLangString.getSubString(path, 0, (JkLangString.getLength(path) - 1));
		}
		if(delim != "/".charCodeAt() && JkLangString.endsWith(path, "/")) {
			path = JkLangString.getSubString(path, 0, (JkLangString.getLength(path) - 1));
		}
		var dp = JkLangString.getLastIndexOfCharacter(path, delim, (-1));
		if(delim != "/".charCodeAt()) {
			var sdp = JkLangString.getLastIndexOfCharacter(path, ("/".charCodeAt()), (-1));
			if(sdp > dp) {
				dp = sdp;
			}
		}
		if(dp < 0) {
			return path;
		}
		return JkLangString.getEndOfString(path, (dp + 1));
	};
	JkFsFile.prototype.getBasenameWithoutExtension = function() {
		var bn = this.getBasename();
		if(!(bn != null)) {
			return null;
		}
		var dot = JkLangString.getLastIndexOfCharacter(bn, (".".charCodeAt()), (-1));
		if(dot < 0) {
			return bn;
		}
		return JkLangString.getSubString(bn, 0, dot);
	};
	JkFsFile.prototype.baseName = function() {
		return this.getBasename();
	};
	JkFsFile.prototype.baseNameWithoutExtension = function() {
		return this.getBasenameWithoutExtension();
	};
	JkFsFile.prototype.copyFileTo = function(dest) {
		this.onError(null);
		if(!(dest != null)) {
			return false;
		}
		if(this.isSame(dest)) {
			return true;
		}
		var buf = new ArrayBuffer(4096 * 4);
		if(!(buf != null)) {
			return false;
		}
		var reader = this.read();
		if(!(reader != null)) {
			return false;
		}
		var writer = dest.write();
		if(!(writer != null)) {
			if(JkLangClosable.IS_INSTANCE && JkLangClosable.IS_INSTANCE(reader)) {
				reader.close();
			}
			this.onError((dest.getLastErrorDescription()));
			return false;
		}
		var v = true;
		var n = 0;
		while((n = reader.read(buf)) > 0){
			var nr = writer.write(buf, n);
			if(nr != n) {
				v = false;
				break;
			}
		}
		if(v) {
			var fi = this.stat();
			if(fi != null) {
				var mode = fi.getMode();
				if(mode != 0) {
					dest.setMode(mode);
				}
			}
		}
		else {
			dest.remove();
		}
		if(reader != null && (JkLangClosable.IS_INSTANCE && JkLangClosable.IS_INSTANCE(reader))) {
			reader.close();
		}
		if(writer != null && (JkLangClosable.IS_INSTANCE && JkLangClosable.IS_INSTANCE(writer))) {
			writer.close();
		}
		return v;
	};
	JkFsFile.prototype.copyFileOrDirectoryTo = function(dest) {
		if(!(dest != null)) {
			return false;
		}
		if(this.isFile()) {
			return this.copyFileTo(dest);
		}
		if(!this.isDirectory()) {
			return false;
		}
		if(!dest.createDirectoryRecursive()) {
			return false;
		}
		var it = this.entries();
		if(!(it != null)) {
			return false;
		}
		while(true){
			var nsrc = it.next();
			if(!(nsrc != null)) {
				break;
			}
			var ndest = dest.entry((nsrc.getBasename()));
			if(!nsrc.copyFileOrDirectoryTo(ndest)) {
				return false;
			}
		}
		return true;
	};
	JkFsFile.prototype.setContentsString = function(str, encoding) {
		if(JkLangString.isEmpty(encoding)) {
			return false;
		}
		return this.setContentsBuffer((JkLangString.toBuffer(str, encoding)));
	};
	JkFsFile.prototype.setContentsUTF8 = function(str) {
		return this.setContentsBuffer((JkLangString.toUTF8Buffer(str)));
	};
	JkFsFile.prototype.setContentsBuffer = function(buffer) {
		this.onError(null);
		if(!(buffer != null)) {
			return false;
		}
		var writer = this.write();
		if(!(writer != null)) {
			return false;
		}
		if(writer.write(buffer, buffer.byteLength) < 0) {
			return false;
		}
		writer.close();
		return true;
	};
	JkFsFile.prototype.getContentsString = function(encoding) {
		if(JkLangString.isEmpty(encoding)) {
			return null;
		}
		var b = this.getContentsBuffer();
		if(!(b != null)) {
			if(this.isFile() && this.getSize() == 0) {
				return "";
			}
			return null;
		}
		return JkLangString.forBuffer(b, encoding);
	};
	JkFsFile.prototype.getContentsUTF8 = function() {
		var b = this.getContentsBuffer();
		if(!(b != null)) {
			if(this.isFile() && this.getSize() == 0) {
				return "";
			}
			return null;
		}
		return JkLangString.forUTF8Buffer(b);
	};
	JkFsFile.prototype.getContentsBuffer = function() {
		this.onError(null);
		var reader = this.read();
		if(!(reader != null)) {
			return null;
		}
		var sz = reader.getSize();
		if(sz < 1) {
			reader.close();
			return null;
		}
		var b = new ArrayBuffer(sz);
		var rsz = reader.read(b);
		reader.close();
		if(rsz < sz) {
			return null;
		}
		return b;
	};
	JkFsFile.prototype.toString = function() {
		return this.getPath();
	};
	JkFsFile.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkFsFile"] === true;
	};
	let JkFsFileKit = function() {
		this.ctx = null;
	};
	JkFsFileKit.prototype._t = { "JkFsFileKit" : true };
	JkFsFileKit.prototype._tobj = JkFsFileKit;
	JkFsFileKit.NEW_JkLogLoggingContext = function(ctx) {
		var v = new JkFsFileKit;
		return v.CTOR_JkFsFileKit_JkLogLoggingContext(ctx);
	};
	JkFsFileKit.prototype.CTOR_JkFsFileKit_JkLogLoggingContext = function(ctx) {
		this.ctx = null;
		this.ctx = ctx;
		return this;
	};
	JkFsFileKit.prototype.asFile = function(file) {
		var fo = JkFsFile.asFile(file);
		if(!(fo != null)) {
			JkLangError._throw("invalidParameter", (JkLangString.asString(file)));
		}
		return fo;
	};
	JkFsFileKit.prototype.copy = function(src, dst) {
		var srcf = this.asFile(src);
		var dstf = this.asFile(dst);
		if(dstf.isDirectory()) {
			dstf = dstf.entry((srcf.getBasename()));
		}
		if(!srcf.copyFileOrDirectoryTo(dstf)) {
			JkLangError._throw("failedToCopy", (srcf.getPath()));
		}
		return dstf;
	};
	JkFsFileKit.prototype.remove = function(file) {
		var fo = this.asFile(file);
		if(!fo.removeRecursive()) {
			JkLangError._throw("failedToRemove", (fo.getPath()));
		}
	};
	JkFsFileKit.prototype.readAsBuffer = function(file) {
		var fo = this.asFile(file);
		var v = fo.getContentsBuffer();
		if(!(v != null)) {
			JkLangError._throw("failedToRead", (fo.getPath()));
		}
		return v;
	};
	JkFsFileKit.prototype.readAsString = function(file) {
		var fo = this.asFile(file);
		var v = fo.getContentsUTF8();
		if(!(v != null)) {
			JkLangError._throw("failedToRead", (fo.getPath()));
		}
		return v;
	};
	JkFsFileKit.prototype.writeBuffer = function(file, data) {
		var fo = this.asFile(file);
		if(!fo.setContentsBuffer(data)) {
			JkLangError._throw("failedToWrite", (fo.getPath()));
		}
	};
	JkFsFileKit.prototype.writeString = function(file, data) {
		var fo = this.asFile(file);
		if(!fo.setContentsUTF8((JkLangString.asString(data)))) {
			JkLangError._throw("failedToWrite", (fo.getPath()));
		}
	};
	JkFsFileKit.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkFsFileKit"] === true;
	};
	let JkFsFileInvalid = function() {
		JkFsFile.call(this);
	};
	JkFsFileInvalid.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkFsFile.prototype);
	JkFsFileInvalid.prototype.constructor = JkFsFileInvalid;
	JkFsFileInvalid.prototype._t = {
		"JkLangStringObject" : true,
		"JkFsFileInvalid" : true,
		"JkFsFile" : true
	};
	JkFsFileInvalid.prototype._tobj = JkFsFileInvalid;
	JkFsFileInvalid.NEW = function() {
		var v = new JkFsFileInvalid;
		return v.CTOR_JkFsFileInvalid();
	};
	JkFsFileInvalid.prototype.CTOR_JkFsFileInvalid = function() {
		if(JkFsFile.prototype.CTOR_JkFsFile.call(this) == null) {
			return null;
		}
		return this;
	};
	JkFsFileInvalid.prototype.entry = function(name) {
		return JkFsFileInvalid.NEW();
	};
	JkFsFileInvalid.prototype.makeExecutable = function() {
		return false;
	};
	JkFsFileInvalid.prototype.move = function(dest, replace) {
		return false;
	};
	JkFsFileInvalid.prototype.touch = function() {
		return false;
	};
	JkFsFileInvalid.prototype.read = function() {
		return null;
	};
	JkFsFileInvalid.prototype.write = function() {
		return null;
	};
	JkFsFileInvalid.prototype.append = function() {
		return null;
	};
	JkFsFileInvalid.prototype.stat = function() {
		return null;
	};
	JkFsFileInvalid.prototype.exists = function() {
		return false;
	};
	JkFsFileInvalid.prototype.isExecutable = function() {
		return false;
	};
	JkFsFileInvalid.prototype.createFifo = function() {
		return false;
	};
	JkFsFileInvalid.prototype.createDirectory = function() {
		return false;
	};
	JkFsFileInvalid.prototype.createDirectoryRecursive = function() {
		return false;
	};
	JkFsFileInvalid.prototype.removeDirectory = function() {
		return false;
	};
	JkFsFileInvalid.prototype.getPath = function() {
		return null;
	};
	JkFsFileInvalid.prototype.isSame = function(file) {
		return false;
	};
	JkFsFileInvalid.prototype.remove = function() {
		return false;
	};
	JkFsFileInvalid.prototype.removeRecursive = function() {
		return false;
	};
	JkFsFileInvalid.prototype.getBasename = function() {
		return null;
	};
	JkFsFileInvalid.prototype.isIdentical = function(file) {
		return false;
	};
	JkFsFileInvalid.prototype.getContentsBuffer = function() {
		return null;
	};
	JkFsFileInvalid.prototype.getContentsString = function(encoding) {
		return null;
	};
	JkFsFileInvalid.prototype.setContentsBuffer = function(buffer) {
		return false;
	};
	JkFsFileInvalid.prototype.setContentsString = function(str, encoding) {
		return false;
	};
	JkFsFileInvalid.prototype.entries = function() {
		return null;
	};
	JkFsFileInvalid.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkFsFileInvalid"] === true;
	};
	let JkFsFileFinderPattern = function() {
		this.pattern = null;
		this.suffix = null;
		this.prefix = null;
	};
	JkFsFileFinderPattern.prototype._t = { "JkFsFileFinderPattern" : true };
	JkFsFileFinderPattern.prototype._tobj = JkFsFileFinderPattern;
	JkFsFileFinderPattern.NEW = function() {
		var v = new JkFsFileFinderPattern;
		return v.CTOR_JkFsFileFinderPattern();
	};
	JkFsFileFinderPattern.prototype.CTOR_JkFsFileFinderPattern = function() {
		this.prefix = null;
		this.suffix = null;
		this.pattern = null;
		return this;
	};
	JkFsFileFinderPattern.prototype.setPattern = function(pattern) {
		this.pattern = pattern;
		if(pattern != null) {
			if(JkLangString.startsWith(pattern, "*", 0)) {
				this.suffix = JkLangString.getEndOfString(pattern, 1);
			}
			if(JkLangString.endsWith(pattern, "*")) {
				this.prefix = JkLangString.getSubString(pattern, 0, (JkLangString.getLength(pattern) - 1));
			}
		}
		return this;
	};
	JkFsFileFinderPattern.prototype.match = function(check) {
		if(!(check != null)) {
			return false;
		}
		if(this.pattern == check) {
			return true;
		}
		if(this.suffix != null && JkLangString.endsWith(check, this.suffix)) {
			return true;
		}
		if(this.prefix != null && JkLangString.startsWith(check, this.prefix, 0)) {
			return true;
		}
		return false;
	};
	JkFsFileFinderPattern.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkFsFileFinderPattern"] === true;
	};
	let JkFsFileFinder = function() {
		this.root = null;
		this.patterns = null;
		this.excludePatterns = null;
		this.stack = null;
		this.includeMatchingDirectories = false;
		this.includeDirectories = false;
	};
	JkFsFileFinder.prototype._t = {
		"JkLangIterator" : true,
		"JkFsFileFinder" : true
	};
	JkFsFileFinder.prototype._tobj = JkFsFileFinder;
	JkFsFileFinder.NEW = function() {
		var v = new JkFsFileFinder;
		return v.CTOR_JkFsFileFinder();
	};
	JkFsFileFinder.prototype.CTOR_JkFsFileFinder = function() {
		this.includeDirectories = false;
		this.includeMatchingDirectories = false;
		this.stack = null;
		this.excludePatterns = null;
		this.patterns = null;
		this.root = null;
		this.patterns = new Array;
		this.excludePatterns = new Array;
		return this;
	};
	JkFsFileFinder.forRoot = function(root) {
		return JkFsFileFinder.NEW().setRoot(root);
	};
	JkFsFileFinder.prototype.setRoot = function(root) {
		this.root = root;
		this.stack = null;
		return this;
	};
	JkFsFileFinder.prototype.addPattern = function(pattern) {
		this.patterns.push((JkFsFileFinderPattern.NEW().setPattern(pattern)));
		return this;
	};
	JkFsFileFinder.prototype.addExcludePattern = function(pattern) {
		this.excludePatterns.push((JkFsFileFinderPattern.NEW().setPattern(pattern)));
		return this;
	};
	JkFsFileFinder.prototype.matchPattern = function(file) {
		if(!(file != null)) {
			return false;
		}
		if(JkLangVector.getSize(this.patterns) < 1) {
			return true;
		}
		var filename = file.getBasename();
		if(this.patterns != null) {
			var n = 0;
			var m = this.patterns.length;
			for(n = 0 ; n < m ; n++) {
				var pattern = this.patterns[n];
				if(pattern != null) {
					if(pattern.match(filename)) {
						return true;
					}
				}
			}
		}
		return false;
	};
	JkFsFileFinder.prototype.matchExcludePattern = function(file) {
		if(!(file != null)) {
			return false;
		}
		if(JkLangVector.getSize(this.excludePatterns) < 1) {
			return false;
		}
		var filename = file.getBasename();
		if(this.excludePatterns != null) {
			var n = 0;
			var m = this.excludePatterns.length;
			for(n = 0 ; n < m ; n++) {
				var pattern = this.excludePatterns[n];
				if(pattern != null) {
					if(pattern.match(filename)) {
						return true;
					}
				}
			}
		}
		return false;
	};
	JkFsFileFinder.prototype.next = function() {
		while(true){
			if(!(this.stack != null)) {
				if(!(this.root != null)) {
					break;
				}
				var es = this.root.entries();
				this.root = null;
				if(!(es != null)) {
					break;
				}
				this.stack = JkLangStack.NEW();
				this.stack.push(es);
			}
			var entries = this.stack.peek();
			if(!(entries != null)) {
				this.stack = null;
				break;
			}
			var e = entries.next();
			if(!(e != null)) {
				this.stack.pop();
			}
			else if(this.matchExcludePattern(e)) {
				;
			}
			else if(e.isFile()) {
				if(this.matchPattern(e)) {
					return e;
				}
			}
			else if(this.includeMatchingDirectories && e.isDirectory() && this.matchPattern(e)) {
				return e;
			}
			else if(e.isDirectory() && e.isLink() == false) {
				var ees = e.entries();
				if(ees != null) {
					this.stack.push(ees);
				}
				if(this.includeDirectories) {
					return e;
				}
			}
		}
		return null;
	};
	JkFsFileFinder.prototype.hasNext = function() {
		if(!(this.stack != null)) {
			return false;
		}
		var it = this.stack.peek();
		if(!(it != null)) {
			return false;
		}
		return it.hasNext();
	};
	JkFsFileFinder.prototype.getIncludeMatchingDirectories = function() {
		return this.includeMatchingDirectories;
	};
	JkFsFileFinder.prototype.setIncludeMatchingDirectories = function(v) {
		this.includeMatchingDirectories = v;
		return this;
	};
	JkFsFileFinder.prototype.getIncludeDirectories = function() {
		return this.includeDirectories;
	};
	JkFsFileFinder.prototype.setIncludeDirectories = function(v) {
		this.includeDirectories = v;
		return this;
	};
	JkFsFileFinder.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkFsFileFinder"] === true;
	};
	let JkFsFileReadLineIterator = function() {
		this.reader = null;
	};
	JkFsFileReadLineIterator.prototype._t = {
		"JkFsFileReadLineIterator" : true,
		"JkLangIterator" : true
	};
	JkFsFileReadLineIterator.prototype._tobj = JkFsFileReadLineIterator;
	JkFsFileReadLineIterator.NEW = function() {
		var v = new JkFsFileReadLineIterator;
		return v.CTOR_JkFsFileReadLineIterator();
	};
	JkFsFileReadLineIterator.prototype.CTOR_JkFsFileReadLineIterator = function() {
		this.reader = null;
		return this;
	};
	JkFsFileReadLineIterator.prototype.next = function() {
		if(!(this.reader != null)) {
			return null;
		}
		var v = this.reader.readLine();
		if(v == null) {
			this.reader.close();
			this.reader = null;
		}
		return v;
	};
	JkFsFileReadLineIterator.prototype.hasNext = function() {
		if(!(this.reader != null)) {
			return false;
		}
		return !this.reader.hasEnded();
	};
	JkFsFileReadLineIterator.prototype.getReader = function() {
		return this.reader;
	};
	JkFsFileReadLineIterator.prototype.setReader = function(v) {
		this.reader = v;
		return this;
	};
	JkFsFileReadLineIterator.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkFsFileReadLineIterator"] === true;
	};
	let JkFsFileForBrowser = function() {
		JkFsFile.call(this);
		this.key = null;
	};
	JkFsFileForBrowser.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkFsFile.prototype);
	JkFsFileForBrowser.prototype.constructor = JkFsFileForBrowser;
	JkFsFileForBrowser.prototype._t = {
		"JkLangStringObject" : true,
		"JkFsFileForBrowser" : true,
		"JkFsFile" : true
	};
	JkFsFileForBrowser.prototype._tobj = JkFsFileForBrowser;
	JkFsFileForBrowser.NEW = function() {
		var v = new JkFsFileForBrowser;
		return v.CTOR_JkFsFileForBrowser();
	};
	JkFsFileForBrowser.prototype.CTOR_JkFsFileForBrowser = function() {
		this.key = null;
		if(JkFsFile.prototype.CTOR_JkFsFile.call(this) == null) {
			return null;
		}
		return this;
	};
	JkFsFileForBrowser.forPath = function(path) {
		var v = JkFsFileForBrowser.NEW();
		v.setKey(path);
		if(typeof Storage !== "undefined") {
			return v;
		}
		;
		return null;
	};
	JkFsFileForBrowser.prototype.read = function() {
		var v = JkFsFileForBrowserMyFileReader.NEW();
		v.setKey(this.key);
		return v;
	};
	JkFsFileForBrowser.prototype.write = function() {
		var v = JkFsFileForBrowserMyFileWriter.NEW();
		v.setKey(this.key);
		return v;
	};
	JkFsFileForBrowser.prototype.append = function() {
		var v = JkFsFileForBrowserMyFileWriter.NEW();
		v.setKey(this.key);
		v.setIsAppend(true);
		return v;
	};
	JkFsFileForBrowser.prototype.getKey = function() {
		return this.key;
	};
	JkFsFileForBrowser.prototype.setKey = function(v) {
		this.key = v;
		return this;
	};
	JkFsFileForBrowser.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkFsFileForBrowser"] === true;
	};
	let JkBase64Base64Decoder = function() {
	};
	JkBase64Base64Decoder.prototype._t = { "JkBase64Base64Decoder" : true };
	JkBase64Base64Decoder.prototype._tobj = JkBase64Base64Decoder;
	JkBase64Base64Decoder.NEW = function() {
		var v = new JkBase64Base64Decoder;
		return v.CTOR_JkBase64Base64Decoder();
	};
	JkBase64Base64Decoder.prototype.CTOR_JkBase64Base64Decoder = function() {
		return this;
	};
	JkBase64Base64Decoder.fromUrlSafeFormat = function(str) {
		var v = str;
		if(!(v != null)) {
			return null;
		}
		v = JkLangString.replaceCharacter(v, ("-".charCodeAt()), ("+".charCodeAt()));
		v = JkLangString.replaceCharacter(v, ("_".charCodeAt()), ("/".charCodeAt()));
		var mod = JkLangString.getLength(v) % 4;
		if(mod == 1) {
			v = JkLangString.safeString(v) + "===";
		}
		else if(mod == 2) {
			v = JkLangString.safeString(v) + "==";
		}
		else if(mod == 3) {
			v = JkLangString.safeString(v) + "=";
		}
		return v;
	};
	JkBase64Base64Decoder.appendByte = function(buffer, _byte) {
		var nbyte = JkLangBuffer.allocate(1);
		JkLangBuffer.setByte(nbyte, 0, _byte);
		return JkLangBuffer.append(buffer, nbyte, (JkLangBuffer.getSize(nbyte)));
	};
	JkBase64Base64Decoder.fromLookupChar = function(ascii) {
		var c = 0;
		if(ascii == 43) {
			c = 62;
		}
		else if(ascii == 47) {
			c = 63;
		}
		else if(ascii >= 48 && ascii <= 57) {
			c = ascii + ~(~4);
		}
		else if(ascii >= 65 && ascii <= 90) {
			c = ascii - ~(~65);
		}
		else if(ascii >= 97 && ascii <= 122) {
			c = ascii - ~(~71);
		}
		return c;
	};
	JkBase64Base64Decoder.decode = function(text) {
		if(!(text != null)) {
			return null;
		}
		try {
			var binaryString = window.atob(text);
			var len = binaryString.length;
			var buffer = new ArrayBuffer(len);
			var arr = new Uint8Array(buffer);
			for(var i = 0 ; i < len ; i++) {
				arr[i] = binaryString.charCodeAt(i);
			}
			if(buffer != null) {
				return buffer;
			}
		}
		catch(e) {
			console.log(("Exception: " + e.message));
			return null;
		}
		;
		return null;
	};
	JkBase64Base64Decoder.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkBase64Base64Decoder"] === true;
	};
	let JkBase64Base64Encoder = function() {
	};
	JkBase64Base64Encoder.prototype._t = { "JkBase64Base64Encoder" : true };
	JkBase64Base64Encoder.prototype._tobj = JkBase64Base64Encoder;
	JkBase64Base64Encoder.NEW = function() {
		var v = new JkBase64Base64Encoder;
		return v.CTOR_JkBase64Base64Encoder();
	};
	JkBase64Base64Encoder.prototype.CTOR_JkBase64Base64Encoder = function() {
		return this;
	};
	JkBase64Base64Encoder.toUrlSafeFormat = function(str) {
		var v = str;
		if(!(v != null)) {
			return null;
		}
		v = JkLangString.replaceString(v, "=", "");
		v = JkLangString.replaceCharacter(v, ("+".charCodeAt()), ("-".charCodeAt()));
		v = JkLangString.replaceCharacter(v, ("/".charCodeAt()), ("_".charCodeAt()));
		return v;
	};
	JkBase64Base64Encoder.encodeString = function(str) {
		if(!(str != null)) {
			return null;
		}
		return JkBase64Base64Encoder.encode((JkLangString.toUTF8Buffer(str)));
	};
	JkBase64Base64Encoder.encode = function(buffer) {
		if(!(buffer != null)) {
			return null;
		}
		var base64 = null;
		var bin = "";
		var bytes = new Uint8Array(buffer);
		var len = bytes.byteLength;
		for(var i = 0 ; i < len ; i++) {
			bin += String.fromCharCode(bytes[i]);
		}
		base64 = window.btoa(bin);
		;
		return base64;
	};
	JkBase64Base64Encoder.toASCIIChar = function(lookup) {
		var c = 0;
		if(lookup < 0 || lookup > 63) {
			return c;
		}
		if(lookup <= 25) {
			c = lookup + 65;
		}
		else if(lookup <= 51) {
			c = lookup + 71;
		}
		else if(lookup <= 61) {
			c = lookup - 4;
		}
		else if(lookup == 62) {
			c = ~(~"+".charCodeAt());
		}
		else if(lookup == 63) {
			c = ~(~"/".charCodeAt());
		}
		return c;
	};
	JkBase64Base64Encoder.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkBase64Base64Encoder"] === true;
	};
	let JkJsonJSONObject = {};
	JkJsonJSONObject.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkJsonJSONObject"] === true;
	};
	let JkJsonJSONObjectAdapterExplicit = function() {
	};
	JkJsonJSONObjectAdapterExplicit.prototype._t = {
		"JkJsonJSONObject" : true,
		"JkJsonJSONObjectAdapterExplicit" : true
	};
	JkJsonJSONObjectAdapterExplicit.prototype._tobj = JkJsonJSONObjectAdapterExplicit;
	JkJsonJSONObjectAdapterExplicit.NEW = function() {
		var v = new JkJsonJSONObjectAdapterExplicit;
		return v.CTOR_JkJsonJSONObjectAdapterExplicit();
	};
	JkJsonJSONObjectAdapterExplicit.prototype.CTOR_JkJsonJSONObjectAdapterExplicit = function() {
		return this;
	};
	JkJsonJSONObjectAdapterExplicit.prototype.asJsonValue = function(value) {
		if(!(value != null)) {
			return null;
		}
		if(JkJsonJSONObject.IS_INSTANCE && JkJsonJSONObject.IS_INSTANCE(value)) {
			var oj = value;
			return oj.toJsonObject();
		}
		return value;
	};
	JkJsonJSONObjectAdapterExplicit.prototype.toDynamicMap = function() {
		return (function(o) {
			if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))((this.toJsonObject()));
	};
	JkJsonJSONObjectAdapterExplicit.prototype.toObjectMap = function() {
		var dm = this.toDynamicMap();
		if(!(dm != null)) {
			return null;
		}
		return dm.toObjectMap();
	};
	JkJsonJSONObjectAdapterExplicit.prototype.toJsonObject = function() {
	};
	JkJsonJSONObjectAdapterExplicit.prototype.fromJsonObject = function(o) {
	};
	JkJsonJSONObjectAdapterExplicit.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkJsonJSONObjectAdapterExplicit"] === true;
	};
	let JkJsonJSONEncoder = function() {
		this.niceFormatting = true;
		this.stringFormattedBoolean = false;
		this.stringFormattedNumber = false;
		this.newJSONFormat = true;
		this.encodeNullAsNull = false;
		this.isNewLine = true;
		this.mysb = null;
	};
	JkJsonJSONEncoder.prototype._t = { "JkJsonJSONEncoder" : true };
	JkJsonJSONEncoder.prototype._tobj = JkJsonJSONEncoder;
	JkJsonJSONEncoder.NEW = function() {
		var v = new JkJsonJSONEncoder;
		return v.CTOR_JkJsonJSONEncoder();
	};
	JkJsonJSONEncoder.prototype.CTOR_JkJsonJSONEncoder = function() {
		this.mysb = null;
		this.isNewLine = true;
		this.encodeNullAsNull = false;
		this.newJSONFormat = true;
		this.stringFormattedNumber = false;
		this.stringFormattedBoolean = false;
		this.niceFormatting = true;
		return this;
	};
	JkJsonJSONEncoder.prototype.print = function(line, indent, startline, endline, sb) {
		if(startline && this.isNewLine == false) {
			if(this.niceFormatting) {
				sb.appendCharacter(("\n".charCodeAt()));
			}
			this.isNewLine = true;
		}
		if(this.isNewLine && this.niceFormatting) {
			for(var n = 0 ; n < indent ; n++) {
				sb.appendCharacter(("\t".charCodeAt()));
			}
		}
		sb.appendString(line);
		if(endline) {
			if(this.niceFormatting) {
				sb.appendCharacter(("\n".charCodeAt()));
			}
			this.isNewLine = true;
		}
		else {
			this.isNewLine = false;
		}
	};
	JkJsonJSONEncoder.prototype.encodeArray = function(cc, indent, sb) {
		this.print("[", indent, false, true, sb);
		var first = true;
		if(cc != null) {
			var n = 0;
			var m = cc.length;
			for(n = 0 ; n < m ; n++) {
				var o = cc[n];
				if(o != null) {
					if(first == false) {
						this.print(",", indent, false, true, sb);
					}
					this.encodeObject(o, (indent + 1), sb);
					first = false;
				}
			}
		}
		this.print("]", indent, true, false, sb);
	};
	JkJsonJSONEncoder.prototype.encodeDynamicVector = function(cc, indent, sb) {
		this.print("[", indent, false, true, sb);
		var first = true;
		var array = cc.toVector();
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var o = array[n];
				if(o != null) {
					if(first == false) {
						this.print(",", indent, false, true, sb);
					}
					this.encodeObject(o, (indent + 1), sb);
					first = false;
				}
			}
		}
		this.print("]", indent, true, false, sb);
	};
	JkJsonJSONEncoder.prototype.encodeVector = function(cc, indent, sb) {
		this.print("[", indent, false, true, sb);
		var first = true;
		if(cc != null) {
			var n = 0;
			var m = cc.length;
			for(n = 0 ; n < m ; n++) {
				var o = cc[n];
				if(o != null) {
					if(first == false) {
						this.print(",", indent, false, true, sb);
					}
					this.encodeObject(o, (indent + 1), sb);
					first = false;
				}
			}
		}
		this.print("]", indent, true, false, sb);
	};
	JkJsonJSONEncoder.prototype.encodeMap = function(map, indent, sb) {
		this.print("{", indent, false, true, sb);
		var first = true;
		var it = JkLangMap.iterateKeys(map);
		while(it != null){
			var keyo = it.next();
			if(!(keyo != null)) {
				break;
			}
			var key = JkLangString.asString(keyo);
			if(!(key != null)) {
				continue;
			}
			if(!first) {
				this.print(",", indent, false, true, sb);
			}
			this.encodeString(key, (indent + 1), sb);
			if(this.niceFormatting) {
				sb.appendString(" : ");
			}
			else {
				sb.appendCharacter((":".charCodeAt()));
			}
			this.encodeObject((map.get(keyo)), (indent + 1), sb);
			first = false;
		}
		this.print("}", indent, true, false, sb);
	};
	JkJsonJSONEncoder.prototype.encodeDynamicMap = function(map, indent, sb) {
		this.print("{", indent, false, true, sb);
		var first = true;
		var it = map.iterateKeys();
		while(it != null){
			var key = it.next();
			if(!(key != null)) {
				break;
			}
			if(first == false) {
				this.print(",", indent, false, true, sb);
			}
			this.encodeString(key, (indent + 1), sb);
			if(this.niceFormatting) {
				sb.appendString(" : ");
			}
			else {
				sb.appendCharacter((":".charCodeAt()));
			}
			this.encodeObject((map.get(key)), (indent + 1), sb);
			first = false;
		}
		this.print("}", indent, true, false, sb);
	};
	JkJsonJSONEncoder.prototype.encodeKeyValueList = function(list, indent, sb) {
		this.print("{", indent, false, true, sb);
		var first = true;
		var it = list.iterate();
		while(it != null){
			var pair = it.next();
			if(pair == null) {
				break;
			}
			if(first == false) {
				this.print(",", indent, false, true, sb);
			}
			this.encodeString(pair.key, (indent + 1), sb);
			if(this.niceFormatting) {
				sb.appendString(" : ");
			}
			else {
				sb.appendCharacter((":".charCodeAt()));
			}
			this.encodeString(pair.value, (indent + 1), sb);
			first = false;
		}
		this.print("}", indent, true, false, sb);
	};
	JkJsonJSONEncoder.prototype.encodeString = function(s, indent, sb) {
		if(this.mysb == null) {
			this.mysb = JkLangStringBuilder.NEW();
		}
		else {
			this.mysb.clear();
		}
		this.mysb.appendCharacter(("\"".charCodeAt()));
		var it = JkLangString.iterate(s);
		while(true){
			var c = it.getNextChar();
			if(JkLangCharacter.isEOF(c)) {
				break;
			}
			if(this.newJSONFormat) {
				if(c == "\t".charCodeAt()) {
					this.mysb.appendString("\\t");
					continue;
				}
				if(c == "\n".charCodeAt()) {
					this.mysb.appendString("\\n");
					continue;
				}
				if(c == "\r".charCodeAt()) {
					this.mysb.appendString("\\r");
					continue;
				}
				if(c == "\b".charCodeAt()) {
					this.mysb.appendString("\\b");
					continue;
				}
				if(c == "\f".charCodeAt()) {
					this.mysb.appendString("\\f");
					continue;
				}
			}
			if(c == "\"".charCodeAt()) {
				this.mysb.appendCharacter(("\\".charCodeAt()));
			}
			else if(c == "\\".charCodeAt()) {
				this.mysb.appendCharacter(("\\".charCodeAt()));
			}
			this.mysb.appendCharacter(c);
		}
		this.mysb.appendCharacter(("\"".charCodeAt()));
		this.print((this.mysb.toString()), indent, false, false, sb);
	};
	JkJsonJSONEncoder.prototype.encodeBoolean = function(b, indent, sb) {
		if(this.mysb == null) {
			this.mysb = JkLangStringBuilder.NEW();
		}
		else {
			this.mysb.clear();
		}
		if(this.stringFormattedBoolean) {
			this.mysb.appendCharacter(("\"".charCodeAt()));
			this.mysb.appendString((JkLangString.forBoolean(b)));
			this.mysb.appendCharacter(("\"".charCodeAt()));
		}
		else {
			this.mysb.appendString((JkLangString.forBoolean(b)));
		}
		this.print((this.mysb.toString()), indent, false, false, sb);
	};
	JkJsonJSONEncoder.prototype.encodeNumber = function(o2, indent, sb) {
		if(this.mysb == null) {
			this.mysb = JkLangStringBuilder.NEW();
		}
		else {
			this.mysb.clear();
		}
		if(this.stringFormattedNumber) {
			this.mysb.appendCharacter(("\"".charCodeAt()));
			this.mysb.appendString((JkLangString.asString(o2)));
			this.mysb.appendCharacter(("\"".charCodeAt()));
		}
		else if(JkLangIntegerObject.IS_INSTANCE && JkLangIntegerObject.IS_INSTANCE(o2)) {
			this.mysb.appendInteger((JkLangInteger.asInteger(o2)));
		}
		else if((function(o) {
			if(JkLangLongIntegerObject.IS_INSTANCE && JkLangLongIntegerObject.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))(o2) != null) {
			this.mysb.appendLong((JkLangLongInteger.asLong(o2)));
		}
		else if((function(o1) {
			if(JkLangDoubleObject.IS_INSTANCE && JkLangDoubleObject.IS_INSTANCE(o1)) {
				return o1;
			}
			return null;
		}.bind(this))(o2) != null) {
			this.mysb.appendDouble((JkLangDouble.asDouble(o2)));
		}
		else {
			this.mysb.appendString("");
		}
		this.print((this.mysb.toString()), indent, false, false, sb);
	};
	JkJsonJSONEncoder.prototype.encodeObject = function(o, indent, sb) {
		if(!(o != null)) {
			if(this.encodeNullAsNull) {
				this.print("null", indent, false, false, sb);
			}
			else {
				this.encodeString("", indent, sb);
			}
		}
		else if(JkJsonJSONObject.IS_INSTANCE && JkJsonJSONObject.IS_INSTANCE(o)) {
			this.encodeObject((o.toJsonObject()), indent, sb);
		}
		else if(o instanceof Array) {
			this.encodeArray(o, indent, sb);
		}
		else if(o instanceof Array) {
			this.encodeVector(o, indent, sb);
		}
		else if(o instanceof Map) {
			this.encodeMap(o, indent, sb);
		}
		else if(o instanceof ArrayBuffer) {
			this.encodeString((JkBase64Base64Encoder.encode(o)), indent, sb);
		}
		else if(typeof o === "string") {
			this.encodeString(o, indent, sb);
		}
		else if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
			this.encodeDynamicMap(o, indent, sb);
		}
		else if(JkLangDynamicVector.IS_INSTANCE && JkLangDynamicVector.IS_INSTANCE(o)) {
			this.encodeDynamicVector(o, indent, sb);
		}
		else if(JkLangKeyValueListForStrings.IS_INSTANCE && JkLangKeyValueListForStrings.IS_INSTANCE(o)) {
			this.encodeKeyValueList(o, indent, sb);
		}
		else if(JkLangStringObject.IS_INSTANCE && JkLangStringObject.IS_INSTANCE(o)) {
			this.encodeString((o.toString()), indent, sb);
		}
		else if(JkLangBufferObject.IS_INSTANCE && JkLangBufferObject.IS_INSTANCE(o)) {
			this.encodeString((JkBase64Base64Encoder.encode((o.toBuffer()))), indent, sb);
		}
		else if(JkLangArrayObject.IS_INSTANCE && JkLangArrayObject.IS_INSTANCE(o)) {
			var aa = o.toArray();
			this.encodeArray(aa, indent, sb);
		}
		else if(JkLangVectorObject.IS_INSTANCE && JkLangVectorObject.IS_INSTANCE(o)) {
			var vv = o.toVector();
			this.encodeVector(vv, indent, sb);
		}
		else if(JkLangIntegerObject.IS_INSTANCE && JkLangIntegerObject.IS_INSTANCE(o) || JkLangLongIntegerObject.IS_INSTANCE && JkLangLongIntegerObject.IS_INSTANCE(o) || JkLangDoubleObject.IS_INSTANCE && JkLangDoubleObject.IS_INSTANCE(o)) {
			this.encodeNumber(o, indent, sb);
		}
		else if(JkLangCharacterObject.IS_INSTANCE && JkLangCharacterObject.IS_INSTANCE(o)) {
			this.encodeString((JkLangString.asString(o)), indent, sb);
		}
		else if(JkLangBooleanObject.IS_INSTANCE && JkLangBooleanObject.IS_INSTANCE(o)) {
			this.encodeBoolean((JkLangBoolean.asBoolean(o, false)), indent, sb);
		}
		else {
			this.encodeString("", indent, sb);
		}
	};
	JkJsonJSONEncoder.encode = function(o, niceFormatting, stringFormattedNumber) {
		var v = JkJsonJSONEncoder.NEW();
		v.setStringFormattedBoolean(true);
		v.setStringFormattedNumber(stringFormattedNumber);
		v.setNiceFormatting(niceFormatting);
		return v.execute(o);
	};
	JkJsonJSONEncoder.prototype.execute = function(o) {
		var sb = JkLangStringBuilder.NEW();
		this.encodeObject(o, 0, sb);
		return sb.toString();
	};
	JkJsonJSONEncoder.encodeToBuilder = function(o, sb) {
		if(!(sb != null)) {
			return;
		}
		var str = JkJsonJSONEncoder.NEW().setEncodeNullAsNull(true).execute(o);
		if(str != null) {
			sb.appendString(str);
		}
	};
	JkJsonJSONEncoder.toString = function(o) {
		var v = JkJsonJSONEncoder.NEW();
		v.setStringFormattedBoolean(false);
		v.setStringFormattedNumber(false);
		v.setNiceFormatting(true);
		v.setEncodeNullAsNull(true);
		return v.execute(o);
	};
	JkJsonJSONEncoder.toCompactString = function(o) {
		var v = JkJsonJSONEncoder.NEW();
		v.setStringFormattedBoolean(false);
		v.setStringFormattedNumber(false);
		v.setNiceFormatting(false);
		v.setEncodeNullAsNull(true);
		return v.execute(o);
	};
	JkJsonJSONEncoder.prototype.getNiceFormatting = function() {
		return this.niceFormatting;
	};
	JkJsonJSONEncoder.prototype.setNiceFormatting = function(v) {
		this.niceFormatting = v;
		return this;
	};
	JkJsonJSONEncoder.prototype.getStringFormattedBoolean = function() {
		return this.stringFormattedBoolean;
	};
	JkJsonJSONEncoder.prototype.setStringFormattedBoolean = function(v) {
		this.stringFormattedBoolean = v;
		return this;
	};
	JkJsonJSONEncoder.prototype.getStringFormattedNumber = function() {
		return this.stringFormattedNumber;
	};
	JkJsonJSONEncoder.prototype.setStringFormattedNumber = function(v) {
		this.stringFormattedNumber = v;
		return this;
	};
	JkJsonJSONEncoder.prototype.getNewJSONFormat = function() {
		return this.newJSONFormat;
	};
	JkJsonJSONEncoder.prototype.setNewJSONFormat = function(v) {
		this.newJSONFormat = v;
		return this;
	};
	JkJsonJSONEncoder.prototype.getEncodeNullAsNull = function() {
		return this.encodeNullAsNull;
	};
	JkJsonJSONEncoder.prototype.setEncodeNullAsNull = function(v) {
		this.encodeNullAsNull = v;
		return this;
	};
	JkJsonJSONEncoder.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkJsonJSONEncoder"] === true;
	};
	let JkJsonJSONObjectAdapter = function() {
	};
	JkJsonJSONObjectAdapter.prototype._t = {
		"JkJsonJSONObject" : true,
		"JkJsonJSONObjectAdapter" : true
	};
	JkJsonJSONObjectAdapter.prototype._tobj = JkJsonJSONObjectAdapter;
	JkJsonJSONObjectAdapter.NEW = function() {
		var v = new JkJsonJSONObjectAdapter;
		return v.CTOR_JkJsonJSONObjectAdapter();
	};
	JkJsonJSONObjectAdapter.prototype.CTOR_JkJsonJSONObjectAdapter = function() {
		return this;
	};
	JkJsonJSONObjectAdapter.prototype.asJsonValue = function(value) {
		if(!(value != null)) {
			return null;
		}
		if(JkJsonJSONObject.IS_INSTANCE && JkJsonJSONObject.IS_INSTANCE(value)) {
			var oj = value;
			return oj.toJsonObject();
		}
		return value;
	};
	JkJsonJSONObjectAdapter.prototype.toDynamicMap = function() {
		return (function(o) {
			if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))((this.toJsonObject()));
	};
	JkJsonJSONObjectAdapter.prototype.toObjectMap = function() {
		var dm = this.toDynamicMap();
		if(!(dm != null)) {
			return null;
		}
		return dm.toObjectMap();
	};
	JkJsonJSONObjectAdapter.prototype.toJsonObject = function() {
	};
	JkJsonJSONObjectAdapter.prototype.fromJsonObject = function(o) {
	};
	JkJsonJSONObjectAdapter.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkJsonJSONObjectAdapter"] === true;
	};
	let JkJsonJSONParserNullObject = function() {
	};
	JkJsonJSONParserNullObject.prototype._t = { "JkJsonJSONParserNullObject" : true };
	JkJsonJSONParserNullObject.prototype._tobj = JkJsonJSONParserNullObject;
	JkJsonJSONParserNullObject.NEW = function() {
		var v = new JkJsonJSONParserNullObject;
		return v.CTOR_JkJsonJSONParserNullObject();
	};
	JkJsonJSONParserNullObject.prototype.CTOR_JkJsonJSONParserNullObject = function() {
		return this;
	};
	JkJsonJSONParserNullObject.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkJsonJSONParserNullObject"] === true;
	};
	let JkJsonJSONParser = function() {
		this.iterator = null;
	};
	JkJsonJSONParser.prototype._t = { "JkJsonJSONParser" : true };
	JkJsonJSONParser.prototype._tobj = JkJsonJSONParser;
	JkJsonJSONParser.NEW = function() {
		var v = new JkJsonJSONParser;
		return v.CTOR_JkJsonJSONParser();
	};
	JkJsonJSONParser.prototype.CTOR_JkJsonJSONParser = function() {
		this.iterator = null;
		return this;
	};
	JkJsonJSONParser.parse = function(data) {
		if(!(data != null)) {
			return null;
		}
		if(data instanceof ArrayBuffer) {
			return JkJsonJSONParser.parseBuffer(data);
		}
		if(typeof data === "string") {
			return JkJsonJSONParser.parseString(data);
		}
		if(JkFsFile.IS_INSTANCE && JkFsFile.IS_INSTANCE(data)) {
			return JkJsonJSONParser.parseFile(data);
		}
		return null;
	};
	JkJsonJSONParser.parseBuffer = function(buffer) {
		if(buffer == null) {
			return null;
		}
		return JkJsonJSONParser.forBuffer(buffer).acceptObject();
	};
	JkJsonJSONParser.parseString = function(str) {
		if(JkLangString.isEmpty(str)) {
			return null;
		}
		return JkJsonJSONParser.forString(str).acceptObject();
	};
	JkJsonJSONParser.parseFile = function(file) {
		if(file == null) {
			return null;
		}
		return JkJsonJSONParser.parseString((file.getContentsUTF8()));
	};
	JkJsonJSONParser.forString = function(str) {
		var v = JkJsonJSONParser.NEW();
		v.setDataString(str);
		return v;
	};
	JkJsonJSONParser.forBuffer = function(buffer) {
		var v = JkJsonJSONParser.NEW();
		v.setDataBuffer(buffer);
		return v;
	};
	JkJsonJSONParser.prototype.setDataString = function(str) {
		this.iterator = JkLangCharacterIteratorForString.forString(str);
		this.iterator.moveToNextChar();
	};
	JkJsonJSONParser.prototype.setDataBuffer = function(buffer) {
		this.iterator = JkLangCharacterIteratorForBuffer.forBuffer(buffer);
		this.iterator.moveToNextChar();
	};
	JkJsonJSONParser.prototype.skipSpaces = function() {
		while(true){
			if(this.iterator.hasEnded()) {
				break;
			}
			var c = this.iterator.getCurrentChar();
			if(c == " ".charCodeAt() || c == "\t".charCodeAt() || c == "\r".charCodeAt() || c == "\n".charCodeAt()) {
				this.iterator.moveToNextChar();
				continue;
			}
			break;
		}
	};
	JkJsonJSONParser.prototype.acceptChar = function(c) {
		this.skipSpaces();
		if(this.iterator.getCurrentChar() == c) {
			this.iterator.moveToNextChar();
			return true;
		}
		return false;
	};
	JkJsonJSONParser.prototype.acceptString = function() {
		this.skipSpaces();
		var ss = this.iterator.getCurrentChar();
		if(ss != "'".charCodeAt() && ss != "\"".charCodeAt()) {
			return null;
		}
		var i = 0;
		var sb = JkLangStringBuilder.NEW();
		while(true){
			var c = this.iterator.getNextChar();
			i++;
			if(JkLangCharacter.isEOF(c)) {
				for(var n = 0 ; n < i ; n++) {
					this.iterator.moveToPreviousChar();
				}
				return null;
			}
			if(c == ss) {
				this.iterator.moveToNextChar();
				break;
			}
			if(c == "\\".charCodeAt()) {
				c = this.iterator.getNextChar();
				if(c == "u".charCodeAt()) {
					var v = JkLangStringBuilder.NEW();
					var x = 0;
					while(x < 4){
						if(this.iterator.hasEnded()) {
							break;
						}
						v.appendCharacter((this.iterator.getNextChar()));
						x++;
					}
					c = JkLangString.toIntegerFromHex((v.toString()));
				}
				else if(c == "t".charCodeAt()) {
					c = "\t".charCodeAt();
				}
				else if(c == "r".charCodeAt()) {
					c = "\r".charCodeAt();
				}
				else if(c == "n".charCodeAt()) {
					c = "\n".charCodeAt();
				}
				else if(c == "b".charCodeAt()) {
					c = "\b".charCodeAt();
				}
				else if(c == "f".charCodeAt()) {
					c = "\f".charCodeAt();
				}
			}
			sb.appendCharacter(c);
		}
		return sb.toString();
	};
	JkJsonJSONParser.prototype.acceptBoolean = function() {
		this.skipSpaces();
		var ss = this.iterator.getCurrentChar();
		if(ss != "t".charCodeAt() && ss != "f".charCodeAt()) {
			return null;
		}
		var sb = JkLangStringBuilder.NEW();
		sb.appendCharacter(ss);
		var li = 5;
		if(ss == "t".charCodeAt()) {
			li = 4;
		}
		var btc = 0;
		while(true){
			var c = this.iterator.getNextChar();
			btc++;
			if(c != "a".charCodeAt() && c != "l".charCodeAt() && c != "s".charCodeAt() && c != "e".charCodeAt() && c != "r".charCodeAt() && c != "u".charCodeAt()) {
				this.iterator.moveToNextChar();
				btc++;
				break;
			}
			sb.appendCharacter(c);
			if(sb.count() == li) {
				this.iterator.moveToNextChar();
				btc++;
				break;
			}
		}
		var v = sb.toString();
		if(li == 4 && "true" == v) {
			return JkLangBoolean.asObject(true);
		}
		if(li == 5 && "false" == v) {
			return JkLangBoolean.asObject(false);
		}
		var i = 0;
		while(i < btc){
			this.iterator.moveToPreviousChar();
			i++;
		}
		return null;
	};
	JkJsonJSONParser.prototype.acceptNumber = function() {
		this.skipSpaces();
		var ss = this.iterator.getCurrentChar();
		if(ss != "-".charCodeAt() && ss != "+".charCodeAt() && ss != ".".charCodeAt() && (ss < "0".charCodeAt() || ss > "9".charCodeAt())) {
			return null;
		}
		var sb = JkLangStringBuilder.NEW();
		sb.appendCharacter(ss);
		while(true){
			var c = this.iterator.getNextChar();
			if(c != ".".charCodeAt() && c != "e".charCodeAt() && c != "E".charCodeAt() && c != "-".charCodeAt() && (c < "0".charCodeAt() || c > "9".charCodeAt())) {
				break;
			}
			sb.appendCharacter(c);
		}
		var s = sb.toString();
		if(JkLangString.getIndexOfCharacter(s, (".".charCodeAt()), 0) > -1) {
			return JkLangDouble.asObject((JkLangDouble.asDouble(s)));
		}
		var value = JkLangString.toLong(s);
		if(value >= -2147483648 && value <= 2147483647) {
			return JkLangInteger.asObject((~(~value)));
		}
		return JkLangLongInteger.asObject(value);
	};
	JkJsonJSONParser.prototype.acceptNull = function() {
		this.skipSpaces();
		var ss = this.iterator.getCurrentChar();
		if(ss != "n".charCodeAt()) {
			return null;
		}
		var sb = JkLangStringBuilder.NEW();
		sb.appendCharacter(ss);
		var btc = 0;
		while(true){
			var c = this.iterator.getNextChar();
			btc++;
			if(c != "u".charCodeAt() && c != "l".charCodeAt()) {
				this.iterator.moveToNextChar();
				btc++;
				break;
			}
			sb.appendCharacter(c);
			if(sb.count() == 4) {
				this.iterator.moveToNextChar();
				btc++;
				break;
			}
		}
		if("null" == sb.toString()) {
			return JkJsonJSONParserNullObject.NEW();
		}
		var i = 0;
		while(i < btc){
			this.iterator.moveToPreviousChar();
			i++;
		}
		return null;
	};
	JkJsonJSONParser.prototype.acceptObject = function() {
		if(this.acceptChar(("[".charCodeAt()))) {
			var v = JkLangDynamicVector.NEW();
			while(true){
				if(this.acceptChar(("]".charCodeAt()))) {
					break;
				}
				var o = this.acceptObject();
				if(o == null) {
					return null;
				}
				v.appendObject(o);
				this.acceptChar((",".charCodeAt()));
			}
			return v;
		}
		if(this.acceptChar(("{".charCodeAt()))) {
			var v1 = JkLangDynamicMap.NEW();
			while(true){
				if(this.acceptChar(("}".charCodeAt()))) {
					break;
				}
				var key = this.acceptString();
				if(key == null) {
					return null;
				}
				if(this.acceptChar((":".charCodeAt())) == false) {
					return null;
				}
				var val = this.acceptObject();
				if(val == null) {
					return null;
				}
				if(JkJsonJSONParserNullObject.IS_INSTANCE && JkJsonJSONParserNullObject.IS_INSTANCE(val)) {
					v1.setObject(key, null);
				}
				else {
					v1.setObject(key, val);
				}
				this.acceptChar((",".charCodeAt()));
			}
			return v1;
		}
		var s = this.acceptString();
		if(s != null) {
			return s;
		}
		var b = this.acceptBoolean();
		if(b != null) {
			return b;
		}
		var n = this.acceptNull();
		if(n != null) {
			return n;
		}
		var v2 = this.acceptNumber();
		if(v2 != null) {
			return v2;
		}
		return null;
	};
	JkJsonJSONParser.prototype.getNextToken = function() {
		if(this.acceptChar(("[".charCodeAt()))) {
			return "[";
		}
		if(this.acceptChar(("]".charCodeAt()))) {
			return "]";
		}
		if(this.acceptChar(("{".charCodeAt()))) {
			return "{";
		}
		if(this.acceptChar(("}".charCodeAt()))) {
			return "}";
		}
		if(this.acceptChar((",".charCodeAt()))) {
			return ",";
		}
		var s = this.acceptString();
		if(s != null) {
			return s;
		}
		var b = this.acceptBoolean();
		if(b != null) {
			return b;
		}
		var n = this.acceptNull();
		if(n != null) {
			return n;
		}
		var v = this.acceptNumber();
		if(v != null) {
			return v;
		}
		return null;
	};
	JkJsonJSONParser.prototype.pushData = function(string) {
		if(!(string != null)) {
			return;
		}
		if(this.iterator == null) {
			this.setDataString(string);
			return;
		}
		var sb = JkLangStringBuilder.NEW();
		while(true){
			var c = this.iterator.getNextChar();
			if(JkLangCharacter.isEOF(c)) {
				break;
			}
			sb.appendCharacter(c);
		}
		sb.appendString(string);
		this.setDataString((sb.toString()));
	};
	JkJsonJSONParser.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkJsonJSONParser"] === true;
	};
	let JkGfxLength = function() {
		this.value = 0.0;
		this.unit = 0;
		this.ppi = 96.0;
	};
	JkGfxLength.prototype._t = {
		"JkGfxLength" : true,
		"JkLangStringObject" : true
	};
	JkGfxLength.prototype._tobj = JkGfxLength;
	JkGfxLength.NEW = function() {
		var v = new JkGfxLength;
		return v.CTOR_JkGfxLength();
	};
	JkGfxLength.prototype.CTOR_JkGfxLength = function() {
		this.ppi = 96.0;
		this.unit = 0;
		this.value = 0.0;
		return this;
	};
	JkGfxLength.asPoints = function(value, ppi) {
		return JkGfxLength.forString(value, 0.0).toPoints(ppi);
	};
	JkGfxLength.asPointsWithPpi = function(value, ppi) {
		return JkGfxLength.forString(value, 0.0).getValueAsPointsWithPpi(ppi);
	};
	JkGfxLength.unitToString = function(unit) {
		if(unit == JkGfxLength.UNIT_POINT) {
			return "pt";
		}
		if(unit == JkGfxLength.UNIT_MILLIMETER) {
			return "mm";
		}
		if(unit == JkGfxLength.UNIT_MICROMETER) {
			return "um";
		}
		if(unit == JkGfxLength.UNIT_NANOMETER) {
			return "nm";
		}
		if(unit == JkGfxLength.UNIT_INCH) {
			return "in";
		}
		return null;
	};
	JkGfxLength.asStringWithUnit = function(_length, unit) {
		var v = 0.0;
		if(!(_length != null)) {
			v = 0.0;
		}
		else {
			v = _length.getValueAsUnit(unit);
		}
		return JkLangString.safeString((JkLangString.forDouble(v))) + JkLangString.safeString((JkGfxLength.unitToString(unit)));
	};
	JkGfxLength.asString = function(_length) {
		if(!(_length != null)) {
			return "0px";
		}
		return JkGfxLength.asStringWithUnit(_length, (_length.getUnit()));
	};
	JkGfxLength.forString = function(value, ppi) {
		var v = JkGfxLength.NEW();
		v.parse(value);
		if(ppi > 0.0) {
			v.setPpi(ppi);
		}
		return v;
	};
	JkGfxLength.forPoints = function(value, ppi) {
		var v = JkGfxLength.NEW();
		v.setValue(value);
		v.setUnit(JkGfxLength.UNIT_POINT);
		if(ppi > 0.0) {
			v.setPpi(ppi);
		}
		return v;
	};
	JkGfxLength.forMilliMeters = function(value, ppi) {
		var v = JkGfxLength.NEW();
		v.setValue(value);
		v.setUnit(JkGfxLength.UNIT_MILLIMETER);
		if(ppi > 0.0) {
			v.setPpi(ppi);
		}
		return v;
	};
	JkGfxLength.forMicroMeters = function(value, ppi) {
		var v = JkGfxLength.NEW();
		v.setValue(value);
		v.setUnit(JkGfxLength.UNIT_MICROMETER);
		if(ppi > 0.0) {
			v.setPpi(ppi);
		}
		return v;
	};
	JkGfxLength.forNanoMeters = function(value, ppi) {
		var v = JkGfxLength.NEW();
		v.setValue(value);
		v.setUnit(JkGfxLength.UNIT_NANOMETER);
		if(ppi > 0.0) {
			v.setPpi(ppi);
		}
		return v;
	};
	JkGfxLength.forInches = function(value, ppi) {
		var v = JkGfxLength.NEW();
		v.setValue(value);
		v.setUnit(JkGfxLength.UNIT_INCH);
		if(ppi > 0.0) {
			v.setPpi(ppi);
		}
		return v;
	};
	JkGfxLength.forValue = function(value, unit, ppi) {
		var v = JkGfxLength.NEW();
		v.setValue(value);
		v.setUnit(unit);
		if(ppi > 0.0) {
			v.setPpi(ppi);
		}
		return v;
	};
	JkGfxLength.forStringAsPoints = function(value, ppi) {
		var v = JkGfxLength.NEW();
		v.parse(value);
		v.setValue((v.toPoints(ppi)));
		v.setUnit(JkGfxLength.UNIT_POINT);
		v.setPpi(ppi);
		return v;
	};
	JkGfxLength.prototype.parse = function(value) {
		if(value == null) {
			this.value = 0;
			this.unit = JkGfxLength.UNIT_POINT;
			return;
		}
		var i = 0;
		var n = 0;
		var it = JkLangString.iterate(value);
		while(true){
			var c = it.getNextChar();
			if(c < 1) {
				break;
			}
			else if(c >= "0".charCodeAt() && c <= "9".charCodeAt()) {
				i *= 10;
				i += c - ~(~"0".charCodeAt());
			}
			else {
				break;
			}
			n++;
		}
		this.value = i;
		var suffix = JkLangString.getEndOfString(value, n);
		if(JkLangString.isEmpty(suffix)) {
			this.unit = JkGfxLength.UNIT_POINT;
		}
		else if(suffix == "pt" || suffix == "px") {
			this.unit = JkGfxLength.UNIT_POINT;
		}
		else if(suffix == "mm") {
			this.unit = JkGfxLength.UNIT_MILLIMETER;
		}
		else if(suffix == "um") {
			this.unit = JkGfxLength.UNIT_MICROMETER;
		}
		else if(suffix == "nm") {
			this.unit = JkGfxLength.UNIT_NANOMETER;
		}
		else if(suffix == "in") {
			this.unit = JkGfxLength.UNIT_INCH;
		}
		else {
			this.unit = JkGfxLength.UNIT_POINT;
		}
	};
	JkGfxLength.prototype.toPoints = function(customPpi) {
		return ~(~this.getValueAsPointsWithPpi(customPpi));
	};
	JkGfxLength.prototype.getValueAsPointsWithPpi = function(customPpi) {
		if(this.unit == JkGfxLength.UNIT_POINT) {
			if(this.ppi == customPpi) {
				return this.value;
			}
			if(this.ppi == 0.0) {
				return 0.0;
			}
			return customPpi * this.value / this.ppi;
		}
		if(this.unit == JkGfxLength.UNIT_MILLIMETER) {
			var v = this.value * customPpi / 25;
			if(this.value > 0 && v < 1) {
				v = 1.0;
			}
			return v;
		}
		if(this.unit == JkGfxLength.UNIT_MICROMETER) {
			var v1 = this.value * customPpi / 25000;
			if(this.value > 0 && v1 < 1) {
				v1 = 1.0;
			}
			return v1;
		}
		if(this.unit == JkGfxLength.UNIT_NANOMETER) {
			var v2 = this.value * customPpi / 25000000;
			if(this.value > 0 && v2 < 1) {
				v2 = 1.0;
			}
			return v2;
		}
		if(this.unit == JkGfxLength.UNIT_INCH) {
			var v3 = this.value * customPpi;
			if(this.value > 0 && v3 < 1) {
				v3 = 1.0;
			}
			return v3;
		}
		return 0.0;
	};
	JkGfxLength.prototype.getValueAsPoints = function() {
		return this.getValueAsPointsWithPpi(this.ppi);
	};
	JkGfxLength.prototype.getValueAsMilliMeters = function() {
		if(!(this.ppi != 0.0)) {
			return 0.0;
		}
		return 25 * this.getValueAsPoints() / this.ppi;
	};
	JkGfxLength.prototype.getValueAsMicroMeters = function() {
		if(!(this.ppi != 0.0)) {
			return 0.0;
		}
		return 25000 * this.getValueAsPoints() / this.ppi;
	};
	JkGfxLength.prototype.getValueAsNanoMeters = function() {
		if(!(this.ppi != 0.0)) {
			return 0.0;
		}
		return 25000000 * this.getValueAsPoints() / this.ppi;
	};
	JkGfxLength.prototype.getValueAsInches = function() {
		if(!(this.ppi != 0.0)) {
			return 0.0;
		}
		return this.getValueAsPoints() / this.ppi;
	};
	JkGfxLength.prototype.getValueAsUnit = function(unit) {
		if(unit == JkGfxLength.UNIT_POINT) {
			return this.getValueAsPoints();
		}
		if(unit == JkGfxLength.UNIT_MILLIMETER) {
			return this.getValueAsMilliMeters();
		}
		if(unit == JkGfxLength.UNIT_MICROMETER) {
			return this.getValueAsMicroMeters();
		}
		if(unit == JkGfxLength.UNIT_NANOMETER) {
			return this.getValueAsNanoMeters();
		}
		if(unit == JkGfxLength.UNIT_INCH) {
			return this.getValueAsInches();
		}
		return this.value;
	};
	JkGfxLength.prototype.toString = function() {
		return JkGfxLength.asString(this);
	};
	JkGfxLength.prototype.getValue = function() {
		return this.value;
	};
	JkGfxLength.prototype.setValue = function(v) {
		this.value = v;
		return this;
	};
	JkGfxLength.prototype.getUnit = function() {
		return this.unit;
	};
	JkGfxLength.prototype.setUnit = function(v) {
		this.unit = v;
		return this;
	};
	JkGfxLength.prototype.getPpi = function() {
		return this.ppi;
	};
	JkGfxLength.prototype.setPpi = function(v) {
		this.ppi = v;
		return this;
	};
	JkGfxLength.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkGfxLength"] === true;
	};
	JkGfxLength.UNIT_POINT = 0;
	JkGfxLength.UNIT_MILLIMETER = 1;
	JkGfxLength.UNIT_MICROMETER = 2;
	JkGfxLength.UNIT_NANOMETER = 3;
	JkGfxLength.UNIT_INCH = 4;
	let JkGfxSize = function() {
		this.width = 0.0;
		this.height = 0.0;
	};
	JkGfxSize.prototype._t = { "JkGfxSize" : true };
	JkGfxSize.prototype._tobj = JkGfxSize;
	JkGfxSize.NEW = function() {
		var v = new JkGfxSize;
		return v.CTOR_JkGfxSize();
	};
	JkGfxSize.prototype.CTOR_JkGfxSize = function() {
		this.height = 0.0;
		this.width = 0.0;
		return this;
	};
	JkGfxSize.prototype.getWidth = function() {
		return this.width;
	};
	JkGfxSize.prototype.setWidth = function(v) {
		this.width = v;
		return this;
	};
	JkGfxSize.prototype.getHeight = function() {
		return this.height;
	};
	JkGfxSize.prototype.setHeight = function(v) {
		this.height = v;
		return this;
	};
	JkGfxSize.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkGfxSize"] === true;
	};
	let JkGfxImage = function() {
	};
	JkGfxImage.prototype._t = { "JkGfxImage" : true };
	JkGfxImage.prototype._tobj = JkGfxImage;
	JkGfxImage.NEW = function() {
		var v = new JkGfxImage;
		return v.CTOR_JkGfxImage();
	};
	JkGfxImage.prototype.CTOR_JkGfxImage = function() {
		return this;
	};
	JkGfxImage.prototype.getPixelWidth = function() {
	};
	JkGfxImage.prototype.getPixelHeight = function() {
	};
	JkGfxImage.prototype.scaleToSizeSync = function(w, h) {
	};
	JkGfxImage.prototype.scaleToSize = function(w, h, callback) {
	};
	JkGfxImage.prototype.scaleToWidthSync = function(w) {
	};
	JkGfxImage.prototype.scaleToWidth = function(w, callback) {
	};
	JkGfxImage.prototype.scaleToHeightSync = function(h) {
	};
	JkGfxImage.prototype.scaleToHeight = function(h, callback) {
	};
	JkGfxImage.prototype.cropSync = function(x, y, w, h) {
	};
	JkGfxImage.prototype.crop = function(x, y, w, h, callback) {
	};
	JkGfxImage.prototype.toJPGData = function() {
	};
	JkGfxImage.prototype.toPNGData = function() {
	};
	JkGfxImage.prototype.toRGBAData = function() {
	};
	JkGfxImage.prototype.releaseImage = function() {
	};
	JkGfxImage.prototype.getProportionalWidth = function(h) {
		var width = h / this.getPixelHeight() * ~(~this.getPixelWidth());
		return ~(~width);
	};
	JkGfxImage.prototype.getProportionalHeight = function(w) {
		var height = w / this.getPixelWidth() * ~(~this.getPixelHeight());
		return ~(~height);
	};
	JkGfxImage.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkGfxImage"] === true;
	};
	let JkGfxPosition = function() {
		this.x = 0.0;
		this.y = 0.0;
	};
	JkGfxPosition.prototype._t = { "JkGfxPosition" : true };
	JkGfxPosition.prototype._tobj = JkGfxPosition;
	JkGfxPosition.NEW = function() {
		var v = new JkGfxPosition;
		return v.CTOR_JkGfxPosition();
	};
	JkGfxPosition.prototype.CTOR_JkGfxPosition = function() {
		this.y = 0.0;
		this.x = 0.0;
		return this;
	};
	JkGfxPosition.prototype.getX = function() {
		return this.x;
	};
	JkGfxPosition.prototype.setX = function(v) {
		this.x = v;
		return this;
	};
	JkGfxPosition.prototype.getY = function() {
		return this.y;
	};
	JkGfxPosition.prototype.setY = function(v) {
		this.y = v;
		return this;
	};
	JkGfxPosition.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkGfxPosition"] === true;
	};
	let JkGfxFontDescription = function() {
		this.file = null;
		this.name = null;
		this.bold = false;
		this.italic = false;
		this.underline = false;
		this.size = null;
	};
	JkGfxFontDescription.prototype._t = {
		"JkGfxFontDescription" : true,
		"JkLangStringObject" : true
	};
	JkGfxFontDescription.prototype._tobj = JkGfxFontDescription;
	JkGfxFontDescription.NEW = function() {
		var v = new JkGfxFontDescription;
		return v.CTOR_JkGfxFontDescription();
	};
	JkGfxFontDescription.prototype.CTOR_JkGfxFontDescription = function() {
		this.size = null;
		this.underline = false;
		this.italic = false;
		this.bold = false;
		this.name = null;
		this.file = null;
		this.file = null;
		this.name = "Sans";
		this.size = JkGfxLength.forMicroMeters(2500, 0.0);
		this.bold = false;
		this.italic = false;
		this.underline = false;
		return this;
	};
	JkGfxFontDescription.forDefault = function() {
		return JkGfxFontDescription.NEW();
	};
	JkGfxFontDescription.forFile = function(file, size) {
		var v = JkGfxFontDescription.NEW();
		v.setFile(file);
		if(size != null) {
			v.setSize(size);
		}
		return v;
	};
	JkGfxFontDescription.forName = function(name, size) {
		var v = JkGfxFontDescription.NEW();
		v.setName(name);
		if(size != null) {
			v.setSize(size);
		}
		return v;
	};
	JkGfxFontDescription.prototype.dup = function() {
		var v = JkGfxFontDescription.NEW();
		v.file = this.file;
		v.name = this.name;
		v.bold = this.bold;
		v.italic = this.italic;
		v.underline = this.underline;
		v.size = this.size;
		return v;
	};
	JkGfxFontDescription.prototype.toString = function() {
		var v = JkLangDynamicMap.NEW();
		v.setObject("file", this.file);
		v.setString("name", this.name);
		v.setBoolean("bold", this.bold);
		v.setBoolean("italic", this.italic);
		v.setBoolean("underline", this.underline);
		v.setObject("size", this.size);
		return JkJsonJSONEncoder.encode(v, true, false);
	};
	JkGfxFontDescription.prototype.getFile = function() {
		return this.file;
	};
	JkGfxFontDescription.prototype.setFile = function(v) {
		this.file = v;
		return this;
	};
	JkGfxFontDescription.prototype.getName = function() {
		return this.name;
	};
	JkGfxFontDescription.prototype.setName = function(v) {
		this.name = v;
		return this;
	};
	JkGfxFontDescription.prototype.getBold = function() {
		return this.bold;
	};
	JkGfxFontDescription.prototype.setBold = function(v) {
		this.bold = v;
		return this;
	};
	JkGfxFontDescription.prototype.getItalic = function() {
		return this.italic;
	};
	JkGfxFontDescription.prototype.setItalic = function(v) {
		this.italic = v;
		return this;
	};
	JkGfxFontDescription.prototype.getUnderline = function() {
		return this.underline;
	};
	JkGfxFontDescription.prototype.setUnderline = function(v) {
		this.underline = v;
		return this;
	};
	JkGfxFontDescription.prototype.getSize = function() {
		return this.size;
	};
	JkGfxFontDescription.prototype.setSize = function(v) {
		this.size = v;
		return this;
	};
	JkGfxFontDescription.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkGfxFontDescription"] === true;
	};
	let JkGfxColor = function() {
		this.red = 0.0;
		this.green = 0.0;
		this.blue = 0.0;
		this.alpha = 0.0;
	};
	JkGfxColor.prototype._t = { "JkGfxColor" : true };
	JkGfxColor.prototype._tobj = JkGfxColor;
	JkGfxColor.NEW_String = function(str) {
		var v = new JkGfxColor;
		return v.CTOR_JkGfxColor_String(str);
	};
	JkGfxColor.prototype.CTOR_JkGfxColor_String = function(str) {
		this.alpha = 0.0;
		this.blue = 0.0;
		this.green = 0.0;
		this.red = 0.0;
		this.parse(str);
		return this;
	};
	JkGfxColor.NEW = function() {
		var v = new JkGfxColor;
		return v.CTOR_JkGfxColor();
	};
	JkGfxColor.prototype.CTOR_JkGfxColor = function() {
		this.alpha = 0.0;
		this.blue = 0.0;
		this.green = 0.0;
		this.red = 0.0;
		return this;
	};
	JkGfxColor.black = function() {
		if(!(JkGfxColor.colorBlack != null)) {
			JkGfxColor.colorBlack = JkGfxColor.instance("black");
		}
		return JkGfxColor.colorBlack;
	};
	JkGfxColor.white = function() {
		if(!(JkGfxColor.colorWhite != null)) {
			JkGfxColor.colorWhite = JkGfxColor.instance("white");
		}
		return JkGfxColor.colorWhite;
	};
	JkGfxColor.asColor = function(o) {
		if(!(o != null)) {
			return null;
		}
		if(JkGfxColor.IS_INSTANCE && JkGfxColor.IS_INSTANCE(o)) {
			return o;
		}
		if(typeof o === "string") {
			return JkGfxColor.instance(o);
		}
		return null;
	};
	JkGfxColor.instance = function(str) {
		if(str == "none") {
			return null;
		}
		var v = JkGfxColor.NEW();
		if(str != null) {
			if(v.parse(str) == false) {
				v = null;
			}
		}
		return v;
	};
	JkGfxColor.forString = function(str) {
		if(str == "none") {
			return null;
		}
		var v = JkGfxColor.NEW();
		if(str != null) {
			if(v.parse(str) == false) {
				v = null;
			}
		}
		return v;
	};
	JkGfxColor.forRGBDouble = function(r, g, b) {
		var v = JkGfxColor.NEW();
		v.setRed(r);
		v.setGreen(g);
		v.setBlue(b);
		v.setAlpha(1.0);
		return v;
	};
	JkGfxColor.forRGBADouble = function(r, g, b, a) {
		var v = JkGfxColor.NEW();
		v.setRed(r);
		v.setGreen(g);
		v.setBlue(b);
		v.setAlpha(a);
		return v;
	};
	JkGfxColor.forRGB = function(r, g, b) {
		var v = JkGfxColor.NEW();
		v.setRed((r / 255.0));
		v.setGreen((g / 255.0));
		v.setBlue((b / 255.0));
		v.setAlpha(1.0);
		return v;
	};
	JkGfxColor.forRGBA = function(r, g, b, a) {
		var v = JkGfxColor.NEW();
		v.setRed((r / 255.0));
		v.setGreen((g / 255.0));
		v.setBlue((b / 255.0));
		v.setAlpha((a / 255.0));
		return v;
	};
	JkGfxColor.forRGBAInteger = function(value) {
		var v = JkGfxColor.NEW();
		v.setRed(((value >> 24 & 0xff) / 255.0));
		v.setGreen(((value >> 16 & 0xff) / 255.0));
		v.setBlue(((value >> 8 & 0xff) / 255.0));
		v.setAlpha(((value & 0xff) / 255.0));
		return v;
	};
	JkGfxColor.forARGBInteger = function(value) {
		var v = JkGfxColor.NEW();
		v.setAlpha(((value >> 24 & 0xff) / 255.0));
		v.setRed(((value >> 16 & 0xff) / 255.0));
		v.setGreen(((value >> 8 & 0xff) / 255.0));
		v.setBlue(((value & 0xff) / 255.0));
		return v;
	};
	JkGfxColor.forRGBInteger = function(value) {
		var v = JkGfxColor.NEW();
		v.setRed(((value >> 16 & 0xff) / 255.0));
		v.setGreen(((value >> 8 & 0xff) / 255.0));
		v.setBlue(((value & 0xff) / 255.0));
		v.setAlpha(1.0);
		return v;
	};
	JkGfxColor.prototype.getRedInt = function() {
		var v = ~(~(this.red * 255));
		return v;
	};
	JkGfxColor.prototype.getGreenInt = function() {
		var v = ~(~(this.green * 255));
		return v;
	};
	JkGfxColor.prototype.getBlueInt = function() {
		var v = ~(~(this.blue * 255));
		return v;
	};
	JkGfxColor.prototype.getAlphaInt = function() {
		var v = ~(~(this.alpha * 255));
		return v;
	};
	JkGfxColor.prototype.isWhite = function() {
		if(this.red + this.green + this.blue >= 3.0) {
			return true;
		}
		return false;
	};
	JkGfxColor.prototype.isBlack = function() {
		if(this.red + this.green + this.blue <= 0) {
			return true;
		}
		return false;
	};
	JkGfxColor.prototype.isLightColor = function() {
		if(this.red + this.green + this.blue >= 1.5) {
			return true;
		}
		return false;
	};
	JkGfxColor.prototype.isDarkColor = function() {
		return !this.isLightColor();
	};
	JkGfxColor.prototype.hexCharToInt = function(c) {
		if(c >= "0".charCodeAt() && c <= "9".charCodeAt()) {
			var v = ~(~c) - ~(~"0".charCodeAt());
			return v;
		}
		if(c >= "a".charCodeAt() && c <= "f".charCodeAt()) {
			return 10 + c - "a".charCodeAt();
		}
		if(c >= "A".charCodeAt() && c <= "F".charCodeAt()) {
			return 10 + c - "A".charCodeAt();
		}
		return 0;
	};
	JkGfxColor.prototype.hexDigitToInt = function(hx) {
		if(JkLangString.isEmpty(hx)) {
			return 0;
		}
		var c0 = this.hexCharToInt((JkLangString.getChar(hx, 0)));
		if(JkLangString.getLength(hx) < 2) {
			return c0;
		}
		return c0 * 16 + this.hexCharToInt((JkLangString.getChar(hx, 1)));
	};
	JkGfxColor.prototype.parse = function(s) {
		if(s == null) {
			this.red = 0.0;
			this.green = 0.0;
			this.blue = 0.0;
			this.alpha = 1.0;
			return true;
		}
		var v = true;
		this.alpha = 1.0;
		if(JkLangString.getChar(s, 0) == "#".charCodeAt()) {
			var slength = JkLangString.getLength(s);
			if(slength == 7 || slength == 9) {
				this.red = this.hexDigitToInt((JkLangString.getSubString(s, 1, 2))) / 255.0;
				this.green = this.hexDigitToInt((JkLangString.getSubString(s, 3, 2))) / 255.0;
				this.blue = this.hexDigitToInt((JkLangString.getSubString(s, 5, 2))) / 255.0;
				if(slength == 9) {
					this.alpha = this.hexDigitToInt((JkLangString.getSubString(s, 7, 2))) / 255.0;
				}
				v = true;
			}
			else {
				this.red = 0.0;
				this.blue = 0.0;
				this.green = 0.0;
				v = false;
			}
		}
		else if(s == "black") {
			this.red = 0.0;
			this.green = 0.0;
			this.blue = 0.0;
		}
		else if(s == "white") {
			this.red = 1.0;
			this.green = 1.0;
			this.blue = 1.0;
		}
		else if(s == "red") {
			this.red = 1.0;
			this.green = 0.0;
			this.blue = 0.0;
		}
		else if(s == "green") {
			this.red = 0.0;
			this.green = 1.0;
			this.blue = 0.0;
		}
		else if(s == "blue") {
			this.red = 0.0;
			this.green = 0.0;
			this.blue = 1.0;
		}
		else if(s == "lightred") {
			this.red = 0.6;
			this.green = 0.4;
			this.blue = 0.4;
		}
		else if(s == "lightgreen") {
			this.red = 0.4;
			this.green = 0.6;
			this.blue = 0.4;
		}
		else if(s == "lightblue") {
			this.red = 0.4;
			this.green = 0.4;
			this.blue = 0.6;
		}
		else if(s == "yellow") {
			this.red = 1.0;
			this.green = 1.0;
			this.blue = 0.0;
		}
		else if(s == "cyan") {
			this.red = 0.0;
			this.green = 1.0;
			this.blue = 1.0;
		}
		else if(s == "orange") {
			this.red = 1.0;
			this.green = 0.5;
			this.blue = 0.0;
		}
		else {
			v = false;
		}
		return v;
	};
	JkGfxColor.prototype.decimalStringToInteger = function(str) {
		if(JkLangString.isEmpty(str)) {
			return 0;
		}
		var v = 0;
		var m = JkLangString.getLength(str);
		var n = 0;
		for(n = 0 ; n < m ; n++) {
			var c = JkLangString.getChar(str, n);
			if(c >= "0".charCodeAt() && c <= "9".charCodeAt()) {
				v = v * 10;
				v += c - ~(~"0".charCodeAt());
			}
			else {
				break;
			}
		}
		return v;
	};
	JkGfxColor.prototype.dup = function(arg) {
		var f = 1.0;
		if(arg != null) {
			if(arg == "light") {
				f = 1.2;
			}
			else if(arg == "dark") {
				f = 0.8;
			}
			else if(JkLangString.endsWith(arg, "%")) {
				f = this.decimalStringToInteger(arg) / 100.0;
			}
		}
		var v = JkGfxColor.NEW();
		if(f > 1.0) {
			v.setRed((this.red + (1.0 - this.red) * (f - 1.0)));
			v.setGreen((this.green + (1.0 - this.green) * (f - 1.0)));
			v.setBlue((this.blue + (1.0 - this.blue) * (f - 1.0)));
		}
		else if(f < 1.0) {
			v.setRed((this.red * f));
			v.setGreen((this.green * f));
			v.setBlue((this.blue * f));
		}
		else {
			v.setRed(this.red);
			v.setGreen(this.green);
			v.setBlue(this.blue);
		}
		v.setAlpha(this.alpha);
		return v;
	};
	JkGfxColor.prototype.toRGBAInt32 = function() {
		var v = 0;
		v |= ~(~(~(~(this.red * 255)) & 0xff)) << 24;
		v |= ~(~(~(~(this.green * 255)) & 0xff)) << 16;
		v |= ~(~(~(~(this.blue * 255)) & 0xff)) << 8;
		v |= ~(~(~(~(this.alpha * 255)) & 0xff));
		return v;
	};
	JkGfxColor.prototype.toARGBInt32 = function() {
		var v = 0;
		v |= ~(~(~(~(this.alpha * 255)) & 0xff)) << 24;
		v |= ~(~(~(~(this.red * 255)) & 0xff)) << 16;
		v |= ~(~(~(~(this.green * 255)) & 0xff)) << 8;
		v |= ~(~(~(~(this.blue * 255)) & 0xff));
		return v;
	};
	JkGfxColor.prototype.toString = function() {
		return this.toRgbaString();
	};
	JkGfxColor.prototype.toRgbString = function() {
		var r = JkLangString.forIntegerHex((~(~(this.red * 255))), 0);
		var g = JkLangString.forIntegerHex((~(~(this.green * 255))), 0);
		var b = JkLangString.forIntegerHex((~(~(this.blue * 255))), 0);
		var sb = JkLangStringBuilder.NEW();
		sb.appendCharacter(("#".charCodeAt()));
		this.to2Digits(r, sb);
		this.to2Digits(g, sb);
		this.to2Digits(b, sb);
		return sb.toString();
	};
	JkGfxColor.prototype.toRgbaString = function() {
		var a = JkLangString.forIntegerHex((~(~(this.alpha * 255))), 0);
		return JkLangString.safeString((this.toRgbString())) + JkLangString.safeString(a);
	};
	JkGfxColor.prototype.toHtmlRgbaString = function() {
		var sb = JkLangStringBuilder.NEW();
		sb.appendString("rgba(");
		sb.appendString((JkLangString.forInteger((~(~(this.red * 255))))));
		sb.appendCharacter((",".charCodeAt()));
		sb.appendString((JkLangString.forInteger((~(~(this.green * 255))))));
		sb.appendCharacter((",".charCodeAt()));
		sb.appendString((JkLangString.forInteger((~(~(this.blue * 255))))));
		sb.appendCharacter((",".charCodeAt()));
		sb.appendString((JkLangString.forDouble(this.alpha)));
		sb.appendCharacter((")".charCodeAt()));
		return sb.toString();
	};
	JkGfxColor.prototype.toHtmlCompatibleString = function() {
		if(this.alpha >= 1.0) {
			return this.toRgbString();
		}
		return this.toHtmlRgbaString();
	};
	JkGfxColor.prototype.toRGBInteger = function() {
		var v = ~(~(this.blue * 255));
		v |= ~(~(this.green * 255)) << 8;
		v |= ~(~(this.red * 255)) << 16;
		return v;
	};
	JkGfxColor.prototype.to2Digits = function(val, sb) {
		if(JkLangString.getLength(val) == 1) {
			sb.appendCharacter(("0".charCodeAt()));
		}
		sb.appendString(val);
	};
	JkGfxColor.prototype.getRed = function() {
		return this.red;
	};
	JkGfxColor.prototype.setRed = function(v) {
		this.red = v;
		return this;
	};
	JkGfxColor.prototype.getGreen = function() {
		return this.green;
	};
	JkGfxColor.prototype.setGreen = function(v) {
		this.green = v;
		return this;
	};
	JkGfxColor.prototype.getBlue = function() {
		return this.blue;
	};
	JkGfxColor.prototype.setBlue = function(v) {
		this.blue = v;
		return this;
	};
	JkGfxColor.prototype.getAlpha = function() {
		return this.alpha;
	};
	JkGfxColor.prototype.setAlpha = function(v) {
		this.alpha = v;
		return this;
	};
	JkGfxColor.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkGfxColor"] === true;
	};
	JkGfxColor.colorBlack = null;
	JkGfxColor.colorWhite = null;
	let JkAppApplicationContext = {};
	JkAppApplicationContext.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkAppApplicationContext"] === true;
	};
	let JkThreadCriticalSection = function() {
	};
	JkThreadCriticalSection.prototype._t = { "JkThreadCriticalSection" : true };
	JkThreadCriticalSection.prototype._tobj = JkThreadCriticalSection;
	JkThreadCriticalSection.NEW = function() {
		var v = new JkThreadCriticalSection;
		return v.CTOR_JkThreadCriticalSection();
	};
	JkThreadCriticalSection.prototype.CTOR_JkThreadCriticalSection = function() {
		return this;
	};
	JkThreadCriticalSection.execute = function(value, block) {
		var mutex = JkThreadMutex.forObject(value);
		if(mutex != null) {
			mutex.lockMutex();
		}
		if(block != null) {
			block();
		}
		if(mutex != null) {
			mutex.unlockMutex();
		}
	};
	JkThreadCriticalSection.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkThreadCriticalSection"] === true;
	};
	let JkThreadCurrentThread = function() {
	};
	JkThreadCurrentThread.prototype._t = { "JkThreadCurrentThread" : true };
	JkThreadCurrentThread.prototype._tobj = JkThreadCurrentThread;
	JkThreadCurrentThread.NEW = function() {
		var v = new JkThreadCurrentThread;
		return v.CTOR_JkThreadCurrentThread();
	};
	JkThreadCurrentThread.prototype.CTOR_JkThreadCurrentThread = function() {
		return this;
	};
	JkThreadCurrentThread.sleepSeconds = function(seconds) {
		JkThreadCurrentThread.sleepMilliSeconds((seconds * 1000));
	};
	JkThreadCurrentThread.sleepMicroSeconds = function(uSeconds) {
		JkThreadCurrentThread.sleepMilliSeconds((uSeconds / 1000));
	};
	JkThreadCurrentThread.sleepMilliSeconds = function(mSeconds) {
		console.log("[jk.thread.CurrentThread.sleepMilliSeconds] (CurrentThread.sling:95:3): Not implemented");
	};
	JkThreadCurrentThread.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkThreadCurrentThread"] === true;
	};
	let JkThreadThreadPoolTaskRunner = function() {
		this.runnable = null;
		this.myParent = null;
	};
	JkThreadThreadPoolTaskRunner.prototype._t = {
		"JkThreadThreadPoolTaskRunner" : true,
		"JkLangRunnable" : true
	};
	JkThreadThreadPoolTaskRunner.prototype._tobj = JkThreadThreadPoolTaskRunner;
	JkThreadThreadPoolTaskRunner.NEW = function() {
		var v = new JkThreadThreadPoolTaskRunner;
		return v.CTOR_JkThreadThreadPoolTaskRunner();
	};
	JkThreadThreadPoolTaskRunner.prototype.CTOR_JkThreadThreadPoolTaskRunner = function() {
		this.myParent = null;
		this.runnable = null;
		return this;
	};
	JkThreadThreadPoolTaskRunner.prototype.run = function() {
		while(true){
			this.runnable.run();
			var next = this.myParent.getTaskFromQueue();
			if(!(next != null)) {
				break;
			}
			this.runnable = next;
		}
	};
	JkThreadThreadPoolTaskRunner.prototype.getRunnable = function() {
		return this.runnable;
	};
	JkThreadThreadPoolTaskRunner.prototype.setRunnable = function(v) {
		this.runnable = v;
		return this;
	};
	JkThreadThreadPoolTaskRunner.prototype.getMyParent = function() {
		return this.myParent;
	};
	JkThreadThreadPoolTaskRunner.prototype.setMyParent = function(v) {
		this.myParent = v;
		return this;
	};
	JkThreadThreadPoolTaskRunner.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkThreadThreadPoolTaskRunner"] === true;
	};
	let JkThreadThreadPool = function() {
		this.maximumPoolSize = 0;
		this.queue = null;
		this.runningThreadsCount = 0;
		this.mutex = null;
	};
	JkThreadThreadPool.prototype._t = { "JkThreadThreadPool" : true };
	JkThreadThreadPool.prototype._tobj = JkThreadThreadPool;
	JkThreadThreadPool.NEW = function() {
		var v = new JkThreadThreadPool;
		return v.CTOR_JkThreadThreadPool();
	};
	JkThreadThreadPool.prototype.CTOR_JkThreadThreadPool = function() {
		this.mutex = null;
		this.runningThreadsCount = 0;
		this.queue = null;
		this.maximumPoolSize = 0;
		this.queue = new Array;
		this.mutex = JkThreadMutex.create();
		return this;
	};
	JkThreadThreadPool.forMaxPoolSize = function(maximumPoolSize) {
		var v = JkThreadThreadPool.NEW();
		v.maximumPoolSize = maximumPoolSize;
		return v;
	};
	JkThreadThreadPool.prototype.getRunningThreadsCount = function() {
		return this.runningThreadsCount;
	};
	JkThreadThreadPool.prototype.submitTask = function(task) {
		this.execute(task);
	};
	JkThreadThreadPool.prototype.submitTasks = function(tasks) {
		if(tasks != null) {
			var n = 0;
			var m = tasks.length;
			for(n = 0 ; n < m ; n++) {
				var task = tasks[n];
				if(task != null) {
					this.execute(task);
				}
			}
		}
	};
	JkThreadThreadPool.prototype.execute = function(task) {
		if(!(task != null)) {
			return;
		}
		this.mutex.lockMutex();
		if(this.runningThreadsCount < this.maximumPoolSize) {
			var runner = JkThreadThreadPoolTaskRunner.NEW();
			runner.setMyParent(this);
			runner.setRunnable(task);
			if(JkThreadThread.start(runner) != null) {
				this.runningThreadsCount++;
			}
			else {
				this.queue.push(task);
			}
		}
		else {
			this.queue.push(task);
		}
		this.mutex.unlockMutex();
	};
	JkThreadThreadPool.prototype.getTaskFromQueue = function() {
		this.mutex.lockMutex();
		var item = (function(o) {
			if(JkLangRunnable.IS_INSTANCE && JkLangRunnable.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))((JkLangVector.popFirst(this.queue)));
		if(!(item != null)) {
			this.runningThreadsCount--;
		}
		this.mutex.unlockMutex();
		return item;
	};
	JkThreadThreadPool.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkThreadThreadPool"] === true;
	};
	let JkThreadThread = function() {
	};
	JkThreadThread.prototype._t = { "JkThreadThread" : true };
	JkThreadThread.prototype._tobj = JkThreadThread;
	JkThreadThread.NEW = function() {
		var v = new JkThreadThread;
		return v.CTOR_JkThreadThread();
	};
	JkThreadThread.prototype.CTOR_JkThreadThread = function() {
		return this;
	};
	JkThreadThread.setLocalValue = function(id, value) {
		console.log("[jk.thread.Thread.setLocalValue] (Thread.sling:227:3): Not implemented.");
	};
	JkThreadThread.getLocalValue = function(id) {
		console.log("[jk.thread.Thread.getLocalValue] (Thread.sling:252:3): Not implemented.");
		return null;
	};
	JkThreadThread.removeLocalValue = function(id) {
		console.log("[jk.thread.Thread.removeLocalValue] (Thread.sling:280:3): Not implemented.");
	};
	JkThreadThread.start = function(runnable) {
		if(!(runnable != null)) {
			return null;
		}
		console.log("[jk.thread.Thread.start] (Thread.sling:359:3): Not implemented");
		return null;
	};
	JkThreadThread.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkThreadThread"] === true;
	};
	let JkThreadRunningThread = {};
	JkThreadRunningThread.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkThreadRunningThread"] === true;
	};
	let JkThreadMutex = function() {
	};
	JkThreadMutex.prototype._t = { "JkThreadMutex" : true };
	JkThreadMutex.prototype._tobj = JkThreadMutex;
	JkThreadMutex.NEW = function() {
		var v = new JkThreadMutex;
		return v.CTOR_JkThreadMutex();
	};
	JkThreadMutex.prototype.CTOR_JkThreadMutex = function() {
		return this;
	};
	JkThreadMutex.create = function() {
		console.log("[jk.thread.Mutex.create] (Mutex.sling:48:3): Not implemented");
		return null;
	};
	JkThreadMutex.forObject = function(value) {
		console.log("[jk.thread.Mutex.forObject] (Mutex.sling:55:2): Not implemented");
		return null;
	};
	JkThreadMutex.prototype.lockMutex = function() {
	};
	JkThreadMutex.prototype.unlockMutex = function() {
	};
	JkThreadMutex.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkThreadMutex"] === true;
	};
	let JkMathMath = function() {
	};
	JkMathMath.prototype._t = { "JkMathMath" : true };
	JkMathMath.prototype._tobj = JkMathMath;
	JkMathMath.NEW = function() {
		var v = new JkMathMath;
		return v.CTOR_JkMathMath();
	};
	JkMathMath.prototype.CTOR_JkMathMath = function() {
		return this;
	};
	JkMathMath.toRadians = function(d) {
		return JkMathMath.M_PI / 180 * d;
	};
	JkMathMath.toDegrees = function(r) {
		return JkMathMath.M_PI * r / 180;
	};
	JkMathMath.abs = function(d) {
		return Math.abs(d);
	};
	JkMathMath.absFloat = function(f) {
		return Math.abs(f);
	};
	JkMathMath.absInt32 = function(i) {
		return Math.abs(i);
	};
	JkMathMath.absInt64 = function(l) {
		return Math.abs(l);
	};
	JkMathMath.acos = function(d) {
		return Math.acos(d);
	};
	JkMathMath.asin = function(d) {
		return Math.asin(d);
	};
	JkMathMath.atan = function(d) {
		return Math.atan(d);
	};
	JkMathMath.atan2 = function(y, x) {
		return Math.atan2(y, x);
	};
	JkMathMath.ceil = function(d) {
		return Math.ceil(d);
	};
	JkMathMath.cos = function(d) {
		return Math.cos(d);
	};
	JkMathMath.cosh = function(d) {
		return Math.cosh(d);
	};
	JkMathMath.exp = function(d) {
		return Math.exp(d);
	};
	JkMathMath.floor = function(d) {
		return Math.floor(d);
	};
	JkMathMath.remainder = function(x, y) {
		var z = 0.0;
		z = x % y;
		return z;
	};
	JkMathMath.log = function(d) {
		return Math.log(d);
	};
	JkMathMath.log10 = function(d) {
		return Math.log10(d);
	};
	JkMathMath.max = function(d1, d2) {
		return Math.max(d1, d2);
	};
	JkMathMath.maxFloat = function(f1, f2) {
		return Math.max(f1, f2);
	};
	JkMathMath.maxInt32 = function(i1, i2) {
		return Math.max(i1, i2);
	};
	JkMathMath.maxInt64 = function(l1, l2) {
		return Math.max(l1, l2);
	};
	JkMathMath.min = function(d1, d2) {
		return Math.min(d1, d2);
	};
	JkMathMath.minFloat = function(f1, f2) {
		return Math.min(f1, f2);
	};
	JkMathMath.minInt32 = function(i1, i2) {
		return Math.min(i1, i2);
	};
	JkMathMath.minInt64 = function(l1, l2) {
		return Math.max(l1, l2);
	};
	JkMathMath.pow = function(x, y) {
		return Math.pow(x, y);
	};
	JkMathMath.round = function(n) {
		return Math.round(n);
	};
	JkMathMath.roundWithMode = function(d, mode) {
		if(mode == JkMathMath.HALF_POSITIVE) {
			return Math.round(d);
		}
		var fd = JkMathMath.floor(d);
		var dp = d - fd;
		if(dp < 0.5) {
			return fd;
		}
		if(dp > 0.5) {
			return JkMathMath.ceil(d);
		}
		if(mode == JkMathMath.HALF_AWAY_FROM_ZERO) {
			if(d < 0) {
				return fd;
			}
			return JkMathMath.ceil(d);
		}
		if(mode == JkMathMath.HALF_TOWARD_ZERO) {
			if(d < 0) {
				return JkMathMath.ceil(d);
			}
			return fd;
		}
		if(mode == JkMathMath.HALF_NEAREST_EVEN) {
			if(~(~fd) % 2 == 0) {
				return fd;
			}
			return JkMathMath.ceil(d);
		}
		if(mode == JkMathMath.HALF_POSITIVE) {
			return JkMathMath.ceil(d);
		}
		if(mode == JkMathMath.HALF_NEGATIVE) {
			return fd;
		}
		return d;
	};
	JkMathMath.sin = function(d) {
		return Math.sin(d);
	};
	JkMathMath.sinh = function(d) {
		return Math.sinh(d);
	};
	JkMathMath.sqrt = function(d) {
		return Math.sqrt(d);
	};
	JkMathMath.tan = function(d) {
		return Math.tan(d);
	};
	JkMathMath.tanh = function(d) {
		return Math.tanh(d);
	};
	JkMathMath.computeQuinticInEasing = function(t, b, c, d) {
		var x = t / d;
		return c * x * x * x * x * x + b;
	};
	JkMathMath.computeQuinticOutEasing = function(t, b, c, d) {
		var x = t / d - 1;
		return c * (x * x * x * x * x + 1) + b;
	};
	JkMathMath.computeQuinticInOutEasing = function(t, b, c, d) {
		var x = t / d / 2;
		if(x < 1.0) {
			return c / 2 * x * x * x * x * x + b;
		}
		x = x - 2;
		return c / 2 * (x * x * x * x * x + 2) + b;
	};
	JkMathMath.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkMathMath"] === true;
	};
	JkMathMath.M_PI = 3.14159265358979;
	JkMathMath.M_PI_2 = 1.5707963267949;
	JkMathMath.M_PI_4 = 0.78539816339745;
	JkMathMath.M_1_PI = 0.31830988618379;
	JkMathMath.M_2_PI = 0.63661977236758;
	JkMathMath.M_2_SQRTPI = 1.12837916709551;
	JkMathMath.M_SQRT2 = 1.4142135623731;
	JkMathMath.M_SQRT1_2 = 0.70710678118655;
	JkMathMath.HALF_AWAY_FROM_ZERO = 0;
	JkMathMath.HALF_TOWARD_ZERO = 1;
	JkMathMath.HALF_NEAREST_EVEN = 2;
	JkMathMath.HALF_POSITIVE = 3;
	JkMathMath.HALF_NEGATIVE = 4;
	let JkMathMatrix33 = function() {
		this.v = [];
	};
	JkMathMatrix33.prototype._t = { "JkMathMatrix33" : true };
	JkMathMatrix33.prototype._tobj = JkMathMatrix33;
	JkMathMatrix33.NEW = function() {
		var v = new JkMathMatrix33;
		return v.CTOR_JkMathMatrix33();
	};
	JkMathMatrix33.prototype.CTOR_JkMathMatrix33 = function() {
		this.v = [];
		return this;
	};
	JkMathMatrix33.forZero = function() {
		return JkMathMatrix33.forValues([0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]);
	};
	JkMathMatrix33.forIdentity = function() {
		return JkMathMatrix33.forValues([1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]);
	};
	JkMathMatrix33.invertMatrix = function(m) {
		var d = m.v[0] * m.v[4] * m.v[8] + m.v[3] * m.v[7] * m.v[2] + m.v[6] * m.v[1] * m.v[5] - m.v[0] * m.v[7] * m.v[5] - m.v[3] * m.v[1] * m.v[8] - m.v[6] * m.v[4] * m.v[2];
		var v = JkMathMatrix33.NEW();
		v.v[0] = (m.v[4] * m.v[8] - m.v[7] * m.v[5]) / d;
		v.v[3] = (m.v[6] * m.v[5] - m.v[3] * m.v[8]) / d;
		v.v[6] = (m.v[3] * m.v[7] - m.v[6] * m.v[4]) / d;
		v.v[1] = (m.v[7] * m.v[2] - m.v[1] * m.v[8]) / d;
		v.v[4] = (m.v[0] * m.v[8] - m.v[6] * m.v[2]) / d;
		v.v[7] = (m.v[6] * m.v[1] - m.v[0] * m.v[7]) / d;
		v.v[2] = (m.v[1] * m.v[5] - m.v[4] * m.v[2]) / d;
		v.v[5] = (m.v[3] * m.v[2] - m.v[0] * m.v[5]) / d;
		v.v[8] = (m.v[0] * m.v[4] - m.v[3] * m.v[1]) / d;
		return v;
	};
	JkMathMatrix33.forTranslate = function(translateX, translateY) {
		return JkMathMatrix33.forValues([1.0, 0.0, translateX, 0.0, 1.0, translateY, 0.0, 0.0, 1.0]);
	};
	JkMathMatrix33.forRotation = function(angle) {
		var c = JkMathMath.cos(angle);
		var s = JkMathMath.sin(angle);
		return JkMathMatrix33.forValues([c, s, 0.0, -s, c, 0.0, 0.0, 0.0, 1.0]);
	};
	JkMathMatrix33.forRotationWithCenter = function(angle, centerX, centerY) {
		var translate = JkMathMatrix33.forTranslate(centerX, centerY);
		var rotate = JkMathMatrix33.forRotation(angle);
		var translateBack = JkMathMatrix33.forTranslate((-centerX), (-centerY));
		var translatedRotated = JkMathMatrix33.multiplyMatrix(translate, rotate);
		return JkMathMatrix33.multiplyMatrix(translatedRotated, translateBack);
	};
	JkMathMatrix33.forSkew = function(skewX, skewY) {
		return JkMathMatrix33.forValues([1.0, skewX, 0.0, skewY, 1.0, 0.0, 0.0, 0.0, 1.0]);
	};
	JkMathMatrix33.forScale = function(scaleX, scaleY) {
		return JkMathMatrix33.forValues([scaleX, 0.0, 0.0, 0.0, scaleY, 0.0, 0.0, 0.0, 1.0]);
	};
	JkMathMatrix33.forFlip = function(flipX, flipY) {
		var xmat33 = JkMathMatrix33.forValues([1.0, 0.0, 0.0, 0.0, -1.0, 0.0, 0.0, 0.0, 1.0]);
		var ymat33 = JkMathMatrix33.forValues([-1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]);
		if(flipX && flipY) {
			return JkMathMatrix33.multiplyMatrix(xmat33, ymat33);
		}
		else if(flipX) {
			return xmat33;
		}
		else if(flipY) {
			return ymat33;
		}
		return JkMathMatrix33.forIdentity();
	};
	JkMathMatrix33.forValues = function(mv) {
		var v = JkMathMatrix33.NEW();
		var i = 0;
		for(i = 0 ; i < 9 ; i++) {
			if(i >= mv.length) {
				v.v[i] = 0.0;
			}
			else {
				v.v[i] = mv[i];
			}
		}
		return v;
	};
	JkMathMatrix33.multiplyScalar = function(v, mm) {
		var mat33 = JkMathMatrix33.forZero();
		mat33.v[0] = mm.v[0] * v;
		mat33.v[1] = mm.v[1] * v;
		mat33.v[2] = mm.v[2] * v;
		mat33.v[3] = mm.v[3] * v;
		mat33.v[4] = mm.v[4] * v;
		mat33.v[5] = mm.v[5] * v;
		mat33.v[6] = mm.v[6] * v;
		mat33.v[7] = mm.v[7] * v;
		mat33.v[8] = mm.v[8] * v;
		return mat33;
	};
	JkMathMatrix33.multiplyMatrix = function(a, b) {
		var matrix33 = JkMathMatrix33.NEW();
		matrix33.v[0] = a.v[0] * b.v[0] + a.v[1] * b.v[3] + a.v[2] * b.v[6];
		matrix33.v[1] = a.v[0] * b.v[1] + a.v[1] * b.v[4] + a.v[2] * b.v[7];
		matrix33.v[2] = a.v[0] * b.v[2] + a.v[1] * b.v[5] + a.v[2] * b.v[8];
		matrix33.v[3] = a.v[3] * b.v[0] + a.v[4] * b.v[3] + a.v[5] * b.v[6];
		matrix33.v[4] = a.v[3] * b.v[1] + a.v[4] * b.v[4] + a.v[5] * b.v[7];
		matrix33.v[5] = a.v[3] * b.v[2] + a.v[4] * b.v[5] + a.v[5] * b.v[8];
		matrix33.v[6] = a.v[6] * b.v[0] + a.v[7] * b.v[3] + a.v[8] * b.v[6];
		matrix33.v[7] = a.v[6] * b.v[1] + a.v[7] * b.v[4] + a.v[8] * b.v[7];
		matrix33.v[8] = a.v[6] * b.v[2] + a.v[7] * b.v[5] + a.v[8] * b.v[8];
		return matrix33;
	};
	JkMathMatrix33.multiplyVector = function(a, b) {
		var x = a.v[0] * b.x + a.v[1] * b.y + a.v[2] * 1.0;
		var y = a.v[3] * b.x + a.v[4] * b.y + a.v[5] * 1.0;
		return JkMathVector2.create(x, y);
	};
	JkMathMatrix33.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkMathMatrix33"] === true;
	};
	let JkMathMatrix44 = function() {
		this.v = [];
	};
	JkMathMatrix44.prototype._t = { "JkMathMatrix44" : true };
	JkMathMatrix44.prototype._tobj = JkMathMatrix44;
	JkMathMatrix44.NEW = function() {
		var v = new JkMathMatrix44;
		return v.CTOR_JkMathMatrix44();
	};
	JkMathMatrix44.prototype.CTOR_JkMathMatrix44 = function() {
		this.v = [];
		return this;
	};
	JkMathMatrix44.forZero = function() {
		return JkMathMatrix44.forValues([0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]);
	};
	JkMathMatrix44.forIdentity = function() {
		return JkMathMatrix44.forValues([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
	};
	JkMathMatrix44.forTranslate = function(translateX, translateY, translateZ) {
		return JkMathMatrix44.forValues([1.0, 0.0, 0.0, translateX, 0.0, 1.0, 0.0, translateY, 0.0, 0.0, 1.0, translateZ, 0.0, 0.0, 0.0, 1.0]);
	};
	JkMathMatrix44.forXRotation = function(angle) {
		var c = JkMathMath.cos(angle);
		var s = JkMathMath.sin(angle);
		return JkMathMatrix44.forValues([1.0, 0.0, 0.0, 0.0, 0.0, c, -s, 0.0, 0.0, s, c, 0.0, 0.0, 0.0, 0.0, 1.0]);
	};
	JkMathMatrix44.forYRotation = function(angle) {
		var c = JkMathMath.cos(angle);
		var s = JkMathMath.sin(angle);
		return JkMathMatrix44.forValues([c, 0.0, s, 0.0, 0.0, 1.0, 0.0, 0.0, -s, 0.0, c, 0.0, 0.0, 0.0, 0.0, 1.0]);
	};
	JkMathMatrix44.forZRotation = function(angle) {
		var c = JkMathMath.cos(angle);
		var s = JkMathMath.sin(angle);
		return JkMathMatrix44.forValues([c, -s, 0.0, 0.0, s, c, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
	};
	JkMathMatrix44.forSkew = function(vx, vy, vz) {
		return JkMathMatrix44.forValues([1.0, vx, vx, 0.0, vy, 1.0, vy, 0.0, vz, vz, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
	};
	JkMathMatrix44.forXRotationWithCenter = function(angle, centerX, centerY, centerZ) {
		var translate = JkMathMatrix44.forTranslate(centerX, centerY, centerZ);
		var rotate = JkMathMatrix44.forXRotation(angle);
		var translateBack = JkMathMatrix44.forTranslate((-centerX), (-centerY), (-centerZ));
		var translatedRotated = JkMathMatrix44.multiplyMatrix(translate, rotate);
		return JkMathMatrix44.multiplyMatrix(translatedRotated, translateBack);
	};
	JkMathMatrix44.forYRotationWithCenter = function(angle, centerX, centerY, centerZ) {
		var translate = JkMathMatrix44.forTranslate(centerX, centerY, centerZ);
		var rotate = JkMathMatrix44.forYRotation(angle);
		var translateBack = JkMathMatrix44.forTranslate((-centerX), (-centerY), (-centerZ));
		var translatedRotated = JkMathMatrix44.multiplyMatrix(translate, rotate);
		return JkMathMatrix44.multiplyMatrix(translatedRotated, translateBack);
	};
	JkMathMatrix44.forZRotationWithCenter = function(angle, centerX, centerY, centerZ) {
		var translate = JkMathMatrix44.forTranslate(centerX, centerY, centerZ);
		var rotate = JkMathMatrix44.forZRotation(angle);
		var translateBack = JkMathMatrix44.forTranslate((-centerX), (-centerY), (-centerZ));
		var translatedRotated = JkMathMatrix44.multiplyMatrix(translate, rotate);
		return JkMathMatrix44.multiplyMatrix(translatedRotated, translateBack);
	};
	JkMathMatrix44.forScale = function(scaleX, scaleY, scaleZ) {
		return JkMathMatrix44.forValues([scaleX, 0.0, 0.0, 0.0, 0.0, scaleY, 0.0, 0.0, 0.0, 0.0, scaleZ, 0.0, 0.0, 0.0, 0.0, 1.0]);
	};
	JkMathMatrix44.forFlipXY = function(flipXY) {
		if(flipXY) {
			return JkMathMatrix44.forValues([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, -1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
		}
		return JkMathMatrix44.forIdentity();
	};
	JkMathMatrix44.forFlipXZ = function(flipXZ) {
		if(flipXZ) {
			return JkMathMatrix44.forValues([1.0, 0.0, 0.0, 0.0, 0.0, -1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
		}
		return JkMathMatrix44.forIdentity();
	};
	JkMathMatrix44.forFlipYZ = function(flipYZ) {
		if(flipYZ) {
			return JkMathMatrix44.forValues([-1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
		}
		return JkMathMatrix44.forIdentity();
	};
	JkMathMatrix44.forValues = function(mv) {
		var v = JkMathMatrix44.NEW();
		var i = 0;
		for(i = 0 ; i < 16 ; i++) {
			if(i >= mv.length) {
				v.v[i] = 0.0;
			}
			else {
				v.v[i] = mv[i];
			}
		}
		return v;
	};
	JkMathMatrix44.multiplyScalar = function(v, mm) {
		return JkMathMatrix44.forValues([mm.v[0] * v, mm.v[1] * v, mm.v[2] * v, mm.v[3] * v, mm.v[4] * v, mm.v[5] * v, mm.v[6] * v, mm.v[7] * v, mm.v[8] * v, mm.v[9] * v, mm.v[10] * v, mm.v[11] * v, mm.v[12] * v, mm.v[3] * v, mm.v[14] * v, mm.v[15] * v]);
	};
	JkMathMatrix44.multiplyMatrix = function(a, b) {
		var matrix44 = JkMathMatrix44.NEW();
		matrix44.v[0] = a.v[0] * b.v[0] + a.v[1] * b.v[4] + a.v[2] * b.v[8] + a.v[3] * b.v[12];
		matrix44.v[1] = a.v[0] * b.v[1] + a.v[1] * b.v[5] + a.v[2] * b.v[9] + a.v[3] * b.v[13];
		matrix44.v[2] = a.v[0] * b.v[2] + a.v[1] * b.v[6] + a.v[2] * b.v[10] + a.v[3] * b.v[14];
		matrix44.v[3] = a.v[0] * b.v[3] + a.v[1] * b.v[7] + a.v[2] * b.v[11] + a.v[3] * b.v[15];
		matrix44.v[4] = a.v[4] * b.v[0] + a.v[5] * b.v[4] + a.v[6] * b.v[8] + a.v[7] * b.v[12];
		matrix44.v[5] = a.v[4] * b.v[1] + a.v[5] * b.v[5] + a.v[6] * b.v[9] + a.v[7] * b.v[13];
		matrix44.v[6] = a.v[4] * b.v[2] + a.v[5] * b.v[6] + a.v[6] * b.v[10] + a.v[7] * b.v[14];
		matrix44.v[7] = a.v[4] * b.v[3] + a.v[5] * b.v[7] + a.v[6] * b.v[11] + a.v[7] * b.v[15];
		matrix44.v[8] = a.v[8] * b.v[0] + a.v[9] * b.v[4] + a.v[10] * b.v[8] + a.v[11] * b.v[12];
		matrix44.v[9] = a.v[8] * b.v[1] + a.v[9] * b.v[5] + a.v[10] * b.v[9] + a.v[11] * b.v[13];
		matrix44.v[10] = a.v[8] * b.v[2] + a.v[9] * b.v[6] + a.v[10] * b.v[10] + a.v[11] * b.v[14];
		matrix44.v[11] = a.v[8] * b.v[3] + a.v[9] * b.v[7] + a.v[10] * b.v[11] + a.v[11] * b.v[15];
		matrix44.v[12] = a.v[12] * b.v[0] + a.v[13] * b.v[4] + a.v[14] * b.v[8] + a.v[15] * b.v[12];
		matrix44.v[13] = a.v[12] * b.v[1] + a.v[13] * b.v[5] + a.v[14] * b.v[9] + a.v[15] * b.v[13];
		matrix44.v[14] = a.v[12] * b.v[2] + a.v[13] * b.v[6] + a.v[14] * b.v[10] + a.v[15] * b.v[14];
		matrix44.v[15] = a.v[12] * b.v[3] + a.v[13] * b.v[7] + a.v[14] * b.v[11] + a.v[15] * b.v[15];
		return matrix44;
	};
	JkMathMatrix44.multiplyVector = function(a, b) {
		var x = a.v[0] * b.x + a.v[1] * b.y + a.v[2] * b.z + a.v[3] * 1.0;
		var y = a.v[4] * b.x + a.v[5] * b.y + a.v[6] * b.z + a.v[7] * 1.0;
		var z = a.v[8] * b.x + a.v[9] * b.y + a.v[10] * b.z + a.v[11] * 1.0;
		return JkMathVector3.create(x, y, z);
	};
	JkMathMatrix44.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkMathMatrix44"] === true;
	};
	let JkMathVector2 = function() {
		this.x = 0.0;
		this.y = 0.0;
	};
	JkMathVector2.prototype._t = { "JkMathVector2" : true };
	JkMathVector2.prototype._tobj = JkMathVector2;
	JkMathVector2.NEW = function() {
		var v = new JkMathVector2;
		return v.CTOR_JkMathVector2();
	};
	JkMathVector2.prototype.CTOR_JkMathVector2 = function() {
		this.y = 0.0;
		this.x = 0.0;
		return this;
	};
	JkMathVector2.create = function(x, y) {
		var v = JkMathVector2.NEW();
		v.x = x;
		v.y = y;
		return v;
	};
	JkMathVector2.prototype.add = function(b) {
		this.x += b.x;
		this.y += b.y;
		return this;
	};
	JkMathVector2.prototype.subtract = function(b) {
		this.x -= b.x;
		this.y -= b.y;
		return this;
	};
	JkMathVector2.prototype.multiply = function(b) {
		this.x *= b.x;
		this.y *= b.y;
		return this;
	};
	JkMathVector2.prototype.multiplyScalar = function(a) {
		this.x += a;
		this.y += a;
		return this;
	};
	JkMathVector2.prototype.distance = function(b) {
		var dist = (this.y - b.y) * (this.y - b.y) + (this.x - b.x) * (this.x - b.x);
		return JkMathMath.sqrt(dist);
	};
	JkMathVector2.prototype.getLength = function() {
		return JkMathMath.sqrt((this.x * this.x + this.y * this.y));
	};
	JkMathVector2.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkMathVector2"] === true;
	};
	let JkMathVector3 = function() {
		this.x = 0.0;
		this.y = 0.0;
		this.z = 0.0;
	};
	JkMathVector3.prototype._t = { "JkMathVector3" : true };
	JkMathVector3.prototype._tobj = JkMathVector3;
	JkMathVector3.NEW = function() {
		var v = new JkMathVector3;
		return v.CTOR_JkMathVector3();
	};
	JkMathVector3.prototype.CTOR_JkMathVector3 = function() {
		this.z = 0.0;
		this.y = 0.0;
		this.x = 0.0;
		return this;
	};
	JkMathVector3.create = function(x, y, z) {
		var v = JkMathVector3.NEW();
		v.x = x;
		v.y = y;
		v.z = z;
		return v;
	};
	JkMathVector3.prototype.add = function(b) {
		this.x += b.x;
		this.y += b.y;
		this.z += b.z;
		return this;
	};
	JkMathVector3.prototype.subtract = function(b) {
		this.x -= b.x;
		this.y -= b.y;
		this.z -= b.z;
		return this;
	};
	JkMathVector3.prototype.multiply = function(b) {
		this.x *= b.x;
		this.y *= b.y;
		this.z *= b.z;
		return this;
	};
	JkMathVector3.prototype.multiplyScalar = function(a) {
		this.x *= a;
		this.y *= a;
		this.z *= a;
		return this;
	};
	JkMathVector3.prototype.distance = function(b) {
		var dist = (this.y - b.y) * (this.y - b.y) + (this.x - b.x) * (this.x - b.x) + (this.z - b.z) * (this.z - b.z);
		return JkMathMath.sqrt(dist);
	};
	JkMathVector3.prototype.getLength = function() {
		return JkMathMath.sqrt((this.x * this.x + this.y * this.y + this.z * this.z));
	};
	JkMathVector3.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkMathVector3"] === true;
	};
	let JkRenderRenderer = {};
	JkRenderRenderer.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkRenderRenderer"] === true;
	};
	let JkRenderRenderingContext = function() {
	};
	JkRenderRenderingContext.prototype._t = { "JkRenderRenderingContext" : true };
	JkRenderRenderingContext.prototype._tobj = JkRenderRenderingContext;
	JkRenderRenderingContext.NEW = function() {
		var v = new JkRenderRenderingContext;
		return v.CTOR_JkRenderRenderingContext();
	};
	JkRenderRenderingContext.prototype.CTOR_JkRenderRenderingContext = function() {
		return this;
	};
	JkRenderRenderingContext.prototype.setFillStyle = function(style) {
	};
	JkRenderRenderingContext.prototype.setStrokeStyle = function(style) {
	};
	JkRenderRenderingContext.prototype.setShadowColor = function(color) {
	};
	JkRenderRenderingContext.prototype.setShadowBlur = function(blur) {
	};
	JkRenderRenderingContext.prototype.setShadowOffsetX = function(offset) {
	};
	JkRenderRenderingContext.prototype.setShadowOffsetY = function(offset) {
	};
	JkRenderRenderingContext.prototype.createLinearGradient = function(x0, y0, x1, y1) {
	};
	JkRenderRenderingContext.prototype.createPattern = function(image, repeat) {
	};
	JkRenderRenderingContext.prototype.createRadialGradient = function(x0, y0, r0, x1, y1, r1) {
	};
	JkRenderRenderingContext.prototype.addColorStop = function(gradient, index, color) {
	};
	JkRenderRenderingContext.prototype.setLineCap = function(cap) {
	};
	JkRenderRenderingContext.prototype.setLineJoin = function(join) {
	};
	JkRenderRenderingContext.prototype.setLineWidth = function(width) {
	};
	JkRenderRenderingContext.prototype.setMiterLimit = function(limit) {
	};
	JkRenderRenderingContext.prototype.rect = function(x, y, width, height) {
	};
	JkRenderRenderingContext.prototype.fillRect = function(x, y, width, height) {
	};
	JkRenderRenderingContext.prototype.strokeRect = function(x, y, width, height) {
	};
	JkRenderRenderingContext.prototype.clearRect = function(x, y, width, height) {
	};
	JkRenderRenderingContext.prototype.fill = function() {
	};
	JkRenderRenderingContext.prototype.stroke = function() {
	};
	JkRenderRenderingContext.prototype.beginPath = function() {
	};
	JkRenderRenderingContext.prototype.moveTo = function(x, y) {
	};
	JkRenderRenderingContext.prototype.closePath = function() {
	};
	JkRenderRenderingContext.prototype.lineTo = function(x, y) {
	};
	JkRenderRenderingContext.prototype.clip = function() {
	};
	JkRenderRenderingContext.prototype.quadraticCurveTo = function(cpx, cpy, x, y) {
	};
	JkRenderRenderingContext.prototype.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
	};
	JkRenderRenderingContext.prototype.arc = function(x, y, r, sAngle, eAngle, counterclockwise) {
	};
	JkRenderRenderingContext.prototype.arcTo = function(x1, y1, x2, y2, r) {
	};
	JkRenderRenderingContext.prototype.isPointInPath = function(x, y) {
	};
	JkRenderRenderingContext.prototype.scale = function(scalewidth, scaleheight) {
	};
	JkRenderRenderingContext.prototype.rotate = function(angle) {
	};
	JkRenderRenderingContext.prototype.translate = function(x, y) {
	};
	JkRenderRenderingContext.prototype.transform = function(a, b, c, d, e, f) {
	};
	JkRenderRenderingContext.prototype.setTransform = function(a, b, c, d, e, f) {
	};
	JkRenderRenderingContext.prototype.setFont = function(font) {
	};
	JkRenderRenderingContext.prototype.setTextAlign = function(align) {
	};
	JkRenderRenderingContext.prototype.setTextBaseline = function(baseline) {
	};
	JkRenderRenderingContext.prototype.fillText = function(text, x, y, maxWidth) {
	};
	JkRenderRenderingContext.prototype.strokeText = function(text, x, y, maxWidth) {
	};
	JkRenderRenderingContext.prototype.measureTextHeight = function(text) {
	};
	JkRenderRenderingContext.prototype.measureTextWidth = function(text) {
	};
	JkRenderRenderingContext.prototype.drawImage = function(img, x, y) {
	};
	JkRenderRenderingContext.prototype.drawAndScaleImage = function(img, x, y, width, height) {
	};
	JkRenderRenderingContext.prototype.drawAndProcessImage = function(img, sx, sy, swidth, sheight, x, y, width, height) {
	};
	JkRenderRenderingContext.prototype.setGlobalAlpha = function(alpha) {
	};
	JkRenderRenderingContext.prototype.save = function() {
	};
	JkRenderRenderingContext.prototype.restore = function() {
	};
	JkRenderRenderingContext.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkRenderRenderingContext"] === true;
	};
	JkRenderRenderingContext.REPEAT_BOTH = 0;
	JkRenderRenderingContext.REPEAT_X = 1;
	JkRenderRenderingContext.REPEAT_Y = 2;
	JkRenderRenderingContext.REPEAT_NONE = 3;
	JkRenderRenderingContext.LINE_CAP_BUTT = 0;
	JkRenderRenderingContext.LINE_CAP_ROUND = 1;
	JkRenderRenderingContext.LINE_CAP_SQUARE = 2;
	JkRenderRenderingContext.LINE_JOIN_MITER = 0;
	JkRenderRenderingContext.LINE_JOIN_BEVEL = 1;
	JkRenderRenderingContext.LINE_JOIN_ROUND = 2;
	JkRenderRenderingContext.ALIGN_START = 0;
	JkRenderRenderingContext.ALIGN_END = 1;
	JkRenderRenderingContext.ALIGN_CENTER = 2;
	JkRenderRenderingContext.ALIGN_LEFT = 3;
	JkRenderRenderingContext.ALIGN_RIGHT = 4;
	JkRenderRenderingContext.BASELINE_ALPHABETIC = 0;
	JkRenderRenderingContext.BASELINE_TOP = 1;
	JkRenderRenderingContext.BASELINE_HANGING = 2;
	JkRenderRenderingContext.BASELINE_MIDDLE = 3;
	JkRenderRenderingContext.BASELINE_IDEOGRAPHIC = 4;
	JkRenderRenderingContext.BASELINE_BOTTOM = 5;
	let JkUiGuiApplicationContextTimerObject = {};
	JkUiGuiApplicationContextTimerObject.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUiGuiApplicationContextTimerObject"] === true;
	};
	let JkUiGuiApplicationContext = function() {
		this.styles = null;
		this.errorCounter = 0;
		this.warningCounter = 0;
		this.infoCounter = 0;
		this.debugCounter = 0;
	};
	JkUiGuiApplicationContext.prototype._t = {
		"JkLogLoggingContext" : true,
		"JkLangEventLoop" : true,
		"JkUiGuiApplicationContext" : true,
		"JkAppApplicationContext" : true
	};
	JkUiGuiApplicationContext.prototype._tobj = JkUiGuiApplicationContext;
	JkUiGuiApplicationContext.NEW = function() {
		var v = new JkUiGuiApplicationContext;
		return v.CTOR_JkUiGuiApplicationContext();
	};
	JkUiGuiApplicationContext.prototype.CTOR_JkUiGuiApplicationContext = function() {
		this.debugCounter = 0;
		this.infoCounter = 0;
		this.warningCounter = 0;
		this.errorCounter = 0;
		this.styles = null;
		return this;
	};
	JkUiGuiApplicationContext.prototype.setStyle = function(id, style) {
		if(!(this.styles != null)) {
			this.styles = new Map;
		}
		this.styles.set(id, style);
	};
	JkUiGuiApplicationContext.prototype.getStyle = function(id) {
		if(!(this.styles != null)) {
			return null;
		}
		if(!(id != null)) {
			return null;
		}
		return this.styles.get(id);
	};
	JkUiGuiApplicationContext.prototype.getStyleObject = function(id, style) {
		var ss = JkLangMap.getValue(this.styles, id);
		if(!(ss != null)) {
			return null;
		}
		return JkLangMap.getValue(ss, style);
	};
	JkUiGuiApplicationContext.prototype.getStyleString = function(id, style, defval) {
		var v = JkLangString.asString((this.getStyleObject(id, style)));
		if(JkLangString.isEmpty(v)) {
			v = defval;
		}
		return v;
	};
	JkUiGuiApplicationContext.prototype.getStyleColor = function(id, style, defval) {
		var v = JkGfxColor.asColor((this.getStyleObject(id, style)));
		if(!(v != null) && defval != null) {
			v = JkGfxColor.instance(defval);
		}
		return v;
	};
	JkUiGuiApplicationContext.prototype.getStylePixels = function(id, style, defval) {
		var ss = this.getStyleString(id, style, null);
		if(JkLangString.isEmpty(ss)) {
			ss = defval;
		}
		return this.getHeightValue(ss);
	};
	JkUiGuiApplicationContext.prototype.getApplicationDataDirectory = function() {
	};
	JkUiGuiApplicationContext.prototype.getResourceImage = function(id) {
	};
	JkUiGuiApplicationContext.prototype.getImageForBufferSync = function(buffer, mimeType) {
	};
	JkUiGuiApplicationContext.prototype.getImageForBuffer = function(buffer, mimeType, callback) {
	};
	JkUiGuiApplicationContext.prototype.showMessageDialog = function(title, message, callback) {
	};
	JkUiGuiApplicationContext.prototype.showConfirmDialog = function(title, message, okcallback, cancelcallback) {
	};
	JkUiGuiApplicationContext.prototype.showErrorDialog = function(message, callback) {
	};
	JkUiGuiApplicationContext.prototype.getScreenTopMargin = function() {
	};
	JkUiGuiApplicationContext.prototype.getScreenWidth = function() {
	};
	JkUiGuiApplicationContext.prototype.getScreenHeight = function() {
	};
	JkUiGuiApplicationContext.prototype.getScreenDensity = function() {
	};
	JkUiGuiApplicationContext.prototype.getHeightValue = function(spec) {
	};
	JkUiGuiApplicationContext.prototype.getWidthValue = function(spec) {
	};
	JkUiGuiApplicationContext.prototype.startTimer = function(timeout, callback) {
	};
	JkUiGuiApplicationContext.prototype.enableKeepAwakeMode = function() {
	};
	JkUiGuiApplicationContext.prototype.disableKeepAwakeMode = function() {
	};
	JkUiGuiApplicationContext.prototype.px = function(spec) {
		return this.getHeightValue(spec);
	};
	JkUiGuiApplicationContext.prototype.logError = function(message) {
		console.log(("[ERROR] " + JkLangString.safeString(message)));
		this.errorCounter++;
	};
	JkUiGuiApplicationContext.prototype.logWarning = function(message) {
		console.log(("[WARNING] " + JkLangString.safeString(message)));
		this.warningCounter++;
	};
	JkUiGuiApplicationContext.prototype.logInfo = function(message) {
		console.log(("[INFO] " + JkLangString.safeString(message)));
		this.infoCounter++;
	};
	JkUiGuiApplicationContext.prototype.logDebug = function(message) {
		console.log(("[DEBUG] " + JkLangString.safeString(message)));
		this.debugCounter++;
	};
	JkUiGuiApplicationContext.prototype.logStatus = function(message) {
		console.log(("[STATUS] " + JkLangString.safeString(message)));
	};
	JkUiGuiApplicationContext.prototype.isInDebugMode = function() {
		return false;
	};
	JkUiGuiApplicationContext.prototype.getErrorCount = function() {
		return this.errorCounter;
	};
	JkUiGuiApplicationContext.prototype.getWarningCount = function() {
		return this.warningCounter;
	};
	JkUiGuiApplicationContext.prototype.getInfoCount = function() {
		return this.infoCounter;
	};
	JkUiGuiApplicationContext.prototype.getDebugCount = function() {
		return this.debugCounter;
	};
	JkUiGuiApplicationContext.prototype.resetCounters = function() {
		this.errorCounter = 0;
		this.warningCounter = 0;
		this.infoCounter = 0;
		this.debugCounter = 0;
	};
	JkUiGuiApplicationContext.prototype.runScheduled = function(timeout, runnable) {
		if(!(timeout >= 0)) {
			return;
		}
		var rr = runnable;
		if(!(rr != null)) {
			return;
		}
		this.startTimer(timeout, (function() {
			rr.run();
		}.bind(this)));
	};
	JkUiGuiApplicationContext.prototype.runInBackground = function(runnable) {
		if(!(runnable != null)) {
			return;
		}
		JkThreadThread.start(runnable);
	};
	JkUiGuiApplicationContext.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUiGuiApplicationContext"] === true;
	};
	let JkUiGuiApplicationContextForBrowserMyTimerObject = function() {
		this.timerID = 0;
	};
	JkUiGuiApplicationContextForBrowserMyTimerObject.prototype._t = {
		"JkUiGuiApplicationContextForBrowserMyTimerObject" : true,
		"JkUiGuiApplicationContextTimerObject" : true
	};
	JkUiGuiApplicationContextForBrowserMyTimerObject.prototype._tobj = JkUiGuiApplicationContextForBrowserMyTimerObject;
	JkUiGuiApplicationContextForBrowserMyTimerObject.NEW = function() {
		var v = new JkUiGuiApplicationContextForBrowserMyTimerObject;
		return v.CTOR_JkUiGuiApplicationContextForBrowserMyTimerObject();
	};
	JkUiGuiApplicationContextForBrowserMyTimerObject.prototype.CTOR_JkUiGuiApplicationContextForBrowserMyTimerObject = function() {
		this.timerID = 0;
		return this;
	};
	JkUiGuiApplicationContextForBrowserMyTimerObject.prototype.cancel = function() {
		clearTimeout(this.timerID);
		;
	};
	JkUiGuiApplicationContextForBrowserMyTimerObject.prototype.getTimerID = function() {
		return this.timerID;
	};
	JkUiGuiApplicationContextForBrowserMyTimerObject.prototype.setTimerID = function(v) {
		this.timerID = v;
		return this;
	};
	JkUiGuiApplicationContextForBrowserMyTimerObject.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUiGuiApplicationContextForBrowserMyTimerObject"] === true;
	};
	let JkUiGuiApplicationContextForBrowser = function() {
		JkUiGuiApplicationContext.call(this);
		this.imageCache = new Map;
		this.screenDensity = 0;
	};
	JkUiGuiApplicationContextForBrowser.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkUiGuiApplicationContext.prototype);
	JkUiGuiApplicationContextForBrowser.prototype.constructor = JkUiGuiApplicationContextForBrowser;
	JkUiGuiApplicationContextForBrowser.prototype._t = {
		"JkLogLoggingContext" : true,
		"JkAppApplicationContext" : true,
		"JkUiGuiApplicationContextForBrowser" : true,
		"JkLangEventLoop" : true,
		"JkUiGuiApplicationContext" : true
	};
	JkUiGuiApplicationContextForBrowser.prototype._tobj = JkUiGuiApplicationContextForBrowser;
	JkUiGuiApplicationContextForBrowser.NEW = function() {
		var v = new JkUiGuiApplicationContextForBrowser;
		return v.CTOR_JkUiGuiApplicationContextForBrowser();
	};
	JkUiGuiApplicationContextForBrowser.prototype.CTOR_JkUiGuiApplicationContextForBrowser = function() {
		this.screenDensity = 0;
		this.imageCache = new Map;
		if(JkUiGuiApplicationContext.prototype.CTOR_JkUiGuiApplicationContext.call(this) == null) {
			return null;
		}
		return this;
	};
	JkUiGuiApplicationContextForBrowser.getInstance = function() {
		if(!(JkUiGuiApplicationContextForBrowser.instance != null)) {
			JkUiGuiApplicationContextForBrowser.instance = JkUiGuiApplicationContextForBrowser.NEW();
		}
		return JkUiGuiApplicationContextForBrowser.instance;
	};
	JkUiGuiApplicationContextForBrowser.prototype.clearResources = function() {
		this.imageCache = new Map;
	};
	JkUiGuiApplicationContextForBrowser.prototype.prepareResources = function(resources, callback) {
		if(resources == null || resources.length < 1) {
			if(callback != null) {
				callback();
			}
			return;
		}
		var loadedResources = 0;
		var numberOfFonts = 0;
		var totalResources = resources.length;
		var onResourceLoadingComplete = function() {
			loadedResources++;
			if(loadedResources >= totalResources) {
				this.logInfo("All resources have been loaded");
				if(callback != null) {
					callback();
				}
			}
		}.bind(this);
		var onLoad = function() {
			this.logDebug("Resource loaded");
			onResourceLoadingComplete();
		}.bind(this);
		var onError = function() {
			this.logError("Failed to load resource");
			onResourceLoadingComplete();
		}.bind(this);
		var onFontLoad = function() {
			for(var i = 0 ; i < numberOfFonts ; i++) {
				this.logDebug("Resource loaded");
				onResourceLoadingComplete();
			}
			numberOfFonts = 0;
		}.bind(this);
		var onFontError = function() {
			for(var i1 = 0 ; i1 < numberOfFonts ; i1++) {
				this.logError("Failed to load resource");
				onResourceLoadingComplete();
			}
			numberOfFonts = 0;
		}.bind(this);
		var style = null;
		if(resources != null) {
			var n = 0;
			var m = resources.length;
			for(n = 0 ; n < m ; n++) {
				var path = resources[n];
				if(path != null) {
					var pp = path;
					var slash = JkLangString.getLastIndexOfCharacter(pp, ("/".charCodeAt()), (-1));
					if(slash >= 0) {
						pp = JkLangString.getEndOfString(pp, (slash + 1));
					}
					var dot = JkLangString.getLastIndexOfCharacter(pp, (".".charCodeAt()), (-1));
					if(dot < 0) {
						onResourceLoadingComplete();
						continue;
					}
					var ext = JkLangString.getEndOfString(pp, (dot + 1));
					pp = JkLangString.getSubString(pp, 0, dot);
					if(JkLangString.equalsIgnoreCase(ext, "png") || JkLangString.equalsIgnoreCase(ext, "jpg") || JkLangString.equalsIgnoreCase(ext, "gif")) {
						this.logDebug(("Start loading resource: `" + JkLangString.safeString(pp) + ": `" + JkLangString.safeString(path) + "'"));
						var imgo = JkUiImageForBrowser.NEW();
						var image = null;
						image = new Image();
						image.onload = onLoad;
						image.onerror = onError;
						image.src = path;
						;
						imgo.image = image;
						this.imageCache.set(pp, imgo);
					}
					else if(JkLangString.equalsIgnoreCase(ext, "otf") || JkLangString.equalsIgnoreCase(ext, "ttf") || JkLangString.equalsIgnoreCase(ext, "woff")) {
						this.logDebug(("Start loading resource: `" + JkLangString.safeString(pp) + ": `" + JkLangString.safeString(path) + "'"));
						var head = JkUiHTMLDOM.getDocumentHead();
						if(style == null) {
							style = JkUiHTMLDOM.createElement("style");
							JkUiHTMLDOM.appendChild(head, style);
						}
						JkUiHTMLDOM.appendChild(style, (JkUiHTMLDOM.createTextNode(("@font-face { font-family: " + JkLangString.safeString(pp) + "; src: url('" + JkLangString.safeString(path) + "')}"))));
						if(JkUiHTMLDOM.isInternetExplorer() || JkUiHTMLDOM.isEdge()) {
							numberOfFonts++;
							onResourceLoadingComplete();
						}
						else if(JkUiHTMLDOM.doesBrowserSupportFontLoading()) {
							numberOfFonts++;
							document.fonts.load(("12px " + pp)).then(onFontLoad, onFontError);
							;
						}
						else {
							this.logWarning(("Browser does not support font loading: `" + JkLangString.safeString(path) + "'"));
							onResourceLoadingComplete();
						}
					}
					else {
						this.logWarning(("Unsupported resource file type `" + JkLangString.safeString(ext) + "': `" + JkLangString.safeString(path) + "'"));
						onResourceLoadingComplete();
					}
				}
			}
		}
	};
	JkUiGuiApplicationContextForBrowser.prototype.getResourceImage = function(id) {
		return JkLangMap.getValue(this.imageCache, id);
	};
	JkUiGuiApplicationContextForBrowser.prototype.getImageForBufferSync = function(buffer, mimeType) {
		if(!this.validateBufferAndMimeType(buffer, mimeType)) {
			return null;
		}
		var b64str = JkBase64Base64Encoder.encode(buffer);
		var imgo = JkUiImageForBrowser.NEW();
		var image = null;
		image = new Image();
		image.src = "data:" + mimeType + ";base64," + b64str;
		;
		imgo.image = image;
		return imgo;
	};
	JkUiGuiApplicationContextForBrowser.prototype.getImageForBuffer = function(buffer, mimeType, callback) {
		if(!(callback != null)) {
			return;
		}
		if(!this.validateBufferAndMimeType(buffer, mimeType)) {
			callback(null);
			return;
		}
		var b64str = JkBase64Base64Encoder.encode(buffer);
		var image = new Image();
		image.onload = function() {
			var imgo = JkUiImageForBrowser.NEW();
			imgo.image = image;
			callback(imgo);
		};
		image.onerror = function() {
			callback(null);
		};
		image.src = "data:" + mimeType + ";base64," + b64str;
		;
	};
	JkUiGuiApplicationContextForBrowser.prototype.validateBufferAndMimeType = function(buffer, mimeType) {
		if(!(buffer != null && JkLangBuffer.getSize(buffer) > 0)) {
			return false;
		}
		if(!(JkLangString.isNotEmpty(mimeType) && JkLangString.contains(mimeType, "image"))) {
			return false;
		}
		return true;
	};
	JkUiGuiApplicationContextForBrowser.prototype.showConfirmDialog = function(title, message, okcallback, cancelcallback) {
		var result = false;
		result = confirm(message);
		;
		if(result) {
			if(okcallback != null) {
				okcallback();
			}
		}
		else if(cancelcallback != null) {
			cancelcallback();
		}
	};
	JkUiGuiApplicationContextForBrowser.prototype.showMessageDialog = function(title, message, callback) {
		window.alert(message);
		;
		if(callback != null) {
			callback();
		}
	};
	JkUiGuiApplicationContextForBrowser.prototype.showErrorDialog = function(message, callback) {
		window.alert(message);
		;
		if(callback != null) {
			callback();
		}
	};
	JkUiGuiApplicationContextForBrowser.prototype.getScreenTopMargin = function() {
		return 0;
	};
	JkUiGuiApplicationContextForBrowser.prototype.getScreenWidth = function() {
		var v = 0;
		v = window.screen.availWidth;
		;
		return v;
	};
	JkUiGuiApplicationContextForBrowser.prototype.getScreenHeight = function() {
		var v = 0;
		v = window.screen.availHeight;
		;
		return v;
	};
	JkUiGuiApplicationContextForBrowser.prototype.getScreenDensity = function() {
		if(this.screenDensity < 1) {
			var ppi = 0;
			var div = document.createElement("div");
			div.setAttribute("style", "width: 1.3in; padding: 0; visibility: hidden; position: fixed; left: 0; top: 0;");
			var bodys = document.getElementsByTagName("body");
			bodys[0].appendChild(div);
			ppi = div.offsetWidth;
			if(ppi < 1) {
				ppi = 1;
			}
			bodys[0].removeChild(div);
			;
			var qs = JkUiWebBrowserContext.getQueryString();
			if(JkLangString.isEmpty(qs) == false) {
				var array = JkLangString.split(qs, ("&".charCodeAt()), 0);
				if(array != null) {
					var n = 0;
					var m = array.length;
					for(n = 0 ; n < m ; n++) {
						var q = array[n];
						if(q != null) {
							if(JkLangString.startsWith(q, "jkopDpi=", 0) == false) {
								continue;
							}
							var val = JkLangString.getEndOfString(q, 8);
							if(JkLangString.isEmpty(val) == false) {
								ppi = JkLangString.toInteger(val);
							}
							break;
						}
					}
				}
			}
			this.screenDensity = ppi;
		}
		return this.screenDensity;
	};
	JkUiGuiApplicationContextForBrowser.prototype.getHeightValue = function(spec) {
		return JkGfxLength.asPoints(spec, (this.getScreenDensity()));
	};
	JkUiGuiApplicationContextForBrowser.prototype.getWidthValue = function(spec) {
		return JkGfxLength.asPoints(spec, (this.getScreenDensity()));
	};
	JkUiGuiApplicationContextForBrowser.prototype.startTimer = function(timeout, callback) {
		var timer = JkUiGuiApplicationContextForBrowserMyTimerObject.NEW();
		timer.setTimerID((setTimeout(callback, timeout)));
		;
		return timer;
	};
	JkUiGuiApplicationContextForBrowser.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUiGuiApplicationContextForBrowser"] === true;
	};
	JkUiGuiApplicationContextForBrowser.instance = null;
	let JkUiKeyListener = {};
	JkUiKeyListener.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUiKeyListener"] === true;
	};
	let JkUiPointerListener = {};
	JkUiPointerListener.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUiPointerListener"] === true;
	};
	let JkUiImageForBrowser = function() {
		JkGfxImage.call(this);
		this.image = null;
	};
	JkUiImageForBrowser.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkGfxImage.prototype);
	JkUiImageForBrowser.prototype.constructor = JkUiImageForBrowser;
	JkUiImageForBrowser.prototype._t = {
		"JkGfxImage" : true,
		"JkUiImageForBrowser" : true
	};
	JkUiImageForBrowser.prototype._tobj = JkUiImageForBrowser;
	JkUiImageForBrowser.NEW = function() {
		var v = new JkUiImageForBrowser;
		return v.CTOR_JkUiImageForBrowser();
	};
	JkUiImageForBrowser.prototype.CTOR_JkUiImageForBrowser = function() {
		this.image = null;
		if(JkGfxImage.prototype.CTOR_JkGfxImage.call(this) == null) {
			return null;
		}
		return this;
	};
	JkUiImageForBrowser.prototype.getSource = function() {
		if(this.image != null) {
			return this.image.src;
		}
		return null;
	};
	JkUiImageForBrowser.prototype.getPixelWidth = function() {
		if(this.image == null) {
			return 0;
		}
		return this.image.width;
	};
	JkUiImageForBrowser.prototype.getPixelHeight = function() {
		if(this.image == null) {
			return 0;
		}
		return this.image.height;
	};
	JkUiImageForBrowser.prototype.scaleToSizeSync = function(w, h) {
		if(!(this.image != null)) {
			return null;
		}
		return this.createImageSync((this.getScaleImageSrc(w, h, null)));
	};
	JkUiImageForBrowser.prototype.scaleToSize = function(w, h, callback) {
		if(!(callback != null)) {
			return;
		}
		if(!(this.image != null)) {
			callback(null);
			return;
		}
		this.createImage((this.getScaleImageSrc(w, h, null)), callback);
	};
	JkUiImageForBrowser.prototype.getScaleImageSrc = function(w, h, mimetype) {
		var src = null;
		var cnv = document.createElement("canvas");
		cnv.width = w;
		cnv.height = h;
		var ctx = cnv.getContext("2d");
		ctx.save();
		try {
			ctx.drawImage(this.image, 0, 0, w, h);
		}
		catch(err) {
			return null;
		}
		ctx.restore();
		if(mimetype != null) {
			src = cnv.toDataURL(mimetype);
		}
		else {
			src = cnv.toDataURL();
		}
		;
		return src;
	};
	JkUiImageForBrowser.prototype.scaleToWidthSync = function(w) {
		return this.scaleToSizeSync(w, (this.getProportionalHeight(w)));
	};
	JkUiImageForBrowser.prototype.scaleToWidth = function(w, callback) {
		if(!(callback != null)) {
			return;
		}
		this.scaleToSize(w, (this.getProportionalHeight(w)), callback);
	};
	JkUiImageForBrowser.prototype.scaleToHeightSync = function(h) {
		return this.scaleToSizeSync((this.getProportionalWidth(h)), h);
	};
	JkUiImageForBrowser.prototype.scaleToHeight = function(h, callback) {
		if(!(callback != null)) {
			return;
		}
		this.scaleToSize((this.getProportionalWidth(h)), h, callback);
	};
	JkUiImageForBrowser.prototype.cropSync = function(x, y, w, h) {
		if(!(this.image != null)) {
			return null;
		}
		return this.createImageSync((this.getCropImageSrc(x, y, w, h)));
	};
	JkUiImageForBrowser.prototype.crop = function(x, y, w, h, callback) {
		if(!(callback != null)) {
			return;
		}
		if(!(this.image != null)) {
			callback(null);
			return;
		}
		this.createImage((this.getCropImageSrc(x, y, w, h)), callback);
	};
	JkUiImageForBrowser.prototype.getCropImageSrc = function(x, y, w, h) {
		var src = null;
		var cnv = document.createElement("canvas");
		cnv.width = w;
		cnv.height = h;
		var ctx = cnv.getContext("2d");
		ctx.save();
		try {
			ctx.drawImage(this.image, x, y, w, h, 0, 0, w, h);
		}
		catch(err) {
			return null;
		}
		ctx.restore();
		src = cnv.toDataURL();
		;
		return src;
	};
	JkUiImageForBrowser.prototype.createImageSync = function(src) {
		if(!JkLangString.isNotEmpty(src)) {
			return null;
		}
		var imo = null;
		imo = new Image();
		imo.src = src;
		;
		var img = JkUiImageForBrowser.NEW();
		img.image = imo;
		return img;
	};
	JkUiImageForBrowser.prototype.createImage = function(src, callback) {
		if(!JkLangString.isNotEmpty(src)) {
			callback(null);
			return;
		}
		var imo = new Image();
		imo.onload = function() {
			var img = JkUiImageForBrowser.NEW();
			img.image = imo;
			callback(img);
		};
		imo.onerror = function() {
			callback(null);
		};
		imo.src = src;
		;
	};
	JkUiImageForBrowser.prototype.toJPGData = function() {
		var source = this.getSource();
		var jpgData = null;
		if(JkLangString.contains(source, "image/jpeg")) {
			jpgData = source;
		}
		else {
			jpgData = this.getScaleImageSrc((this.getPixelWidth()), (this.getPixelHeight()), "image/jpeg");
		}
		return this.getBase64Buffer(jpgData);
	};
	JkUiImageForBrowser.prototype.toPNGData = function() {
		var source = this.getSource();
		var pngData = null;
		if(JkLangString.contains(source, "image/png")) {
			pngData = source;
		}
		else {
			pngData = this.getScaleImageSrc((this.getPixelWidth()), (this.getPixelHeight()), "image/png");
		}
		return this.getBase64Buffer(pngData);
	};
	JkUiImageForBrowser.prototype.toRGBAData = function() {
		console.log("[jk.ui.ImageForBrowser.toRGBAData] (ImageForBrowser@target_browser.sling:204:2): Not implemented");
		return null;
	};
	JkUiImageForBrowser.prototype.getBase64Buffer = function(data) {
		if(!JkLangString.isNotEmpty(data)) {
			return null;
		}
		var simc = JkLangString.getIndexOfString(data, ";base64,", 0);
		if(!(simc > -1)) {
			return null;
		}
		var nsrc = JkLangString.getEndOfString(data, (simc + 8));
		if(!JkLangString.isNotEmpty(nsrc)) {
			return null;
		}
		return JkBase64Base64Decoder.decode(nsrc);
	};
	JkUiImageForBrowser.prototype.releaseImage = function() {
		console.log("[jk.ui.ImageForBrowser.releaseImage] (ImageForBrowser@target_browser.sling:220:2): Not implemented");
	};
	JkUiImageForBrowser.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUiImageForBrowser"] === true;
	};
	let JkUiRouter = function() {
	};
	JkUiRouter.prototype._t = { "JkUiRouter" : true };
	JkUiRouter.prototype._tobj = JkUiRouter;
	JkUiRouter.NEW = function() {
		var v = new JkUiRouter;
		return v.CTOR_JkUiRouter();
	};
	JkUiRouter.prototype.CTOR_JkUiRouter = function() {
		return this;
	};
	JkUiRouter.onHashChanged = function() {
		var hash = JkUiWebBrowserContext.getPageHash();
		var route = JkLangString.getSubString(hash, 1, (JkLangString.getLength(hash) - 1));
		if(JkLangString.isEmpty(route)) {
			route = "/";
		}
		var url = JkUrlURL.forString(route, false);
		if(url != null) {
			route = url.getPath();
		}
		if(!(JkUiRouter.listener != null)) {
			return;
		}
		JkUiRouter.listener.onRouteChanged(route);
	};
	JkUiRouter.initialize = function(l) {
		if(!(l != null)) {
			return;
		}
		JkUiRouter.listener = l;
		window.onhashchange = function(event) {
			JkUiRouter.onHashChanged();
		};
	};
	JkUiRouter.goToDefault = function() {
		JkUiRouter.onHashChanged();
	};
	JkUiRouter.go = function(route) {
		var r = route;
		window.location.hash = "#" + r;
		;
	};
	JkUiRouter.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUiRouter"] === true;
	};
	JkUiRouter.listener = null;
	let JkUiKeyEvent = function() {
		this.action = 0;
		this.keyCode = 0;
		this.stringValue = null;
		this.shift = false;
		this.control = false;
		this.command = false;
		this.alt = false;
		this.isConsumed = false;
	};
	JkUiKeyEvent.prototype._t = { "JkUiKeyEvent" : true };
	JkUiKeyEvent.prototype._tobj = JkUiKeyEvent;
	JkUiKeyEvent.NEW = function() {
		var v = new JkUiKeyEvent;
		return v.CTOR_JkUiKeyEvent();
	};
	JkUiKeyEvent.prototype.CTOR_JkUiKeyEvent = function() {
		this.isConsumed = false;
		this.alt = false;
		this.command = false;
		this.control = false;
		this.shift = false;
		this.stringValue = null;
		this.keyCode = 0;
		this.action = 0;
		return this;
	};
	JkUiKeyEvent.prototype.consume = function() {
		this.isConsumed = true;
	};
	JkUiKeyEvent.prototype.isKeyPress = function(key) {
		if(this.action == JkUiKeyEvent.ACTION_DOWN && this.keyCode == key) {
			return true;
		}
		return false;
	};
	JkUiKeyEvent.prototype.isKey = function(key) {
		if(this.keyCode == key) {
			return true;
		}
		return false;
	};
	JkUiKeyEvent.prototype.isString = function(value) {
		if(value == this.stringValue) {
			return true;
		}
		return false;
	};
	JkUiKeyEvent.prototype.isCharacter = function(value) {
		if(!(this.stringValue == null) && JkLangString.getChar(this.stringValue, 0) == value) {
			return true;
		}
		return false;
	};
	JkUiKeyEvent.prototype.clear = function() {
		this.action = 0;
		this.keyCode = 0;
		this.stringValue = null;
		this.isConsumed = false;
	};
	JkUiKeyEvent.prototype.getAction = function() {
		return this.action;
	};
	JkUiKeyEvent.prototype.setAction = function(v) {
		this.action = v;
		return this;
	};
	JkUiKeyEvent.prototype.getKeyCode = function() {
		return this.keyCode;
	};
	JkUiKeyEvent.prototype.setKeyCode = function(v) {
		this.keyCode = v;
		return this;
	};
	JkUiKeyEvent.prototype.getStringValue = function() {
		return this.stringValue;
	};
	JkUiKeyEvent.prototype.setStringValue = function(v) {
		this.stringValue = v;
		return this;
	};
	JkUiKeyEvent.prototype.getShift = function() {
		return this.shift;
	};
	JkUiKeyEvent.prototype.setShift = function(v) {
		this.shift = v;
		return this;
	};
	JkUiKeyEvent.prototype.getControl = function() {
		return this.control;
	};
	JkUiKeyEvent.prototype.setControl = function(v) {
		this.control = v;
		return this;
	};
	JkUiKeyEvent.prototype.getCommand = function() {
		return this.command;
	};
	JkUiKeyEvent.prototype.setCommand = function(v) {
		this.command = v;
		return this;
	};
	JkUiKeyEvent.prototype.getAlt = function() {
		return this.alt;
	};
	JkUiKeyEvent.prototype.setAlt = function(v) {
		this.alt = v;
		return this;
	};
	JkUiKeyEvent.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUiKeyEvent"] === true;
	};
	JkUiKeyEvent.ACTION_NONE = 0;
	JkUiKeyEvent.ACTION_DOWN = 1;
	JkUiKeyEvent.ACTION_UP = 2;
	JkUiKeyEvent.KEY_NONE = 0;
	JkUiKeyEvent.KEY_SPACE = 1;
	JkUiKeyEvent.KEY_ENTER = 2;
	JkUiKeyEvent.KEY_TAB = 3;
	JkUiKeyEvent.KEY_ESCAPE = 4;
	JkUiKeyEvent.KEY_BACKSPACE = 5;
	JkUiKeyEvent.KEY_SHIFT = 6;
	JkUiKeyEvent.KEY_CONTROL = 7;
	JkUiKeyEvent.KEY_ALT = 8;
	JkUiKeyEvent.KEY_CAPSLOCK = 9;
	JkUiKeyEvent.KEY_NUMLOCK = 10;
	JkUiKeyEvent.KEY_LEFT = 11;
	JkUiKeyEvent.KEY_UP = 12;
	JkUiKeyEvent.KEY_RIGHT = 13;
	JkUiKeyEvent.KEY_DOWN = 14;
	JkUiKeyEvent.KEY_INSERT = 15;
	JkUiKeyEvent.KEY_DELETE = 16;
	JkUiKeyEvent.KEY_HOME = 17;
	JkUiKeyEvent.KEY_END = 18;
	JkUiKeyEvent.KEY_PAGEUP = 19;
	JkUiKeyEvent.KEY_PAGEDOWN = 20;
	JkUiKeyEvent.KEY_F1 = 21;
	JkUiKeyEvent.KEY_F2 = 22;
	JkUiKeyEvent.KEY_F3 = 23;
	JkUiKeyEvent.KEY_F4 = 24;
	JkUiKeyEvent.KEY_F5 = 25;
	JkUiKeyEvent.KEY_F6 = 26;
	JkUiKeyEvent.KEY_F7 = 27;
	JkUiKeyEvent.KEY_F8 = 28;
	JkUiKeyEvent.KEY_F9 = 29;
	JkUiKeyEvent.KEY_F10 = 30;
	JkUiKeyEvent.KEY_F11 = 31;
	JkUiKeyEvent.KEY_F12 = 32;
	JkUiKeyEvent.KEY_SUPER = 33;
	JkUiKeyEvent.KEY_BACK = 34;
	let JkUiGuiApplicationContextForHTML = function() {
		JkUiGuiApplicationContextForBrowser.call(this);
	};
	JkUiGuiApplicationContextForHTML.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkUiGuiApplicationContextForBrowser.prototype);
	JkUiGuiApplicationContextForHTML.prototype.constructor = JkUiGuiApplicationContextForHTML;
	JkUiGuiApplicationContextForHTML.prototype._t = {
		"JkLogLoggingContext" : true,
		"JkAppApplicationContext" : true,
		"JkLangEventLoop" : true,
		"JkUiGuiApplicationContextForBrowser" : true,
		"JkUiGuiApplicationContextForHTML" : true,
		"JkUiGuiApplicationContext" : true
	};
	JkUiGuiApplicationContextForHTML.prototype._tobj = JkUiGuiApplicationContextForHTML;
	JkUiGuiApplicationContextForHTML.NEW = function() {
		var v = new JkUiGuiApplicationContextForHTML;
		return v.CTOR_JkUiGuiApplicationContextForHTML();
	};
	JkUiGuiApplicationContextForHTML.prototype.CTOR_JkUiGuiApplicationContextForHTML = function() {
		if(JkUiGuiApplicationContextForBrowser.prototype.CTOR_JkUiGuiApplicationContextForBrowser.call(this) == null) {
			return null;
		}
		return this;
	};
	JkUiGuiApplicationContextForHTML.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUiGuiApplicationContextForHTML"] === true;
	};
	let JkUiRouterListener = {};
	JkUiRouterListener.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUiRouterListener"] === true;
	};
	let JkUiRenderingContextForHTMLCanvas = function() {
		JkRenderRenderingContext.call(this);
		this.ctx = null;
	};
	JkUiRenderingContextForHTMLCanvas.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkRenderRenderingContext.prototype);
	JkUiRenderingContextForHTMLCanvas.prototype.constructor = JkUiRenderingContextForHTMLCanvas;
	JkUiRenderingContextForHTMLCanvas.prototype._t = {
		"JkRenderRenderingContext" : true,
		"JkUiRenderingContextForHTMLCanvas" : true
	};
	JkUiRenderingContextForHTMLCanvas.prototype._tobj = JkUiRenderingContextForHTMLCanvas;
	JkUiRenderingContextForHTMLCanvas.NEW = function() {
		var v = new JkUiRenderingContextForHTMLCanvas;
		return v.CTOR_JkUiRenderingContextForHTMLCanvas();
	};
	JkUiRenderingContextForHTMLCanvas.prototype.CTOR_JkUiRenderingContextForHTMLCanvas = function() {
		this.ctx = null;
		if(JkRenderRenderingContext.prototype.CTOR_JkRenderRenderingContext.call(this) == null) {
			return null;
		}
		return this;
	};
	JkUiRenderingContextForHTMLCanvas.forElement = function(element) {
		if(!(element != null)) {
			return null;
		}
		return JkUiRenderingContextForHTMLCanvas.forContext((element.getContext("2d")));
	};
	JkUiRenderingContextForHTMLCanvas.forContext = function(ctx) {
		if(!(ctx != null)) {
			return null;
		}
		var v = JkUiRenderingContextForHTMLCanvas.NEW();
		v.setCtx(ctx);
		return v;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.setFillStyle = function(style) {
		var fs = style;
		if(fs != null) {
			if(typeof fs === "string") {
				fs = JkGfxColor.forString(fs);
			}
			if(JkGfxColor.IS_INSTANCE && JkGfxColor.IS_INSTANCE(fs)) {
				fs = fs.toHtmlCompatibleString();
			}
		}
		this.ctx.fillStyle = fs;
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.setStrokeStyle = function(style) {
		var fs = style;
		if(fs != null) {
			if(typeof fs === "string") {
				fs = JkGfxColor.forString(fs);
			}
			if(JkGfxColor.IS_INSTANCE && JkGfxColor.IS_INSTANCE(fs)) {
				fs = fs.toHtmlCompatibleString();
			}
		}
		this.ctx.strokeStyle = fs;
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.setShadowColor = function(color) {
		var ccs = null;
		if(color != null) {
			ccs = color.toHtmlCompatibleString();
		}
		this.ctx.shadowColor = ccs;
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.setShadowBlur = function(blur) {
		this.ctx.shadowBlur = blur;
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.setShadowOffsetX = function(offset) {
		this.ctx.shadowOffsetX = offset;
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.setShadowOffsetY = function(offset) {
		this.ctx.shadowOffsetY = offset;
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.createLinearGradient = function(x0, y0, x1, y1) {
		return this.ctx.createLinearGradient(x0, y0, x1, y1);
	};
	JkUiRenderingContextForHTMLCanvas.prototype.createPattern = function(image, repeat) {
		var himg = null;
		var browserImage = (function(o) {
			if(JkUiImageForBrowser.IS_INSTANCE && JkUiImageForBrowser.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))(image);
		if(browserImage != null) {
			himg = browserImage.image;
		}
		var rpts = null;
		if(repeat == JkRenderRenderingContext.REPEAT_NONE) {
			rpts = "no-repeat";
		}
		else if(repeat == JkRenderRenderingContext.REPEAT_X) {
			rpts = "repeat-x";
		}
		else if(repeat == JkRenderRenderingContext.REPEAT_Y) {
			rpts = "repeat-y";
		}
		else {
			rpts = "repeat";
		}
		return this.ctx.createPattern(himg, rpts);
	};
	JkUiRenderingContextForHTMLCanvas.prototype.createRadialGradient = function(x0, y0, r0, x1, y1, r1) {
		return this.ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
	};
	JkUiRenderingContextForHTMLCanvas.prototype.addColorStop = function(gradient, index, color) {
		if(!(gradient != null)) {
			return;
		}
		var ccs = null;
		if(color != null) {
			ccs = color.toHtmlCompatibleString();
		}
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.setLineCap = function(cap) {
		var v = null;
		if(cap == JkRenderRenderingContext.LINE_CAP_SQUARE) {
			v = "square";
		}
		else if(cap == JkRenderRenderingContext.LINE_CAP_ROUND) {
			v = "round";
		}
		else {
			v = "butt";
		}
		this.ctx.lineCap = v;
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.setLineJoin = function(join) {
		var v = null;
		if(join == JkRenderRenderingContext.LINE_JOIN_BEVEL) {
			v = "bevel";
		}
		else if(join == JkRenderRenderingContext.LINE_JOIN_ROUND) {
			v = "round";
		}
		else {
			v = "miter";
		}
		this.ctx.lineJoin = v;
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.setLineWidth = function(width) {
		this.ctx.lineWidth = width;
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.setMiterLimit = function(limit) {
		this.ctx.miterLimit = limit;
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.rect = function(x, y, width, height) {
		this.ctx.rect(x, y, width, height);
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.fillRect = function(x, y, width, height) {
		this.ctx.fillRect(x, y, width, height);
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.strokeRect = function(x, y, width, height) {
		this.ctx.strokeRect(x, y, width, height);
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.clearRect = function(x, y, width, height) {
		this.ctx.clearRect(x, y, width, height);
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.fill = function() {
		this.ctx.fill();
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.stroke = function() {
		this.ctx.stroke();
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.beginPath = function() {
		this.ctx.beginPath();
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.moveTo = function(x, y) {
		this.ctx.moveTo(x, y);
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.closePath = function() {
		this.ctx.closePath();
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.lineTo = function(x, y) {
		this.ctx.lineTo(x, y);
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.clip = function() {
		this.ctx.clip();
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.quadraticCurveTo = function(cpx, cpy, x, y) {
		this.ctx.quadraticCurveTo(cpx, cpy, x, y);
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
		this.ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.arc = function(x, y, r, sAngle, eAngle, counterclockwise) {
		this.ctx.arc(x, y, r, sAngle, eAngle, counterclockwise);
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.arcTo = function(x1, y1, x2, y2, r) {
		this.ctx.arcTo(x1, y1, x2, y2, r);
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.isPointInPath = function(x, y) {
		return this.ctx.isPointInPath(x, y);
	};
	JkUiRenderingContextForHTMLCanvas.prototype.scale = function(scalewidth, scaleheight) {
		this.ctx.scale(scalewidth, scaleheight);
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.rotate = function(angle) {
		this.ctx.rotate(angle);
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.translate = function(x, y) {
		this.ctx.translate(x, y);
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.transform = function(a, b, c, d, e, f) {
		this.ctx.transform(a, b, c, d, e, f);
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.setTransform = function(a, b, c, d, e, f) {
		this.ctx.setTransform(a, b, c, d, e, f);
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.toCssCompatibleString = function(font) {
		if(!(font != null)) {
			return null;
		}
		var sb = JkLangStringBuilder.NEW();
		if(font.getItalic()) {
			sb.appendString("italic");
		}
		if(font.getBold()) {
			if(sb.count() > 0) {
				sb.appendCharacter((" ".charCodeAt()));
			}
			sb.appendString("bold");
		}
		var size = font.getSize();
		if(size != null) {
			if(sb.count() > 0) {
				sb.appendCharacter((" ".charCodeAt()));
			}
			sb.appendString((JkLangString.forInteger((size.toPoints(96)))));
			sb.appendString("px");
		}
		var name = font.getName();
		if(JkLangString.isNotEmpty(name)) {
			if(sb.count() > 0) {
				sb.appendCharacter((" ".charCodeAt()));
			}
			sb.appendString(name);
		}
		return sb.toString();
	};
	JkUiRenderingContextForHTMLCanvas.prototype.setFont = function(font) {
		var fonts = null;
		if(font != null) {
			fonts = this.toCssCompatibleString(font);
		}
		this.ctx.font = fonts;
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.setTextAlign = function(align) {
		var v = null;
		if(align == JkRenderRenderingContext.ALIGN_END) {
			v = "end";
		}
		else if(align == JkRenderRenderingContext.ALIGN_CENTER) {
			v = "center";
		}
		else if(align == JkRenderRenderingContext.ALIGN_LEFT) {
			v = "left";
		}
		else if(align == JkRenderRenderingContext.ALIGN_RIGHT) {
			v = "right";
		}
		else {
			v = "start";
		}
		this.ctx.textAlign = v;
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.setTextBaseline = function(baseline) {
		var v = null;
		if(baseline == JkRenderRenderingContext.BASELINE_TOP) {
			v = "top";
		}
		else if(baseline == JkRenderRenderingContext.BASELINE_HANGING) {
			v = "hanging";
		}
		else if(baseline == JkRenderRenderingContext.BASELINE_MIDDLE) {
			v = "middle";
		}
		else if(baseline == JkRenderRenderingContext.BASELINE_IDEOGRAPHIC) {
			v = "ideographic";
		}
		else if(baseline == JkRenderRenderingContext.BASELINE_BOTTOM) {
			v = "bottom";
		}
		else {
			v = "alphabetic";
		}
		this.ctx.textBaseline = v;
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.fillText = function(text, x, y, maxWidth) {
		var mw = maxWidth;
		if(mw <= 0) {
			mw = null;
		}
		this.ctx.fillText(text, x, y, mw);
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.strokeText = function(text, x, y, maxWidth) {
		var mw = maxWidth;
		if(mw <= 0) {
			mw = null;
		}
		this.ctx.strokeText(text, x, y, mw);
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.measureTextHeight = function(text) {
		if(text == null) {
			return 0.0;
		}
		var sz = this.ctx.measureText(text);
		if(sz == null) {
			return 0.0;
		}
		var v = 0.0;
		if(sz.fontBoundingBoxAscent && sz.fontBoundingBoxDescent) {
			v = sz.fontBoundingBoxAscent + sz.fontBoundingBoxDescent;
		}
		else {
			var e = document.createElement("div");
			e.style.position = "fixed";
			e.style.font = this.ctx.font;
			e.style.padding = "0";
			e.style.margin = "0";
			e.textContent = text;
			var b = document.getElementsByTagName("body")[0];
			b.appendChild(e);
			var cs = window.getComputedStyle(e);
			v = parseFloat((cs.getPropertyValue("height")), 10);
			b.removeChild(e);
		}
		;
		return v;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.measureTextWidth = function(text) {
		if(text == null) {
			return 0.0;
		}
		var sz = this.ctx.measureText(text);
		if(sz == null) {
			return 0.0;
		}
		var v = 0.0;
		v = sz.width;
		;
		return v;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.drawImage = function(img, x, y) {
		var bimg = (function(o) {
			if(JkUiImageForBrowser.IS_INSTANCE && JkUiImageForBrowser.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))(img);
		if(!(bimg != null)) {
			return;
		}
		var himg = bimg.image;
		if(!(himg != null)) {
			return;
		}
		this.ctx.drawImage(himg, x, y);
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.drawAndScaleImage = function(img, x, y, width, height) {
		var bimg = (function(o) {
			if(JkUiImageForBrowser.IS_INSTANCE && JkUiImageForBrowser.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))(img);
		if(!(bimg != null)) {
			return;
		}
		var himg = bimg.image;
		if(!(himg != null)) {
			return;
		}
		this.ctx.drawImage(himg, x, y, width, height);
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.drawAndProcessImage = function(img, sx, sy, swidth, sheight, x, y, width, height) {
		var bimg = (function(o) {
			if(JkUiImageForBrowser.IS_INSTANCE && JkUiImageForBrowser.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))(img);
		if(!(bimg != null)) {
			return;
		}
		var himg = bimg.image;
		if(!(himg != null)) {
			return;
		}
		this.ctx.drawImage(himg, sx, sy, swidth, sheight, x, y, width, height);
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.setGlobalAlpha = function(alpha) {
		this.ctx.globalAlpha = alpha;
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.save = function() {
		this.ctx.save();
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.restore = function() {
		this.ctx.restore();
		;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.getCtx = function() {
		return this.ctx;
	};
	JkUiRenderingContextForHTMLCanvas.prototype.setCtx = function(v) {
		this.ctx = v;
		return this;
	};
	JkUiRenderingContextForHTMLCanvas.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUiRenderingContextForHTMLCanvas"] === true;
	};
	let JkUiIOSDeviceInfo = function() {
		this.id = null;
		this.name = null;
		this.dpi = 0;
		this.scale = 0.0;
		this.screenWidth = 0;
		this.screenHeight = 0;
	};
	JkUiIOSDeviceInfo.prototype._t = { "JkUiIOSDeviceInfo" : true };
	JkUiIOSDeviceInfo.prototype._tobj = JkUiIOSDeviceInfo;
	JkUiIOSDeviceInfo.NEW = function() {
		var v = new JkUiIOSDeviceInfo;
		return v.CTOR_JkUiIOSDeviceInfo();
	};
	JkUiIOSDeviceInfo.prototype.CTOR_JkUiIOSDeviceInfo = function() {
		this.screenHeight = 0;
		this.screenWidth = 0;
		this.scale = 0.0;
		this.dpi = 0;
		this.name = null;
		this.id = null;
		return this;
	};
	JkUiIOSDeviceInfo.forDetails = function(id, name, dpi) {
		var v = JkUiIOSDeviceInfo.NEW();
		v.setId(id);
		v.setName(name);
		v.setDpi(dpi);
		return v;
	};
	JkUiIOSDeviceInfo.prototype.toString = function() {
		return JkLangString.safeString(this.name) + " (" + JkLangString.safeString(this.id) + ") " + JkLangString.safeString((JkLangString.forInteger(this.screenWidth))) + "x" + JkLangString.safeString((JkLangString.forInteger(this.screenHeight))) + " (" + JkLangString.safeString((JkLangString.forDouble(this.scale))) + "x) @ " + JkLangString.safeString((JkLangString.forInteger(this.dpi))) + "DPI";
	};
	JkUiIOSDeviceInfo.prototype.getId = function() {
		return this.id;
	};
	JkUiIOSDeviceInfo.prototype.setId = function(v) {
		this.id = v;
		return this;
	};
	JkUiIOSDeviceInfo.prototype.getName = function() {
		return this.name;
	};
	JkUiIOSDeviceInfo.prototype.setName = function(v) {
		this.name = v;
		return this;
	};
	JkUiIOSDeviceInfo.prototype.getDpi = function() {
		return this.dpi;
	};
	JkUiIOSDeviceInfo.prototype.setDpi = function(v) {
		this.dpi = v;
		return this;
	};
	JkUiIOSDeviceInfo.prototype.getScale = function() {
		return this.scale;
	};
	JkUiIOSDeviceInfo.prototype.setScale = function(v) {
		this.scale = v;
		return this;
	};
	JkUiIOSDeviceInfo.prototype.getScreenWidth = function() {
		return this.screenWidth;
	};
	JkUiIOSDeviceInfo.prototype.setScreenWidth = function(v) {
		this.screenWidth = v;
		return this;
	};
	JkUiIOSDeviceInfo.prototype.getScreenHeight = function() {
		return this.screenHeight;
	};
	JkUiIOSDeviceInfo.prototype.setScreenHeight = function(v) {
		this.screenHeight = v;
		return this;
	};
	JkUiIOSDeviceInfo.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUiIOSDeviceInfo"] === true;
	};
	let JkUiHTMLDOM = function() {
	};
	JkUiHTMLDOM.prototype._t = { "JkUiHTMLDOM" : true };
	JkUiHTMLDOM.prototype._tobj = JkUiHTMLDOM;
	JkUiHTMLDOM.NEW = function() {
		var v = new JkUiHTMLDOM;
		return v.CTOR_JkUiHTMLDOM();
	};
	JkUiHTMLDOM.prototype.CTOR_JkUiHTMLDOM = function() {
		return this;
	};
	JkUiHTMLDOM.colorToRGBA = function(color) {
		if(!(color != null)) {
			return null;
		}
		return color.toHtmlRgbaString();
	};
	JkUiHTMLDOM.isBrowser = function(id) {
		var v = false;
		v = navigator.userAgent.toLowerCase().indexOf(id) > -1;
		;
		return v;
	};
	JkUiHTMLDOM.isInternetExplorer = function() {
		return JkUiHTMLDOM.isBrowser("msie ") || JkUiHTMLDOM.isBrowser("trident/");
	};
	JkUiHTMLDOM.isWebKit = function() {
		return JkUiHTMLDOM.isBrowser("webkit");
	};
	JkUiHTMLDOM.isFirefox = function() {
		return JkUiHTMLDOM.isBrowser("firefox");
	};
	JkUiHTMLDOM.isMobile = function() {
		return JkUiHTMLDOM.isBrowser("mobile");
	};
	JkUiHTMLDOM.isChrome = function() {
		return JkUiHTMLDOM.isBrowser("chrome");
	};
	JkUiHTMLDOM.isEdge = function() {
		return JkUiHTMLDOM.isBrowser("edge");
	};
	JkUiHTMLDOM.isSafari = function() {
		return JkUiHTMLDOM.isBrowser("safari") && !JkUiHTMLDOM.isBrowser("chrome");
	};
	JkUiHTMLDOM.createElement = function(type) {
		return document.createElement(type);
	};
	JkUiHTMLDOM.getDocument = function() {
		return document;
	};
	JkUiHTMLDOM.getDocumentBody = function() {
		return JkUiHTMLDOM.getElementsByTagName((JkUiHTMLDOM.getDocument()), "body")[0];
	};
	JkUiHTMLDOM.getDocumentHead = function() {
		return JkUiHTMLDOM.getElementsByTagName((JkUiHTMLDOM.getDocument()), "head")[0];
	};
	JkUiHTMLDOM.getParentElement = function(element) {
		if(!(element != null)) {
			return null;
		}
		return element.parentElement;
	};
	JkUiHTMLDOM.getElementById1 = function(id) {
		return JkUiHTMLDOM.getElementById2((JkUiHTMLDOM.getDocument()), id);
	};
	JkUiHTMLDOM.getElementById2 = function(element, id) {
		if(!(element != null)) {
			return null;
		}
		if(!(id != null)) {
			return null;
		}
		return element.getElementById(id);
	};
	JkUiHTMLDOM.getElementsByClassName = function(element, classname) {
		if(!(element != null)) {
			return null;
		}
		if(!(classname != null)) {
			return null;
		}
		return element.getElementsByClassName(classname);
	};
	JkUiHTMLDOM.getElementsByTagName = function(element, tagname) {
		if(!(element != null)) {
			return null;
		}
		if(!(tagname != null)) {
			return null;
		}
		return element.getElementsByTagName(tagname);
	};
	JkUiHTMLDOM.appendChild = function(element, child) {
		if(!(element != null)) {
			return;
		}
		if(!(child != null)) {
			return;
		}
		element.appendChild(child);
		;
	};
	JkUiHTMLDOM.appendToBody = function(element) {
		JkUiHTMLDOM.appendChild((JkUiHTMLDOM.getDocumentBody()), element);
	};
	JkUiHTMLDOM.remove = function(element) {
		if(!(element != null)) {
			return;
		}
		var parent = JkUiHTMLDOM.getParentElement(element);
		if(!(parent != null)) {
			return;
		}
		parent.removeChild(element);
		;
	};
	JkUiHTMLDOM.getFirstChild = function(element) {
		if(!(element != null)) {
			return null;
		}
		return element.firstChild;
	};
	JkUiHTMLDOM.getChild = function(element, index) {
		if(!(element != null)) {
			return null;
		}
		return element.childNodes[index];
	};
	JkUiHTMLDOM.getAttribute = function(element, attr) {
		if(!(element != null)) {
			return null;
		}
		if(!JkLangString.isNotEmpty(attr)) {
			return null;
		}
		return element.getAttribute(attr);
	};
	JkUiHTMLDOM.setAttribute = function(element, attr, val) {
		if(!(element != null)) {
			return;
		}
		if(!(attr != null)) {
			return;
		}
		if(val == null) {
			element.removeAttribute(attr);
			;
		}
		else {
			element.setAttribute(attr, val);
			;
		}
	};
	JkUiHTMLDOM.getInnerHTML = function(element) {
		if(!(element != null)) {
			return null;
		}
		return element.innerHTML;
	};
	JkUiHTMLDOM.setInnerHTML = function(element, text) {
		if(!(element != null)) {
			return;
		}
		element.innerHTML = text;
		;
	};
	JkUiHTMLDOM.getTextContent = function(element) {
		if(!(element != null)) {
			return null;
		}
		return element.textContent;
	};
	JkUiHTMLDOM.setTextContent = function(element, text) {
		if(!(element != null)) {
			return;
		}
		element.textContent = text;
		;
	};
	JkUiHTMLDOM.prototype.setValue = function(element, val) {
		if(!(element != null)) {
			return;
		}
		element.value = val;
		;
	};
	JkUiHTMLDOM.getValue = function(element) {
		if(!(element != null)) {
			return null;
		}
		return element.value;
	};
	JkUiHTMLDOM.setStyle = function(element, key, val) {
		if(!(element != null)) {
			return;
		}
		if(!JkLangString.isNotEmpty(key)) {
			return;
		}
		var v = val;
		if(JkLangString.isEmpty(val)) {
			v = "";
		}
		element.style[key] = v;
		;
	};
	JkUiHTMLDOM.getStyle = function(element, key) {
		if(!(element != null)) {
			return null;
		}
		if(!JkLangString.isNotEmpty(key)) {
			return null;
		}
		return element.style[key];
	};
	JkUiHTMLDOM.removeStyle = function(element, key) {
		if(!(element != null)) {
			return;
		}
		if(!JkLangString.isNotEmpty(key)) {
			return;
		}
		element.style[key] = "";
		;
	};
	JkUiHTMLDOM.addEventListener = function(element, event, listener) {
		if(!(element != null)) {
			return;
		}
		if(!JkLangString.isNotEmpty(event)) {
			return;
		}
		if(!(listener != null)) {
			return;
		}
		element.addEventListener(event, listener);
		;
	};
	JkUiHTMLDOM.addEventListenerWithParameterInCallback = function(element, event, listener) {
		if(!(element != null)) {
			return;
		}
		if(!JkLangString.isNotEmpty(event)) {
			return;
		}
		if(!(listener != null)) {
			return;
		}
		element.addEventListener(event, listener);
		;
	};
	JkUiHTMLDOM.getClassList = function(element) {
		if(!(element != null)) {
			return null;
		}
		return element.classList;
	};
	JkUiHTMLDOM.addToClassList = function(element, xclass) {
		if(!(element != null)) {
			return;
		}
		if(!(xclass != null)) {
			return;
		}
		element.classList.add(xclass);
		;
	};
	JkUiHTMLDOM.removeFromClassList = function(element, xclass) {
		if(!(element != null)) {
			return;
		}
		if(!(xclass != null)) {
			return;
		}
		element.classList.remove(xclass);
		;
	};
	JkUiHTMLDOM.setFocus = function(element) {
		if(!(element != null)) {
			return;
		}
		element.focus();
		;
	};
	JkUiHTMLDOM.createTextNode = function(text) {
		if(!(text != null)) {
			return null;
		}
		return document.createTextNode(text);
	};
	JkUiHTMLDOM.doesBrowserSupportFontLoading = function() {
		var v = false;
		if(document["fonts"]) {
			v = true;
		}
		;
		return v;
	};
	JkUiHTMLDOM.setFontFamily = function(element, fontFamily) {
		if(!(element != null)) {
			return;
		}
		if(!(fontFamily != null)) {
			return;
		}
		JkUiHTMLDOM.setStyle(element, "font-family", fontFamily);
	};
	JkUiHTMLDOM.isFontStandard = function(fontFamily) {
		if(fontFamily == "Arial" || fontFamily == "Times New Roman" || fontFamily == "serif" || fontFamily == "sans-serif" || fontFamily == "Helvetica" || fontFamily == "Courier New" || fontFamily == "Courier" || fontFamily == "monospace" || fontFamily == "Verdana") {
			return true;
		}
		return false;
	};
	JkUiHTMLDOM.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUiHTMLDOM"] === true;
	};
	let JkUiScreen = function() {
	};
	JkUiScreen.prototype._t = { "JkUiScreen" : true };
	JkUiScreen.prototype._tobj = JkUiScreen;
	JkUiScreen.NEW = function() {
		var v = new JkUiScreen;
		return v.CTOR_JkUiScreen();
	};
	JkUiScreen.prototype.CTOR_JkUiScreen = function() {
		return this;
	};
	JkUiScreen.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUiScreen"] === true;
	};
	let JkUiScreenWithContext = {};
	JkUiScreenWithContext.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUiScreenWithContext"] === true;
	};
	let JkUiImageUtil = function() {
	};
	JkUiImageUtil.prototype._t = { "JkUiImageUtil" : true };
	JkUiImageUtil.prototype._tobj = JkUiImageUtil;
	JkUiImageUtil.NEW = function() {
		var v = new JkUiImageUtil;
		return v.CTOR_JkUiImageUtil();
	};
	JkUiImageUtil.prototype.CTOR_JkUiImageUtil = function() {
		return this;
	};
	JkUiImageUtil.createCircularImageSync = function(m) {
		if(!(m != null)) {
			return null;
		}
		var image = m;
		var minSize = ~(~JkMathMath.min((image.getPixelWidth()), (image.getPixelHeight())));
		image = image.cropSync(0, 0, minSize, minSize);
		console.log("[jk.ui.ImageUtil.createCircularImageSync] (ImageUtil.sling:113:3): Not implemented");
		return null;
	};
	JkUiImageUtil.createCircularImage = function(oimage, callback) {
		if(!(callback != null)) {
			return;
		}
		if(!(oimage != null)) {
			callback(null);
			return;
		}
		var minSize = ~(~JkMathMath.min((oimage.getPixelWidth()), (oimage.getPixelHeight())));
		oimage.crop(0, 0, minSize, minSize, (function(image1) {
			if(!(image1 != null)) {
				callback(null);
				return;
			}
			var iiw = oimage.image.width;
			var iih = oimage.image.height;
			var whr = iiw / 2;
			var cnv = document.createElement("canvas");
			cnv.width = iiw;
			cnv.height = iih;
			var ctx = cnv.getContext("2d");
			ctx.save();
			ctx.beginPath();
			ctx.arc(whr, whr, whr, 0, (2 * Math.PI));
			ctx.clip();
			try {
				ctx.drawImage(oimage.image, 0, 0);
			}
			catch(err) {
				return null;
			}
			ctx.closePath();
			ctx.restore();
			var src = cnv.toDataURL();
			var imo = new Image();
			imo.onload = function() {
				var img = JkUiImageForBrowser.NEW();
				img.image = imo;
				callback(img);
			};
			imo.src = src;
			;
		}.bind(this)));
	};
	JkUiImageUtil.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUiImageUtil"] === true;
	};
	let JkUiPointerEvent = function() {
		this.pointerId = 0;
		this.action = 0;
		this.x = 0.0;
		this.y = 0.0;
		this.isConsumed = false;
	};
	JkUiPointerEvent.prototype._t = { "JkUiPointerEvent" : true };
	JkUiPointerEvent.prototype._tobj = JkUiPointerEvent;
	JkUiPointerEvent.NEW = function() {
		var v = new JkUiPointerEvent;
		return v.CTOR_JkUiPointerEvent();
	};
	JkUiPointerEvent.prototype.CTOR_JkUiPointerEvent = function() {
		this.isConsumed = false;
		this.y = 0.0;
		this.x = 0.0;
		this.action = 0;
		this.pointerId = 0;
		return this;
	};
	JkUiPointerEvent.prototype.consume = function() {
		this.isConsumed = true;
	};
	JkUiPointerEvent.prototype.getPointerId = function() {
		return this.pointerId;
	};
	JkUiPointerEvent.prototype.setPointerId = function(value) {
		this.pointerId = value;
		return this;
	};
	JkUiPointerEvent.prototype.getAction = function() {
		return this.action;
	};
	JkUiPointerEvent.prototype.setAction = function(value) {
		this.action = value;
		return this;
	};
	JkUiPointerEvent.prototype.getX = function() {
		return this.x;
	};
	JkUiPointerEvent.prototype.setX = function(value) {
		this.x = value;
		return this;
	};
	JkUiPointerEvent.prototype.getY = function() {
		return this.y;
	};
	JkUiPointerEvent.prototype.setY = function(value) {
		this.y = value;
		return this;
	};
	JkUiPointerEvent.prototype.isInside = function(xc, yc, width, height) {
		if(this.x >= xc && this.x < xc + width && this.y >= yc && this.y < yc + height) {
			return true;
		}
		return false;
	};
	JkUiPointerEvent.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUiPointerEvent"] === true;
	};
	JkUiPointerEvent.DOWN = 0;
	JkUiPointerEvent.MOVE = 1;
	JkUiPointerEvent.CANCEL = 2;
	JkUiPointerEvent.UP = 3;
	let JkUiWebBrowserContext = function() {
	};
	JkUiWebBrowserContext.prototype._t = { "JkUiWebBrowserContext" : true };
	JkUiWebBrowserContext.prototype._tobj = JkUiWebBrowserContext;
	JkUiWebBrowserContext.NEW = function() {
		var v = new JkUiWebBrowserContext;
		return v.CTOR_JkUiWebBrowserContext();
	};
	JkUiWebBrowserContext.prototype.CTOR_JkUiWebBrowserContext = function() {
		return this;
	};
	JkUiWebBrowserContext.getPageURL = function() {
		var url = null;
		url = window.location.href;
		;
		return url;
	};
	JkUiWebBrowserContext.getPageHash = function() {
		var hash = null;
		hash = window.location.hash;
		;
		return hash;
	};
	JkUiWebBrowserContext.getQueryString = function() {
		var url = null;
		url = window.location.href;
		;
		if(JkLangString.isEmpty(url)) {
			return null;
		}
		var q = JkLangString.getIndexOfCharacter(url, ("?".charCodeAt()), 0);
		if(q < 0) {
			return null;
		}
		var v = JkLangString.getEndOfString(url, (q + 1));
		var hash = JkLangString.getIndexOfCharacter(v, ("#".charCodeAt()), 0);
		if(hash >= 0) {
			v = JkLangString.getSubString(v, 0, hash);
		}
		return v;
	};
	JkUiWebBrowserContext.getQueryStringValue = function(key) {
		if(!JkLangString.isNotEmpty(key)) {
			return null;
		}
		var qss = JkUiWebBrowserContext.getQueryString();
		if(!JkLangString.isNotEmpty(qss)) {
			return null;
		}
		var qs = JkUrlQueryString.parse(qss);
		if(!(qs != null)) {
			return null;
		}
		return JkLangMap.get(qs, key);
	};
	JkUiWebBrowserContext.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUiWebBrowserContext"] === true;
	};
	let JkUiApplicationData = function() {
	};
	JkUiApplicationData.prototype._t = { "JkUiApplicationData" : true };
	JkUiApplicationData.prototype._tobj = JkUiApplicationData;
	JkUiApplicationData.NEW = function() {
		var v = new JkUiApplicationData;
		return v.CTOR_JkUiApplicationData();
	};
	JkUiApplicationData.prototype.CTOR_JkUiApplicationData = function() {
		return this;
	};
	JkUiApplicationData.getApplicationData = function(ctx) {
		if(!(ctx != null)) {
			return null;
		}
		console.log("[jk.ui.ApplicationData.getApplicationData] (ApplicationData.sling:63:3): Not implemented.");
		return null;
	};
	JkUiApplicationData.retrieveFile = function(ctx, filename) {
		console.log("[jk.ui.ApplicationData.retrieveFile] (ApplicationData.sling:87:3): Not implemented.");
		return null;
	};
	JkUiApplicationData.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkUiApplicationData"] === true;
	};
	let JkGfxUtilImageSheet = function() {
		this.sheet = null;
		this.cols = -1;
		this.rows = -1;
		this.sourceSkipX = 0;
		this.sourceSkipY = 0;
		this.sourceImageWidth = -1;
		this.sourceImageHeight = -1;
		this.maxImages = -1;
	};
	JkGfxUtilImageSheet.prototype._t = { "JkGfxUtilImageSheet" : true };
	JkGfxUtilImageSheet.prototype._tobj = JkGfxUtilImageSheet;
	JkGfxUtilImageSheet.NEW = function() {
		var v = new JkGfxUtilImageSheet;
		return v.CTOR_JkGfxUtilImageSheet();
	};
	JkGfxUtilImageSheet.prototype.CTOR_JkGfxUtilImageSheet = function() {
		this.maxImages = -1;
		this.sourceImageHeight = -1;
		this.sourceImageWidth = -1;
		this.sourceSkipY = 0;
		this.sourceSkipX = 0;
		this.rows = -1;
		this.cols = -1;
		this.sheet = null;
		return this;
	};
	JkGfxUtilImageSheet.prototype.toImages = function(resizeToWidth, resizeToHeight) {
		if(!(this.sheet != null)) {
			return null;
		}
		var cols = this.cols;
		var rows = this.rows;
		var fwidth = this.sourceImageWidth;
		if(fwidth < 1) {
			fwidth = (this.sheet.getPixelWidth() - this.sourceSkipX) / cols;
		}
		else {
			cols = (this.sheet.getPixelWidth() - this.sourceSkipX) / fwidth;
		}
		var fheight = this.sourceImageHeight;
		if(fheight < 1) {
			fheight = (this.sheet.getPixelHeight() - this.sourceSkipY) / rows;
		}
		else {
			rows = (this.sheet.getPixelHeight() - this.sourceSkipY) / fheight;
		}
		var frames = new Array;
		var x = 0;
		var y = 0;
		for(y = 0 ; y < rows ; y++) {
			for(x = 0 ; x < cols ; x++) {
				var img = this.sheet.cropSync((x * fwidth), (y * fheight), fwidth, fheight);
				if(resizeToWidth > 0) {
					img = img.scaleToSizeSync(resizeToWidth, resizeToHeight);
				}
				frames.push(img);
				if(this.maxImages > 0 && JkLangVector.getSize(frames) >= this.maxImages) {
					return frames;
				}
			}
		}
		return frames;
	};
	JkGfxUtilImageSheet.prototype.getSheet = function() {
		return this.sheet;
	};
	JkGfxUtilImageSheet.prototype.setSheet = function(v) {
		this.sheet = v;
		return this;
	};
	JkGfxUtilImageSheet.prototype.getCols = function() {
		return this.cols;
	};
	JkGfxUtilImageSheet.prototype.setCols = function(v) {
		this.cols = v;
		return this;
	};
	JkGfxUtilImageSheet.prototype.getRows = function() {
		return this.rows;
	};
	JkGfxUtilImageSheet.prototype.setRows = function(v) {
		this.rows = v;
		return this;
	};
	JkGfxUtilImageSheet.prototype.getSourceSkipX = function() {
		return this.sourceSkipX;
	};
	JkGfxUtilImageSheet.prototype.setSourceSkipX = function(v) {
		this.sourceSkipX = v;
		return this;
	};
	JkGfxUtilImageSheet.prototype.getSourceSkipY = function() {
		return this.sourceSkipY;
	};
	JkGfxUtilImageSheet.prototype.setSourceSkipY = function(v) {
		this.sourceSkipY = v;
		return this;
	};
	JkGfxUtilImageSheet.prototype.getSourceImageWidth = function() {
		return this.sourceImageWidth;
	};
	JkGfxUtilImageSheet.prototype.setSourceImageWidth = function(v) {
		this.sourceImageWidth = v;
		return this;
	};
	JkGfxUtilImageSheet.prototype.getSourceImageHeight = function() {
		return this.sourceImageHeight;
	};
	JkGfxUtilImageSheet.prototype.setSourceImageHeight = function(v) {
		this.sourceImageHeight = v;
		return this;
	};
	JkGfxUtilImageSheet.prototype.getMaxImages = function() {
		return this.maxImages;
	};
	JkGfxUtilImageSheet.prototype.setMaxImages = function(v) {
		this.maxImages = v;
		return this;
	};
	JkGfxUtilImageSheet.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkGfxUtilImageSheet"] === true;
	};
	let JkWidgetWidgetWithValue = {};
	JkWidgetWidgetWithValue.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetWidgetWithValue"] === true;
	};
	let JkWidgetDisplayAwareWidget = {};
	JkWidgetDisplayAwareWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetDisplayAwareWidget"] === true;
	};
	let JkWidgetVerticalBoxWidgetMyChildEntry = function() {
		this.widget = null;
		this.weight = 0.0;
	};
	JkWidgetVerticalBoxWidgetMyChildEntry.prototype._t = { "JkWidgetVerticalBoxWidgetMyChildEntry" : true };
	JkWidgetVerticalBoxWidgetMyChildEntry.prototype._tobj = JkWidgetVerticalBoxWidgetMyChildEntry;
	JkWidgetVerticalBoxWidgetMyChildEntry.NEW = function() {
		var v = new JkWidgetVerticalBoxWidgetMyChildEntry;
		return v.CTOR_JkWidgetVerticalBoxWidgetMyChildEntry();
	};
	JkWidgetVerticalBoxWidgetMyChildEntry.prototype.CTOR_JkWidgetVerticalBoxWidgetMyChildEntry = function() {
		this.weight = 0.0;
		this.widget = null;
		return this;
	};
	JkWidgetVerticalBoxWidgetMyChildEntry.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetVerticalBoxWidgetMyChildEntry"] === true;
	};
	let JkWidgetParentAwareWidget = {};
	JkWidgetParentAwareWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetParentAwareWidget"] === true;
	};
	let JkWidgetWidget = function() {
		this.element = null;
		this.cachedWidth = 0;
		this.cachedHeight = 0;
	};
	JkWidgetWidget.prototype._t = { "JkWidgetWidget" : true };
	JkWidgetWidget.prototype._tobj = JkWidgetWidget;
	JkWidgetWidget.NEW = function() {
		var v = new JkWidgetWidget;
		return v.CTOR_JkWidgetWidget();
	};
	JkWidgetWidget.prototype.CTOR_JkWidgetWidget = function() {
		this.cachedHeight = 0;
		this.cachedWidth = 0;
		this.element = null;
		this.element = this.createElement();
		this.element.widgetObject = this;
		;
		this.prepareElement(this.element);
		return this;
	};
	JkWidgetWidget.prototype.createElement = function() {
		return JkUiHTMLDOM.createElement("div");
	};
	JkWidgetWidget.prototype.prepareElement = function(element) {
		JkUiHTMLDOM.setStyle(element, "pointer-events", "auto");
		JkUiHTMLDOM.setStyle(element, "position", "absolute");
		JkUiHTMLDOM.setStyle(element, "overflow", "hidden");
	};
	JkWidgetWidget.onWidgetAddedToParent = function(widget) {
		if(!(widget != null)) {
			return;
		}
		if(JkWidgetParentAwareWidget.IS_INSTANCE && JkWidgetParentAwareWidget.IS_INSTANCE(widget)) {
			widget.onWidgetAddedToParent();
		}
	};
	JkWidgetWidget.onWidgetRemovedFromParent = function(widget) {
		if(!(widget != null)) {
			return;
		}
		if(JkWidgetParentAwareWidget.IS_INSTANCE && JkWidgetParentAwareWidget.IS_INSTANCE(widget)) {
			widget.onWidgetRemovedFromParent();
		}
	};
	JkWidgetWidget.notifyOnStartScreen = function(widget, screen) {
		var array = JkWidgetWidget.getChildren(widget);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var child = array[n];
				if(child != null) {
					JkWidgetWidget.notifyOnStartScreen(child, screen);
				}
			}
		}
		if(JkWidgetScreenStartStopAwareWidget.IS_INSTANCE && JkWidgetScreenStartStopAwareWidget.IS_INSTANCE(widget)) {
			widget.onStartScreen(screen);
		}
	};
	JkWidgetWidget.notifyOnStopScreen = function(widget, screen) {
		var array = JkWidgetWidget.getChildren(widget);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var child = array[n];
				if(child != null) {
					JkWidgetWidget.notifyOnStopScreen(child, screen);
				}
			}
		}
		if(JkWidgetScreenStartStopAwareWidget.IS_INSTANCE && JkWidgetScreenStartStopAwareWidget.IS_INSTANCE(widget)) {
			widget.onStopScreen(screen);
		}
	};
	JkWidgetWidget.notifyOnAddedToScreen = function(widget, screen) {
		var array = JkWidgetWidget.getChildren(widget);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var child = array[n];
				if(child != null) {
					JkWidgetWidget.notifyOnAddedToScreen(child, screen);
				}
			}
		}
		if(JkWidgetScreenAwareWidget.IS_INSTANCE && JkWidgetScreenAwareWidget.IS_INSTANCE(widget)) {
			widget.onWidgetAddedToScreen(screen);
		}
	};
	JkWidgetWidget.notifyOnRemovedFromScreen = function(widget, screen) {
		if(JkWidgetScreenAwareWidget.IS_INSTANCE && JkWidgetScreenAwareWidget.IS_INSTANCE(widget)) {
			widget.onWidgetRemovedFromScreen(screen);
		}
		var array = JkWidgetWidget.getChildren(widget);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var child = array[n];
				if(child != null) {
					JkWidgetWidget.notifyOnRemovedFromScreen(child, screen);
				}
			}
		}
	};
	JkWidgetWidget.addChild = function(parent, child) {
		if(!(parent != null)) {
			return;
		}
		if(!(child != null)) {
			return;
		}
		if(JkWidgetParentAwareWidget.IS_INSTANCE && JkWidgetParentAwareWidget.IS_INSTANCE(child)) {
			child.onWidgetAddingToParent();
		}
		JkUiHTMLDOM.appendChild(parent.element, child.element);
		var pp = (function(o) {
			if(JkWidgetContainerWidget.IS_INSTANCE && JkWidgetContainerWidget.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))(parent);
		if(pp != null) {
			pp.onChildWidgetAdded(child);
		}
		JkWidgetWidget.onWidgetAddedToParent(child);
		var screen = JkWidgetScreenForWidget.findScreenForWidget(child);
		if(screen != null) {
			JkWidgetWidget.notifyOnAddedToScreen(child, screen);
		}
	};
	JkWidgetWidget.removeFromParent = function(child) {
		if(!(child != null)) {
			return null;
		}
		var parentWidget = JkWidgetWidget.getParent(child);
		if(!(parentWidget != null)) {
			return null;
		}
		var pp = (function(o) {
			if(JkWidgetContainerWidget.IS_INSTANCE && JkWidgetContainerWidget.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))(parentWidget);
		JkUiHTMLDOM.remove(child.element);
		if(pp != null) {
			var v = new Array;
			v.push(child);
			pp.onChildWidgetsRemoved(v);
		}
		var screen = JkWidgetScreenForWidget.findScreenForWidget(parentWidget);
		if(screen != null) {
			JkWidgetWidget.notifyOnRemovedFromScreen(child, screen);
		}
		JkWidgetWidget.onWidgetRemovedFromParent(child);
		return null;
	};
	JkWidgetWidget.domElementAsWidget = function(element) {
		var v = null;
		v = element.widgetObject;
		;
		if((JkWidgetWidget.IS_INSTANCE && JkWidgetWidget.IS_INSTANCE(v)) == false) {
			v = null;
		}
		return v;
	};
	JkWidgetWidget.hasParent = function(widget) {
		if(!(JkWidgetWidget.getParent(widget) != null)) {
			return false;
		}
		return true;
	};
	JkWidgetWidget.getParent = function(widget) {
		if(!(widget != null)) {
			return null;
		}
		var pe = JkUiHTMLDOM.getParentElement(widget.element);
		if(!(pe != null)) {
			return null;
		}
		return JkWidgetWidget.domElementAsWidget(pe);
	};
	JkWidgetWidget.getChildren = function(widget) {
		if(!(widget != null)) {
			return null;
		}
		var v = new Array;
		var dome = widget.element;
		var ll = dome.childNodes.length;
		for(var n = 0 ; n < ll ; n++) {
			v.push((JkWidgetWidget.domElementAsWidget(dome.childNodes[n])));
		}
		return v;
	};
	JkWidgetWidget.getX = function(widget) {
		if(!(widget != null)) {
			return 0;
		}
		var v = 0;
		v = widget.element.offsetLeft;
		;
		return v;
	};
	JkWidgetWidget.getY = function(widget) {
		if(!(widget != null)) {
			return 0;
		}
		var v = 0;
		v = widget.element.offsetTop;
		;
		return v;
	};
	JkWidgetWidget.getAbsoluteX = function(widget) {
		if(!(widget != null)) {
			return 0;
		}
		var v = 0;
		v = widget.element.getBoundingClientRect().left;
		;
		return v;
	};
	JkWidgetWidget.getAbsoluteY = function(widget) {
		if(!(widget != null)) {
			return 0;
		}
		var v = 0;
		v = widget.element.getBoundingClientRect().bottom;
		;
		return v;
	};
	JkWidgetWidget.getWidth = function(widget) {
		if(!(widget != null)) {
			return 0;
		}
		var v = 0;
		if(JkWidgetWidget.isRootWidget(widget)) {
			v = widget.element.getBoundingClientRect().width;
			;
		}
		else {
			v = widget.cachedWidth;
		}
		return v;
	};
	JkWidgetWidget.getHeight = function(widget) {
		if(!(widget != null)) {
			return 0;
		}
		var v = 0;
		if(JkWidgetWidget.isRootWidget(widget)) {
			v = widget.element.getBoundingClientRect().height;
			;
		}
		else {
			v = widget.cachedHeight;
		}
		return v;
	};
	JkWidgetWidget.getGeometryString = function(widget) {
		if(!(widget != null)) {
			return "null,null,null,null";
		}
		return JkLangString.safeString((JkLangString.forInteger((JkWidgetWidget.getX(widget))))) + "," + JkLangString.safeString((JkLangString.forInteger((JkWidgetWidget.getY(widget))))) + "," + JkLangString.safeString((JkLangString.forInteger((JkWidgetWidget.getWidth(widget))))) + "," + JkLangString.safeString((JkLangString.forInteger((JkWidgetWidget.getHeight(widget)))));
	};
	JkWidgetWidget.move = function(widget, x, y) {
		widget.element.style.left = ~(~x) + "px";
		widget.element.style.top = ~(~y) + "px";
		;
	};
	JkWidgetWidget.isRootWidget = function(widget) {
		var cw = (function(o) {
			if(JkWidgetContainerWidget.IS_INSTANCE && JkWidgetContainerWidget.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))(widget);
		if(!(cw != null)) {
			return false;
		}
		var pp = JkWidgetWidget.getParent(cw);
		if(!(pp != null)) {
			return true;
		}
		if(JkWidgetWidgetWithLayout.IS_INSTANCE && JkWidgetWidgetWithLayout.IS_INSTANCE(pp)) {
			return false;
		}
		return true;
	};
	JkWidgetWidget.findScreen = function(widget) {
		var pp = widget.element;
		while(pp != null){
			var v = null;
			if(pp.screenObject) {
				v = pp.screenObject;
			}
			;
			if(v != null) {
				return (function(o) {
					if(JkUiScreen.IS_INSTANCE && JkUiScreen.IS_INSTANCE(o)) {
						return o;
					}
					return null;
				}.bind(this))(v);
			}
			pp = JkUiHTMLDOM.getParentElement(pp);
		}
		return null;
	};
	JkWidgetWidget.findRootWidget = function(widget) {
		var v = widget;
		while(true){
			if(!(v != null)) {
				break;
			}
			if(JkWidgetWidget.isRootWidget(v)) {
				return (function(o) {
					if(JkWidgetContainerWidget.IS_INSTANCE && JkWidgetContainerWidget.IS_INSTANCE(o)) {
						return o;
					}
					return null;
				}.bind(this))(v);
			}
			v = JkWidgetWidget.getParent(v);
		}
		return null;
	};
	JkWidgetWidget.setLayoutSize = function(widget, widthValue, heightValue) {
		if(JkWidgetWidget.isRootWidget(widget)) {
			var ccw = (function(o) {
				if(JkWidgetContainerWidget.IS_INSTANCE && JkWidgetContainerWidget.IS_INSTANCE(o)) {
					return o;
				}
				return null;
			}.bind(this))(widget);
			if(ccw != null && ccw.getAllowResize() == false) {
				return false;
			}
		}
		var width = widthValue;
		if(width < 0) {
			width = 0;
		}
		var height = heightValue;
		if(height < 0) {
			height = 0;
		}
		if(JkWidgetWidget.getWidth(widget) == width && JkWidgetWidget.getHeight(widget) == height) {
			return false;
		}
		widget.element.style.width = ~(~width) + "px";
		widget.element.style.height = ~(~height) + "px";
		;
		widget.cachedWidth = width;
		widget.cachedHeight = height;
		if(JkWidgetResizeAwareWidget.IS_INSTANCE && JkWidgetResizeAwareWidget.IS_INSTANCE(widget)) {
			widget.onWidgetResized();
		}
		return true;
	};
	JkWidgetWidget.resizeHeight = function(widget, height) {
		if(!JkWidgetWidget.setLayoutSize(widget, (JkWidgetWidget.getWidth(widget)), height)) {
			return false;
		}
		if(JkWidgetHeightAwareWidget.IS_INSTANCE && JkWidgetHeightAwareWidget.IS_INSTANCE(widget)) {
			widget.onWidgetHeightChanged(height);
		}
		return true;
	};
	JkWidgetWidget.layout = function(widget, widthConstraint, force) {
		if(!(widget != null)) {
			return;
		}
		var done = false;
		if(JkWidgetWidgetWithLayout.IS_INSTANCE && JkWidgetWidgetWithLayout.IS_INSTANCE(widget)) {
			done = widget.layoutWidget(widthConstraint, force);
		}
		if(!done) {
			var ww = 0;
			var hh = 0;
			if(widthConstraint >= 0) {
				var wws = JkLangString.safeString((JkLangString.forInteger(widthConstraint))) + "px";
				widget.element.style["white-space"] = "normal";
				widget.element.style["width"] = wws;
				hh = widget.element.offsetHeight;
				;
				widget.cachedWidth = widthConstraint;
				ww = widthConstraint;
			}
			else {
				widget.element.style["white-space"] = "nowrap";
				widget.element.style["width"] = "auto";
				ww = widget.element.getBoundingClientRect().width;
				hh = widget.element.offsetHeight;
				;
				ww++;
			}
			JkWidgetWidget.setLayoutSize(widget, ww, hh);
			if(JkWidgetResizeAwareWidget.IS_INSTANCE && JkWidgetResizeAwareWidget.IS_INSTANCE(widget)) {
				widget.onWidgetResized();
			}
		}
	};
	JkWidgetWidget.togglePointerEventHandling = function(widget, value) {
		var cw = (function(o) {
			if(JkWidgetContainerWidget.IS_INSTANCE && JkWidgetContainerWidget.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))(widget);
		if(!(cw != null)) {
			return;
		}
		cw.togglePointerEventHandling(value);
	};
	JkWidgetWidget.setWidgetClickHandler = function(widget, handler) {
		if(handler != null) {
			JkWidgetWidget.togglePointerEventHandling(widget, true);
		}
		else {
			JkWidgetWidget.togglePointerEventHandling(widget, false);
		}
		widget.element.onclick = handler;
		;
		if((JkWidgetContainerWidget.IS_INSTANCE && JkWidgetContainerWidget.IS_INSTANCE(widget)) == false) {
			JkUiHTMLDOM.setStyle(widget.element, "pointer-events", "auto");
		}
		JkUiHTMLDOM.setStyle(widget.element, "cursor", "pointer");
	};
	JkWidgetWidget.setWidgetDoubleClickHandler = function(widget, handler) {
		if(handler != null) {
			JkWidgetWidget.togglePointerEventHandling(widget, true);
		}
		else {
			JkWidgetWidget.togglePointerEventHandling(widget, false);
		}
		if(!(handler != null)) {
			return;
		}
		JkUiHTMLDOM.addEventListener(widget.element, "dblclick", handler);
	};
	JkWidgetWidget.setWidgetLongClickHandler = function(widget, handler) {
		if(handler != null) {
			JkWidgetWidget.togglePointerEventHandling(widget, true);
		}
		else {
			JkWidgetWidget.togglePointerEventHandling(widget, false);
		}
		var timer = null;
		widget.element.onmousedown = function() {
			timer = setTimeout(handler, 500);
		};
		widget.element.onmouseup = function() {
			clearTimeout(timer);
		};
		;
		JkUiHTMLDOM.setStyle(widget.element, "cursor", "pointer");
	};
	JkWidgetWidget.setWidgetPointerHandlers = function(widget, onStartHandler, onTouchHandler, onEndHandler) {
		if(onStartHandler == null && onTouchHandler == null && onEndHandler == null) {
			JkWidgetWidget.togglePointerEventHandling(widget, false);
		}
		else {
			JkWidgetWidget.togglePointerEventHandling(widget, true);
		}
		var mousedown = false;
		var getCoordinates = function(evt) {
			var rect = widget.element.getBoundingClientRect();
			var x = evt.clientX - rect.left;
			var y = evt.clientY - rect.top;
			return {
				x : x,
				y : y
			};
		};
		if(onTouchHandler != null) {
			var othf = function(evt) {
				if(mousedown) {
					JkUiHTMLDOM.setStyle(widget.element, "cursor", "move");
					onTouchHandler(getCoordinates(evt).x, getCoordinates(evt).y);
				}
			};
			widget.element.onmousemove = othf;
		}
		if(onStartHandler != null) {
			var oshf = function(evt) {
				mousedown = true;
				onStartHandler(getCoordinates(evt).x, getCoordinates(evt).y);
			};
			widget.element.onmousedown = oshf;
		}
		if(onEndHandler != null) {
			var oehf = function(evt) {
				if(mousedown) {
					JkUiHTMLDOM.setStyle(widget.element, "cursor", "auto");
					onEndHandler(getCoordinates(evt).x, getCoordinates(evt).y);
					mousedown = false;
				}
			};
			widget.element.onmouseup = oehf;
		}
		;
	};
	JkWidgetWidget.removeChildrenOf = function(widget) {
		if(!(widget != null)) {
			return;
		}
		var children = JkWidgetWidget.getChildren(widget);
		widget.element.textContent = "";
		;
		var screen = JkWidgetScreenForWidget.findScreenForWidget(widget);
		var pp = (function(o) {
			if(JkWidgetContainerWidget.IS_INSTANCE && JkWidgetContainerWidget.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))(widget);
		if(children != null) {
			var n = 0;
			var m = children.length;
			for(n = 0 ; n < m ; n++) {
				var child = children[n];
				if(child != null) {
					if(screen != null) {
						JkWidgetWidget.notifyOnRemovedFromScreen(child, screen);
					}
					JkWidgetWidget.onWidgetRemovedFromParent(child);
				}
			}
		}
		if(pp != null) {
			pp.onChildWidgetsRemoved(children);
		}
	};
	JkWidgetWidget.onLayoutChanged = function(widget) {
		if(!(widget != null)) {
			return;
		}
		var wwl = (function(o) {
			if(JkWidgetWidgetWithLayout.IS_INSTANCE && JkWidgetWidgetWithLayout.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))(widget);
		if(wwl != null && wwl.hasWidgetLayoutChanged()) {
			return;
		}
		if(JkWidgetWidget.isRootWidget(widget)) {
			widget.scheduleLayout();
		}
		else {
			var pp = (function(o1) {
				if(JkWidgetWidget.IS_INSTANCE && JkWidgetWidget.IS_INSTANCE(o1)) {
					return o1;
				}
				return null;
			}.bind(this))((JkWidgetWidget.getParent(widget)));
			if(pp != null) {
				JkWidgetWidget.onLayoutChanged(pp);
			}
			else {
				var root = JkWidgetWidget.findRootWidget(widget);
				if(root != null) {
					root.scheduleLayout();
				}
			}
		}
		if(wwl != null) {
			wwl.setWidgetLayoutChanged();
		}
	};
	JkWidgetWidget.setAlpha = function(widget, alpha) {
		if(!(widget != null)) {
			return;
		}
		JkUiHTMLDOM.setStyle(widget.element, "opacity", (JkLangString.forDouble(alpha)));
	};
	JkWidgetWidget.setRotation = function(widget, degrees) {
		if(!(widget != null)) {
			return;
		}
		var element = widget.element;
		var ang = degrees * 180.0 / JkMathMath.M_PI;
		var str = "rotate(" + JkLangString.safeString((JkLangString.forInteger((~(~ang))))) + "deg)";
		JkUiHTMLDOM.setStyle(element, "transform", str);
		JkUiHTMLDOM.setStyle(element, "webkitTransform", str);
		JkUiHTMLDOM.setStyle(element, "msTransform", str);
		JkUiHTMLDOM.setStyle(element, "oTransform", str);
		JkUiHTMLDOM.setStyle(element, "mozTransform", str);
	};
	JkWidgetWidget.setEnabled = function(widget, enabled) {
		if(!(widget != null)) {
			return;
		}
		var elem = widget.element;
		elem.disabled = !enabled;
		;
	};
	JkWidgetWidget.setTabIndex = function(widget, index) {
		if(!(widget != null)) {
			return;
		}
		JkUiHTMLDOM.setAttribute(widget.element, "tabIndex", (JkLangString.forInteger(index)));
	};
	JkWidgetWidget.setVisible = function(widget, visible) {
		if(!(widget != null)) {
			return;
		}
		if(visible) {
			JkUiHTMLDOM.setStyle(widget.element, "visibility", "inherit");
		}
		else {
			JkUiHTMLDOM.setStyle(widget.element, "visibility", "hidden");
		}
	};
	JkWidgetWidget.getVisible = function(widget) {
		if(!(widget != null)) {
			return false;
		}
		var visible = false;
		var visibility = JkUiHTMLDOM.getStyle(widget.element, "visibility");
		if(JkLangString.equals(visibility, "visible") || JkLangString.equals(visibility, "inherit")) {
			visible = true;
		}
		return visible;
	};
	JkWidgetWidget.setWidgetId = function(widget, idValue) {
		if(!(widget != null)) {
			return;
		}
		if(JkWidgetIdAwareWidget.IS_INSTANCE && JkWidgetIdAwareWidget.IS_INSTANCE(widget)) {
			(function(o) {
				if(JkWidgetIdAwareWidget.IS_INSTANCE && JkWidgetIdAwareWidget.IS_INSTANCE(o)) {
					return o;
				}
				return null;
			}.bind(this))(widget).setWidgetId(idValue);
		}
		else {
			JkUiHTMLDOM.setAttribute(widget.element, "id", (JkLangString.asString(idValue)));
		}
	};
	JkWidgetWidget.focus = function(widget) {
		JkUiHTMLDOM.setAttribute(widget.element, "tabindex", "-1");
		JkUiHTMLDOM.setFocus(widget.element);
	};
	JkWidgetWidget.setWidgetToolTipText = function(widget, str) {
		JkUiHTMLDOM.setAttribute(widget.element, "title", str);
	};
	JkWidgetWidget.setWidgetMousePointer = function(widget, mousePointer) {
		if(mousePointer == JkWidgetWidget.MOUSE_POINTER_DEFAULT) {
			JkUiHTMLDOM.setStyle(widget.element, "cursor", "default");
		}
		else if(mousePointer == JkWidgetWidget.MOUSE_POINTER_CROSSHAIR) {
			JkUiHTMLDOM.setStyle(widget.element, "cursor", "crosshair");
		}
		else if(mousePointer == JkWidgetWidget.MOUSE_POINTER_NESW) {
			JkUiHTMLDOM.setStyle(widget.element, "cursor", "nesw-resize");
		}
		else if(mousePointer == JkWidgetWidget.MOUSE_POINTER_NS) {
			JkUiHTMLDOM.setStyle(widget.element, "cursor", "ns-resize");
		}
		else if(mousePointer == JkWidgetWidget.MOUSE_POINTER_NWSE) {
			JkUiHTMLDOM.setStyle(widget.element, "cursor", "nwse-resize");
		}
		else if(mousePointer == JkWidgetWidget.MOUSE_POINTER_NODROP) {
			JkUiHTMLDOM.setStyle(widget.element, "cursor", "no-drop");
		}
		else if(mousePointer == JkWidgetWidget.MOUSE_POINTER_HOURGLASS) {
			JkUiHTMLDOM.setStyle(widget.element, "cursor", "progress");
		}
	};
	JkWidgetWidget.addToDomElement = function(widget, parentElement) {
		if(!(widget != null)) {
			return;
		}
		if(!(parentElement != null)) {
			return;
		}
		JkUiHTMLDOM.setStyle(parentElement, "display", "table");
		JkUiHTMLDOM.setStyle(parentElement, "overflow", "hidden");
		if(parentElement == JkUiHTMLDOM.getDocumentBody()) {
			JkUiHTMLDOM.setStyle(parentElement, "width", "100%");
			JkUiHTMLDOM.setStyle(parentElement, "height", "100%");
			var html = JkUiHTMLDOM.getElementsByTagName((JkUiHTMLDOM.getDocument()), "html")[0];
			JkUiHTMLDOM.setStyle(html, "width", "100%");
			JkUiHTMLDOM.setStyle(html, "height", "100%");
		}
		JkUiHTMLDOM.setStyle(widget.element, "display", "table-cell");
		JkUiHTMLDOM.setStyle(widget.element, "position", "relative");
		JkUiHTMLDOM.setStyle(widget.element, "width", "100%");
		JkUiHTMLDOM.setStyle(widget.element, "height", "100%");
		JkUiHTMLDOM.appendChild(parentElement, widget.element);
		widget.onWidgetAddingToParent();
		widget.onWidgetAddedToParent();
		widget.scheduleLayout();
	};
	JkWidgetWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetWidget"] === true;
	};
	JkWidgetWidget.MOUSE_POINTER_DEFAULT = 0;
	JkWidgetWidget.MOUSE_POINTER_ARROW = 1;
	JkWidgetWidget.MOUSE_POINTER_CROSSHAIR = 2;
	JkWidgetWidget.MOUSE_POINTER_IBEAM = 3;
	JkWidgetWidget.MOUSE_POINTER_ICON = 4;
	JkWidgetWidget.MOUSE_POINTER_SIZE = 5;
	JkWidgetWidget.MOUSE_POINTER_NESW = 6;
	JkWidgetWidget.MOUSE_POINTER_NS = 7;
	JkWidgetWidget.MOUSE_POINTER_NWSE = 8;
	JkWidgetWidget.MOUSE_POINTER_WE = 9;
	JkWidgetWidget.MOUSE_POINTER_UPARROW = 10;
	JkWidgetWidget.MOUSE_POINTER_HOURGLASS = 11;
	JkWidgetWidget.MOUSE_POINTER_NODROP = 12;
	JkWidgetWidget.MOUSE_POINTER_ARROW_HOURGLASS = 13;
	JkWidgetWidget.MOUSE_POINTER_ARROW_QUESTION = 14;
	JkWidgetWidget.MOUSE_POINTER_SIZE_ALL = 15;
	let JkWidgetWidgetAnimation = function() {
		this.context = null;
		this.duration = 0;
		this.callbacks = null;
		this.endListener = null;
		this.shouldStop = false;
		this.shouldLoop = false;
		this.startTime = 0;
	};
	JkWidgetWidgetAnimation.prototype._t = { "JkWidgetWidgetAnimation" : true };
	JkWidgetWidgetAnimation.prototype._tobj = JkWidgetWidgetAnimation;
	JkWidgetWidgetAnimation.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetWidgetAnimation;
		return v.CTOR_JkWidgetWidgetAnimation_JkUiGuiApplicationContext(context);
	};
	JkWidgetWidgetAnimation.prototype.CTOR_JkWidgetWidgetAnimation_JkUiGuiApplicationContext = function(context) {
		this.startTime = 0;
		this.shouldLoop = false;
		this.shouldStop = false;
		this.endListener = null;
		this.callbacks = null;
		this.duration = 0;
		this.context = null;
		this.context = context;
		this.callbacks = new Array;
		return this;
	};
	JkWidgetWidgetAnimation.forDuration = function(context, duration) {
		var v = JkWidgetWidgetAnimation.NEW_JkUiGuiApplicationContext(context);
		v.setDuration(duration);
		return v;
	};
	JkWidgetWidgetAnimation.prototype.addCallback = function(callback) {
		if(callback != null) {
			this.callbacks.push(callback);
		}
		return this;
	};
	JkWidgetWidgetAnimation.prototype.addCrossFade = function(from, to, removeFrom) {
		var ff = from;
		var tt = to;
		var rf = removeFrom;
		this.addCallback((function(completion1) {
			JkWidgetWidget.setAlpha(ff, (1.0 - completion1));
			JkWidgetWidget.setAlpha(tt, completion1);
			if(rf && completion1 >= 1.0) {
				JkWidgetWidget.removeFromParent(ff);
			}
		}.bind(this)));
		return this;
	};
	JkWidgetWidgetAnimation.prototype.addFadeIn = function(from) {
		var ff = from;
		this.addCallback((function(completion1) {
			JkWidgetWidget.setAlpha(ff, completion1);
		}.bind(this)));
		return this;
	};
	JkWidgetWidgetAnimation.prototype.addFadeOut = function(from, removeAfter) {
		var ff = from;
		var ra = removeAfter;
		this.addCallback((function(completion1) {
			JkWidgetWidget.setAlpha(ff, (1.0 - completion1));
			if(ra && completion1 >= 1.0) {
				JkWidgetWidget.removeFromParent(ff);
			}
		}.bind(this)));
		return this;
	};
	JkWidgetWidgetAnimation.prototype.addFadeOutIn = function(from) {
		var ff = from;
		this.addCallback((function(completion1) {
			var r = JkMathMath.remainder(completion1, 1.0);
			if(r < 0.5) {
				JkWidgetWidget.setAlpha(ff, (1.0 - r * 2));
			}
			else {
				JkWidgetWidget.setAlpha(ff, ((r - 0.5) * 2));
			}
		}.bind(this)));
		return this;
	};
	JkWidgetWidgetAnimation.prototype.tick = function(completion) {
		if(this.callbacks != null) {
			var n = 0;
			var m = this.callbacks.length;
			for(n = 0 ; n < m ; n++) {
				var callback = this.callbacks[n];
				if(callback != null) {
					callback(completion);
				}
			}
		}
	};
	JkWidgetWidgetAnimation.prototype.onProgress = function(elapsedTime) {
		var completion = elapsedTime / this.duration;
		this.tick(completion);
		if(this.shouldLoop == false && completion >= 1.0 || this.shouldStop) {
			this.onAnimationEnded();
			return false;
		}
		return true;
	};
	JkWidgetWidgetAnimation.prototype.onAnimationEnded = function() {
		if(this.endListener != null) {
			this.endListener();
		}
	};
	JkWidgetWidgetAnimation.prototype.onAnimationFrame = function() {
		if(this.onProgress((this.getPerformanceNow() - this.startTime))) {
			requestAnimationFrame((function(e) {
				this.onAnimationFrame();
			}.bind(this)));
			;
		}
	};
	JkWidgetWidgetAnimation.prototype.getPerformanceNow = function() {
		if("performance" in window == true && "now" in window.performance == true) {
			return window.performance.now();
		}
		return Date.now();
		;
	};
	JkWidgetWidgetAnimation.prototype.start = function() {
		this.startTime = this.getPerformanceNow();
		requestAnimationFrame((function(e) {
			this.onAnimationFrame();
		}.bind(this)));
		;
	};
	JkWidgetWidgetAnimation.prototype.getDuration = function() {
		return this.duration;
	};
	JkWidgetWidgetAnimation.prototype.setDuration = function(v) {
		this.duration = v;
		return this;
	};
	JkWidgetWidgetAnimation.prototype.getEndListener = function() {
		return this.endListener;
	};
	JkWidgetWidgetAnimation.prototype.setEndListener = function(v) {
		this.endListener = v;
		return this;
	};
	JkWidgetWidgetAnimation.prototype.getShouldStop = function() {
		return this.shouldStop;
	};
	JkWidgetWidgetAnimation.prototype.setShouldStop = function(v) {
		this.shouldStop = v;
		return this;
	};
	JkWidgetWidgetAnimation.prototype.getShouldLoop = function() {
		return this.shouldLoop;
	};
	JkWidgetWidgetAnimation.prototype.setShouldLoop = function(v) {
		this.shouldLoop = v;
		return this;
	};
	JkWidgetWidgetAnimation.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetWidgetAnimation"] === true;
	};
	let JkWidgetWidgetWithLayout = {};
	JkWidgetWidgetWithLayout.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetWidgetWithLayout"] === true;
	};
	let JkWidgetHeightAwareWidget = {};
	JkWidgetHeightAwareWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetHeightAwareWidget"] === true;
	};
	let JkWidgetLabelWidget = function() {
		JkWidgetWidget.call(this);
		this.widgetContext = null;
		this.widgetText = null;
		this.widgetTextColor = null;
		this.widgetFontSize = 0.0;
		this.widgetFontBold = false;
		this.widgetFontFamily = null;
		this.widgetFontResource = null;
		this.widgetTextAlign = 0;
		this.widgetFontUnderline = false;
		this.widgetFontItalic = false;
		this.widgetPaddingLeft = 0;
		this.widgetPaddingTop = 0;
		this.widgetPaddingRight = 0;
		this.widgetPaddingBottom = 0;
		this.widgetMaximumNumberOfLines = 0;
	};
	JkWidgetLabelWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetWidget.prototype);
	JkWidgetLabelWidget.prototype.constructor = JkWidgetLabelWidget;
	JkWidgetLabelWidget.prototype._t = {
		"JkWidgetWidget" : true,
		"JkWidgetLabelWidget" : true
	};
	JkWidgetLabelWidget.prototype._tobj = JkWidgetLabelWidget;
	JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetLabelWidget;
		return v.CTOR_JkWidgetLabelWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetLabelWidget.prototype.CTOR_JkWidgetLabelWidget_JkUiGuiApplicationContext = function(context) {
		if(JkWidgetWidget.prototype.CTOR_JkWidgetWidget.call(this) == null) {
			return null;
		}
		this.widgetMaximumNumberOfLines = 0;
		this.widgetPaddingBottom = 0;
		this.widgetPaddingRight = 0;
		this.widgetPaddingTop = 0;
		this.widgetPaddingLeft = 0;
		this.widgetFontItalic = false;
		this.widgetFontUnderline = false;
		this.widgetTextAlign = 0;
		this.widgetFontResource = null;
		this.widgetFontFamily = null;
		this.widgetFontBold = false;
		this.widgetFontSize = 0.0;
		this.widgetTextColor = null;
		this.widgetText = null;
		this.widgetContext = null;
		this.widgetContext = context;
		this.setWidgetStyle("LabelWidget");
		return this;
	};
	JkWidgetLabelWidget.forText = function(context, text) {
		var v = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetText(text);
		return v;
	};
	JkWidgetLabelWidget.prototype.createElement = function() {
		return JkUiHTMLDOM.createElement("div");
	};
	JkWidgetLabelWidget.prototype.prepareElement = function(v) {
		JkWidgetWidget.prototype.prepareElement.call(this, v);
		JkUiHTMLDOM.setStyle(v, "pointer-events", "inherit");
		JkUiHTMLDOM.setStyle(v, "font-size", "20px");
	};
	JkWidgetLabelWidget.prototype.setWidgetText = function(text) {
		this.widgetText = text;
		if(!(this.widgetText != null)) {
			this.widgetText = "";
		}
		JkUiHTMLDOM.setTextContent(this.element, this.widgetText);
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetLabelWidget.prototype.getWidgetText = function() {
		return this.widgetText;
	};
	JkWidgetLabelWidget.prototype.setWidgetTextAlign = function(align) {
		this.widgetTextAlign = align;
		if(align == JkWidgetLabelWidget.ALIGN_LEFT) {
			JkUiHTMLDOM.setStyle(this.element, "text-align", "left");
		}
		else if(align == JkWidgetLabelWidget.ALIGN_CENTER) {
			JkUiHTMLDOM.setStyle(this.element, "text-align", "center");
		}
		else if(align == JkWidgetLabelWidget.ALIGN_RIGHT) {
			JkUiHTMLDOM.setStyle(this.element, "text-align", "right");
		}
		else if(align == JkWidgetLabelWidget.ALIGN_JUSTIFY) {
			JkUiHTMLDOM.setStyle(this.element, "text-align", "justify");
		}
		else {
			JkUiHTMLDOM.setStyle(this.element, "text-align", "left");
		}
		return this;
	};
	JkWidgetLabelWidget.prototype.getWidgetTextAlign = function() {
		return this.widgetTextAlign;
	};
	JkWidgetLabelWidget.prototype.setWidgetWordWrapping = function(wrap) {
		if(wrap == JkWidgetLabelWidget.NO_WRAP) {
			console.log("[jk.widget.LabelWidget.setWidgetWordWrapping] (LabelWidget.sling:421:4): Not implemented");
		}
		else if(wrap == JkWidgetLabelWidget.WORD_WRAP) {
			console.log("[jk.widget.LabelWidget.setWidgetWordWrapping] (LabelWidget.sling:482:4): Not implemented");
		}
		return this;
	};
	JkWidgetLabelWidget.prototype.setWidgetTextColor = function(color) {
		this.widgetTextColor = color;
		this.updateWidgetFont(false);
		return this;
	};
	JkWidgetLabelWidget.prototype.getWidgetTextColor = function() {
		return this.widgetTextColor;
	};
	JkWidgetLabelWidget.prototype.setWidgetFontSize = function(fontSize) {
		this.widgetFontSize = fontSize;
		this.updateWidgetFont(true);
		return this;
	};
	JkWidgetLabelWidget.prototype.getFontSize = function() {
		return this.widgetFontSize;
	};
	JkWidgetLabelWidget.prototype.setWidgetFontBold = function(bold) {
		this.widgetFontBold = bold;
		this.updateWidgetFont(true);
		return this;
	};
	JkWidgetLabelWidget.prototype.setWidgetFontUnderline = function(underline) {
		this.widgetFontUnderline = underline;
		this.updateWidgetFont(true);
		return this;
	};
	JkWidgetLabelWidget.prototype.setWidgetFontItalic = function(italic) {
		this.widgetFontItalic = italic;
		this.updateWidgetFont(true);
		return this;
	};
	JkWidgetLabelWidget.prototype.setWidgetFontFamily = function(font) {
		this.widgetFontFamily = font;
		this.updateWidgetFont(true);
		return this;
	};
	JkWidgetLabelWidget.prototype.setWidgetFontResource = function(res) {
		this.widgetFontResource = res;
		this.updateWidgetFont(true);
		return this;
	};
	JkWidgetLabelWidget.prototype.setWidgetStyle = function(style) {
		this.widgetFontFamily = this.widgetContext.getStyleString(style, "fontFamily", null);
		if(JkLangString.isEmpty(this.widgetFontFamily)) {
			this.widgetFontFamily = "Arial";
		}
		this.widgetFontResource = this.widgetContext.getStyleString(style, "fontResource", null);
		this.widgetTextColor = this.widgetContext.getStyleColor(style, "textColor", null);
		if(!(this.widgetTextColor != null)) {
			this.widgetTextColor = JkGfxColor.forRGB(0, 0, 0);
		}
		this.widgetFontSize = this.widgetContext.getStylePixels(style, "fontSize", null);
		if(this.widgetFontSize < 1.0) {
			this.widgetFontSize = this.widgetContext.getHeightValue("3mm");
		}
		this.widgetFontBold = JkLangBoolean.asBoolean((this.widgetContext.getStyleString(style, "fontBold", null)), false);
		this.setWidgetPadding1((this.widgetContext.getStylePixels(style, "padding", null)));
		this.updateWidgetFont(true);
		return this;
	};
	JkWidgetLabelWidget.prototype.updateWidgetFont = function(changesLayout) {
		var fs = this.widgetFontSize;
		if(fs < 1.0) {
			fs = 1.0;
		}
		JkUiHTMLDOM.setFontFamily(this.element, this.widgetFontFamily);
		JkUiHTMLDOM.setStyle(this.element, "font-size", (JkLangString.safeString((JkLangString.forDouble(fs))) + "px"));
		if(this.widgetFontBold) {
			JkUiHTMLDOM.setStyle(this.element, "font-weight", "bold");
		}
		if(this.widgetFontItalic) {
			JkUiHTMLDOM.setStyle(this.element, "font-style", "italic");
		}
		if(this.widgetFontUnderline) {
			JkUiHTMLDOM.setStyle(this.element, "text-decoration", "underline");
		}
		JkUiHTMLDOM.setStyle(this.element, "color", (JkUiHTMLDOM.colorToRGBA(this.widgetTextColor)));
		if(changesLayout) {
			JkWidgetWidget.onLayoutChanged(this);
		}
	};
	JkWidgetLabelWidget.prototype.setWidgetPadding1 = function(padding) {
		return this.setWidgetPadding2(padding, padding, padding, padding);
	};
	JkWidgetLabelWidget.prototype.setWidgetPaddingLeft = function(value) {
		return this.setWidgetPadding2(value, this.widgetPaddingTop, this.widgetPaddingRight, this.widgetPaddingBottom);
	};
	JkWidgetLabelWidget.prototype.setWidgetPaddingTop = function(value) {
		return this.setWidgetPadding2(this.widgetPaddingLeft, value, this.widgetPaddingRight, this.widgetPaddingBottom);
	};
	JkWidgetLabelWidget.prototype.setWidgetPaddingRight = function(value) {
		return this.setWidgetPadding2(this.widgetPaddingLeft, this.widgetPaddingTop, value, this.widgetPaddingBottom);
	};
	JkWidgetLabelWidget.prototype.setWidgetPaddingBottom = function(value) {
		return this.setWidgetPadding2(this.widgetPaddingLeft, this.widgetPaddingTop, this.widgetPaddingRight, value);
	};
	JkWidgetLabelWidget.prototype.setWidgetPadding2 = function(l, t, r, b) {
		if(l < 0 || t < 0 || r < 0 || b < 0) {
			return this;
		}
		if(this.widgetPaddingLeft == l && this.widgetPaddingTop == t && this.widgetPaddingRight == r && this.widgetPaddingBottom == b) {
			return this;
		}
		this.widgetPaddingLeft = l;
		this.widgetPaddingTop = t;
		this.widgetPaddingRight = r;
		this.widgetPaddingBottom = b;
		this.updateWidgetPadding();
		return this;
	};
	JkWidgetLabelWidget.prototype.updateWidgetPadding = function() {
		JkUiHTMLDOM.setStyle(this.element, "padding", (JkLangString.safeString((JkLangString.forInteger(this.widgetPaddingTop))) + "px" + " " + JkLangString.safeString((JkLangString.forInteger(this.widgetPaddingRight))) + "px" + " " + JkLangString.safeString((JkLangString.forInteger(this.widgetPaddingBottom))) + "px" + " " + JkLangString.safeString((JkLangString.forInteger(this.widgetPaddingLeft))) + "px"));
		JkUiHTMLDOM.setStyle(this.element, "box-sizing", "border-box");
	};
	JkWidgetLabelWidget.prototype.getWidgetMaximumNumberOfLines = function() {
		return this.widgetMaximumNumberOfLines;
	};
	JkWidgetLabelWidget.prototype.setWidgetMaximumNumberOfLines = function(v) {
		this.widgetMaximumNumberOfLines = v;
		return this;
	};
	JkWidgetLabelWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetLabelWidget"] === true;
	};
	JkWidgetLabelWidget.ALIGN_LEFT = 0;
	JkWidgetLabelWidget.ALIGN_CENTER = 1;
	JkWidgetLabelWidget.ALIGN_RIGHT = 2;
	JkWidgetLabelWidget.ALIGN_JUSTIFY = 3;
	JkWidgetLabelWidget.WORD_WRAP = 0;
	JkWidgetLabelWidget.NO_WRAP = 1;
	let JkWidgetScreenAwareWidget = {};
	JkWidgetScreenAwareWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetScreenAwareWidget"] === true;
	};
	let JkWidgetContainerWidget = function() {
		JkWidgetWidget.call(this);
		this.context = null;
		this.widgetLayoutChanged = true;
		this.lastWidthConstraint = -2;
		this.lastLayoutWidth = -1;
		this.isLayoutScheduled = false;
		this.allowResize = true;
		this.initialized = false;
		this.created = false;
		this.originalParentWidth = null;
		this.originalParentHeight = null;
	};
	JkWidgetContainerWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetWidget.prototype);
	JkWidgetContainerWidget.prototype.constructor = JkWidgetContainerWidget;
	JkWidgetContainerWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetContainerWidget.prototype._tobj = JkWidgetContainerWidget;
	JkWidgetContainerWidget.NEW_JkUiGuiApplicationContext = function(ctx) {
		var v = new JkWidgetContainerWidget;
		return v.CTOR_JkWidgetContainerWidget_JkUiGuiApplicationContext(ctx);
	};
	JkWidgetContainerWidget.prototype.CTOR_JkWidgetContainerWidget_JkUiGuiApplicationContext = function(ctx) {
		if(JkWidgetWidget.prototype.CTOR_JkWidgetWidget.call(this) == null) {
			return null;
		}
		this.originalParentHeight = null;
		this.originalParentWidth = null;
		this.created = false;
		this.initialized = false;
		this.allowResize = true;
		this.isLayoutScheduled = false;
		this.lastLayoutWidth = -1;
		this.lastWidthConstraint = -2;
		this.widgetLayoutChanged = true;
		this.context = null;
		this.context = ctx;
		this.togglePointerEventHandling(false);
		return this;
	};
	JkWidgetContainerWidget.prototype.togglePointerEventHandling = function(active) {
		if(active) {
			JkUiHTMLDOM.setStyle(this.element, "pointer-events", "auto");
		}
		else {
			JkUiHTMLDOM.setStyle(this.element, "pointer-events", "none");
		}
	};
	JkWidgetContainerWidget.prototype.onNativelyResized = function() {
		if(JkWidgetWidget.isRootWidget(this)) {
			JkWidgetWidget.layout(this, (JkWidgetWidget.getWidth(this)), false);
			this.onWidgetHeightChanged((JkWidgetWidget.getHeight(this)));
		}
	};
	JkWidgetContainerWidget.prototype.hasSize = function() {
		if(JkWidgetWidget.getWidth(this) > 0 || JkWidgetWidget.getHeight(this) > 0) {
			return true;
		}
		return false;
	};
	JkWidgetContainerWidget.prototype.createWidget = function() {
	};
	JkWidgetContainerWidget.prototype.forceCreateWidget = function() {
		if(!this.created) {
			this.createWidget();
			this.created = true;
		}
	};
	JkWidgetContainerWidget.prototype.onWidgetAddingToParent = function() {
		this.forceCreateWidget();
		if(this.initialized) {
			return;
		}
		this.setInitialized(true);
		this.initializeWidget();
	};
	JkWidgetContainerWidget.prototype.initializeWidget = function() {
	};
	JkWidgetContainerWidget.prototype.addWidget = function(widget) {
		JkWidgetWidget.addChild(this, widget);
		return this;
	};
	JkWidgetContainerWidget.prototype.onChildWidgetAdded = function(widget) {
		JkWidgetWidget.onLayoutChanged(this);
	};
	JkWidgetContainerWidget.prototype.onChildWidgetsRemoved = function(widgets) {
		JkWidgetWidget.onLayoutChanged(this);
	};
	JkWidgetContainerWidget.prototype.onWidgetAddedToParent = function() {
		if(JkWidgetWidget.isRootWidget(this)) {
			if(!(JkWidgetContainerWidget.resizeHandlers != null)) {
				JkWidgetContainerWidget.resizeHandlers = new Array;
				var executeResizeHandlers = function() {
					if(JkWidgetContainerWidget.resizeHandlers != null) {
						var n = 0;
						var m = JkWidgetContainerWidget.resizeHandlers.length;
						for(n = 0 ; n < m ; n++) {
							var handler = JkWidgetContainerWidget.resizeHandlers[n];
							if(handler != null) {
								handler.onNativelyResized();
							}
						}
					}
				}.bind(this);
				var oresize = window.onresize;
				window.onresize = function(event) {
					if(oresize) {
						oresize();
					}
					executeResizeHandlers();
				};
				;
			}
			JkWidgetContainerWidget.resizeHandlers.push(this);
			var pp = JkUiHTMLDOM.getParentElement(this.element);
			if(pp != null) {
				this.originalParentWidth = JkUiHTMLDOM.getStyle(pp, "width");
				this.originalParentHeight = JkUiHTMLDOM.getStyle(pp, "height");
			}
		}
		JkWidgetWidget.onLayoutChanged(this);
	};
	JkWidgetContainerWidget.prototype.onWidgetRemovedFromParent = function() {
		if(JkWidgetWidget.isRootWidget(this) && JkWidgetContainerWidget.resizeHandlers != null) {
			JkLangVector.removeValue(JkWidgetContainerWidget.resizeHandlers, this);
		}
	};
	JkWidgetContainerWidget.prototype.onWidgetHeightChanged = function(height) {
	};
	JkWidgetContainerWidget.prototype.computeWidgetLayout = function(widthConstraint) {
	};
	JkWidgetContainerWidget.prototype.setWidgetLayoutChanged = function() {
		this.widgetLayoutChanged = true;
	};
	JkWidgetContainerWidget.prototype.hasWidgetLayoutChanged = function() {
		return this.widgetLayoutChanged;
	};
	JkWidgetContainerWidget.prototype.layoutWidget = function(widthConstraint, force) {
		if(force || this.widgetLayoutChanged || widthConstraint != this.lastWidthConstraint) {
			if(force == false && this.widgetLayoutChanged == false && (widthConstraint >= 0 && widthConstraint == this.lastLayoutWidth)) {
				;
			}
			else {
				this.widgetLayoutChanged = false;
				this.computeWidgetLayout(widthConstraint);
				this.lastWidthConstraint = widthConstraint;
				this.lastLayoutWidth = JkWidgetWidget.getWidth(this);
			}
		}
		return true;
	};
	JkWidgetContainerWidget.prototype.scheduleLayout = function() {
		if(this.isLayoutScheduled) {
			return;
		}
		this.isLayoutScheduled = true;
		this.addToLayoutQueue(this);
	};
	JkWidgetContainerWidget.prototype.executeLayout = function() {
		this.isLayoutScheduled = false;
		var ww = JkWidgetWidget.getWidth(this);
		if(ww == 0 && this.allowResize) {
			ww = -1;
		}
		JkWidgetWidget.layout(this, ww, false);
		if(this.allowResize) {
			var pp = JkUiHTMLDOM.getParentElement(this.element);
			if(pp != null) {
				if(JkLangString.isEmpty(this.originalParentWidth)) {
					JkUiHTMLDOM.setStyle(pp, "width", (JkLangString.safeString((JkLangString.forInteger((JkWidgetWidget.getWidth(this))))) + "px"));
				}
				if(JkLangString.isEmpty(this.originalParentHeight)) {
					JkUiHTMLDOM.setStyle(pp, "height", (JkLangString.safeString((JkLangString.forInteger((JkWidgetWidget.getHeight(this))))) + "px"));
				}
			}
		}
	};
	JkWidgetContainerWidget.prototype.processLayoutQueue = function() {
		if(!(JkWidgetContainerWidget.layoutQueue != null)) {
			return;
		}
		var lq = JkWidgetContainerWidget.layoutQueue;
		JkWidgetContainerWidget.layoutQueue = null;
		if(lq != null) {
			var n = 0;
			var m = lq.length;
			for(n = 0 ; n < m ; n++) {
				var widget = lq[n];
				if(widget != null) {
					widget.executeLayout();
				}
			}
		}
	};
	JkWidgetContainerWidget.prototype.addToLayoutQueue = function(widget) {
		if(!(widget != null)) {
			return;
		}
		if(JkWidgetContainerWidget.layoutQueue != null) {
			JkWidgetContainerWidget.layoutQueue.push(widget);
			return;
		}
		JkWidgetContainerWidget.layoutQueue = new Array;
		JkWidgetContainerWidget.layoutQueue.push(widget);
		this.context.startTimer(0, (function() {
			var c = 0;
			while(JkWidgetContainerWidget.layoutQueue != null){
				if(c >= 10) {
					break;
				}
				this.processLayoutQueue();
				c++;
			}
		}.bind(this)));
	};
	JkWidgetContainerWidget.prototype.getAllowResize = function() {
		return this.allowResize;
	};
	JkWidgetContainerWidget.prototype.setAllowResize = function(v) {
		this.allowResize = v;
		return this;
	};
	JkWidgetContainerWidget.prototype.getInitialized = function() {
		return this.initialized;
	};
	JkWidgetContainerWidget.prototype.setInitialized = function(v) {
		this.initialized = v;
		return this;
	};
	JkWidgetContainerWidget.prototype.getCreated = function() {
		return this.created;
	};
	JkWidgetContainerWidget.prototype.setCreated = function(v) {
		this.created = v;
		return this;
	};
	JkWidgetContainerWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetContainerWidget"] === true;
	};
	JkWidgetContainerWidget.resizeHandlers = null;
	JkWidgetContainerWidget.layoutQueue = null;
	let JkWidgetScreenForWidget = function() {
		JkUiScreen.call(this);
		this.captureBrowserBackButton = true;
		this.context = null;
		this.myWidget = null;
		this.keyEvent = null;
	};
	JkWidgetScreenForWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkUiScreen.prototype);
	JkWidgetScreenForWidget.prototype.constructor = JkWidgetScreenForWidget;
	JkWidgetScreenForWidget.prototype._t = {
		"JkUiScreen" : true,
		"JkUiScreenWithContext" : true,
		"JkWidgetScreenForWidget" : true
	};
	JkWidgetScreenForWidget.prototype._tobj = JkWidgetScreenForWidget;
	JkWidgetScreenForWidget.NEW = function() {
		var v = new JkWidgetScreenForWidget;
		return v.CTOR_JkWidgetScreenForWidget();
	};
	JkWidgetScreenForWidget.prototype.CTOR_JkWidgetScreenForWidget = function() {
		this.keyEvent = null;
		this.myWidget = null;
		this.context = null;
		this.captureBrowserBackButton = true;
		if(JkUiScreen.prototype.CTOR_JkUiScreen.call(this) == null) {
			return null;
		}
		return this;
	};
	JkWidgetScreenForWidget.findScreenForWidget = function(widget) {
		return (function(o) {
			if(JkWidgetScreenForWidget.IS_INSTANCE && JkWidgetScreenForWidget.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))((JkWidgetWidget.findScreen(widget)));
	};
	JkWidgetScreenForWidget.prototype.onBackKeyPressEvent = function() {
		if(!(this.keyEvent != null)) {
			this.keyEvent = JkUiKeyEvent.NEW();
		}
		this.keyEvent.clear();
		this.keyEvent.setAction(JkUiKeyEvent.ACTION_DOWN);
		this.keyEvent.setKeyCode(JkUiKeyEvent.KEY_BACK);
		this.deliverKeyEventToWidget(this.keyEvent, (this.getWidget()));
	};
	JkWidgetScreenForWidget.prototype.deliverKeyEventToWidget = function(event, widget) {
		if(!(widget != null)) {
			return;
		}
		var array = JkWidgetWidget.getChildren(widget);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var child = array[n];
				if(child != null) {
					this.deliverKeyEventToWidget(event, child);
					if(event.isConsumed) {
						return;
					}
				}
			}
		}
		var kl = (function(o) {
			if(JkUiKeyListener.IS_INSTANCE && JkUiKeyListener.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))(widget);
		if(kl != null) {
			kl.onKeyEvent(event);
			if(event.isConsumed) {
				return;
			}
		}
	};
	JkWidgetScreenForWidget.prototype.unlockOrientation = function() {
		console.log("[jk.widget.ScreenForWidget.unlockOrientation] (ScreenForWidget.sling:704:3): Not implemented");
	};
	JkWidgetScreenForWidget.prototype.lockToLandscapeOrientation = function() {
		console.log("[jk.widget.ScreenForWidget.lockToLandscapeOrientation] (ScreenForWidget.sling:731:3): Not implemented");
	};
	JkWidgetScreenForWidget.prototype.lockToPortraitOrientation = function() {
		console.log("[jk.widget.ScreenForWidget.lockToPortraitOrientation] (ScreenForWidget.sling:758:3): Not implemented");
	};
	JkWidgetScreenForWidget.prototype.setContext = function(context) {
		this.context = context;
	};
	JkWidgetScreenForWidget.prototype.getContext = function() {
		return this.context;
	};
	JkWidgetScreenForWidget.prototype.createContext = function() {
		var v = null;
		v = JkUiGuiApplicationContextForHTML.NEW();
		return v;
	};
	JkWidgetScreenForWidget.prototype.onPrepareScreen = function() {
	};
	JkWidgetScreenForWidget.prototype.onStartScreen = function() {
		JkWidgetWidget.notifyOnStartScreen(this.myWidget, this);
	};
	JkWidgetScreenForWidget.prototype.onStartScreenWithData = function(data) {
	};
	JkWidgetScreenForWidget.prototype.onStopScreen = function() {
		JkWidgetWidget.notifyOnStopScreen(this.myWidget, this);
	};
	JkWidgetScreenForWidget.prototype.onDestroyScreen = function() {
	};
	JkWidgetScreenForWidget.prototype.initialize = function() {
		if(this.context == null) {
			this.context = this.createContext();
		}
		var body = JkUiHTMLDOM.getDocumentBody();
		JkUiHTMLDOM.setStyle(body, "overflow", "hidden");
		if(this.captureBrowserBackButton) {
			var myObject = this;
			history.pushState({}, "", "#app");
			window.onpopstate = function(event) {
				myObject.onBackKeyPressEvent();
				history.pushState({}, "", "#app");
			};
			;
		}
	};
	JkWidgetScreenForWidget.prototype.cleanup = function() {
		window.onresize = null;
		;
	};
	JkWidgetScreenForWidget.prototype.getWidget = function() {
		return this.myWidget;
	};
	JkWidgetScreenForWidget.prototype.setWidget = function(widget) {
		if(!(!(this.myWidget != null))) {
			console.log("[jk.widget.ScreenForWidget.setWidget] (ScreenForWidget.sling:850:3): Multiple calls to setWidget()");
			return;
		}
		if(!(widget != null)) {
			return;
		}
		this.myWidget = widget;
		widget.setAllowResize(false);
		widget.element.screenObject = this;
		;
		JkWidgetWidget.addToDomElement(widget, (JkUiHTMLDOM.getDocumentBody()));
		JkWidgetWidget.notifyOnAddedToScreen(widget, this);
	};
	JkWidgetScreenForWidget.prototype.getCaptureBrowserBackButton = function() {
		return this.captureBrowserBackButton;
	};
	JkWidgetScreenForWidget.prototype.setCaptureBrowserBackButton = function(v) {
		this.captureBrowserBackButton = v;
		return this;
	};
	JkWidgetScreenForWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetScreenForWidget"] === true;
	};
	let JkWidgetLayerWidget = function() {
		JkWidgetContainerWidget.call(this);
		this.widgetMouseOver = null;
		this.widgetMouseOut = null;
		this.widgetMarginLeft = 0;
		this.widgetMarginRight = 0;
		this.widgetMarginTop = 0;
		this.widgetMarginBottom = 0;
		this.widgetWidthRequest = 0;
		this.widgetHeightRequest = 0;
		this.widgetMinimumHeightRequest = 0;
		this.widgetMaximumWidthRequest = 0;
	};
	JkWidgetLayerWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetContainerWidget.prototype);
	JkWidgetLayerWidget.prototype.constructor = JkWidgetLayerWidget;
	JkWidgetLayerWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetLayerWidget.prototype._tobj = JkWidgetLayerWidget;
	JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetLayerWidget;
		return v.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext = function(context) {
		this.widgetMaximumWidthRequest = 0;
		this.widgetMinimumHeightRequest = 0;
		this.widgetHeightRequest = 0;
		this.widgetWidthRequest = 0;
		this.widgetMarginBottom = 0;
		this.widgetMarginTop = 0;
		this.widgetMarginRight = 0;
		this.widgetMarginLeft = 0;
		this.widgetMouseOut = null;
		this.widgetMouseOver = null;
		if(JkWidgetContainerWidget.prototype.CTOR_JkWidgetContainerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetLayerWidget.prototype.prepareElement = function(element) {
		JkWidgetContainerWidget.prototype.prepareElement.call(this, element);
		JkUiHTMLDOM.addEventListener(element, "mouseover", (function() {
			this.onMouseOver();
		}.bind(this)));
		JkUiHTMLDOM.addEventListener(element, "mouseout", (function() {
			this.onMouseOut();
		}.bind(this)));
	};
	JkWidgetLayerWidget.prototype.onMouseOver = function() {
		if(this.widgetMouseOver != null) {
			this.widgetMouseOver();
		}
	};
	JkWidgetLayerWidget.prototype.onMouseOut = function() {
		if(this.widgetMouseOut != null) {
			this.widgetMouseOut();
		}
	};
	JkWidgetLayerWidget.findTopMostLayerWidget = function(widget) {
		var v = null;
		var pp = widget;
		while(pp != null){
			if(JkWidgetLayerWidget.IS_INSTANCE && JkWidgetLayerWidget.IS_INSTANCE(pp)) {
				v = pp;
			}
			pp = JkWidgetWidget.getParent(pp);
		}
		return v;
	};
	JkWidgetLayerWidget.forContext = function(context) {
		return JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(context);
	};
	JkWidgetLayerWidget.forMargin = function(context, margin) {
		var v = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetMargin(margin);
		return v;
	};
	JkWidgetLayerWidget.forWidget = function(context, widget, margin) {
		var v = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetMargin(margin);
		v.addWidget(widget);
		return v;
	};
	JkWidgetLayerWidget.forWidgetAndWidth = function(context, widget, width) {
		var v = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(context);
		v.addWidget(widget);
		v.setWidgetWidthRequest(width);
		return v;
	};
	JkWidgetLayerWidget.forWidgets = function(context, widgets, margin) {
		var v = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetMargin(margin);
		if(widgets != null) {
			var n = 0;
			var m = widgets.length;
			for(n = 0 ; n < m ; n++) {
				var widget = widgets[n];
				if(widget != null) {
					v.addWidget(widget);
				}
			}
		}
		return v;
	};
	JkWidgetLayerWidget.prototype.setWidgetMaximumWidthRequest = function(width) {
		this.widgetMaximumWidthRequest = width;
		if(JkWidgetWidget.getWidth(this) > width) {
			JkWidgetWidget.onLayoutChanged(this);
		}
		return this;
	};
	JkWidgetLayerWidget.prototype.getWidgetMaximumWidthRequest = function() {
		return this.widgetMaximumWidthRequest;
	};
	JkWidgetLayerWidget.prototype.setWidgetWidthRequest = function(request) {
		this.widgetWidthRequest = request;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetLayerWidget.prototype.getWidgetWidthRequest = function() {
		return this.widgetWidthRequest;
	};
	JkWidgetLayerWidget.prototype.setWidgetHeightRequest = function(request) {
		this.widgetHeightRequest = request;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetLayerWidget.prototype.getWidgetHeightRequest = function() {
		return this.widgetHeightRequest;
	};
	JkWidgetLayerWidget.prototype.setWidgetMinimumHeightRequest = function(request) {
		this.widgetMinimumHeightRequest = request;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetLayerWidget.prototype.getWidgetMinimumHeightRequest = function() {
		return this.widgetMinimumHeightRequest;
	};
	JkWidgetLayerWidget.prototype.setWidgetMargin = function(margin) {
		this.widgetMarginLeft = margin;
		this.widgetMarginRight = margin;
		this.widgetMarginTop = margin;
		this.widgetMarginBottom = margin;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetLayerWidget.prototype.getWidgetMarginLeft = function() {
		return this.widgetMarginLeft;
	};
	JkWidgetLayerWidget.prototype.setWidgetMarginLeft = function(value) {
		this.widgetMarginLeft = value;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetLayerWidget.prototype.getWidgetMarginRight = function() {
		return this.widgetMarginRight;
	};
	JkWidgetLayerWidget.prototype.setWidgetMarginRight = function(value) {
		this.widgetMarginRight = value;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetLayerWidget.prototype.getWidgetMarginTop = function() {
		return this.widgetMarginTop;
	};
	JkWidgetLayerWidget.prototype.setWidgetMarginTop = function(value) {
		this.widgetMarginTop = value;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetLayerWidget.prototype.getWidgetMarginBottom = function() {
		return this.widgetMarginBottom;
	};
	JkWidgetLayerWidget.prototype.setWidgetMarginBottom = function(value) {
		this.widgetMarginBottom = value;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetLayerWidget.prototype.onWidgetHeightChanged = function(height) {
		JkWidgetContainerWidget.prototype.onWidgetHeightChanged.call(this, height);
		var mh = height - this.widgetMarginTop - this.widgetMarginBottom;
		var array = JkWidgetWidget.getChildren(this);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var child = array[n];
				if(child != null) {
					JkWidgetWidget.resizeHeight(child, mh);
				}
			}
		}
	};
	JkWidgetLayerWidget.prototype.computeWidgetLayout = function(widthConstraint) {
		var wc = widthConstraint;
		if(wc < 0 && this.widgetWidthRequest > 0) {
			wc = this.widgetWidthRequest;
		}
		if(wc >= 0) {
			wc = wc - this.widgetMarginLeft - this.widgetMarginRight;
			if(wc < 0) {
				wc = 0;
			}
		}
		var mw = 0;
		var mh = 0;
		var array = JkWidgetWidget.getChildren(this);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var child = array[n];
				if(child != null) {
					JkWidgetWidget.layout(child, wc, false);
					JkWidgetWidget.move(child, this.widgetMarginLeft, this.widgetMarginTop);
					var cw = JkWidgetWidget.getWidth(child);
					if(wc < 0 && this.widgetMaximumWidthRequest > 0 && cw + this.widgetMarginLeft + this.widgetMarginRight > this.widgetMaximumWidthRequest) {
						JkWidgetWidget.layout(child, (this.widgetMaximumWidthRequest - this.widgetMarginLeft - this.widgetMarginRight), false);
						cw = JkWidgetWidget.getWidth(child);
					}
					var ch = JkWidgetWidget.getHeight(child);
					if(cw > mw) {
						mw = cw;
					}
					if(ch > mh) {
						mh = ch;
					}
				}
			}
		}
		var fw = widthConstraint;
		if(this.widgetWidthRequest > 0 && mw <= 0) {
			fw = this.widgetWidthRequest;
		}
		if(fw < 0) {
			fw = mw + this.widgetMarginLeft + this.widgetMarginRight;
		}
		var fh = mh + this.widgetMarginTop + this.widgetMarginBottom;
		if(this.widgetHeightRequest > 0) {
			fh = this.widgetHeightRequest;
		}
		if(this.widgetMinimumHeightRequest > 0 && fh < this.widgetMinimumHeightRequest) {
			fh = this.widgetMinimumHeightRequest;
		}
		JkWidgetWidget.setLayoutSize(this, fw, fh);
		mw = JkWidgetWidget.getWidth(this) - this.widgetMarginLeft - this.widgetMarginRight;
		mh = JkWidgetWidget.getHeight(this) - this.widgetMarginTop - this.widgetMarginBottom;
		var array2 = JkWidgetWidget.getChildren(this);
		if(array2 != null) {
			var n2 = 0;
			var m2 = array2.length;
			for(n2 = 0 ; n2 < m2 ; n2++) {
				var child1 = array2[n2];
				if(child1 != null) {
					if(wc < 0) {
						JkWidgetWidget.layout(child1, mw, false);
					}
					JkWidgetWidget.resizeHeight(child1, mh);
				}
			}
		}
	};
	JkWidgetLayerWidget.prototype.removeAllChildren = function() {
		JkWidgetWidget.removeChildrenOf(this);
	};
	JkWidgetLayerWidget.prototype.getChildWidget = function(index) {
		var children = JkWidgetWidget.getChildren(this);
		if(!(children != null)) {
			return null;
		}
		return JkLangVector.get(children, index);
	};
	JkWidgetLayerWidget.prototype.getWidgetMouseOver = function() {
		return this.widgetMouseOver;
	};
	JkWidgetLayerWidget.prototype.setWidgetMouseOver = function(v) {
		this.widgetMouseOver = v;
		return this;
	};
	JkWidgetLayerWidget.prototype.getWidgetMouseOut = function() {
		return this.widgetMouseOut;
	};
	JkWidgetLayerWidget.prototype.setWidgetMouseOut = function(v) {
		this.widgetMouseOut = v;
		return this;
	};
	JkWidgetLayerWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetLayerWidget"] === true;
	};
	let JkWidgetVerticalScrollerWidget = function() {
		JkWidgetWidget.call(this);
		this.currentScrollY = 0;
		this.lastScrollY = 0;
		this.nearEnd = false;
		this.onScrolledHandler = null;
		this.onEndScrollHandler = null;
		this.layoutHeight = -1;
		this.heightChanged = false;
	};
	JkWidgetVerticalScrollerWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetWidget.prototype);
	JkWidgetVerticalScrollerWidget.prototype.constructor = JkWidgetVerticalScrollerWidget;
	JkWidgetVerticalScrollerWidget.prototype._t = {
		"JkWidgetVerticalScrollerWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetVerticalScrollerWidget.prototype._tobj = JkWidgetVerticalScrollerWidget;
	JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetVerticalScrollerWidget;
		return v.CTOR_JkWidgetVerticalScrollerWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetVerticalScrollerWidget.prototype.CTOR_JkWidgetVerticalScrollerWidget_JkUiGuiApplicationContext = function(context) {
		if(JkWidgetWidget.prototype.CTOR_JkWidgetWidget.call(this) == null) {
			return null;
		}
		this.heightChanged = false;
		this.layoutHeight = -1;
		this.onEndScrollHandler = null;
		this.onScrolledHandler = null;
		this.nearEnd = false;
		this.lastScrollY = 0;
		this.currentScrollY = 0;
		return this;
	};
	JkWidgetVerticalScrollerWidget.forWidget = function(context, widget) {
		var v = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(context);
		v.addWidget(widget);
		return v;
	};
	JkWidgetVerticalScrollerWidget.prototype.createElement = function() {
		var v = JkUiHTMLDOM.createElement("div");
		JkUiHTMLDOM.addToClassList(v, "VerticalScrollerWidget");
		return v;
	};
	JkWidgetVerticalScrollerWidget.prototype.prepareElement = function(element) {
		JkWidgetWidget.prototype.prepareElement.call(this, element);
		if(JkUiHTMLDOM.isFirefox() == false) {
			JkUiHTMLDOM.setStyle(element, "overflow-y", "scroll");
			if(JkUiHTMLDOM.isSafari()) {
				JkUiHTMLDOM.setStyle(element, "-webkit-overflow-scrolling", "touch");
			}
		}
		else {
			JkUiHTMLDOM.removeStyle(element, "overflow");
			JkUiHTMLDOM.setStyle(element, "overflow-x", "hidden");
		}
		JkUiHTMLDOM.addEventListener(element, "scroll", (function() {
			this.onScroll(element.scrollTop);
		}.bind(this)));
	};
	JkWidgetVerticalScrollerWidget.createNoScrollBarStyle = function() {
		if(JkWidgetVerticalScrollerWidget.noScrollBarStyleCreated) {
			return;
		}
		var styleElement = JkUiHTMLDOM.createElement("style");
		var className = "." + "VerticalScrollerWidget" + "WithNoScrollBar";
		var style = null;
		if(JkUiHTMLDOM.isWebKit()) {
			style = JkLangString.safeString(className) + "::-webkit-scrollbar { display: none; }";
		}
		else if(JkUiHTMLDOM.isFirefox()) {
			if(!JkUiHTMLDOM.isMobile()) {
				style = JkLangString.safeString(className) + " { overflow-y: hidden; }\n" + JkLangString.safeString(className) + ":hover { overflow-y: auto; }";
			}
		}
		if(style != null) {
			JkUiHTMLDOM.setTextContent(styleElement, style);
			JkUiHTMLDOM.appendChild((JkUiHTMLDOM.getDocumentHead()), styleElement);
		}
		JkWidgetVerticalScrollerWidget.noScrollBarStyleCreated = true;
	};
	JkWidgetVerticalScrollerWidget.prototype.isNearEnd = function() {
		return this.nearEnd;
	};
	JkWidgetVerticalScrollerWidget.prototype.onScroll = function(scrollY) {
		this.currentScrollY = scrollY;
		var ch = JkWidgetWidget.getHeight((JkLangVector.get((JkWidgetWidget.getChildren(this)), 0)));
		if(ch > 0) {
			this.nearEnd = ch - this.currentScrollY < JkWidgetWidget.getHeight(this) * 2 ? true : false;
		}
		if(this.onEndScrollHandler != null && ch - (scrollY + JkWidgetWidget.getHeight(this)) == 0) {
			this.onEndScrollHandler();
		}
		if(this.onScrolledHandler != null && this.lastScrollY != this.currentScrollY) {
			this.onScrolledHandler((this.lastScrollY < this.currentScrollY ? 0 : 1));
			this.lastScrollY = this.currentScrollY;
		}
	};
	JkWidgetVerticalScrollerWidget.prototype.setWidgetScrollBarDisabled = function(value) {
		if(value) {
			JkWidgetVerticalScrollerWidget.createNoScrollBarStyle();
			JkUiHTMLDOM.setStyle(this.element, "-ms-overflow-style", "none");
			JkUiHTMLDOM.addToClassList(this.element, ("VerticalScrollerWidget" + "WithNoScrollBar"));
		}
		else {
			JkUiHTMLDOM.setStyle(this.element, "-ms-overflow-style", "scrollbar");
			JkUiHTMLDOM.removeFromClassList(this.element, ("VerticalScrollerWidget" + "WithNoScrollBar"));
		}
	};
	JkWidgetVerticalScrollerWidget.prototype.onWidgetHeightChanged = function(height) {
		var array = JkWidgetWidget.getChildren(this);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var child = array[n];
				if(child != null) {
					if(height > this.layoutHeight) {
						JkWidgetWidget.resizeHeight(child, height);
					}
					else {
						JkWidgetWidget.resizeHeight(child, this.layoutHeight);
					}
				}
			}
		}
		this.heightChanged = true;
	};
	JkWidgetVerticalScrollerWidget.prototype.setWidgetLayoutChanged = function() {
	};
	JkWidgetVerticalScrollerWidget.prototype.hasWidgetLayoutChanged = function() {
		return false;
	};
	JkWidgetVerticalScrollerWidget.prototype.layoutWidget = function(widthConstraint, force) {
		var mw = 0;
		var mh = 0;
		var array = JkWidgetWidget.getChildren(this);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var child = array[n];
				if(child != null) {
					JkWidgetWidget.move(child, 0, 0);
					JkWidgetWidget.layout(child, widthConstraint, this.heightChanged);
					var cw = JkWidgetWidget.getWidth(child);
					var ch = JkWidgetWidget.getHeight(child);
					if(cw > mw) {
						mw = cw;
					}
					if(ch > mh) {
						mh = ch;
					}
				}
			}
		}
		var mh2 = mh;
		var eh = JkWidgetWidget.getHeight(this);
		if(eh > 0 && mh2 > eh) {
			mh2 = eh;
		}
		this.heightChanged = false;
		this.layoutHeight = mh;
		JkWidgetWidget.setLayoutSize(this, mw, mh2);
		var array2 = JkWidgetWidget.getChildren(this);
		if(array2 != null) {
			var n2 = 0;
			var m2 = array2.length;
			for(n2 = 0 ; n2 < m2 ; n2++) {
				var child1 = array2[n2];
				if(child1 != null) {
					JkWidgetWidget.resizeHeight(child1, mh);
				}
			}
		}
		return true;
	};
	JkWidgetVerticalScrollerWidget.prototype.addWidget = function(widget) {
		JkWidgetWidget.addChild(this, widget);
		return this;
	};
	JkWidgetVerticalScrollerWidget.prototype.scrollToBottom = function(animate) {
		var child = JkLangVector.get((JkWidgetWidget.getChildren(this)), 0);
		if(!(child != null)) {
			return;
		}
		var y = JkWidgetWidget.getHeight(child) - JkWidgetWidget.getHeight(this);
		if(!(y > 0)) {
			return;
		}
		var x = JkWidgetWidget.getX(child);
		this.element.scrollTop = this.element.scrollHeight;
		;
	};
	JkWidgetVerticalScrollerWidget.prototype.getOnScrolledHandler = function() {
		return this.onScrolledHandler;
	};
	JkWidgetVerticalScrollerWidget.prototype.setOnScrolledHandler = function(v) {
		this.onScrolledHandler = v;
		return this;
	};
	JkWidgetVerticalScrollerWidget.prototype.getOnEndScrollHandler = function() {
		return this.onEndScrollHandler;
	};
	JkWidgetVerticalScrollerWidget.prototype.setOnEndScrollHandler = function(v) {
		this.onEndScrollHandler = v;
		return this;
	};
	JkWidgetVerticalScrollerWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetVerticalScrollerWidget"] === true;
	};
	JkWidgetVerticalScrollerWidget.noScrollBarStyleCreated = false;
	let JkWidgetSwitcherWidget = function() {
		JkWidgetLayerWidget.call(this);
	};
	JkWidgetSwitcherWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetSwitcherWidget.prototype.constructor = JkWidgetSwitcherWidget;
	JkWidgetSwitcherWidget.prototype._t = {
		"JkWidgetSwitcherWidget" : true,
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetSwitcherWidget.prototype._tobj = JkWidgetSwitcherWidget;
	JkWidgetSwitcherWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetSwitcherWidget;
		return v.CTOR_JkWidgetSwitcherWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetSwitcherWidget.prototype.CTOR_JkWidgetSwitcherWidget_JkUiGuiApplicationContext = function(context) {
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetSwitcherWidget.prototype.replaceWith = function(widget) {
		this.removeAllChildren();
		if(widget != null) {
			JkWidgetLayerWidget.prototype.addWidget.call(this, widget);
			if(widget != null && (JkWidgetDisplayAwareWidget.IS_INSTANCE && JkWidgetDisplayAwareWidget.IS_INSTANCE(widget))) {
				widget.onWidgetDisplayed();
			}
		}
	};
	JkWidgetSwitcherWidget.prototype.addWidget = function(widget) {
		JkWidgetLayerWidget.prototype.addWidget.call(this, widget);
		JkWidgetWidget.setVisible(widget, false);
		return this;
	};
	JkWidgetSwitcherWidget.prototype.showWidget = function(widget) {
		var array = JkWidgetWidget.getChildren(this);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var ww = array[n];
				if(ww != null) {
					if(ww != widget) {
						JkWidgetWidget.setVisible(ww, false);
					}
				}
			}
		}
		if(widget != null) {
			JkWidgetWidget.setVisible(widget, true);
			if(JkWidgetDisplayAwareWidget.IS_INSTANCE && JkWidgetDisplayAwareWidget.IS_INSTANCE(widget)) {
				widget.onWidgetDisplayed();
			}
		}
	};
	JkWidgetSwitcherWidget.prototype.showWidgetWithIndex = function(index) {
		this.showWidget((JkLangVector.get((JkWidgetWidget.getChildren(this)), index)));
	};
	JkWidgetSwitcherWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetSwitcherWidget"] === true;
	};
	let JkWidgetTitledWidget = {};
	JkWidgetTitledWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetTitledWidget"] === true;
	};
	let JkWidgetMenuEntry = function() {
		this.title = null;
		this.handler = null;
	};
	JkWidgetMenuEntry.prototype._t = { "JkWidgetMenuEntry" : true };
	JkWidgetMenuEntry.prototype._tobj = JkWidgetMenuEntry;
	JkWidgetMenuEntry.NEW = function() {
		var v = new JkWidgetMenuEntry;
		return v.CTOR_JkWidgetMenuEntry();
	};
	JkWidgetMenuEntry.prototype.CTOR_JkWidgetMenuEntry = function() {
		this.handler = null;
		this.title = null;
		return this;
	};
	JkWidgetMenuEntry.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetMenuEntry"] === true;
	};
	let JkWidgetMenu = function() {
		this.entries = null;
	};
	JkWidgetMenu.prototype._t = { "JkWidgetMenu" : true };
	JkWidgetMenu.prototype._tobj = JkWidgetMenu;
	JkWidgetMenu.NEW = function() {
		var v = new JkWidgetMenu;
		return v.CTOR_JkWidgetMenu();
	};
	JkWidgetMenu.prototype.CTOR_JkWidgetMenu = function() {
		this.entries = null;
		return this;
	};
	JkWidgetMenu.prototype.addEntry1 = function(entry) {
		if(!(entry != null)) {
			return;
		}
		if(!(this.entries != null)) {
			this.entries = new Array;
		}
		this.entries.push(entry);
	};
	JkWidgetMenu.prototype.addEntry2 = function(title, handler) {
		var e = JkWidgetMenuEntry.NEW();
		e.title = title;
		e.handler = handler;
		this.addEntry1(e);
	};
	JkWidgetMenu.prototype.getEntries = function() {
		return this.entries;
	};
	JkWidgetMenu.prototype.setEntries = function(v) {
		this.entries = v;
		return this;
	};
	JkWidgetMenu.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetMenu"] === true;
	};
	let JkWidgetLayerWithBackgroundColorWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.widgetColor = null;
		this.widgetOutlineColor = JkGfxColor.black();
		this.widgetOutlineWidth = 0;
		this.widgetBorderStyle = 0;
		this.widgetTopLeftRadius = 0.0;
		this.widgetTopRightRadius = 0.0;
		this.widgetBottomRightRadius = 0.0;
		this.widgetBottomLeftRadius = 0.0;
		this.widgetBorderLeftWidth = -1;
		this.widgetBorderRightWidth = -1;
		this.widgetBorderTopWidth = -1;
		this.widgetBorderBottomWidth = -1;
		this.widgetBorderLeftColor = JkGfxColor.black();
		this.widgetBorderRightColor = JkGfxColor.black();
		this.widgetBorderTopColor = JkGfxColor.black();
		this.widgetBorderBottomColor = JkGfxColor.black();
		this.widgetBorderLeftStyle = 0;
		this.widgetBorderRightStyle = 0;
		this.widgetBorderTopStyle = 0;
		this.widgetBorderBottomStyle = 0;
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetLayerWithBackgroundColorWidget.prototype.constructor = JkWidgetLayerWithBackgroundColorWidget;
	JkWidgetLayerWithBackgroundColorWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetLayerWithBackgroundColorWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype._tobj = JkWidgetLayerWithBackgroundColorWidget;
	JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext = function(ctx) {
		var v = new JkWidgetLayerWithBackgroundColorWidget;
		return v.CTOR_JkWidgetLayerWithBackgroundColorWidget_JkUiGuiApplicationContext(ctx);
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.CTOR_JkWidgetLayerWithBackgroundColorWidget_JkUiGuiApplicationContext = function(ctx) {
		this.widgetBorderBottomStyle = 0;
		this.widgetBorderTopStyle = 0;
		this.widgetBorderRightStyle = 0;
		this.widgetBorderLeftStyle = 0;
		this.widgetBorderBottomColor = JkGfxColor.black();
		this.widgetBorderTopColor = JkGfxColor.black();
		this.widgetBorderRightColor = JkGfxColor.black();
		this.widgetBorderLeftColor = JkGfxColor.black();
		this.widgetBorderBottomWidth = -1;
		this.widgetBorderTopWidth = -1;
		this.widgetBorderRightWidth = -1;
		this.widgetBorderLeftWidth = -1;
		this.widgetBottomLeftRadius = 0.0;
		this.widgetBottomRightRadius = 0.0;
		this.widgetTopRightRadius = 0.0;
		this.widgetTopLeftRadius = 0.0;
		this.widgetBorderStyle = 0;
		this.widgetOutlineWidth = 0;
		this.widgetOutlineColor = JkGfxColor.black();
		this.widgetColor = null;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, ctx) == null) {
			return null;
		}
		return this;
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetColor = function(color) {
		this.widgetColor = color;
		if(this.widgetColor != null) {
			JkUiHTMLDOM.setStyle(this.element, "background-color", (JkUiHTMLDOM.colorToRGBA(this.widgetColor)));
		}
		else {
			JkUiHTMLDOM.removeStyle(this.element, "background-color");
		}
		return this;
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.getWidgetColor = function() {
		return this.widgetColor;
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetOutlineColor = function(color) {
		this.widgetOutlineColor = color;
		this.updateWidgetBorder((-1), this.widgetOutlineWidth, this.widgetOutlineColor, this.widgetBorderStyle);
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.getWidgetOutlineColor = function() {
		return this.widgetOutlineColor;
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetOutlineWidth = function(width) {
		this.widgetOutlineWidth = width;
		this.updateWidgetBorder((-1), this.widgetOutlineWidth, this.widgetOutlineColor, this.widgetBorderStyle);
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.getWidgetOutlineWidth = function() {
		return this.widgetOutlineWidth;
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetBorderLeftWidth = function(sz) {
		this.widgetBorderLeftWidth = sz;
		this.updateWidgetBorder(JkWidgetLayerWithBackgroundColorWidget.LEFT_SIDE, this.widgetBorderLeftWidth, this.widgetBorderLeftColor, this.widgetBorderLeftStyle);
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetBorderRightWidth = function(sz) {
		this.widgetBorderRightWidth = sz;
		this.updateWidgetBorder(JkWidgetLayerWithBackgroundColorWidget.RIGHT_SIDE, this.widgetBorderRightWidth, this.widgetBorderRightColor, this.widgetBorderRightStyle);
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetBorderTopWidth = function(sz) {
		this.widgetBorderTopWidth = sz;
		this.updateWidgetBorder(JkWidgetLayerWithBackgroundColorWidget.TOP_SIDE, this.widgetBorderTopWidth, this.widgetBorderTopColor, this.widgetBorderTopStyle);
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetBorderBottomWidth = function(sz) {
		this.widgetBorderBottomWidth = sz;
		this.updateWidgetBorder(JkWidgetLayerWithBackgroundColorWidget.BOTTOM_SIDE, this.widgetBorderBottomWidth, this.widgetBorderBottomColor, this.widgetBorderBottomStyle);
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetBorderBottomColor = function(color) {
		this.widgetBorderBottomColor = color;
		this.updateWidgetBorder(JkWidgetLayerWithBackgroundColorWidget.BOTTOM_SIDE, this.widgetBorderBottomWidth, this.widgetBorderBottomColor, this.widgetBorderBottomStyle);
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetBorderTopColor = function(color) {
		this.widgetBorderTopColor = color;
		this.updateWidgetBorder(JkWidgetLayerWithBackgroundColorWidget.TOP_SIDE, this.widgetBorderTopWidth, this.widgetBorderTopColor, this.widgetBorderTopStyle);
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetBorderRightColor = function(color) {
		this.widgetBorderRightColor = color;
		this.updateWidgetBorder(JkWidgetLayerWithBackgroundColorWidget.RIGHT_SIDE, this.widgetBorderRightWidth, this.widgetBorderRightColor, this.widgetBorderRightStyle);
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetBorderLeftColor = function(color) {
		this.widgetBorderLeftColor = color;
		this.updateWidgetBorder(JkWidgetLayerWithBackgroundColorWidget.LEFT_SIDE, this.widgetBorderLeftWidth, this.widgetBorderLeftColor, this.widgetBorderLeftStyle);
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetBorderStyle = function(style) {
		this.widgetBorderStyle = style;
		this.updateWidgetBorder((-1), this.widgetOutlineWidth, this.widgetOutlineColor, this.widgetBorderStyle);
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetBorderLeftStyle = function(style) {
		this.widgetBorderLeftStyle = style;
		this.updateWidgetBorder(JkWidgetLayerWithBackgroundColorWidget.LEFT_SIDE, this.widgetBorderLeftWidth, this.widgetBorderLeftColor, this.widgetBorderLeftStyle);
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetBorderRightStyle = function(style) {
		this.widgetBorderRightStyle = style;
		this.updateWidgetBorder(JkWidgetLayerWithBackgroundColorWidget.RIGHT_SIDE, this.widgetBorderRightWidth, this.widgetBorderRightColor, this.widgetBorderRightStyle);
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetBorderTopStyle = function(style) {
		this.widgetBorderTopStyle = style;
		this.updateWidgetBorder(JkWidgetLayerWithBackgroundColorWidget.TOP_SIDE, this.widgetBorderTopWidth, this.widgetBorderTopColor, this.widgetBorderTopStyle);
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetBorderBottomStyle = function(style) {
		this.widgetBorderBottomStyle = style;
		this.updateWidgetBorder(JkWidgetLayerWithBackgroundColorWidget.BOTTOM_SIDE, this.widgetBorderBottomWidth, this.widgetBorderBottomColor, this.widgetBorderBottomStyle);
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.updateWidgetBorder = function(borderSide, borderWidth, borderColor, borderStyle) {
		var borderSideString = "border";
		if(borderSide == JkWidgetLayerWithBackgroundColorWidget.TOP_SIDE) {
			borderSideString = "border-top";
		}
		if(borderSide == JkWidgetLayerWithBackgroundColorWidget.LEFT_SIDE) {
			borderSideString = "border-left";
		}
		if(borderSide == JkWidgetLayerWithBackgroundColorWidget.BOTTOM_SIDE) {
			borderSideString = "border-bottom";
		}
		if(borderSide == JkWidgetLayerWithBackgroundColorWidget.RIGHT_SIDE) {
			borderSideString = "border-right";
		}
		var borderStyleString = "solid";
		if(borderStyle == JkWidgetCanvasWidget.BORDER_STYLE_DASHED) {
			borderStyleString = "dashed";
		}
		if(borderStyle == JkWidgetCanvasWidget.BORDER_STYLE_DOTTED) {
			borderStyleString = "dotted";
		}
		if(borderStyle == JkWidgetCanvasWidget.BORDER_STYLE_NONE) {
			borderStyleString = "none";
		}
		if(borderWidth < 0) {
			JkUiHTMLDOM.removeStyle(this.element, borderSideString);
			JkUiHTMLDOM.removeStyle(this.element, (JkLangString.safeString(borderSideString) + "-color"));
			JkUiHTMLDOM.removeStyle(this.element, (JkLangString.safeString(borderSideString) + "-style"));
			JkUiHTMLDOM.removeStyle(this.element, "box-sizing");
		}
		else {
			JkUiHTMLDOM.setStyle(this.element, borderSideString, (JkLangString.safeString((JkLangString.forInteger(borderWidth))) + "px"));
			JkUiHTMLDOM.setStyle(this.element, (JkLangString.safeString(borderSideString) + "-style"), borderStyleString);
			JkUiHTMLDOM.setStyle(this.element, (JkLangString.safeString(borderSideString) + "-color"), (borderColor.toRgbString()));
			JkUiHTMLDOM.setStyle(this.element, "box-sizing", "border-box");
		}
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetRoundingRadiusTopLeft = function(radius) {
		this.widgetTopLeftRadius = radius;
		this.updateCanvasRoundingRadius();
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetRoundingRadiusTopRight = function(radius) {
		this.widgetTopRightRadius = radius;
		this.updateCanvasRoundingRadius();
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetRoundingRadiusBottomLeft = function(radius) {
		this.widgetBottomLeftRadius = radius;
		this.updateCanvasRoundingRadius();
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetRoundingRadiusBottomRight = function(radius) {
		this.widgetBottomRightRadius = radius;
		this.updateCanvasRoundingRadius();
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetRoundingRadius1 = function(radius) {
		this.setWidgetRoundingRadius3(radius, radius, radius, radius);
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetRoundingRadius2 = function(lradius, rradius) {
		this.setWidgetRoundingRadius3(lradius, rradius, rradius, lradius);
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.setWidgetRoundingRadius3 = function(tlradius, trradius, brradius, blradius) {
		this.widgetTopLeftRadius = tlradius;
		this.widgetTopRightRadius = trradius;
		this.widgetBottomRightRadius = brradius;
		this.widgetBottomLeftRadius = blradius;
		this.updateCanvasRoundingRadius();
	};
	JkWidgetLayerWithBackgroundColorWidget.prototype.updateCanvasRoundingRadius = function() {
		var isRounded = true;
		if(this.widgetTopLeftRadius <= 0.0 && this.widgetTopRightRadius <= 0.0 && this.widgetBottomRightRadius <= 0.0 && this.widgetBottomLeftRadius <= 0.0) {
			isRounded = false;
		}
		if(isRounded) {
			JkUiHTMLDOM.setStyle(this.element, "border-radius", (JkLangString.safeString((JkLangString.forDouble(this.widgetTopLeftRadius))) + "px " + JkLangString.safeString((JkLangString.forDouble(this.widgetTopRightRadius))) + "px " + JkLangString.safeString((JkLangString.forDouble(this.widgetBottomRightRadius))) + "px " + JkLangString.safeString((JkLangString.forDouble(this.widgetBottomLeftRadius))) + "px"));
		}
		else {
			JkUiHTMLDOM.removeStyle(this.element, "border-radius");
		}
	};
	JkWidgetLayerWithBackgroundColorWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetLayerWithBackgroundColorWidget"] === true;
	};
	JkWidgetLayerWithBackgroundColorWidget.TOP_SIDE = 0;
	JkWidgetLayerWithBackgroundColorWidget.LEFT_SIDE = 1;
	JkWidgetLayerWithBackgroundColorWidget.BOTTOM_SIDE = 2;
	JkWidgetLayerWithBackgroundColorWidget.RIGHT_SIDE = 3;
	let JkWidgetImageWidget = function() {
		JkWidgetWidget.call(this);
		this.widgetContext = null;
		this.widgetImage = null;
		this.widgetImageWidth = 0;
		this.widgetImageHeight = 0;
		this.widgetImageRounded = false;
		this.widgetImageScaleMethod = 0;
		this.lastLayoutWidth = 0;
	};
	JkWidgetImageWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetWidget.prototype);
	JkWidgetImageWidget.prototype.constructor = JkWidgetImageWidget;
	JkWidgetImageWidget.prototype._t = {
		"JkWidgetImageWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetImageWidget.prototype._tobj = JkWidgetImageWidget;
	JkWidgetImageWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetImageWidget;
		return v.CTOR_JkWidgetImageWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetImageWidget.prototype.CTOR_JkWidgetImageWidget_JkUiGuiApplicationContext = function(context) {
		if(JkWidgetWidget.prototype.CTOR_JkWidgetWidget.call(this) == null) {
			return null;
		}
		this.lastLayoutWidth = 0;
		this.widgetImageScaleMethod = 0;
		this.widgetImageRounded = false;
		this.widgetImageHeight = 0;
		this.widgetImageWidth = 0;
		this.widgetImage = null;
		this.widgetContext = null;
		this.widgetContext = context;
		this.setWidgetImageScaleMethod(JkWidgetImageWidget.STRETCH);
		return this;
	};
	JkWidgetImageWidget.forImage = function(context, image) {
		var v = JkWidgetImageWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetImage(image);
		return v;
	};
	JkWidgetImageWidget.forImageResource = function(context, resName) {
		var v = JkWidgetImageWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetImageResource(resName);
		return v;
	};
	JkWidgetImageWidget.prototype.createElement = function() {
		return JkUiHTMLDOM.createElement("img");
	};
	JkWidgetImageWidget.prototype.doSetWidgetImage = function(image) {
		var src = null;
		var img = (function(o) {
			if(JkUiImageForBrowser.IS_INSTANCE && JkUiImageForBrowser.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))(image);
		if(img != null) {
			var bm = img.image;
			if(bm != null) {
				src = bm.src;
			}
			JkUiHTMLDOM.removeStyle(this.element, "display");
		}
		else {
			JkUiHTMLDOM.setStyle(this.element, "display", "none");
		}
		JkUiHTMLDOM.setAttribute(this.element, "src", src);
	};
	JkWidgetImageWidget.prototype.setWidgetImageScaleMethod = function(method) {
		this.widgetImageScaleMethod = method;
		if(method == JkWidgetImageWidget.STRETCH) {
			JkUiHTMLDOM.setStyle(this.element, "object-fit", "fill");
		}
		else if(method == JkWidgetImageWidget.FIT) {
			JkUiHTMLDOM.setStyle(this.element, "object-fit", "contain");
		}
		else if(method == JkWidgetImageWidget.FILL) {
			JkUiHTMLDOM.setStyle(this.element, "object-fit", "cover");
		}
		else {
			JkLogLog.warning(this.widgetContext, ("Unsupported image scale method: " + JkLangString.safeString((JkLangString.forInteger(method)))));
			JkUiHTMLDOM.setStyle(this.element, "object-fit", "fill");
		}
	};
	JkWidgetImageWidget.prototype.setWidgetImage = function(image) {
		if(this.widgetImageRounded) {
			JkUiImageUtil.createCircularImage(image, (function(nimage1) {
				this.widgetImage = nimage1;
				this.doSetWidgetImage(nimage1);
			}.bind(this)));
		}
		else {
			this.widgetImage = image;
			this.doSetWidgetImage(this.widgetImage);
		}
		JkWidgetWidget.onLayoutChanged(this);
	};
	JkWidgetImageWidget.prototype.setWidgetImageResource = function(resName) {
		var img = null;
		if(JkLangString.isEmpty(resName) == false && this.widgetContext != null) {
			img = this.widgetContext.getResourceImage(resName);
			if(img == null) {
				JkLogLog.error(this.widgetContext, ("Failed to get resource image: `" + JkLangString.safeString(resName) + "'"));
			}
		}
		this.setWidgetImage(img);
	};
	JkWidgetImageWidget.prototype.setWidgetLayoutChanged = function() {
	};
	JkWidgetImageWidget.prototype.hasWidgetLayoutChanged = function() {
		return false;
	};
	JkWidgetImageWidget.prototype.layoutWidget = function(widthConstraint, force) {
		if(widthConstraint >= 0 && widthConstraint == this.lastLayoutWidth) {
			return true;
		}
		if(this.widgetImage == null) {
			JkWidgetWidget.setLayoutSize(this, this.widgetImageWidth, this.widgetImageHeight);
			this.lastLayoutWidth = JkWidgetWidget.getWidth(this);
			return true;
		}
		if(widthConstraint < 0 && this.widgetImageWidth < 1 && this.widgetImageHeight < 1) {
			return false;
		}
		var width = -1;
		var height = -1;
		if(this.widgetImageWidth > 0 && this.widgetImageHeight > 0) {
			width = this.widgetImageWidth;
			height = this.widgetImageHeight;
		}
		else if(this.widgetImageWidth > 0) {
			width = this.widgetImageWidth;
		}
		else if(this.widgetImageHeight > 0) {
			height = this.widgetImageHeight;
		}
		else {
			width = widthConstraint;
		}
		if(width > 0 && widthConstraint >= 0 && width > widthConstraint) {
			width = widthConstraint;
			height = -1;
		}
		if(height < 0) {
			height = this.widgetImage.getPixelHeight() * width / this.widgetImage.getPixelWidth();
		}
		if(width < 0) {
			width = this.widgetImage.getPixelWidth() * height / this.widgetImage.getPixelHeight();
		}
		JkWidgetWidget.setLayoutSize(this, width, height);
		this.lastLayoutWidth = JkWidgetWidget.getWidth(this);
		return true;
	};
	JkWidgetImageWidget.prototype.getWidgetImageWidth = function() {
		return this.widgetImageWidth;
	};
	JkWidgetImageWidget.prototype.setWidgetImageWidth = function(v) {
		this.widgetImageWidth = v;
		return this;
	};
	JkWidgetImageWidget.prototype.getWidgetImageHeight = function() {
		return this.widgetImageHeight;
	};
	JkWidgetImageWidget.prototype.setWidgetImageHeight = function(v) {
		this.widgetImageHeight = v;
		return this;
	};
	JkWidgetImageWidget.prototype.getWidgetImageRounded = function() {
		return this.widgetImageRounded;
	};
	JkWidgetImageWidget.prototype.setWidgetImageRounded = function(v) {
		this.widgetImageRounded = v;
		return this;
	};
	JkWidgetImageWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetImageWidget"] === true;
	};
	JkWidgetImageWidget.STRETCH = 0;
	JkWidgetImageWidget.FIT = 1;
	JkWidgetImageWidget.FILL = 2;
	let JkWidgetGridWidget = function() {
		JkWidgetContainerWidget.call(this);
		this.widgetCellSize = -1;
		this.minimumCols = 2;
		this.maximumCols = 0;
		this.widgetSpacing = 0;
		this.widgetMargin = 0;
	};
	JkWidgetGridWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetContainerWidget.prototype);
	JkWidgetGridWidget.prototype.constructor = JkWidgetGridWidget;
	JkWidgetGridWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetGridWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetGridWidget.prototype._tobj = JkWidgetGridWidget;
	JkWidgetGridWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetGridWidget;
		return v.CTOR_JkWidgetGridWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetGridWidget.prototype.CTOR_JkWidgetGridWidget_JkUiGuiApplicationContext = function(context) {
		this.widgetMargin = 0;
		this.widgetSpacing = 0;
		this.maximumCols = 0;
		this.minimumCols = 2;
		this.widgetCellSize = -1;
		if(JkWidgetContainerWidget.prototype.CTOR_JkWidgetContainerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetGridWidget.forContext = function(context) {
		return JkWidgetGridWidget.NEW_JkUiGuiApplicationContext(context);
	};
	JkWidgetGridWidget.prototype.computeWidgetLayout = function(widthConstraint) {
		var rows = 0;
		var cols = 0;
		var children = JkWidgetWidget.getChildren(this);
		if(children == null) {
			return;
		}
		var childCount = JkLangVector.getSize(children);
		if(childCount < 1) {
			return;
		}
		var wcs = this.widgetCellSize;
		if(wcs < 1) {
			wcs = this.context.getWidthValue("25mm");
		}
		var adjustWcs = false;
		var mywidth = widthConstraint - this.widgetMargin - this.widgetMargin;
		if(widthConstraint < 0) {
			cols = childCount;
		}
		else {
			cols = ~(~JkMathMath.floor(((mywidth + this.widgetSpacing) / (wcs + this.widgetSpacing))));
			if(this.minimumCols > 0 && cols < this.minimumCols) {
				cols = this.minimumCols;
				adjustWcs = true;
			}
			else if(childCount >= cols) {
				adjustWcs = true;
			}
		}
		if(adjustWcs) {
			wcs = (mywidth + this.widgetSpacing) / cols - this.widgetSpacing;
		}
		if(this.maximumCols > 0 && cols > this.maximumCols) {
			cols = this.maximumCols;
		}
		rows = ~(~JkMathMath.floor((childCount / cols)));
		if(childCount % cols > 0) {
			rows++;
		}
		JkWidgetWidget.setLayoutSize(this, (this.widgetMargin + cols * wcs + (cols - 1) * this.widgetSpacing + this.widgetMargin), (this.widgetMargin + rows * wcs + (rows - 1) * this.widgetSpacing + this.widgetMargin));
		var cx = 0;
		var x = this.widgetMargin;
		var y = this.widgetMargin;
		if(children != null) {
			var n = 0;
			var m = children.length;
			for(n = 0 ; n < m ; n++) {
				var child = children[n];
				if(child != null) {
					JkWidgetWidget.move(child, x, y);
					JkWidgetWidget.layout(child, wcs, false);
					JkWidgetWidget.resizeHeight(child, wcs);
					x += wcs;
					x += this.widgetSpacing;
					cx++;
					if(cx >= cols) {
						cx = 0;
						y += wcs;
						y += this.widgetSpacing;
						x = this.widgetMargin;
					}
				}
			}
		}
	};
	JkWidgetGridWidget.prototype.getWidgetCellSize = function() {
		return this.widgetCellSize;
	};
	JkWidgetGridWidget.prototype.setWidgetCellSize = function(v) {
		this.widgetCellSize = v;
		return this;
	};
	JkWidgetGridWidget.prototype.getMinimumCols = function() {
		return this.minimumCols;
	};
	JkWidgetGridWidget.prototype.setMinimumCols = function(v) {
		this.minimumCols = v;
		return this;
	};
	JkWidgetGridWidget.prototype.getMaximumCols = function() {
		return this.maximumCols;
	};
	JkWidgetGridWidget.prototype.setMaximumCols = function(v) {
		this.maximumCols = v;
		return this;
	};
	JkWidgetGridWidget.prototype.getWidgetSpacing = function() {
		return this.widgetSpacing;
	};
	JkWidgetGridWidget.prototype.setWidgetSpacing = function(v) {
		this.widgetSpacing = v;
		return this;
	};
	JkWidgetGridWidget.prototype.getWidgetMargin = function() {
		return this.widgetMargin;
	};
	JkWidgetGridWidget.prototype.setWidgetMargin = function(v) {
		this.widgetMargin = v;
		return this;
	};
	JkWidgetGridWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetGridWidget"] === true;
	};
	let JkWidgetResponsiveAwareWidget = {};
	JkWidgetResponsiveAwareWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetResponsiveAwareWidget"] === true;
	};
	let JkWidgetWidgetProvider = {};
	JkWidgetWidgetProvider.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetWidgetProvider"] === true;
	};
	let JkWidgetHorizontalBoxWidgetMyChildEntry = function() {
		this.widget = null;
		this.weight = 0.0;
	};
	JkWidgetHorizontalBoxWidgetMyChildEntry.prototype._t = { "JkWidgetHorizontalBoxWidgetMyChildEntry" : true };
	JkWidgetHorizontalBoxWidgetMyChildEntry.prototype._tobj = JkWidgetHorizontalBoxWidgetMyChildEntry;
	JkWidgetHorizontalBoxWidgetMyChildEntry.NEW = function() {
		var v = new JkWidgetHorizontalBoxWidgetMyChildEntry;
		return v.CTOR_JkWidgetHorizontalBoxWidgetMyChildEntry();
	};
	JkWidgetHorizontalBoxWidgetMyChildEntry.prototype.CTOR_JkWidgetHorizontalBoxWidgetMyChildEntry = function() {
		this.weight = 0.0;
		this.widget = null;
		return this;
	};
	JkWidgetHorizontalBoxWidgetMyChildEntry.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetHorizontalBoxWidgetMyChildEntry"] === true;
	};
	let JkWidgetHorizontalBoxWidget = function() {
		JkWidgetContainerWidget.call(this);
		this.children = null;
		this.widgetSpacing = 0;
		this.widgetMarginLeft = 0;
		this.widgetMarginRight = 0;
		this.widgetMarginTop = 0;
		this.widgetMarginBottom = 0;
		this.widgetFixedHeight = 0;
	};
	JkWidgetHorizontalBoxWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetContainerWidget.prototype);
	JkWidgetHorizontalBoxWidget.prototype.constructor = JkWidgetHorizontalBoxWidget;
	JkWidgetHorizontalBoxWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHorizontalBoxWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetHorizontalBoxWidget.prototype._tobj = JkWidgetHorizontalBoxWidget;
	JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext = function(ctx) {
		var v = new JkWidgetHorizontalBoxWidget;
		return v.CTOR_JkWidgetHorizontalBoxWidget_JkUiGuiApplicationContext(ctx);
	};
	JkWidgetHorizontalBoxWidget.prototype.CTOR_JkWidgetHorizontalBoxWidget_JkUiGuiApplicationContext = function(ctx) {
		this.widgetFixedHeight = 0;
		this.widgetMarginBottom = 0;
		this.widgetMarginTop = 0;
		this.widgetMarginRight = 0;
		this.widgetMarginLeft = 0;
		this.widgetSpacing = 0;
		this.children = null;
		if(JkWidgetContainerWidget.prototype.CTOR_JkWidgetContainerWidget_JkUiGuiApplicationContext.call(this, ctx) == null) {
			return null;
		}
		this.children = new Array;
		return this;
	};
	JkWidgetHorizontalBoxWidget.forContext = function(context, widgetMargin, widgetSpacing) {
		var v = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(context);
		v.widgetMarginLeft = widgetMargin;
		v.widgetMarginRight = widgetMargin;
		v.widgetMarginTop = widgetMargin;
		v.widgetMarginBottom = widgetMargin;
		v.widgetSpacing = widgetSpacing;
		return v;
	};
	JkWidgetHorizontalBoxWidget.prototype.setWidgetMargin = function(margin) {
		this.widgetMarginLeft = margin;
		this.widgetMarginRight = margin;
		this.widgetMarginTop = margin;
		this.widgetMarginBottom = margin;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetHorizontalBoxWidget.prototype.getWidgetMarginLeft = function() {
		return this.widgetMarginLeft;
	};
	JkWidgetHorizontalBoxWidget.prototype.setWidgetMarginLeft = function(value) {
		this.widgetMarginLeft = value;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetHorizontalBoxWidget.prototype.getWidgetMarginRight = function() {
		return this.widgetMarginRight;
	};
	JkWidgetHorizontalBoxWidget.prototype.setWidgetMarginRight = function(value) {
		this.widgetMarginRight = value;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetHorizontalBoxWidget.prototype.getWidgetMarginTop = function() {
		return this.widgetMarginTop;
	};
	JkWidgetHorizontalBoxWidget.prototype.setWidgetMarginTop = function(value) {
		this.widgetMarginTop = value;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetHorizontalBoxWidget.prototype.getWidgetMarginBottom = function() {
		return this.widgetMarginBottom;
	};
	JkWidgetHorizontalBoxWidget.prototype.setWidgetMarginBottom = function(value) {
		this.widgetMarginBottom = value;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetHorizontalBoxWidget.prototype.computeWidgetLayout = function(widthConstraint) {
		var totalWeight = 0.0;
		var highest = 0;
		var availableWidth = widthConstraint - this.widgetMarginLeft - this.widgetMarginRight;
		var childCount = 0;
		if(this.children != null) {
			var n = 0;
			var m = this.children.length;
			for(n = 0 ; n < m ; n++) {
				var child = this.children[n];
				if(child != null) {
					childCount++;
					if(child.weight > 0.0) {
						totalWeight += child.weight;
					}
					else {
						JkWidgetWidget.layout(child.widget, (-1), false);
						availableWidth -= JkWidgetWidget.getWidth(child.widget);
						var height = JkWidgetWidget.getHeight(child.widget);
						if(height > highest) {
							highest = height;
						}
					}
				}
			}
		}
		if(childCount > 1 && this.widgetSpacing > 0) {
			availableWidth -= (childCount - 1) * this.widgetSpacing;
		}
		if(this.children != null) {
			var n2 = 0;
			var m2 = this.children.length;
			for(n2 = 0 ; n2 < m2 ; n2++) {
				var child1 = this.children[n2];
				if(child1 != null) {
					if(child1.weight > 0.0) {
						var ww = ~(~(availableWidth * child1.weight / totalWeight));
						JkWidgetWidget.layout(child1.widget, ww, false);
						var height1 = JkWidgetWidget.getHeight(child1.widget);
						if(height1 > highest) {
							highest = height1;
						}
					}
				}
			}
		}
		var realHighest = highest;
		highest += this.widgetMarginTop + this.widgetMarginBottom;
		if(this.widgetFixedHeight > 0) {
			highest = this.widgetFixedHeight;
		}
		if(widthConstraint < 0) {
			var totalWidth = widthConstraint - availableWidth;
			JkWidgetWidget.setLayoutSize(this, totalWidth, highest);
		}
		else {
			JkWidgetWidget.setLayoutSize(this, widthConstraint, highest);
		}
		if(availableWidth < 0) {
			availableWidth = 0;
		}
		var x = this.widgetMarginLeft;
		if(this.children != null) {
			var n3 = 0;
			var m3 = this.children.length;
			for(n3 = 0 ; n3 < m3 ; n3++) {
				var child2 = this.children[n3];
				if(child2 != null) {
					var ww1 = 0;
					if(child2.weight > 0.0) {
						ww1 = ~(~(availableWidth * child2.weight / totalWeight));
						JkWidgetWidget.move(child2.widget, x, this.widgetMarginTop);
						JkWidgetWidget.layout(child2.widget, ww1, false);
						JkWidgetWidget.resizeHeight(child2.widget, realHighest);
					}
					else {
						ww1 = JkWidgetWidget.getWidth(child2.widget);
						JkWidgetWidget.move(child2.widget, x, this.widgetMarginTop);
						JkWidgetWidget.layout(child2.widget, ww1, false);
						JkWidgetWidget.resizeHeight(child2.widget, realHighest);
					}
					x += ww1;
					x += this.widgetSpacing;
				}
			}
		}
	};
	JkWidgetHorizontalBoxWidget.prototype.onWidgetHeightChanged = function(height) {
		JkWidgetContainerWidget.prototype.onWidgetHeightChanged.call(this, height);
		var array = JkWidgetWidget.getChildren(this);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var child = array[n];
				if(child != null) {
					JkWidgetWidget.resizeHeight(child, (height - this.widgetMarginTop - this.widgetMarginBottom));
				}
			}
		}
	};
	JkWidgetHorizontalBoxWidget.prototype.onChildWidgetsRemoved = function(widgets) {
		var ws = JkLangVector.getSize(widgets);
		if(ws > 0) {
			var vs = JkLangVector.getSize(this.children);
			if(ws == vs) {
				JkLangVector.clear(this.children);
			}
			else {
				var widget = JkLangVector.get(widgets, 0);
				if(this.children != null) {
					var n = 0;
					var m = this.children.length;
					for(n = 0 ; n < m ; n++) {
						var child = this.children[n];
						if(child != null) {
							if(child.widget == widget) {
								JkLangVector.removeValue(this.children, child);
								break;
							}
						}
					}
				}
			}
		}
		JkWidgetContainerWidget.prototype.onChildWidgetsRemoved.call(this, widgets);
	};
	JkWidgetHorizontalBoxWidget.prototype.addWidget = function(widget) {
		return this.addWidget1(widget, 0.0);
	};
	JkWidgetHorizontalBoxWidget.prototype.removeAllChildren = function() {
		JkWidgetWidget.removeChildrenOf(this);
	};
	JkWidgetHorizontalBoxWidget.prototype.addWidget1 = function(widget, weight) {
		if(widget != null) {
			var ee = JkWidgetHorizontalBoxWidgetMyChildEntry.NEW();
			ee.widget = widget;
			ee.weight = weight;
			this.children.push(ee);
			JkWidgetWidget.addChild(this, widget);
		}
		return this;
	};
	JkWidgetHorizontalBoxWidget.prototype.setWidgetWeight = function(widget, weight) {
		if(this.children != null) {
			var n = 0;
			var m = this.children.length;
			for(n = 0 ; n < m ; n++) {
				var child = this.children[n];
				if(child != null) {
					if(child.widget == widget) {
						child.weight = weight;
						JkWidgetWidget.onLayoutChanged(this);
						break;
					}
				}
			}
		}
	};
	JkWidgetHorizontalBoxWidget.prototype.getWidgetSpacing = function() {
		return this.widgetSpacing;
	};
	JkWidgetHorizontalBoxWidget.prototype.setWidgetSpacing = function(v) {
		this.widgetSpacing = v;
		return this;
	};
	JkWidgetHorizontalBoxWidget.prototype.getWidgetFixedHeight = function() {
		return this.widgetFixedHeight;
	};
	JkWidgetHorizontalBoxWidget.prototype.setWidgetFixedHeight = function(v) {
		this.widgetFixedHeight = v;
		return this;
	};
	JkWidgetHorizontalBoxWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetHorizontalBoxWidget"] === true;
	};
	let JkWidgetResizeAwareWidget = {};
	JkWidgetResizeAwareWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetResizeAwareWidget"] === true;
	};
	let JkWidgetScreenStartStopAwareWidget = {};
	JkWidgetScreenStartStopAwareWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetScreenStartStopAwareWidget"] === true;
	};
	let JkWidgetAlignWidgetMyChildEntry = function() {
		this.widget = null;
		this.alignX = 0.0;
		this.alignY = 0.0;
		this.maximizeWidth = false;
	};
	JkWidgetAlignWidgetMyChildEntry.prototype._t = { "JkWidgetAlignWidgetMyChildEntry" : true };
	JkWidgetAlignWidgetMyChildEntry.prototype._tobj = JkWidgetAlignWidgetMyChildEntry;
	JkWidgetAlignWidgetMyChildEntry.NEW = function() {
		var v = new JkWidgetAlignWidgetMyChildEntry;
		return v.CTOR_JkWidgetAlignWidgetMyChildEntry();
	};
	JkWidgetAlignWidgetMyChildEntry.prototype.CTOR_JkWidgetAlignWidgetMyChildEntry = function() {
		this.maximizeWidth = false;
		this.alignY = 0.0;
		this.alignX = 0.0;
		this.widget = null;
		return this;
	};
	JkWidgetAlignWidgetMyChildEntry.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetAlignWidgetMyChildEntry"] === true;
	};
	let JkWidgetAlignWidget = function() {
		JkWidgetContainerWidget.call(this);
		this.children = null;
		this.widgetMarginLeft = 0;
		this.widgetMarginRight = 0;
		this.widgetMarginTop = 0;
		this.widgetMarginBottom = 0;
	};
	JkWidgetAlignWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetContainerWidget.prototype);
	JkWidgetAlignWidget.prototype.constructor = JkWidgetAlignWidget;
	JkWidgetAlignWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetAlignWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetAlignWidget.prototype._tobj = JkWidgetAlignWidget;
	JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext = function(ctx) {
		var v = new JkWidgetAlignWidget;
		return v.CTOR_JkWidgetAlignWidget_JkUiGuiApplicationContext(ctx);
	};
	JkWidgetAlignWidget.prototype.CTOR_JkWidgetAlignWidget_JkUiGuiApplicationContext = function(ctx) {
		this.widgetMarginBottom = 0;
		this.widgetMarginTop = 0;
		this.widgetMarginRight = 0;
		this.widgetMarginLeft = 0;
		this.children = null;
		if(JkWidgetContainerWidget.prototype.CTOR_JkWidgetContainerWidget_JkUiGuiApplicationContext.call(this, ctx) == null) {
			return null;
		}
		this.children = new Array;
		return this;
	};
	JkWidgetAlignWidget.forWidget = function(context, widget, alignX, alignY, margin) {
		var v = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(context);
		v.widgetMarginLeft = margin;
		v.widgetMarginRight = margin;
		v.widgetMarginTop = margin;
		v.widgetMarginBottom = margin;
		v.addWidget1(widget, alignX, alignY, false);
		return v;
	};
	JkWidgetAlignWidget.prototype.setWidgetMargin = function(margin) {
		this.widgetMarginLeft = margin;
		this.widgetMarginRight = margin;
		this.widgetMarginTop = margin;
		this.widgetMarginBottom = margin;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetAlignWidget.prototype.getWidgetMarginLeft = function() {
		return this.widgetMarginLeft;
	};
	JkWidgetAlignWidget.prototype.setWidgetMarginLeft = function(value) {
		this.widgetMarginLeft = value;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetAlignWidget.prototype.getWidgetMarginRight = function() {
		return this.widgetMarginRight;
	};
	JkWidgetAlignWidget.prototype.setWidgetMarginRight = function(value) {
		this.widgetMarginRight = value;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetAlignWidget.prototype.getWidgetMarginTop = function() {
		return this.widgetMarginTop;
	};
	JkWidgetAlignWidget.prototype.setWidgetMarginTop = function(value) {
		this.widgetMarginTop = value;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetAlignWidget.prototype.getWidgetMarginBottom = function() {
		return this.widgetMarginBottom;
	};
	JkWidgetAlignWidget.prototype.setWidgetMarginBottom = function(value) {
		this.widgetMarginBottom = value;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetAlignWidget.prototype.onWidgetHeightChanged = function(height) {
		JkWidgetContainerWidget.prototype.onWidgetHeightChanged.call(this, height);
		this.updateChildWidgetLocations();
	};
	JkWidgetAlignWidget.prototype.updateChildWidgetLocations = function() {
		if(this.children != null) {
			var n = 0;
			var m = this.children.length;
			for(n = 0 ; n < m ; n++) {
				var child = this.children[n];
				if(child != null) {
					this.handleEntry(child);
				}
			}
		}
	};
	JkWidgetAlignWidget.prototype.computeWidgetLayout = function(widthConstraint) {
		var wc = -1;
		if(widthConstraint >= 0) {
			wc = widthConstraint - this.widgetMarginLeft - this.widgetMarginRight;
			if(wc < 0) {
				wc = 0;
			}
		}
		var mw = 0;
		var mh = 0;
		if(this.children != null) {
			var n = 0;
			var m = this.children.length;
			for(n = 0 ; n < m ; n++) {
				var child = this.children[n];
				if(child != null) {
					var widget = child.widget;
					if(child.maximizeWidth) {
						JkWidgetWidget.layout(widget, widthConstraint, false);
					}
					else {
						JkWidgetWidget.layout(widget, (-1), false);
					}
					var cw = JkWidgetWidget.getWidth(widget);
					if(wc >= 0 && cw > wc) {
						JkWidgetWidget.layout(widget, wc, false);
						cw = JkWidgetWidget.getWidth(widget);
					}
					if(cw > mw) {
						mw = cw;
					}
					var ch = JkWidgetWidget.getHeight(widget);
					if(ch > mh) {
						mh = ch;
					}
				}
			}
		}
		var mywidth = mw + this.widgetMarginLeft + this.widgetMarginRight;
		if(widthConstraint >= 0) {
			mywidth = widthConstraint;
		}
		JkWidgetWidget.setLayoutSize(this, mywidth, (mh + this.widgetMarginTop + this.widgetMarginBottom));
		this.updateChildWidgetLocations();
	};
	JkWidgetAlignWidget.prototype.handleEntry = function(entry) {
		var w = JkWidgetWidget.getWidth(this) - this.widgetMarginLeft - this.widgetMarginRight;
		var h = JkWidgetWidget.getHeight(this) - this.widgetMarginTop - this.widgetMarginBottom;
		var cw = JkWidgetWidget.getWidth(entry.widget);
		var ch = JkWidgetWidget.getHeight(entry.widget);
		if(cw > w || ch > h) {
			if(cw > w) {
				cw = w;
			}
			if(ch > h) {
				ch = h;
			}
		}
		var dx = this.widgetMarginLeft + ~(~((w - cw) * entry.alignX));
		var dy = this.widgetMarginTop + ~(~((h - ch) * entry.alignY));
		JkWidgetWidget.move(entry.widget, dx, dy);
	};
	JkWidgetAlignWidget.prototype.onChildWidgetsRemoved = function(widgets) {
		JkWidgetContainerWidget.prototype.onChildWidgetsRemoved.call(this, widgets);
		var ws = JkLangVector.getSize(widgets);
		if(ws > 0) {
			var vs = JkLangVector.getSize(this.children);
			if(ws == vs) {
				JkLangVector.clear(this.children);
			}
			else {
				var widget = JkLangVector.get(widgets, 0);
				if(this.children != null) {
					var n = 0;
					var m = this.children.length;
					for(n = 0 ; n < m ; n++) {
						var child = this.children[n];
						if(child != null) {
							if(child.widget == widget) {
								JkLangVector.removeValue(this.children, child);
								break;
							}
						}
					}
				}
			}
		}
	};
	JkWidgetAlignWidget.prototype.addWidget = function(widget) {
		return this.addWidget1(widget, 0.5, 0.5, false);
	};
	JkWidgetAlignWidget.prototype.addWidget1 = function(widget, alignX, alignY, maximizeWidth) {
		var ee = JkWidgetAlignWidgetMyChildEntry.NEW();
		ee.widget = widget;
		ee.alignX = alignX;
		ee.alignY = alignY;
		ee.maximizeWidth = maximizeWidth;
		this.children.push(ee);
		JkWidgetWidget.addChild(this, widget);
		if(this.hasSize()) {
			this.handleEntry(ee);
		}
		return this;
	};
	JkWidgetAlignWidget.prototype.setAlignForIndex = function(index, alignX, alignY) {
		var child = JkLangVector.get(this.children, index);
		if(child == null) {
			return;
		}
		if(child.alignX != alignX || child.alignY != alignY) {
			child.alignX = alignX;
			child.alignY = alignY;
			JkWidgetWidget.onLayoutChanged(this);
		}
	};
	JkWidgetAlignWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetAlignWidget"] === true;
	};
	let JkWidgetCanvasWidget = function() {
		JkWidgetWidget.call(this);
		this.widgetContext = null;
		this.widgetColor = null;
		this.widgetTopLeftRadius = 0.0;
		this.widgetTopRightRadius = 0.0;
		this.widgetBottomRightRadius = 0.0;
		this.widgetBottomLeftRadius = 0.0;
		this.widgetOutlineColor = null;
		this.widgetOutlineWidth = 0;
		this.widgetBorderStyle = 0;
	};
	JkWidgetCanvasWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetWidget.prototype);
	JkWidgetCanvasWidget.prototype.constructor = JkWidgetCanvasWidget;
	JkWidgetCanvasWidget.prototype._t = {
		"JkWidgetWidget" : true,
		"JkWidgetCanvasWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCanvasWidget.prototype._tobj = JkWidgetCanvasWidget;
	JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCanvasWidget;
		return v.CTOR_JkWidgetCanvasWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCanvasWidget.prototype.CTOR_JkWidgetCanvasWidget_JkUiGuiApplicationContext = function(context) {
		if(JkWidgetWidget.prototype.CTOR_JkWidgetWidget.call(this) == null) {
			return null;
		}
		this.widgetBorderStyle = 0;
		this.widgetOutlineWidth = 0;
		this.widgetOutlineColor = null;
		this.widgetBottomLeftRadius = 0.0;
		this.widgetBottomRightRadius = 0.0;
		this.widgetTopRightRadius = 0.0;
		this.widgetTopLeftRadius = 0.0;
		this.widgetColor = null;
		this.widgetContext = null;
		this.widgetContext = context;
		this.widgetColor = JkGfxColor.black();
		this.widgetOutlineColor = JkGfxColor.black();
		return this;
	};
	JkWidgetCanvasWidget.forColor = function(context, color) {
		var v = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetColor(color);
		return v;
	};
	JkWidgetCanvasWidget.prototype.prepareElement = function(element) {
		JkWidgetWidget.prototype.prepareElement.call(this, element);
		JkUiHTMLDOM.setStyle(element, "box-sizing", "border-box");
	};
	JkWidgetCanvasWidget.prototype.setWidgetLayoutChanged = function() {
	};
	JkWidgetCanvasWidget.prototype.hasWidgetLayoutChanged = function() {
		return false;
	};
	JkWidgetCanvasWidget.prototype.layoutWidget = function(widthConstraint, force) {
		var wc = widthConstraint;
		if(wc < 0) {
			wc = 0;
		}
		JkWidgetWidget.setLayoutSize(this, wc, 0);
		return true;
	};
	JkWidgetCanvasWidget.prototype.setWidgetColor = function(color) {
		this.widgetColor = color;
		if(!(this.widgetColor != null)) {
			JkUiHTMLDOM.removeStyle(this.element, "background-color");
		}
		else {
			JkUiHTMLDOM.setStyle(this.element, "background-color", (JkUiHTMLDOM.colorToRGBA(this.widgetColor)));
		}
	};
	JkWidgetCanvasWidget.prototype.getWidgetColor = function() {
		return this.widgetColor;
	};
	JkWidgetCanvasWidget.prototype.setWidgetOutlineColor = function(color) {
		this.widgetOutlineColor = color;
		this.updateCanvas();
	};
	JkWidgetCanvasWidget.prototype.getWidgetOutlineColor = function() {
		return this.widgetOutlineColor;
	};
	JkWidgetCanvasWidget.prototype.setWidgetOutlineWidth = function(width) {
		this.widgetOutlineWidth = width;
		this.updateCanvas();
	};
	JkWidgetCanvasWidget.prototype.getWidgetOutlineWidth = function() {
		return this.widgetOutlineWidth;
	};
	JkWidgetCanvasWidget.prototype.updateCanvas = function() {
		if(this.widgetOutlineWidth < 0) {
			JkUiHTMLDOM.removeStyle(this.element, "border");
			JkUiHTMLDOM.removeStyle(this.element, "border-color");
			JkUiHTMLDOM.removeStyle(this.element, "border-style");
		}
		else {
			JkUiHTMLDOM.setStyle(this.element, "border", (JkLangString.safeString((JkLangString.forInteger(this.widgetOutlineWidth))) + "px"));
			JkUiHTMLDOM.setStyle(this.element, "border-style", "solid");
			JkUiHTMLDOM.setStyle(this.element, "border-color", (this.widgetOutlineColor.toRgbString()));
		}
	};
	JkWidgetCanvasWidget.prototype.updateCanvasRoundingRadius = function() {
		var isRounded = true;
		if(this.widgetTopLeftRadius <= 0.0 && this.widgetTopRightRadius <= 0.0 && this.widgetBottomRightRadius <= 0.0 && this.widgetBottomLeftRadius <= 0.0) {
			isRounded = false;
		}
		if(isRounded) {
			JkUiHTMLDOM.setStyle(this.element, "border-radius", (JkLangString.safeString((JkLangString.forInteger((~(~this.widgetTopLeftRadius))))) + "px " + JkLangString.safeString((JkLangString.forInteger((~(~this.widgetTopRightRadius))))) + "px " + JkLangString.safeString((JkLangString.forInteger((~(~this.widgetBottomRightRadius))))) + "px " + JkLangString.safeString((JkLangString.forInteger((~(~this.widgetBottomLeftRadius))))) + "px"));
		}
		else {
			JkUiHTMLDOM.removeStyle(this.element, "border-radius");
		}
	};
	JkWidgetCanvasWidget.prototype.getWidgetTopLeftRadius = function() {
		return this.widgetTopLeftRadius;
	};
	JkWidgetCanvasWidget.prototype.getWidgetTopRightRadius = function() {
		return this.widgetTopRightRadius;
	};
	JkWidgetCanvasWidget.prototype.getWidgetBottomRightRadius = function() {
		return this.widgetBottomRightRadius;
	};
	JkWidgetCanvasWidget.prototype.getWidgetBottomLeftRadius = function() {
		return this.widgetBottomLeftRadius;
	};
	JkWidgetCanvasWidget.prototype.setWidgetRoundingRadiusTopLeft = function(radius) {
		this.widgetTopLeftRadius = radius;
		this.updateCanvasRoundingRadius();
	};
	JkWidgetCanvasWidget.prototype.setWidgetRoundingRadiusTopRight = function(radius) {
		this.widgetTopRightRadius = radius;
		this.updateCanvasRoundingRadius();
	};
	JkWidgetCanvasWidget.prototype.setWidgetRoundingRadiusBottomLeft = function(radius) {
		this.widgetBottomLeftRadius = radius;
		this.updateCanvasRoundingRadius();
	};
	JkWidgetCanvasWidget.prototype.setWidgetRoundingRadiusBottomRight = function(radius) {
		this.widgetBottomRightRadius = radius;
		this.updateCanvasRoundingRadius();
	};
	JkWidgetCanvasWidget.prototype.setWidgetRoundingRadius1 = function(radius) {
		this.setWidgetRoundingRadius3(radius, radius, radius, radius);
	};
	JkWidgetCanvasWidget.prototype.setWidgetRoundingRadius2 = function(lradius, rradius) {
		this.setWidgetRoundingRadius3(lradius, rradius, rradius, lradius);
	};
	JkWidgetCanvasWidget.prototype.setWidgetRoundingRadius3 = function(tlradius, trradius, brradius, blradius) {
		this.widgetTopLeftRadius = tlradius;
		this.widgetTopRightRadius = trradius;
		this.widgetBottomRightRadius = brradius;
		this.widgetBottomLeftRadius = blradius;
		this.updateCanvasRoundingRadius();
	};
	JkWidgetCanvasWidget.prototype.setWidgetBorderStyle = function(style) {
		this.widgetBorderStyle = style;
		if(style == JkWidgetCanvasWidget.BORDER_STYLE_SOLID) {
			JkUiHTMLDOM.setStyle(this.element, "border-style", "solid");
		}
		else if(style == JkWidgetCanvasWidget.BORDER_STYLE_DASHED) {
			JkUiHTMLDOM.setStyle(this.element, "border-style", "dashed");
		}
		else if(style == JkWidgetCanvasWidget.BORDER_STYLE_DOTTED) {
			JkUiHTMLDOM.setStyle(this.element, "border-style", "dotted");
		}
		else if(style == JkWidgetCanvasWidget.BORDER_STYLE_NONE) {
			JkUiHTMLDOM.setStyle(this.element, "border-style", "none");
		}
		else if(style == JkWidgetCanvasWidget.BORDER_STYLE_3D) {
			JkUiHTMLDOM.setStyle(this.element, "border-style", "groove");
		}
		else {
			JkLogLog.warning(this.widgetContext, ("Unsupported image scale method: " + JkLangString.safeString((JkLangString.forInteger(style)))));
			JkUiHTMLDOM.setStyle(this.element, "border-style", "solid");
		}
		return this;
	};
	JkWidgetCanvasWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCanvasWidget"] === true;
	};
	JkWidgetCanvasWidget.BORDER_STYLE_SOLID = 0;
	JkWidgetCanvasWidget.BORDER_STYLE_DASHED = 1;
	JkWidgetCanvasWidget.BORDER_STYLE_DOTTED = 2;
	JkWidgetCanvasWidget.BORDER_STYLE_NONE = 3;
	JkWidgetCanvasWidget.BORDER_STYLE_3D = 4;
	let JkWidgetVerticalBoxWidget = function() {
		JkWidgetContainerWidget.call(this);
		this.children = null;
		this.widgetSpacing = 0;
		this.widgetMarginLeft = 0;
		this.widgetMarginRight = 0;
		this.widgetMarginTop = 0;
		this.widgetMarginBottom = 0;
		this.widgetWidthRequest = 0;
		this.widgetMaximumWidthRequest = 0;
	};
	JkWidgetVerticalBoxWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetContainerWidget.prototype);
	JkWidgetVerticalBoxWidget.prototype.constructor = JkWidgetVerticalBoxWidget;
	JkWidgetVerticalBoxWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetVerticalBoxWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetVerticalBoxWidget.prototype._tobj = JkWidgetVerticalBoxWidget;
	JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext = function(ctx) {
		var v = new JkWidgetVerticalBoxWidget;
		return v.CTOR_JkWidgetVerticalBoxWidget_JkUiGuiApplicationContext(ctx);
	};
	JkWidgetVerticalBoxWidget.prototype.CTOR_JkWidgetVerticalBoxWidget_JkUiGuiApplicationContext = function(ctx) {
		this.widgetMaximumWidthRequest = 0;
		this.widgetWidthRequest = 0;
		this.widgetMarginBottom = 0;
		this.widgetMarginTop = 0;
		this.widgetMarginRight = 0;
		this.widgetMarginLeft = 0;
		this.widgetSpacing = 0;
		this.children = null;
		if(JkWidgetContainerWidget.prototype.CTOR_JkWidgetContainerWidget_JkUiGuiApplicationContext.call(this, ctx) == null) {
			return null;
		}
		this.children = new Array;
		return this;
	};
	JkWidgetVerticalBoxWidget.forContext = function(context, widgetMargin, widgetSpacing) {
		var v = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(context);
		v.widgetMarginLeft = widgetMargin;
		v.widgetMarginRight = widgetMargin;
		v.widgetMarginTop = widgetMargin;
		v.widgetMarginBottom = widgetMargin;
		v.widgetSpacing = widgetSpacing;
		return v;
	};
	JkWidgetVerticalBoxWidget.prototype.setWidgetMargin = function(margin) {
		this.widgetMarginLeft = margin;
		this.widgetMarginRight = margin;
		this.widgetMarginTop = margin;
		this.widgetMarginBottom = margin;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetVerticalBoxWidget.prototype.getWidgetMarginLeft = function() {
		return this.widgetMarginLeft;
	};
	JkWidgetVerticalBoxWidget.prototype.setWidgetMarginLeft = function(value) {
		this.widgetMarginLeft = value;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetVerticalBoxWidget.prototype.getWidgetMarginRight = function() {
		return this.widgetMarginRight;
	};
	JkWidgetVerticalBoxWidget.prototype.setWidgetMarginRight = function(value) {
		this.widgetMarginRight = value;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetVerticalBoxWidget.prototype.getWidgetMarginTop = function() {
		return this.widgetMarginTop;
	};
	JkWidgetVerticalBoxWidget.prototype.setWidgetMarginTop = function(value) {
		this.widgetMarginTop = value;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetVerticalBoxWidget.prototype.getWidgetMarginBottom = function() {
		return this.widgetMarginBottom;
	};
	JkWidgetVerticalBoxWidget.prototype.setWidgetMarginBottom = function(value) {
		this.widgetMarginBottom = value;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetVerticalBoxWidget.prototype.setWidgetWidthRequest = function(request) {
		this.widgetWidthRequest = request;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetVerticalBoxWidget.prototype.getWidgetWidthRequest = function() {
		return this.widgetWidthRequest;
	};
	JkWidgetVerticalBoxWidget.prototype.setWidgetMaximumWidthRequest = function(width) {
		this.widgetMaximumWidthRequest = width;
		if(JkWidgetWidget.getWidth(this) > width) {
			JkWidgetWidget.onLayoutChanged(this);
		}
		return this;
	};
	JkWidgetVerticalBoxWidget.prototype.getWidgetMaximumWidthRequest = function() {
		return this.widgetMaximumWidthRequest;
	};
	JkWidgetVerticalBoxWidget.prototype.computeWidgetLayout = function(widthConstraint) {
		var wc = -1;
		if(widthConstraint < 0 && this.widgetWidthRequest > 0) {
			wc = this.widgetWidthRequest - this.widgetMarginLeft - this.widgetMarginRight;
		}
		if(wc < 0 && widthConstraint >= 0) {
			wc = widthConstraint - this.widgetMarginLeft - this.widgetMarginRight;
			if(wc < 0) {
				wc = 0;
			}
		}
		var widest = 0;
		var childCount = 0;
		var y = this.widgetMarginTop;
		if(wc < 0) {
			if(this.children != null) {
				var n = 0;
				var m = this.children.length;
				for(n = 0 ; n < m ; n++) {
					var child = this.children[n];
					if(child != null) {
						JkWidgetWidget.layout(child.widget, (-1), false);
						var ww = JkWidgetWidget.getWidth(child.widget);
						if(ww > wc) {
							wc = ww;
						}
					}
				}
			}
		}
		if(this.children != null) {
			var n2 = 0;
			var m2 = this.children.length;
			for(n2 = 0 ; n2 < m2 ; n2++) {
				var child1 = this.children[n2];
				if(child1 != null) {
					if(childCount > 0) {
						y += this.widgetSpacing;
					}
					childCount++;
					JkWidgetWidget.layout(child1.widget, wc, false);
					JkWidgetWidget.move(child1.widget, this.widgetMarginLeft, y);
					var ww1 = JkWidgetWidget.getWidth(child1.widget);
					if(wc < 0 && this.widgetMaximumWidthRequest > 0 && ww1 + this.widgetMarginLeft + this.widgetMarginRight > this.widgetMaximumWidthRequest) {
						JkWidgetWidget.layout(child1.widget, (this.widgetMaximumWidthRequest - this.widgetMarginLeft - this.widgetMarginRight), false);
						ww1 = JkWidgetWidget.getWidth(child1.widget);
					}
					if(ww1 > widest) {
						widest = ww1;
					}
					y += JkWidgetWidget.getHeight(child1.widget);
				}
			}
		}
		y += this.widgetMarginBottom;
		var mywidth = widest + this.widgetMarginLeft + this.widgetMarginRight;
		if(widthConstraint >= 0) {
			mywidth = widthConstraint;
		}
		JkWidgetWidget.setLayoutSize(this, mywidth, y);
		this.onWidgetHeightChanged(y);
	};
	JkWidgetVerticalBoxWidget.prototype.onWidgetHeightChanged = function(height) {
		JkWidgetContainerWidget.prototype.onWidgetHeightChanged.call(this, height);
		var totalWeight = 0.0;
		var availableHeight = height - this.widgetMarginTop - this.widgetMarginBottom;
		var childCount = 0;
		if(this.children != null) {
			var n = 0;
			var m = this.children.length;
			for(n = 0 ; n < m ; n++) {
				var child = this.children[n];
				if(child != null) {
					childCount++;
					if(child.weight > 0.0) {
						totalWeight += child.weight;
					}
					else {
						availableHeight -= JkWidgetWidget.getHeight(child.widget);
					}
				}
			}
		}
		if(childCount > 1 && this.widgetSpacing > 0) {
			availableHeight -= (childCount - 1) * this.widgetSpacing;
		}
		if(availableHeight < 0) {
			availableHeight = 0;
		}
		var y = this.widgetMarginTop;
		if(this.children != null) {
			var n2 = 0;
			var m2 = this.children.length;
			for(n2 = 0 ; n2 < m2 ; n2++) {
				var child1 = this.children[n2];
				if(child1 != null) {
					JkWidgetWidget.move(child1.widget, this.widgetMarginLeft, y);
					if(child1.weight > 0.0) {
						var hh = ~(~(availableHeight * child1.weight / totalWeight));
						JkWidgetWidget.resizeHeight(child1.widget, hh);
					}
					var hh1 = JkWidgetWidget.getHeight(child1.widget);
					y += hh1;
					y += this.widgetSpacing;
				}
			}
		}
	};
	JkWidgetVerticalBoxWidget.prototype.onChildWidgetsRemoved = function(widgets) {
		var ws = JkLangVector.getSize(widgets);
		if(ws > 0) {
			var vs = JkLangVector.getSize(this.children);
			if(ws == vs) {
				JkLangVector.clear(this.children);
			}
			else {
				var widget = JkLangVector.get(widgets, 0);
				if(this.children != null) {
					var n = 0;
					var m = this.children.length;
					for(n = 0 ; n < m ; n++) {
						var child = this.children[n];
						if(child != null) {
							if(child.widget == widget) {
								JkLangVector.removeValue(this.children, child);
								break;
							}
						}
					}
				}
			}
		}
		JkWidgetContainerWidget.prototype.onChildWidgetsRemoved.call(this, widgets);
	};
	JkWidgetVerticalBoxWidget.prototype.addWidget = function(widget) {
		return this.addWidget1(widget, 0.0);
	};
	JkWidgetVerticalBoxWidget.prototype.removeAllChildren = function() {
		JkWidgetWidget.removeChildrenOf(this);
	};
	JkWidgetVerticalBoxWidget.prototype.addWidget1 = function(widget, weight) {
		if(widget != null) {
			var ee = JkWidgetVerticalBoxWidgetMyChildEntry.NEW();
			ee.widget = widget;
			ee.weight = weight;
			this.children.push(ee);
			JkWidgetWidget.addChild(this, widget);
		}
		return this;
	};
	JkWidgetVerticalBoxWidget.prototype.getWidgetSpacing = function() {
		return this.widgetSpacing;
	};
	JkWidgetVerticalBoxWidget.prototype.setWidgetSpacing = function(v) {
		this.widgetSpacing = v;
		return this;
	};
	JkWidgetVerticalBoxWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetVerticalBoxWidget"] === true;
	};
	let JkWidgetRenderableWidget = function() {
		JkWidgetWidget.call(this);
		this.renderContext = null;
		this.context = null;
		this.renderer = null;
	};
	JkWidgetRenderableWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetWidget.prototype);
	JkWidgetRenderableWidget.prototype.constructor = JkWidgetRenderableWidget;
	JkWidgetRenderableWidget.prototype._t = {
		"JkWidgetWidget" : true,
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetRenderableWidget" : true,
		"JkWidgetResizeAwareWidget" : true
	};
	JkWidgetRenderableWidget.prototype._tobj = JkWidgetRenderableWidget;
	JkWidgetRenderableWidget.NEW_JkUiGuiApplicationContext = function(ctx) {
		var v = new JkWidgetRenderableWidget;
		return v.CTOR_JkWidgetRenderableWidget_JkUiGuiApplicationContext(ctx);
	};
	JkWidgetRenderableWidget.prototype.CTOR_JkWidgetRenderableWidget_JkUiGuiApplicationContext = function(ctx) {
		if(JkWidgetWidget.prototype.CTOR_JkWidgetWidget.call(this) == null) {
			return null;
		}
		this.renderer = null;
		this.context = null;
		this.renderContext = null;
		this.context = ctx;
		this.renderContext = JkUiRenderingContextForHTMLCanvas.forElement(this.element);
		return this;
	};
	JkWidgetRenderableWidget.forRenderer = function(ctx, renderer) {
		var v = JkWidgetRenderableWidget.NEW_JkUiGuiApplicationContext(ctx);
		v.setRenderer(renderer);
		return v;
	};
	JkWidgetRenderableWidget.prototype.createElement = function() {
		return JkUiHTMLDOM.createElement("canvas");
	};
	JkWidgetRenderableWidget.prototype.render = function(ctx) {
		if(this.renderer != null) {
			this.renderer.render(ctx, (JkWidgetWidget.getWidth(this)), (JkWidgetWidget.getHeight(this)));
		}
	};
	JkWidgetRenderableWidget.prototype.redraw = function() {
		var thisWidget = this;
		window.requestAnimationFrame(function() {
			thisWidget.render(thisWidget.renderContext);
		});
		;
	};
	JkWidgetRenderableWidget.prototype.onWidgetResized = function() {
		JkUiHTMLDOM.setAttribute(this.element, "width", (JkLangString.safeString((JkLangString.forInteger((JkWidgetWidget.getWidth(this))))) + "px"));
		JkUiHTMLDOM.setAttribute(this.element, "height", (JkLangString.safeString((JkLangString.forInteger((JkWidgetWidget.getHeight(this))))) + "px"));
		this.redraw();
	};
	JkWidgetRenderableWidget.prototype.onWidgetAddedToParent = function() {
	};
	JkWidgetRenderableWidget.prototype.onWidgetRemovedFromParent = function() {
	};
	JkWidgetRenderableWidget.prototype.onWidgetAddingToParent = function() {
	};
	JkWidgetRenderableWidget.prototype.getRenderer = function() {
		return this.renderer;
	};
	JkWidgetRenderableWidget.prototype.setRenderer = function(v) {
		this.renderer = v;
		return this;
	};
	JkWidgetRenderableWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetRenderableWidget"] === true;
	};
	let JkWidgetScrollerWidget = function() {
		JkWidgetWidget.call(this);
		this.widgetOnScrolledHandlerX = null;
		this.widgetOnScrolledHandlerY = null;
		this.widgetMaximumValueX = 1000.0;
		this.widgetMaximumValueY = 1000.0;
		this.layoutHeight = -1;
		this.layoutWidth = -1;
		this.heightChanged = false;
		this.valueX = 0.0;
		this.valueY = 0.0;
		this.currentScrollX = 0;
		this.currentScrollY = 0;
		this.lastScrollX = 0;
		this.lastScrollY = 0;
		this.nearEndX = false;
		this.nearEndY = false;
	};
	JkWidgetScrollerWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetWidget.prototype);
	JkWidgetScrollerWidget.prototype.constructor = JkWidgetScrollerWidget;
	JkWidgetScrollerWidget.prototype._t = {
		"JkWidgetWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetScrollerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetScrollerWidget.prototype._tobj = JkWidgetScrollerWidget;
	JkWidgetScrollerWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetScrollerWidget;
		return v.CTOR_JkWidgetScrollerWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetScrollerWidget.prototype.CTOR_JkWidgetScrollerWidget_JkUiGuiApplicationContext = function(context) {
		if(JkWidgetWidget.prototype.CTOR_JkWidgetWidget.call(this) == null) {
			return null;
		}
		this.nearEndY = false;
		this.nearEndX = false;
		this.lastScrollY = 0;
		this.lastScrollX = 0;
		this.currentScrollY = 0;
		this.currentScrollX = 0;
		this.valueY = 0.0;
		this.valueX = 0.0;
		this.heightChanged = false;
		this.layoutWidth = -1;
		this.layoutHeight = -1;
		this.widgetMaximumValueY = 1000.0;
		this.widgetMaximumValueX = 1000.0;
		this.widgetOnScrolledHandlerY = null;
		this.widgetOnScrolledHandlerX = null;
		return this;
	};
	JkWidgetScrollerWidget.forWidget = function(context, widget) {
		var v = JkWidgetScrollerWidget.NEW_JkUiGuiApplicationContext(context);
		v.addWidget(widget);
		return v;
	};
	JkWidgetScrollerWidget.prototype.createElement = function() {
		var v = JkUiHTMLDOM.createElement("div");
		JkUiHTMLDOM.addToClassList(v, "ScrollerWidget");
		return v;
	};
	JkWidgetScrollerWidget.prototype.prepareElement = function(element) {
		JkWidgetWidget.prototype.prepareElement.call(this, element);
		JkUiHTMLDOM.setStyle(element, "overflow", "scroll");
		JkUiHTMLDOM.addEventListener(element, "scroll", (function() {
			this.onScroll(element.scrollLeft, element.scrollTop);
		}.bind(this)));
	};
	JkWidgetScrollerWidget.createNoScrollBarStyle = function() {
		if(JkWidgetScrollerWidget.noScrollBarStyleCreated) {
			return;
		}
		var styleElement = JkUiHTMLDOM.createElement("style");
		var className = "." + "ScrollerWidget" + "WithNoScrollBar";
		var style = null;
		if(JkUiHTMLDOM.isWebKit()) {
			style = JkLangString.safeString(className) + "::-webkit-scrollbar { display: none; }";
		}
		else if(JkUiHTMLDOM.isFirefox()) {
			if(!JkUiHTMLDOM.isMobile()) {
				style = JkLangString.safeString(className) + " { overflow: hidden; }\n" + JkLangString.safeString(className) + ":hover { overflow: auto; }";
			}
		}
		if(style != null) {
			JkUiHTMLDOM.setTextContent(styleElement, style);
			JkUiHTMLDOM.appendChild((JkUiHTMLDOM.getDocumentHead()), styleElement);
		}
		JkWidgetScrollerWidget.noScrollBarStyleCreated = true;
	};
	JkWidgetScrollerWidget.prototype.onScroll = function(scrollX, scrollY) {
		this.currentScrollX = scrollX;
		var cw = JkWidgetWidget.getWidth((JkLangVector.get((JkWidgetWidget.getChildren(this)), 0)));
		this.valueX = this.currentScrollX / (cw - JkWidgetWidget.getWidth(this)) * this.widgetMaximumValueX;
		if(cw > 0) {
			this.nearEndX = cw - this.currentScrollX < JkWidgetWidget.getWidth(this) * 2;
		}
		if(this.widgetOnScrolledHandlerX != null && this.lastScrollX != this.currentScrollX) {
			this.widgetOnScrolledHandlerX((this.lastScrollX < this.currentScrollX ? 0 : 1));
			this.lastScrollX = this.currentScrollX;
		}
		this.currentScrollY = scrollY;
		var ch = JkWidgetWidget.getHeight((JkLangVector.get((JkWidgetWidget.getChildren(this)), 0)));
		this.valueY = scrollY / (ch - JkWidgetWidget.getHeight(this)) * this.widgetMaximumValueY;
		if(ch > 0) {
			this.nearEndY = ch - this.currentScrollY < JkWidgetWidget.getHeight(this) * 2;
		}
		if(this.widgetOnScrolledHandlerY != null && this.lastScrollY != this.currentScrollY) {
			this.widgetOnScrolledHandlerY((this.lastScrollY < this.currentScrollY ? 0 : 1));
			this.lastScrollY = this.currentScrollY;
		}
	};
	JkWidgetScrollerWidget.prototype.isNearEndX = function() {
		return this.nearEndX;
	};
	JkWidgetScrollerWidget.prototype.isNearEndY = function() {
		return this.nearEndY;
	};
	JkWidgetScrollerWidget.prototype.getValueX = function() {
		return this.valueX;
	};
	JkWidgetScrollerWidget.prototype.getValueY = function() {
		return this.valueY;
	};
	JkWidgetScrollerWidget.prototype.setWidgetScrollBarDisabled = function(value) {
		if(value) {
			JkWidgetScrollerWidget.createNoScrollBarStyle();
			JkUiHTMLDOM.setStyle(this.element, "-ms-overflow-style", "none");
			JkUiHTMLDOM.addToClassList(this.element, ("ScrollerWidget" + "WithNoScrollBar"));
		}
		else {
			JkUiHTMLDOM.setStyle(this.element, "-ms-overflow-style", "scrollbar");
			JkUiHTMLDOM.removeFromClassList(this.element, ("ScrollerWidget" + "WithNoScrollBar"));
		}
	};
	JkWidgetScrollerWidget.prototype.onWidgetHeightChanged = function(height) {
		var array = JkWidgetWidget.getChildren(this);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var child = array[n];
				if(child != null) {
					if(height > this.layoutHeight) {
						JkWidgetWidget.resizeHeight(child, height);
					}
					else {
						JkWidgetWidget.resizeHeight(child, this.layoutHeight);
					}
				}
			}
		}
		this.heightChanged = true;
	};
	JkWidgetScrollerWidget.prototype.setWidgetLayoutChanged = function() {
	};
	JkWidgetScrollerWidget.prototype.hasWidgetLayoutChanged = function() {
		return false;
	};
	JkWidgetScrollerWidget.prototype.layoutWidget = function(widthConstraint, force) {
		var mw = 0;
		var mh = 0;
		var array = JkWidgetWidget.getChildren(this);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var child = array[n];
				if(child != null) {
					JkWidgetWidget.move(child, 0, 0);
					JkWidgetWidget.layout(child, (-1), this.heightChanged);
					var cw = JkWidgetWidget.getWidth(child);
					var ch = JkWidgetWidget.getHeight(child);
					if(cw > mw) {
						mw = cw;
					}
					if(ch > mh) {
						mh = ch;
					}
				}
			}
		}
		var mh2 = mh;
		var eh = JkWidgetWidget.getHeight(this);
		if(eh > 0 && mh2 > eh) {
			mh2 = eh;
		}
		this.heightChanged = false;
		this.layoutHeight = mh;
		this.layoutWidth = mw;
		if(widthConstraint < 0) {
			JkWidgetWidget.setLayoutSize(this, mw, mh2);
		}
		else {
			JkWidgetWidget.setLayoutSize(this, widthConstraint, mh2);
		}
		return true;
	};
	JkWidgetScrollerWidget.prototype.addWidget = function(widget) {
		JkWidgetWidget.addChild(this, widget);
		return this;
	};
	JkWidgetScrollerWidget.prototype.getWidgetOnScrolledHandlerX = function() {
		return this.widgetOnScrolledHandlerX;
	};
	JkWidgetScrollerWidget.prototype.setWidgetOnScrolledHandlerX = function(v) {
		this.widgetOnScrolledHandlerX = v;
		return this;
	};
	JkWidgetScrollerWidget.prototype.getWidgetOnScrolledHandlerY = function() {
		return this.widgetOnScrolledHandlerY;
	};
	JkWidgetScrollerWidget.prototype.setWidgetOnScrolledHandlerY = function(v) {
		this.widgetOnScrolledHandlerY = v;
		return this;
	};
	JkWidgetScrollerWidget.prototype.getWidgetMaximumValueX = function() {
		return this.widgetMaximumValueX;
	};
	JkWidgetScrollerWidget.prototype.setWidgetMaximumValueX = function(v) {
		this.widgetMaximumValueX = v;
		return this;
	};
	JkWidgetScrollerWidget.prototype.getWidgetMaximumValueY = function() {
		return this.widgetMaximumValueY;
	};
	JkWidgetScrollerWidget.prototype.setWidgetMaximumValueY = function(v) {
		this.widgetMaximumValueY = v;
		return this;
	};
	JkWidgetScrollerWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetScrollerWidget"] === true;
	};
	JkWidgetScrollerWidget.noScrollBarStyleCreated = false;
	let JkWidgetTitleContainerWidget = {};
	JkWidgetTitleContainerWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetTitleContainerWidget"] === true;
	};
	let JkWidgetHorizontalScrollerWidget = function() {
		JkWidgetWidget.call(this);
		this.onScrolledHandler = null;
		this.layoutWidth = -1;
	};
	JkWidgetHorizontalScrollerWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetWidget.prototype);
	JkWidgetHorizontalScrollerWidget.prototype.constructor = JkWidgetHorizontalScrollerWidget;
	JkWidgetHorizontalScrollerWidget.prototype._t = {
		"JkWidgetHorizontalScrollerWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetHorizontalScrollerWidget.prototype._tobj = JkWidgetHorizontalScrollerWidget;
	JkWidgetHorizontalScrollerWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetHorizontalScrollerWidget;
		return v.CTOR_JkWidgetHorizontalScrollerWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetHorizontalScrollerWidget.prototype.CTOR_JkWidgetHorizontalScrollerWidget_JkUiGuiApplicationContext = function(context) {
		if(JkWidgetWidget.prototype.CTOR_JkWidgetWidget.call(this) == null) {
			return null;
		}
		this.layoutWidth = -1;
		this.onScrolledHandler = null;
		return this;
	};
	JkWidgetHorizontalScrollerWidget.prototype.createElement = function() {
		return JkUiHTMLDOM.createElement("div");
	};
	JkWidgetHorizontalScrollerWidget.prototype.prepareElement = function(element) {
		JkWidgetWidget.prototype.prepareElement.call(this, element);
		if(JkUiHTMLDOM.isFirefox() == false) {
			JkUiHTMLDOM.setStyle(element, "overflow-x", "scroll");
		}
		else {
			JkUiHTMLDOM.removeStyle(element, "overflow");
			JkUiHTMLDOM.setStyle(element, "overflow-y", "hidden");
		}
	};
	JkWidgetHorizontalScrollerWidget.createNoScrollBarStyle = function() {
		if(JkWidgetHorizontalScrollerWidget.noScrollBarStyleCreated) {
			return;
		}
		var styleElement = JkUiHTMLDOM.createElement("style");
		var className = "." + "HorizontalScrollerWidget" + "WithNoScrollBar";
		var style = null;
		if(JkUiHTMLDOM.isWebKit()) {
			style = JkLangString.safeString(className) + "::-webkit-scrollbar { display: none; }";
		}
		else if(JkUiHTMLDOM.isFirefox()) {
			style = JkLangString.safeString(className) + " { overflow-x: hidden; }\n" + JkLangString.safeString(className) + ":hover { overflow-x: auto; }";
		}
		if(style != null) {
			JkUiHTMLDOM.setTextContent(styleElement, style);
			JkUiHTMLDOM.appendChild((JkUiHTMLDOM.getDocumentHead()), styleElement);
		}
		JkWidgetHorizontalScrollerWidget.noScrollBarStyleCreated = true;
	};
	JkWidgetHorizontalScrollerWidget.forWidget = function(context, widget) {
		var v = JkWidgetHorizontalScrollerWidget.NEW_JkUiGuiApplicationContext(context);
		v.addWidget(widget);
		return v;
	};
	JkWidgetHorizontalScrollerWidget.prototype.setWidgetLayoutChanged = function() {
	};
	JkWidgetHorizontalScrollerWidget.prototype.hasWidgetLayoutChanged = function() {
		return false;
	};
	JkWidgetHorizontalScrollerWidget.prototype.layoutWidget = function(widthConstraint, force) {
		var mw = 0;
		var mh = 0;
		var array = JkWidgetWidget.getChildren(this);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var child = array[n];
				if(child != null) {
					JkWidgetWidget.move(child, 0, 0);
					JkWidgetWidget.layout(child, (-1), false);
					var childWidth = JkWidgetWidget.getWidth(child);
					var childHeight = JkWidgetWidget.getHeight(child);
					if(childWidth > mw) {
						mw = childWidth;
					}
					if(childHeight > mh) {
						mh = childHeight;
					}
				}
			}
		}
		this.layoutWidth = mw;
		if(widthConstraint < 0) {
			JkWidgetWidget.setLayoutSize(this, mw, mh);
		}
		else {
			JkWidgetWidget.setLayoutSize(this, widthConstraint, mh);
		}
		return true;
	};
	JkWidgetHorizontalScrollerWidget.prototype.addWidget = function(widget) {
		JkWidgetWidget.addChild(this, widget);
		return this;
	};
	JkWidgetHorizontalScrollerWidget.prototype.setWidgetScrollBarDisabled = function(value) {
		if(value) {
			JkWidgetHorizontalScrollerWidget.createNoScrollBarStyle();
			JkUiHTMLDOM.setStyle(this.element, "-ms-overflow-style", "none");
			JkUiHTMLDOM.addToClassList(this.element, ("HorizontalScrollerWidget" + "WithNoScrollBar"));
		}
		else {
			JkUiHTMLDOM.setStyle(this.element, "-ms-overflow-style", "scrollbar");
			JkUiHTMLDOM.removeFromClassList(this.element, ("HorizontalScrollerWidget" + "WithNoScrollBar"));
		}
	};
	JkWidgetHorizontalScrollerWidget.prototype.getOnScrolledHandler = function() {
		return this.onScrolledHandler;
	};
	JkWidgetHorizontalScrollerWidget.prototype.setOnScrolledHandler = function(v) {
		this.onScrolledHandler = v;
		return this;
	};
	JkWidgetHorizontalScrollerWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetHorizontalScrollerWidget"] === true;
	};
	JkWidgetHorizontalScrollerWidget.noScrollBarStyleCreated = false;
	let JkWidgetResponsiveWidget = function() {
		JkWidgetLayerWithBackgroundColorWidget.call(this);
		this.widgetNarrowWidth = 0;
		this.isNarrowInitialized = false;
		this.isWideInitialized = false;
	};
	JkWidgetResponsiveWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWithBackgroundColorWidget.prototype);
	JkWidgetResponsiveWidget.prototype.constructor = JkWidgetResponsiveWidget;
	JkWidgetResponsiveWidget.prototype._t = {
		"JkWidgetResizeAwareWidget" : true,
		"JkWidgetLayerWithBackgroundColorWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true,
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetResponsiveWidget" : true
	};
	JkWidgetResponsiveWidget.prototype._tobj = JkWidgetResponsiveWidget;
	JkWidgetResponsiveWidget.NEW_JkUiGuiApplicationContext = function(ctx) {
		var v = new JkWidgetResponsiveWidget;
		return v.CTOR_JkWidgetResponsiveWidget_JkUiGuiApplicationContext(ctx);
	};
	JkWidgetResponsiveWidget.prototype.CTOR_JkWidgetResponsiveWidget_JkUiGuiApplicationContext = function(ctx) {
		this.isWideInitialized = false;
		this.isNarrowInitialized = false;
		this.widgetNarrowWidth = 0;
		if(JkWidgetLayerWithBackgroundColorWidget.prototype.CTOR_JkWidgetLayerWithBackgroundColorWidget_JkUiGuiApplicationContext.call(this, ctx) == null) {
			return null;
		}
		return this;
	};
	JkWidgetResponsiveWidget.prototype.onWidgetResized = function() {
		if(this.widgetNarrowWidth <= 0) {
			this.widgetNarrowWidth = this.context.getHeightValue("150mm");
		}
		var width = JkWidgetWidget.getWidth(this);
		if(width < this.widgetNarrowWidth && !this.isNarrowInitialized) {
			this.onNarrowLayout();
			this.isNarrowInitialized = true;
			this.isWideInitialized = false;
		}
		else if(width > this.widgetNarrowWidth && !this.isWideInitialized) {
			this.onWideLayout();
			this.isWideInitialized = true;
			this.isNarrowInitialized = false;
		}
	};
	JkWidgetResponsiveWidget.prototype.onNarrowLayout = function() {
		this.checkForNarrow(this);
	};
	JkWidgetResponsiveWidget.prototype.onWideLayout = function() {
		this.checkForWide(this);
	};
	JkWidgetResponsiveWidget.prototype.checkForNarrow = function(widget) {
		if(JkWidgetResponsiveAwareWidget.IS_INSTANCE && JkWidgetResponsiveAwareWidget.IS_INSTANCE(widget)) {
			(function(o) {
				if(JkWidgetResponsiveAwareWidget.IS_INSTANCE && JkWidgetResponsiveAwareWidget.IS_INSTANCE(o)) {
					return o;
				}
				return null;
			}.bind(this))(widget).doNarrowLayout();
		}
		if(JkWidgetContainerWidget.IS_INSTANCE && JkWidgetContainerWidget.IS_INSTANCE(widget) || JkWidgetVerticalScrollerWidget.IS_INSTANCE && JkWidgetVerticalScrollerWidget.IS_INSTANCE(widget)) {
			var children = JkWidgetWidget.getChildren(widget);
			if(children != null) {
				var n = 0;
				var m = children.length;
				for(n = 0 ; n < m ; n++) {
					var child = children[n];
					if(child != null) {
						this.checkForNarrow(child);
					}
				}
			}
		}
	};
	JkWidgetResponsiveWidget.prototype.checkForWide = function(widget) {
		if(JkWidgetResponsiveAwareWidget.IS_INSTANCE && JkWidgetResponsiveAwareWidget.IS_INSTANCE(widget)) {
			(function(o) {
				if(JkWidgetResponsiveAwareWidget.IS_INSTANCE && JkWidgetResponsiveAwareWidget.IS_INSTANCE(o)) {
					return o;
				}
				return null;
			}.bind(this))(widget).doWideLayout();
		}
		if(JkWidgetContainerWidget.IS_INSTANCE && JkWidgetContainerWidget.IS_INSTANCE(widget) || JkWidgetVerticalScrollerWidget.IS_INSTANCE && JkWidgetVerticalScrollerWidget.IS_INSTANCE(widget)) {
			var children = JkWidgetWidget.getChildren(widget);
			if(children != null) {
				var n = 0;
				var m = children.length;
				for(n = 0 ; n < m ; n++) {
					var child = children[n];
					if(child != null) {
						this.checkForWide(child);
					}
				}
			}
		}
	};
	JkWidgetResponsiveWidget.prototype.getWidgetNarrowWidth = function() {
		return this.widgetNarrowWidth;
	};
	JkWidgetResponsiveWidget.prototype.setWidgetNarrowWidth = function(v) {
		this.widgetNarrowWidth = v;
		return this;
	};
	JkWidgetResponsiveWidget.prototype.getIsNarrowInitialized = function() {
		return this.isNarrowInitialized;
	};
	JkWidgetResponsiveWidget.prototype.setIsNarrowInitialized = function(v) {
		this.isNarrowInitialized = v;
		return this;
	};
	JkWidgetResponsiveWidget.prototype.getIsWideInitialized = function() {
		return this.isWideInitialized;
	};
	JkWidgetResponsiveWidget.prototype.setIsWideInitialized = function(v) {
		this.isWideInitialized = v;
		return this;
	};
	JkWidgetResponsiveWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetResponsiveWidget"] === true;
	};
	let JkWidgetIdAwareWidget = {};
	JkWidgetIdAwareWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetIdAwareWidget"] === true;
	};
	let JkWidgetStaticWidgetProvider = function() {
		this.widgets = null;
		this.current = 0;
	};
	JkWidgetStaticWidgetProvider.prototype._t = {
		"JkWidgetWidgetProvider" : true,
		"JkWidgetStaticWidgetProvider" : true
	};
	JkWidgetStaticWidgetProvider.prototype._tobj = JkWidgetStaticWidgetProvider;
	JkWidgetStaticWidgetProvider.NEW = function() {
		var v = new JkWidgetStaticWidgetProvider;
		return v.CTOR_JkWidgetStaticWidgetProvider();
	};
	JkWidgetStaticWidgetProvider.prototype.CTOR_JkWidgetStaticWidgetProvider = function() {
		this.current = 0;
		this.widgets = null;
		return this;
	};
	JkWidgetStaticWidgetProvider.forWidgets = function(widgets) {
		var v = JkWidgetStaticWidgetProvider.NEW();
		v.setWidgets(widgets);
		return v;
	};
	JkWidgetStaticWidgetProvider.prototype.getNextWidget = function() {
		if(!(this.widgets != null)) {
			return null;
		}
		var v = JkLangVector.get(this.widgets, this.current);
		if(v != null) {
			this.current++;
		}
		return v;
	};
	JkWidgetStaticWidgetProvider.prototype.getTotalCount = function() {
		return JkLangVector.getSize(this.widgets);
	};
	JkWidgetStaticWidgetProvider.prototype.reset = function() {
		this.current = 0;
	};
	JkWidgetStaticWidgetProvider.prototype.getWidgets = function() {
		return this.widgets;
	};
	JkWidgetStaticWidgetProvider.prototype.setWidgets = function(v) {
		this.widgets = v;
		return this;
	};
	JkWidgetStaticWidgetProvider.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetStaticWidgetProvider"] === true;
	};
	let JkWebWebClient = function() {
		this.followRedirects = true;
		this.credentialsEnabled = false;
	};
	JkWebWebClient.prototype._t = { "JkWebWebClient" : true };
	JkWebWebClient.prototype._tobj = JkWebWebClient;
	JkWebWebClient.NEW = function() {
		var v = new JkWebWebClient;
		return v.CTOR_JkWebWebClient();
	};
	JkWebWebClient.prototype.CTOR_JkWebWebClient = function() {
		this.credentialsEnabled = false;
		this.followRedirects = true;
		return this;
	};
	JkWebWebClient.prototype.query = function(method, url, headers, body, callback) {
	};
	JkWebWebClient.prototype.getFollowRedirects = function() {
		return this.followRedirects;
	};
	JkWebWebClient.prototype.setFollowRedirects = function(v) {
		this.followRedirects = v;
		return this;
	};
	JkWebWebClient.prototype.getCredentialsEnabled = function() {
		return this.credentialsEnabled;
	};
	JkWebWebClient.prototype.setCredentialsEnabled = function(v) {
		this.credentialsEnabled = v;
		return this;
	};
	JkWebWebClient.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWebWebClient"] === true;
	};
	let JkWebWebClientForJavaScript = function() {
		JkWebWebClient.call(this);
	};
	JkWebWebClientForJavaScript.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWebWebClient.prototype);
	JkWebWebClientForJavaScript.prototype.constructor = JkWebWebClientForJavaScript;
	JkWebWebClientForJavaScript.prototype._t = {
		"JkWebWebClientForJavaScript" : true,
		"JkWebWebClient" : true
	};
	JkWebWebClientForJavaScript.prototype._tobj = JkWebWebClientForJavaScript;
	JkWebWebClientForJavaScript.NEW = function() {
		var v = new JkWebWebClientForJavaScript;
		return v.CTOR_JkWebWebClientForJavaScript();
	};
	JkWebWebClientForJavaScript.prototype.CTOR_JkWebWebClientForJavaScript = function() {
		if(JkWebWebClient.prototype.CTOR_JkWebWebClient.call(this) == null) {
			return null;
		}
		return this;
	};
	JkWebWebClientForJavaScript.prototype.query = function(method, url, requestHeaders, body, callback) {
		if(JkLangString.isEmpty(method) || JkLangString.isEmpty(url)) {
			callback(null, null, null);
			return;
		}
		if(JkLangString.startsWith(url, "/", 0) == false && JkLangString.startsWith(url, "http://", 0) == false && JkLangString.startsWith(url, "https://", 0) == false) {
			callback(null, null, null);
			return;
		}
		this.send(method, url, requestHeaders, body, callback);
	};
	JkWebWebClientForJavaScript.prototype.getXMLHttpRequestObject = function() {
		var xhr = null;
		if(typeof XMLHttpRequest === "undefined") {
			XMLHttpRequest = function() {
				try {
					return new ActiveXObject("Msxml2.XMLHTTP.6.0");
				}
				catch(e) {
				}
				try {
					return new ActiveXObject("Msxml2.XMLHTTP.3.0");
				}
				catch(e) {
				}
				try {
					return new ActiveXObject("Microsoft.XMLHTTP");
				}
				catch(e) {
				}
				throw new Error("This browser does not support XMLHttpRequest.");
			};
		}
		xhr = new XMLHttpRequest();
		;
		return xhr;
	};
	JkWebWebClientForJavaScript.prototype.onResponseReceived = function(status, responseHeaders, body, callback) {
		var nhdrs = JkLangKeyValueList.NEW();
		var siter = JkLangString.iterate(responseHeaders);
		var sbldr = JkLangStringBuilder.NEW();
		while(true){
			var c = siter.getNextChar();
			if(c < 1) {
				break;
			}
			if(c == "\r".charCodeAt()) {
				continue;
			}
			if(c == "\n".charCodeAt()) {
				var str = sbldr.toString();
				sbldr.clear();
				var spt = JkLangString.split(str, (":".charCodeAt()), 2);
				var key = JkLangVector.get(spt, 0);
				var val = JkLangVector.get(spt, 1);
				if(JkLangString.isNotEmpty(key) && JkLangString.isNotEmpty(val)) {
					nhdrs.add(key, (JkLangString.strip(val)));
				}
				continue;
			}
			sbldr.appendCharacter(c);
		}
		callback(status, nhdrs, body);
	};
	JkWebWebClientForJavaScript.prototype.send = function(method, url, requestHeaders, body, callback) {
		var withCredentials = this.getCredentialsEnabled();
		var xhr = this.getXMLHttpRequestObject();
		xhr.open(method, url, true);
		xhr.timeout = 30000;
		xhr.responseType = "arraybuffer";
		xhr.withCredentials = withCredentials;
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				this.onResponseReceived(("" + xhr.status), (xhr.getAllResponseHeaders()), xhr.response, callback);
			}
		}.bind(this);
		;
		if(requestHeaders != null) {
			var iter = requestHeaders.iterate();
			while(true){
				var kv = (function(o) {
					if(JkLangKeyValuePair.IS_INSTANCE && JkLangKeyValuePair.IS_INSTANCE(o)) {
						return o;
					}
					return null;
				}.bind(this))((iter.next()));
				if(kv == null) {
					break;
				}
				var k = kv.key;
				var v = kv.value;
				xhr.setRequestHeader(k, v);
				;
			}
		}
		if(body != null) {
			xhr.send((new Uint8Array(body)));
			;
		}
		else {
			xhr.send();
			;
		}
	};
	JkWebWebClientForJavaScript.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWebWebClientForJavaScript"] === true;
	};
	let JkWebNativeWebClient = function() {
	};
	JkWebNativeWebClient.prototype._t = { "JkWebNativeWebClient" : true };
	JkWebNativeWebClient.prototype._tobj = JkWebNativeWebClient;
	JkWebNativeWebClient.NEW = function() {
		var v = new JkWebNativeWebClient;
		return v.CTOR_JkWebNativeWebClient();
	};
	JkWebNativeWebClient.prototype.CTOR_JkWebNativeWebClient = function() {
		return this;
	};
	JkWebNativeWebClient.instance = function() {
		return JkWebWebClientForJavaScript.NEW();
	};
	JkWebNativeWebClient.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWebNativeWebClient"] === true;
	};
	let JkWebWebClientAsyncForJavaScriptResponse = function() {
		this.httpStatus = null;
		this.httpStatusDescription = null;
		this.headers = null;
		this.body = null;
		this.bodyAsString = null;
		this.bodyAsDynamicMap = null;
	};
	JkWebWebClientAsyncForJavaScriptResponse.prototype._t = { "JkWebWebClientAsyncForJavaScriptResponse" : true };
	JkWebWebClientAsyncForJavaScriptResponse.prototype._tobj = JkWebWebClientAsyncForJavaScriptResponse;
	JkWebWebClientAsyncForJavaScriptResponse.NEW = function() {
		var v = new JkWebWebClientAsyncForJavaScriptResponse;
		return v.CTOR_JkWebWebClientAsyncForJavaScriptResponse();
	};
	JkWebWebClientAsyncForJavaScriptResponse.prototype.CTOR_JkWebWebClientAsyncForJavaScriptResponse = function() {
		this.bodyAsDynamicMap = null;
		this.bodyAsString = null;
		this.body = null;
		this.headers = null;
		this.httpStatusDescription = null;
		this.httpStatus = null;
		return this;
	};
	JkWebWebClientAsyncForJavaScriptResponse.prototype.getBodyAsBuffer = function() {
		if(!(this.body != null)) {
			JkLangError._throw("httpRequestError", "noBody");
		}
		return this.body;
	};
	JkWebWebClientAsyncForJavaScriptResponse.prototype.getBodyAsString = function() {
		if(this.bodyAsString != null) {
			return this.bodyAsString;
		}
		var v = JkLangString.forUTF8Buffer((this.getBodyAsBuffer()));
		if(!(v != null)) {
			JkLangError._throw("httpRequestError", "notString");
		}
		this.bodyAsString = v;
		return v;
	};
	JkWebWebClientAsyncForJavaScriptResponse.prototype.getBodyAsDynamicMap = function() {
		if(this.bodyAsDynamicMap != null) {
			return this.bodyAsDynamicMap;
		}
		var v = (function(o) {
			if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))((JkJsonJSONParser.parseString((this.getBodyAsString()))));
		if(!(v != null)) {
			JkLangError._throw("httpRequestError", "notJsonMap");
		}
		this.bodyAsDynamicMap = v;
		return v;
	};
	JkWebWebClientAsyncForJavaScriptResponse.prototype.getHttpStatus = function() {
		return this.httpStatus;
	};
	JkWebWebClientAsyncForJavaScriptResponse.prototype.setHttpStatus = function(v) {
		this.httpStatus = v;
		return this;
	};
	JkWebWebClientAsyncForJavaScriptResponse.prototype.getHttpStatusDescription = function() {
		return this.httpStatusDescription;
	};
	JkWebWebClientAsyncForJavaScriptResponse.prototype.setHttpStatusDescription = function(v) {
		this.httpStatusDescription = v;
		return this;
	};
	JkWebWebClientAsyncForJavaScriptResponse.prototype.getHeaders = function() {
		return this.headers;
	};
	JkWebWebClientAsyncForJavaScriptResponse.prototype.setHeaders = function(v) {
		this.headers = v;
		return this;
	};
	JkWebWebClientAsyncForJavaScriptResponse.prototype.getBody = function() {
		return this.body;
	};
	JkWebWebClientAsyncForJavaScriptResponse.prototype.setBody = function(v) {
		this.body = v;
		return this;
	};
	JkWebWebClientAsyncForJavaScriptResponse.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWebWebClientAsyncForJavaScriptResponse"] === true;
	};
	let JkWebWebClientAsyncForJavaScript = function() {
		this.followRedirects = true;
		this.credentialsEnabled = false;
	};
	JkWebWebClientAsyncForJavaScript.prototype._t = { "JkWebWebClientAsyncForJavaScript" : true };
	JkWebWebClientAsyncForJavaScript.prototype._tobj = JkWebWebClientAsyncForJavaScript;
	JkWebWebClientAsyncForJavaScript.NEW = function() {
		var v = new JkWebWebClientAsyncForJavaScript;
		return v.CTOR_JkWebWebClientAsyncForJavaScript();
	};
	JkWebWebClientAsyncForJavaScript.prototype.CTOR_JkWebWebClientAsyncForJavaScript = function() {
		this.credentialsEnabled = false;
		this.followRedirects = true;
		return this;
	};
	JkWebWebClientAsyncForJavaScript.prototype.getXMLHttpRequestObject = function() {
		var xhr = null;
		if(typeof XMLHttpRequest === "undefined") {
			XMLHttpRequest = function() {
				try {
					return new ActiveXObject("Msxml2.XMLHTTP.6.0");
				}
				catch(e) {
				}
				try {
					return new ActiveXObject("Msxml2.XMLHTTP.3.0");
				}
				catch(e) {
				}
				try {
					return new ActiveXObject("Microsoft.XMLHTTP");
				}
				catch(e) {
				}
				throw new Error("This browser does not support XMLHttpRequest.");
			};
		}
		xhr = new XMLHttpRequest();
		;
		return xhr;
	};
	JkWebWebClientAsyncForJavaScript.prototype.executeRequest = async function(method, url, headers, body) {
		var withCredentials = this.credentialsEnabled;
		var xhr = this.getXMLHttpRequestObject();
		return new Promise((resolve, reject) => {
			xhr.open(method, url, true);
			xhr.timeout = 30000;
			xhr.responseType = "arraybuffer";
			xhr.withCredentials = withCredentials;
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4) {
					var rr = new JkWebWebClientAsyncForJavaScriptResponse();
					rr.setHttpStatus(xhr.status);
					rr.setBody(xhr.response);
					resolve(rr);
				}
			}.bind(this);
			;
			if(headers != null) {
				var iter = headers.iterate();
				while(true){
					var kv = (function(o) {
						if(JkLangKeyValuePair.IS_INSTANCE && JkLangKeyValuePair.IS_INSTANCE(o)) {
							return o;
						}
						return null;
					}.bind(this))((iter.next()));
					if(kv == null) {
						break;
					}
					var k = kv.key;
					var v = kv.value;
					xhr.setRequestHeader(k, v);
					;
				}
			}
			if(body != null) {
				xhr.send((new Uint8Array(body)));
				;
			}
			else {
				xhr.send();
				;
			}
		});
	};
	JkWebWebClientAsyncForJavaScript.prototype.getFollowRedirects = function() {
		return this.followRedirects;
	};
	JkWebWebClientAsyncForJavaScript.prototype.setFollowRedirects = function(v) {
		this.followRedirects = v;
		return this;
	};
	JkWebWebClientAsyncForJavaScript.prototype.getCredentialsEnabled = function() {
		return this.credentialsEnabled;
	};
	JkWebWebClientAsyncForJavaScript.prototype.setCredentialsEnabled = function(v) {
		this.credentialsEnabled = v;
		return this;
	};
	JkWebWebClientAsyncForJavaScript.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWebWebClientAsyncForJavaScript"] === true;
	};
	let JkWebJsonJSONAPIClient = function() {
		this.credentialsEnabled = false;
		this.redirectionEnabled = false;
		this.redirectionLimit = 5;
		this.apiUrl = null;
		this.webClient = null;
		this.debugCallback = null;
	};
	JkWebJsonJSONAPIClient.prototype._t = { "JkWebJsonJSONAPIClient" : true };
	JkWebJsonJSONAPIClient.prototype._tobj = JkWebJsonJSONAPIClient;
	JkWebJsonJSONAPIClient.NEW = function() {
		var v = new JkWebJsonJSONAPIClient;
		return v.CTOR_JkWebJsonJSONAPIClient();
	};
	JkWebJsonJSONAPIClient.prototype.CTOR_JkWebJsonJSONAPIClient = function() {
		this.debugCallback = null;
		this.webClient = null;
		this.apiUrl = null;
		this.redirectionLimit = 5;
		this.redirectionEnabled = false;
		this.credentialsEnabled = false;
		return this;
	};
	JkWebJsonJSONAPIClient.prototype.getFullURL = function(api) {
		var url = this.apiUrl;
		if(JkLangString.isEmpty(url)) {
			url = "/";
		}
		if(url == "/") {
			if(JkLangString.startsWith(api, "/", 0)) {
				return api;
			}
			return JkLangString.safeString(url) + JkLangString.safeString(api);
		}
		if(JkLangString.endsWith(url, "/")) {
			if(JkLangString.startsWith(api, "/", 0)) {
				return JkLangString.safeString(url) + JkLangString.safeString((JkLangString.getEndOfString(api, 1)));
			}
			return JkLangString.safeString(url) + JkLangString.safeString(api);
		}
		if(JkLangString.startsWith(api, "/", 0)) {
			return JkLangString.safeString(url) + JkLangString.safeString(api);
		}
		return JkLangString.safeString(url) + "/" + JkLangString.safeString(api);
	};
	JkWebJsonJSONAPIClient.prototype.toUTF8Buffer = function(data) {
		if(!(data != null)) {
			return null;
		}
		return JkLangString.toUTF8Buffer((JkJsonJSONEncoder.encode(data, true, false)));
	};
	JkWebJsonJSONAPIClient.prototype.customizeRequestHeaders = function(headers) {
	};
	JkWebJsonJSONAPIClient.prototype.onStartSendRequest = function() {
	};
	JkWebJsonJSONAPIClient.prototype.onEndSendRequest = function() {
	};
	JkWebJsonJSONAPIClient.prototype.onDefaultErrorHandler = function(error) {
	};
	JkWebJsonJSONAPIClient.prototype.handleAsError = function(response, callback) {
		var error = this.toError(response);
		if(error != null) {
			this.onError1(error, callback);
			return true;
		}
		return false;
	};
	JkWebJsonJSONAPIClient.prototype.toError = function(response) {
		if(!(response != null)) {
			return JkLangError.forCode("noServerResponse", null);
		}
		if(response.getString("status", null) == "error") {
			var v = JkLangError.NEW();
			var code = response.getString("code", null);
			if(JkLangString.isEmpty(code)) {
				code = response.getString("error", null);
			}
			v.setCode(code);
			var detail = response.getString("detail", null);
			if(JkLangString.isEmpty(detail)) {
				detail = response.getString("message", null);
			}
			v.setDetail(detail);
			return v;
		}
		return null;
	};
	JkWebJsonJSONAPIClient.prototype.onError1 = function(error, callback) {
		if(!(callback != null)) {
			this.onDefaultErrorHandler(error);
			return;
		}
		callback(error);
	};
	JkWebJsonJSONAPIClient.prototype.onError2 = function(error) {
		this.onError1(error, null);
	};
	JkWebJsonJSONAPIClient.prototype.sendRequest = function(method, url, headers, data, callback, errorCallback) {
		if(!(callback != null)) {
			return;
		}
		var ll = callback;
		var ecb = errorCallback;
		this.doSendRequest(method, url, headers, data, (function(responseHeaders1, body1) {
			if(!(body1 != null && JkLangBuffer.getSize(body1) > 0)) {
				this.onError1((JkLangError.forCode("requestFailed", null)), ecb);
				return;
			}
			var responseString = JkLangString.forUTF8Buffer(body1);
			if(this.debugCallback != null) {
				this.debugCallback(("Received response: `" + JkLangString.safeString(responseString) + "'"));
			}
			var jsonResponseBody = (function(o) {
				if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
					return o;
				}
				return null;
			}.bind(this))((JkJsonJSONParser.parseString(responseString)));
			if(!(jsonResponseBody != null)) {
				this.onError1((JkLangError.forCode("invalidServerResponse", null)), ecb);
				return;
			}
			if(!this.handleAsError(jsonResponseBody, ecb)) {
				ll(jsonResponseBody);
			}
		}.bind(this)), ecb, 0);
	};
	JkWebJsonJSONAPIClient.prototype.doSendRequest = function(method, url, headers, data, callback, errorCallback, redirectCount) {
		if(!(callback != null)) {
			return;
		}
		if(!(redirectCount <= this.redirectionLimit)) {
			this.onError1((JkLangError.forCode("tooManyRedirections", null)), errorCallback);
			return;
		}
		var hrs = headers;
		if(!(hrs != null)) {
			hrs = JkLangKeyValueList.NEW();
			hrs.add("Content-Type", "application/json");
		}
		if(!(this.webClient != null)) {
			this.webClient = JkWebNativeWebClient.instance();
		}
		if(!(this.webClient != null)) {
			this.onError1((JkLangError.forCode("noWebClient", null)), errorCallback);
			return;
		}
		this.webClient.setCredentialsEnabled(this.credentialsEnabled);
		this.customizeRequestHeaders(hrs);
		var hrsf = hrs;
		var cb = callback;
		var ecb = errorCallback;
		var urlf = url;
		var dataf = data;
		var methodf = method;
		this.onStartSendRequest();
		if(this.debugCallback != null) {
			this.debugCallback(("Sending request: `" + JkLangString.safeString((JkLangString.forUTF8Buffer(data))) + "'"));
		}
		var rdc = redirectCount;
		this.webClient.query(methodf, urlf, hrsf, dataf, (function(statusCode1, responseHeaders1, body1) {
			this.onEndSendRequest();
			if(this.redirectionEnabled) {
				var code = JkLangString.toInteger(statusCode1);
				if(code >= 300 && code <= 399 && responseHeaders1 != null) {
					var location = null;
					var rhs = responseHeaders1.asVector();
					if(rhs != null) {
						var n2 = 0;
						var m = rhs.length;
						for(n2 = 0 ; n2 < m ; n2++) {
							var kvp = rhs[n2];
							if(kvp != null) {
								if(JkLangString.equalsIgnoreCase(kvp.key, "Location")) {
									location = kvp.value;
									break;
								}
							}
						}
					}
					if(JkLangString.isNotEmpty(location)) {
						if(!JkLangString.startsWith(location, "http", 0)) {
							location = this.getFullURL(location);
						}
						var o = JkUrlURL.forString(urlf, false);
						var n = JkUrlURL.forString(location, false);
						if(o != null && n != null && JkLangString.equalsIgnoreCase((o.getHost()), (n.getHost())) && !(o.getPort() == n.getPort())) {
							n.setPort((o.getPort()));
							location = n.toString();
						}
						this.doSendRequest(methodf, location, hrsf, dataf, cb, ecb, (rdc + 1));
						return;
					}
				}
			}
			if(!(body1 != null && JkLangBuffer.getSize(body1) > 0)) {
				this.onError1((JkLangError.forCode("failedToConnect", null)), ecb);
				return;
			}
			cb(responseHeaders1, body1);
		}.bind(this)));
	};
	JkWebJsonJSONAPIClient.prototype.doGetFile = function(url, callback, errorCallback) {
		this.doSendRequest("GET", (this.getFullURL(url)), null, null, callback, errorCallback, 0);
	};
	JkWebJsonJSONAPIClient.prototype.doGet = function(url, callback, errorCallback) {
		this.sendRequest("GET", (this.getFullURL(url)), null, null, callback, errorCallback);
	};
	JkWebJsonJSONAPIClient.prototype.doPost = function(url, data, callback, errorCallback) {
		this.sendRequest("POST", (this.getFullURL(url)), null, (this.toUTF8Buffer(data)), callback, errorCallback);
	};
	JkWebJsonJSONAPIClient.prototype.doPut = function(url, data, callback, errorCallback) {
		this.sendRequest("PUT", (this.getFullURL(url)), null, (this.toUTF8Buffer(data)), callback, errorCallback);
	};
	JkWebJsonJSONAPIClient.prototype.doDelete = function(url, callback, errorCallback) {
		this.sendRequest("DELETE", (this.getFullURL(url)), null, null, callback, errorCallback);
	};
	JkWebJsonJSONAPIClient.prototype.uploadFile = function(url, data, mimeType, callback, errorCallback) {
		var mt = mimeType;
		if(JkLangString.isEmpty(mt)) {
			mt = "application/octet-stream";
		}
		var hdrs = JkLangKeyValueList.NEW();
		hdrs.add("content-type", mt);
		this.sendRequest("POST", (this.getFullURL(url)), hdrs, data, callback, errorCallback);
	};
	JkWebJsonJSONAPIClient.prototype.getWithStatus = function(url, callback) {
		var cb = callback;
		var okcb = function(v1) {
			var data = v1.getDynamicMap("data");
			if(data == null) {
				data = JkLangDynamicMap.NEW();
			}
			cb(data, null);
		}.bind(this);
		var errcb = function(err1) {
			cb(null, err1);
		}.bind(this);
		this.sendRequest("GET", (this.getFullURL(url)), null, null, okcb, errcb);
	};
	JkWebJsonJSONAPIClient.prototype.postWithStatus = function(url, data1, headers, callback) {
		var cb = callback;
		var okcb = function(v1) {
			var data = v1.getDynamicMap("data");
			if(data == null) {
				data = JkLangDynamicMap.NEW();
			}
			cb(data, null);
		}.bind(this);
		var errcb = function(err1) {
			cb(null, err1);
		}.bind(this);
		this.sendRequest("POST", (this.getFullURL(url)), headers, (this.toUTF8Buffer(data1)), okcb, errcb);
	};
	JkWebJsonJSONAPIClient.prototype.getCredentialsEnabled = function() {
		return this.credentialsEnabled;
	};
	JkWebJsonJSONAPIClient.prototype.setCredentialsEnabled = function(v) {
		this.credentialsEnabled = v;
		return this;
	};
	JkWebJsonJSONAPIClient.prototype.getRedirectionEnabled = function() {
		return this.redirectionEnabled;
	};
	JkWebJsonJSONAPIClient.prototype.setRedirectionEnabled = function(v) {
		this.redirectionEnabled = v;
		return this;
	};
	JkWebJsonJSONAPIClient.prototype.getRedirectionLimit = function() {
		return this.redirectionLimit;
	};
	JkWebJsonJSONAPIClient.prototype.setRedirectionLimit = function(v) {
		this.redirectionLimit = v;
		return this;
	};
	JkWebJsonJSONAPIClient.prototype.getApiUrl = function() {
		return this.apiUrl;
	};
	JkWebJsonJSONAPIClient.prototype.setApiUrl = function(v) {
		this.apiUrl = v;
		return this;
	};
	JkWebJsonJSONAPIClient.prototype.getWebClient = function() {
		return this.webClient;
	};
	JkWebJsonJSONAPIClient.prototype.setWebClient = function(v) {
		this.webClient = v;
		return this;
	};
	JkWebJsonJSONAPIClient.prototype.getDebugCallback = function() {
		return this.debugCallback;
	};
	JkWebJsonJSONAPIClient.prototype.setDebugCallback = function(v) {
		this.debugCallback = v;
		return this;
	};
	JkWebJsonJSONAPIClient.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWebJsonJSONAPIClient"] === true;
	};
	let JkWidgetCommonAutoSuggestInputWidgetMyContainerWidget = function() {
		JkWidgetContainerWidget.call(this);
		this.widget = null;
	};
	JkWidgetCommonAutoSuggestInputWidgetMyContainerWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetContainerWidget.prototype);
	JkWidgetCommonAutoSuggestInputWidgetMyContainerWidget.prototype.constructor = JkWidgetCommonAutoSuggestInputWidgetMyContainerWidget;
	JkWidgetCommonAutoSuggestInputWidgetMyContainerWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetCommonAutoSuggestInputWidgetMyContainerWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonAutoSuggestInputWidgetMyContainerWidget.prototype._tobj = JkWidgetCommonAutoSuggestInputWidgetMyContainerWidget;
	JkWidgetCommonAutoSuggestInputWidgetMyContainerWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonAutoSuggestInputWidgetMyContainerWidget;
		return v.CTOR_JkWidgetCommonAutoSuggestInputWidgetMyContainerWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonAutoSuggestInputWidgetMyContainerWidget.prototype.CTOR_JkWidgetCommonAutoSuggestInputWidgetMyContainerWidget_JkUiGuiApplicationContext = function(context) {
		this.widget = null;
		if(JkWidgetContainerWidget.prototype.CTOR_JkWidgetContainerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonAutoSuggestInputWidgetMyContainerWidget.prototype.onWidgetHeightChanged = function(height) {
		var array = JkWidgetWidget.getChildren(this);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var child = array[n];
				if(child != null) {
					JkWidgetWidget.move(child, (JkWidgetWidget.getAbsoluteX(this.widget)), (JkWidgetWidget.getAbsoluteY(this.widget)));
				}
			}
		}
	};
	JkWidgetCommonAutoSuggestInputWidgetMyContainerWidget.prototype.computeWidgetLayout = function(widthConstraint) {
		var array = JkWidgetWidget.getChildren(this);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var child = array[n];
				if(child != null) {
					JkWidgetWidget.layout(child, (JkWidgetWidget.getWidth(this.widget)), false);
					JkWidgetWidget.move(child, (JkWidgetWidget.getAbsoluteX(this.widget)), (JkWidgetWidget.getAbsoluteY(this.widget)));
				}
			}
		}
		JkWidgetWidget.setLayoutSize(this, widthConstraint, (JkWidgetWidget.getHeight(this)));
	};
	JkWidgetCommonAutoSuggestInputWidgetMyContainerWidget.prototype.getWidget = function() {
		return this.widget;
	};
	JkWidgetCommonAutoSuggestInputWidgetMyContainerWidget.prototype.setWidget = function(v) {
		this.widget = v;
		return this;
	};
	JkWidgetCommonAutoSuggestInputWidgetMyContainerWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonAutoSuggestInputWidgetMyContainerWidget"] === true;
	};
	let JkWidgetCommonTextInputWidget = function() {
		JkWidgetWidget.call(this);
		this.widgetContext = null;
		this.widgetType = 0;
		this.widgetPlaceholder = null;
		this.widgetText = null;
		this.widgetFontUnderline = false;
		this.widgetFontItalic = false;
		this.widgetFontBold = false;
		this.widgetTextAlign = 0;
		this.widgetPaddingLeft = 0;
		this.widgetPaddingTop = 0;
		this.widgetPaddingRight = 0;
		this.widgetPaddingBottom = 0;
		this.widgetFontFamily = null;
		this.widgetFontResource = null;
		this.widgetFontSize = 0.0;
		this.widgetTextColor = null;
		this.widgetBackgroundColor = null;
		this.widgetIsEnabled = true;
		this.widgetTextChangeHandler = null;
		this.widgetOnEnterKeyPressed = null;
		this.widgetOnArrowUpKeyPressed = null;
		this.widgetOnArrowDownKeyPressed = null;
		this.widgetOnFocusHandler = null;
		this.widgetOnLoseFocusHandler = null;
	};
	JkWidgetCommonTextInputWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetWidget.prototype);
	JkWidgetCommonTextInputWidget.prototype.constructor = JkWidgetCommonTextInputWidget;
	JkWidgetCommonTextInputWidget.prototype._t = {
		"JkWidgetWidgetWithValue" : true,
		"JkWidgetCommonTextInputWidget" : true,
		"JkWidgetWidget" : true
	};
	JkWidgetCommonTextInputWidget.prototype._tobj = JkWidgetCommonTextInputWidget;
	JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonTextInputWidget;
		return v.CTOR_JkWidgetCommonTextInputWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonTextInputWidget.prototype.CTOR_JkWidgetCommonTextInputWidget_JkUiGuiApplicationContext = function(context) {
		if(JkWidgetWidget.prototype.CTOR_JkWidgetWidget.call(this) == null) {
			return null;
		}
		this.widgetOnLoseFocusHandler = null;
		this.widgetOnFocusHandler = null;
		this.widgetOnArrowDownKeyPressed = null;
		this.widgetOnArrowUpKeyPressed = null;
		this.widgetOnEnterKeyPressed = null;
		this.widgetTextChangeHandler = null;
		this.widgetIsEnabled = true;
		this.widgetBackgroundColor = null;
		this.widgetTextColor = null;
		this.widgetFontSize = 0.0;
		this.widgetFontResource = null;
		this.widgetFontFamily = null;
		this.widgetPaddingBottom = 0;
		this.widgetPaddingRight = 0;
		this.widgetPaddingTop = 0;
		this.widgetPaddingLeft = 0;
		this.widgetTextAlign = 0;
		this.widgetFontBold = false;
		this.widgetFontItalic = false;
		this.widgetFontUnderline = false;
		this.widgetText = null;
		this.widgetPlaceholder = null;
		this.widgetType = 0;
		this.widgetContext = null;
		JkUiHTMLDOM.setStyle(this.element, "outline-width", "0");
		this.widgetContext = context;
		this.setWidgetStyle("TextInputWidget");
		return this;
	};
	JkWidgetCommonTextInputWidget.forType = function(context, type, placeholder) {
		var v = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetType(type);
		v.setWidgetPlaceholder(placeholder);
		return v;
	};
	JkWidgetCommonTextInputWidget.prototype.createElement = function() {
		return JkUiHTMLDOM.createElement("input");
	};
	JkWidgetCommonTextInputWidget.prototype.prepareElement = function(v) {
		JkWidgetWidget.prototype.prepareElement.call(this, v);
		JkUiHTMLDOM.setStyle(v, "box-sizing", "border-box");
		JkUiHTMLDOM.setStyle(v, "border", "0");
		JkUiHTMLDOM.addEventListener(this.element, "input", (function() {
			this.onChangeListener();
		}.bind(this)));
		JkUiHTMLDOM.addEventListener(this.element, "focus", (function() {
			this.onFocusListener();
		}.bind(this)));
		JkUiHTMLDOM.addEventListener(this.element, "blur", (function() {
			this.onLoseFocusListener();
		}.bind(this)));
		this.element.addEventListener("keydown", (function(e) {
			var k = e.which || e.keyCode;
			if(k == 13) {
				this.onEnterKeyListener();
			}
			else if(k == 38) {
				this.onArrowUpKeyListener();
			}
			else if(k == 40) {
				this.onArrowDownKeyListener();
			}
		}.bind(this)));
		;
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetStyle = function(style) {
		this.widgetFontFamily = this.widgetContext.getStyleString(style, "fontFamily", null);
		if(JkLangString.isEmpty(this.widgetFontFamily)) {
			this.widgetFontFamily = "Arial";
		}
		this.widgetFontSize = this.widgetContext.getStylePixels(style, "fontSize", null);
		if(this.widgetFontSize < 1.0) {
			this.widgetFontSize = this.widgetContext.getHeightValue("3mm");
		}
		var fr = this.widgetContext.getStyleString(style, "fontResource", null);
		if(JkLangString.isNotEmpty(fr)) {
			this.setWidgetFontResource(fr);
		}
		this.widgetTextColor = this.widgetContext.getStyleColor(style, "textColor", null);
		this.widgetBackgroundColor = this.widgetContext.getStyleColor(style, "backgroundColor", null);
		this.setWidgetPadding1((this.widgetContext.getStylePixels(style, "padding", null)));
		this.updateWidgetFont();
		this.updateWidgetColors();
		return this;
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetTextColor = function(color) {
		this.widgetTextColor = color;
		this.updateWidgetColors();
		return this;
	};
	JkWidgetCommonTextInputWidget.prototype.getWidgetTextColor = function() {
		return this.widgetTextColor;
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetBackgroundColor = function(color) {
		this.widgetBackgroundColor = color;
		this.updateWidgetColors();
		return this;
	};
	JkWidgetCommonTextInputWidget.prototype.getWidgetBackgroundColor = function() {
		return this.widgetBackgroundColor;
	};
	JkWidgetCommonTextInputWidget.prototype.updateWidgetColors = function() {
		var textColor = this.widgetTextColor;
		if(textColor == null) {
			if(this.widgetBackgroundColor != null) {
				if(this.widgetBackgroundColor.isLightColor()) {
					textColor = JkGfxColor.black();
				}
				else {
					textColor = JkGfxColor.white();
				}
			}
			else {
				textColor = JkGfxColor.black();
			}
		}
		if(this.widgetBackgroundColor == null) {
			JkUiHTMLDOM.setStyle(this.element, "background-color", "rgba(0,0,0,0)");
		}
		else {
			JkUiHTMLDOM.setStyle(this.element, "background-color", (JkUiHTMLDOM.colorToRGBA(this.widgetBackgroundColor)));
		}
		JkUiHTMLDOM.setStyle(this.element, "color", (JkUiHTMLDOM.colorToRGBA(textColor)));
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetType = function(type) {
		this.widgetType = type;
		if(this.widgetType == JkWidgetCommonTextInputWidget.TYPE_DEFAULT) {
			JkUiHTMLDOM.setAttribute(this.element, "type", "text");
		}
		else if(this.widgetType == JkWidgetCommonTextInputWidget.TYPE_NONASSISTED) {
			JkUiHTMLDOM.setAttribute(this.element, "type", "text");
		}
		else if(this.widgetType == JkWidgetCommonTextInputWidget.TYPE_NAME) {
			JkUiHTMLDOM.setAttribute(this.element, "type", "text");
		}
		else if(this.widgetType == JkWidgetCommonTextInputWidget.TYPE_EMAIL_ADDRESS) {
			JkUiHTMLDOM.setAttribute(this.element, "type", "email");
		}
		else if(this.widgetType == JkWidgetCommonTextInputWidget.TYPE_URL) {
			JkUiHTMLDOM.setAttribute(this.element, "type", "url");
		}
		else if(this.widgetType == JkWidgetCommonTextInputWidget.TYPE_PHONE_NUMBER) {
			JkUiHTMLDOM.setAttribute(this.element, "type", "tel");
		}
		else if(this.widgetType == JkWidgetCommonTextInputWidget.TYPE_PASSWORD) {
			JkUiHTMLDOM.setAttribute(this.element, "type", "password");
		}
		else if(this.widgetType == JkWidgetCommonTextInputWidget.TYPE_INTEGER) {
			JkUiHTMLDOM.setAttribute(this.element, "type", "number");
		}
		else if(this.widgetType == JkWidgetCommonTextInputWidget.TYPE_FLOAT) {
			JkUiHTMLDOM.setAttribute(this.element, "type", "text");
		}
		else if(this.widgetType == JkWidgetCommonTextInputWidget.TYPE_STREET_ADDRESS) {
			JkUiHTMLDOM.setAttribute(this.element, "type", "text");
		}
		else {
			JkUiHTMLDOM.setAttribute(this.element, "type", "text");
		}
		this.updateWidgetFont();
		return this;
	};
	JkWidgetCommonTextInputWidget.prototype.getWidgetType = function() {
		return this.widgetType;
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetText = function(text) {
		this.widgetText = text;
		this.element.value = text;
		;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetCommonTextInputWidget.prototype.getWidgetText = function() {
		return JkUiHTMLDOM.getValue(this.element);
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetPlaceholder = function(placeholder) {
		this.widgetPlaceholder = placeholder;
		JkUiHTMLDOM.setAttribute(this.element, "placeholder", placeholder);
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetCommonTextInputWidget.prototype.getWidgetPlaceholder = function() {
		return this.widgetPlaceholder;
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetFontBold = function(bold) {
		this.widgetFontBold = bold;
		this.updateWidgetFont();
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetFontUnderline = function(underline) {
		this.widgetFontUnderline = underline;
		this.updateWidgetFont();
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetFontItalic = function(italic) {
		this.widgetFontItalic = italic;
		this.updateWidgetFont();
	};
	JkWidgetCommonTextInputWidget.prototype.getWidgetFontUnderline = function() {
		return this.widgetFontUnderline;
	};
	JkWidgetCommonTextInputWidget.prototype.getWidgetFontItalic = function() {
		return this.widgetFontItalic;
	};
	JkWidgetCommonTextInputWidget.prototype.getWidgetFontBold = function() {
		return this.widgetFontBold;
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetPadding1 = function(padding) {
		this.setWidgetPadding3(padding, padding, padding, padding);
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetPadding2 = function(x, y) {
		this.setWidgetPadding3(x, y, x, y);
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetPadding3 = function(l, t, r, b) {
		if(l < 0 || t < 0 || r < 0 || b < 0) {
			return this;
		}
		if(this.widgetPaddingLeft == l && this.widgetPaddingTop == t && this.widgetPaddingRight == r && this.widgetPaddingBottom == b) {
			return this;
		}
		this.widgetPaddingLeft = l;
		this.widgetPaddingTop = t;
		this.widgetPaddingRight = r;
		this.widgetPaddingBottom = b;
		this.updateWidgetPadding();
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetCommonTextInputWidget.prototype.updateWidgetPadding = function() {
		JkUiHTMLDOM.setStyle(this.element, "padding", (JkLangString.safeString((JkLangString.forInteger(this.widgetPaddingTop))) + "px " + JkLangString.safeString((JkLangString.forInteger(this.widgetPaddingRight))) + "px " + JkLangString.safeString((JkLangString.forInteger(this.widgetPaddingBottom))) + "px " + JkLangString.safeString((JkLangString.forInteger(this.widgetPaddingLeft))) + "px"));
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetFontFamily = function(family) {
		this.widgetFontFamily = family;
		this.updateWidgetFont();
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetFontResource = function(res) {
		this.widgetFontResource = res;
		this.updateWidgetFont();
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetFontSize = function(fontSize) {
		this.widgetFontSize = fontSize;
		this.updateWidgetFont();
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetCommonTextInputWidget.prototype.updateWidgetFont = function() {
		JkUiHTMLDOM.setFontFamily(this.element, this.widgetFontFamily);
		JkUiHTMLDOM.setStyle(this.element, "font-size", (JkLangString.safeString((JkLangString.forDouble(this.widgetFontSize))) + "px"));
		if(this.widgetFontBold) {
			JkUiHTMLDOM.setStyle(this.element, "font-weight", "bold");
		}
		if(this.widgetFontItalic) {
			JkUiHTMLDOM.setStyle(this.element, "font-style", "italic");
		}
		if(this.widgetFontUnderline) {
			JkUiHTMLDOM.setStyle(this.element, "text-decoration", "underline");
		}
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetIsEnabled = function(v) {
		this.widgetIsEnabled = v;
		if(this.widgetIsEnabled) {
			JkUiHTMLDOM.setAttribute(this.element, "disabled", null);
		}
		else {
			JkUiHTMLDOM.setAttribute(this.element, "disabled", "disabled");
		}
	};
	JkWidgetCommonTextInputWidget.prototype.getWidgetIsEnabled = function() {
		return this.widgetIsEnabled;
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetValue = function(value) {
		var v = JkLangString.asString(value);
		if(!(v != null)) {
			v = "";
		}
		this.setWidgetText(v);
	};
	JkWidgetCommonTextInputWidget.prototype.getWidgetValue = function() {
		return this.getWidgetText();
	};
	JkWidgetCommonTextInputWidget.prototype.onChangeListener = function() {
		if(this.widgetTextChangeHandler != null) {
			this.widgetTextChangeHandler();
		}
	};
	JkWidgetCommonTextInputWidget.prototype.onEnterKeyListener = function() {
		if(this.widgetOnEnterKeyPressed != null) {
			this.widgetOnEnterKeyPressed();
		}
	};
	JkWidgetCommonTextInputWidget.prototype.onArrowUpKeyListener = function() {
		if(this.widgetOnArrowUpKeyPressed != null) {
			this.widgetOnArrowUpKeyPressed();
		}
	};
	JkWidgetCommonTextInputWidget.prototype.onArrowDownKeyListener = function() {
		if(this.widgetOnArrowDownKeyPressed != null) {
			this.widgetOnArrowDownKeyPressed();
		}
	};
	JkWidgetCommonTextInputWidget.prototype.onFocusListener = function() {
		if(this.widgetOnFocusHandler != null) {
			this.widgetOnFocusHandler();
		}
	};
	JkWidgetCommonTextInputWidget.prototype.onLoseFocusListener = function() {
		if(this.widgetOnLoseFocusHandler != null) {
			this.widgetOnLoseFocusHandler();
		}
	};
	JkWidgetCommonTextInputWidget.prototype.focus = function() {
		JkUiHTMLDOM.setFocus(this.element);
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetTextAlign = function(align) {
		this.widgetTextAlign = align;
		if(align == JkWidgetCommonTextInputWidget.ALIGN_LEFT) {
			JkUiHTMLDOM.setStyle(this.element, "text-align", "left");
		}
		else if(align == JkWidgetCommonTextInputWidget.ALIGN_RIGHT) {
			JkUiHTMLDOM.setStyle(this.element, "text-align", "right");
		}
		else {
			JkUiHTMLDOM.setStyle(this.element, "text-align", "left");
		}
		return this;
	};
	JkWidgetCommonTextInputWidget.prototype.getWidgetTextAlign = function() {
		return this.widgetTextAlign;
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetMaxLength = function(v) {
		JkUiHTMLDOM.setAttribute(this.element, "maxlength", (JkLangString.forInteger(v)));
		return this;
	};
	JkWidgetCommonTextInputWidget.prototype.getWidgetTextChangeHandler = function() {
		return this.widgetTextChangeHandler;
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetTextChangeHandler = function(v) {
		this.widgetTextChangeHandler = v;
		return this;
	};
	JkWidgetCommonTextInputWidget.prototype.getWidgetOnEnterKeyPressed = function() {
		return this.widgetOnEnterKeyPressed;
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetOnEnterKeyPressed = function(v) {
		this.widgetOnEnterKeyPressed = v;
		return this;
	};
	JkWidgetCommonTextInputWidget.prototype.getWidgetOnArrowUpKeyPressed = function() {
		return this.widgetOnArrowUpKeyPressed;
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetOnArrowUpKeyPressed = function(v) {
		this.widgetOnArrowUpKeyPressed = v;
		return this;
	};
	JkWidgetCommonTextInputWidget.prototype.getWidgetOnArrowDownKeyPressed = function() {
		return this.widgetOnArrowDownKeyPressed;
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetOnArrowDownKeyPressed = function(v) {
		this.widgetOnArrowDownKeyPressed = v;
		return this;
	};
	JkWidgetCommonTextInputWidget.prototype.getWidgetOnFocusHandler = function() {
		return this.widgetOnFocusHandler;
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetOnFocusHandler = function(v) {
		this.widgetOnFocusHandler = v;
		return this;
	};
	JkWidgetCommonTextInputWidget.prototype.getWidgetOnLoseFocusHandler = function() {
		return this.widgetOnLoseFocusHandler;
	};
	JkWidgetCommonTextInputWidget.prototype.setWidgetOnLoseFocusHandler = function(v) {
		this.widgetOnLoseFocusHandler = v;
		return this;
	};
	JkWidgetCommonTextInputWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonTextInputWidget"] === true;
	};
	JkWidgetCommonTextInputWidget.TYPE_DEFAULT = 0;
	JkWidgetCommonTextInputWidget.TYPE_NONASSISTED = 1;
	JkWidgetCommonTextInputWidget.TYPE_NAME = 2;
	JkWidgetCommonTextInputWidget.TYPE_EMAIL_ADDRESS = 3;
	JkWidgetCommonTextInputWidget.TYPE_URL = 4;
	JkWidgetCommonTextInputWidget.TYPE_PHONE_NUMBER = 5;
	JkWidgetCommonTextInputWidget.TYPE_PASSWORD = 6;
	JkWidgetCommonTextInputWidget.TYPE_INTEGER = 7;
	JkWidgetCommonTextInputWidget.TYPE_FLOAT = 8;
	JkWidgetCommonTextInputWidget.TYPE_STREET_ADDRESS = 9;
	JkWidgetCommonTextInputWidget.ALIGN_LEFT = 0;
	JkWidgetCommonTextInputWidget.ALIGN_RIGHT = 1;
	JkWidgetCommonTextInputWidget.ALIGN_CENTER = 2;
	let JkWidgetCommonVerticalScrollerWithToolbarWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.autohideToolbar = false;
		this.widgetContent = null;
		this.widgetToolbar = null;
		this.shown = true;
	};
	JkWidgetCommonVerticalScrollerWithToolbarWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonVerticalScrollerWithToolbarWidget.prototype.constructor = JkWidgetCommonVerticalScrollerWithToolbarWidget;
	JkWidgetCommonVerticalScrollerWithToolbarWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetCommonVerticalScrollerWithToolbarWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonVerticalScrollerWithToolbarWidget.prototype._tobj = JkWidgetCommonVerticalScrollerWithToolbarWidget;
	JkWidgetCommonVerticalScrollerWithToolbarWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonVerticalScrollerWithToolbarWidget;
		return v.CTOR_JkWidgetCommonVerticalScrollerWithToolbarWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonVerticalScrollerWithToolbarWidget.prototype.CTOR_JkWidgetCommonVerticalScrollerWithToolbarWidget_JkUiGuiApplicationContext = function(context) {
		this.shown = true;
		this.widgetToolbar = null;
		this.widgetContent = null;
		this.autohideToolbar = false;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonVerticalScrollerWithToolbarWidget.prototype.initializeWidget = function() {
		JkWidgetLayerWidget.prototype.initializeWidget.call(this);
		var scroller = JkWidgetVerticalScrollerWidget.forWidget(this.context, this.widgetContent);
		scroller.setOnScrolledHandler((function(direction1) {
			if(this.autohideToolbar) {
				if(direction1 == 0 && this.shown == true) {
					this.hideToolbar();
					this.shown = false;
				}
				else if(direction1 == 1 && this.shown == false) {
					this.showToolbar();
					this.shown = true;
				}
			}
		}.bind(this)));
		if(this.autohideToolbar) {
			this.addWidget(scroller);
			var align = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
			align.addWidget1(this.widgetToolbar, 0, 1.0, true);
			this.addWidget(align);
		}
		else {
			var vbox = JkWidgetVerticalBoxWidget.forContext(this.context, 0, 0);
			vbox.addWidget1(scroller, 1.0);
			vbox.addWidget(this.widgetToolbar);
			this.addWidget(vbox);
		}
	};
	JkWidgetCommonVerticalScrollerWithToolbarWidget.prototype.showToolbar = function() {
		var sy = JkWidgetWidget.getHeight(this.widgetToolbar);
		var y = JkWidgetWidget.getY(this.widgetToolbar);
		var targety = JkWidgetWidget.getHeight(this) - sy;
		var anim = JkWidgetWidgetAnimation.forDuration(this.context, 250);
		anim.addCallback((function(completion1) {
			var dy = y - ~(~(completion1 * sy));
			if(dy < targety) {
				dy = targety;
			}
			JkWidgetWidget.move(this.widgetToolbar, 0, dy);
		}.bind(this)));
		anim.setEndListener((function() {
			this.shown = true;
		}.bind(this)));
		anim.start();
	};
	JkWidgetCommonVerticalScrollerWithToolbarWidget.prototype.hideToolbar = function() {
		var sy = JkWidgetWidget.getHeight(this.widgetToolbar);
		var y = JkWidgetWidget.getY(this.widgetToolbar);
		var targety = JkWidgetWidget.getHeight(this);
		var anim = JkWidgetWidgetAnimation.forDuration(this.context, 250);
		anim.addCallback((function(completion1) {
			var dy = y + ~(~(completion1 * sy));
			if(dy > targety) {
				dy = targety;
			}
			JkWidgetWidget.move(this.widgetToolbar, 0, dy);
		}.bind(this)));
		anim.setEndListener((function() {
			this.shown = false;
		}.bind(this)));
		anim.start();
	};
	JkWidgetCommonVerticalScrollerWithToolbarWidget.prototype.getAutohideToolbar = function() {
		return this.autohideToolbar;
	};
	JkWidgetCommonVerticalScrollerWithToolbarWidget.prototype.setAutohideToolbar = function(v) {
		this.autohideToolbar = v;
		return this;
	};
	JkWidgetCommonVerticalScrollerWithToolbarWidget.prototype.getWidgetContent = function() {
		return this.widgetContent;
	};
	JkWidgetCommonVerticalScrollerWithToolbarWidget.prototype.setWidgetContent = function(v) {
		this.widgetContent = v;
		return this;
	};
	JkWidgetCommonVerticalScrollerWithToolbarWidget.prototype.getWidgetToolbar = function() {
		return this.widgetToolbar;
	};
	JkWidgetCommonVerticalScrollerWithToolbarWidget.prototype.setWidgetToolbar = function(v) {
		this.widgetToolbar = v;
		return this;
	};
	JkWidgetCommonVerticalScrollerWithToolbarWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonVerticalScrollerWithToolbarWidget"] === true;
	};
	let JkWidgetCommonTopMarginLayerWidget = function() {
		JkWidgetLayerWidget.call(this);
	};
	JkWidgetCommonTopMarginLayerWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonTopMarginLayerWidget.prototype.constructor = JkWidgetCommonTopMarginLayerWidget;
	JkWidgetCommonTopMarginLayerWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetCommonTopMarginLayerWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonTopMarginLayerWidget.prototype._tobj = JkWidgetCommonTopMarginLayerWidget;
	JkWidgetCommonTopMarginLayerWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonTopMarginLayerWidget;
		return v.CTOR_JkWidgetCommonTopMarginLayerWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonTopMarginLayerWidget.prototype.CTOR_JkWidgetCommonTopMarginLayerWidget_JkUiGuiApplicationContext = function(context) {
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonTopMarginLayerWidget.prototype.computeWidgetLayout = function(widthConstraint) {
		this.widgetMarginTop = this.context.getScreenTopMargin();
		JkWidgetLayerWidget.prototype.computeWidgetLayout.call(this, widthConstraint);
	};
	JkWidgetCommonTopMarginLayerWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonTopMarginLayerWidget"] === true;
	};
	let JkWidgetCommonSidebarWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.widgetBackgroundColor = null;
		this.defaultActionItemWidgetBackgroundColor = null;
		this.defaultActionItemWidgetTextColor = null;
		this.defaultLabelItemWidgetBackgroundColor = null;
		this.defaultLabelItemWidgetTextColor = null;
		this.widgetItems = null;
		this.widgetScrollEnabled = true;
	};
	JkWidgetCommonSidebarWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonSidebarWidget.prototype.constructor = JkWidgetCommonSidebarWidget;
	JkWidgetCommonSidebarWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetCommonSidebarWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonSidebarWidget.prototype._tobj = JkWidgetCommonSidebarWidget;
	JkWidgetCommonSidebarWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonSidebarWidget;
		return v.CTOR_JkWidgetCommonSidebarWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonSidebarWidget.prototype.CTOR_JkWidgetCommonSidebarWidget_JkUiGuiApplicationContext = function(context) {
		this.widgetScrollEnabled = true;
		this.widgetItems = null;
		this.defaultLabelItemWidgetTextColor = null;
		this.defaultLabelItemWidgetBackgroundColor = null;
		this.defaultActionItemWidgetTextColor = null;
		this.defaultActionItemWidgetBackgroundColor = null;
		this.widgetBackgroundColor = null;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonSidebarWidget.forItems = function(ctx, items, color) {
		var v = JkWidgetCommonSidebarWidget.NEW_JkUiGuiApplicationContext(ctx);
		v.setWidgetBackgroundColor(color);
		v.setWidgetItems(items);
		return v;
	};
	JkWidgetCommonSidebarWidget.prototype.addToWidgetItems = function(widget) {
		if(!(widget != null)) {
			return;
		}
		if(this.widgetItems == null) {
			this.widgetItems = new Array;
		}
		this.widgetItems.push(widget);
	};
	JkWidgetCommonSidebarWidget.prototype.determineBackgroundColor = function() {
		var wc = this.widgetBackgroundColor;
		if(wc == null) {
			wc = JkGfxColor.white();
		}
		return wc;
	};
	JkWidgetCommonSidebarWidget.prototype.determineTextColor = function(backgroundColor, textColor, defaultTextColor, lowerBackgroundColor) {
		var tc = textColor;
		if(tc == null) {
			tc = defaultTextColor;
		}
		if(tc == null) {
			var cc = lowerBackgroundColor;
			if(cc == null) {
				cc = this.determineBackgroundColor();
			}
			if(cc.isDarkColor()) {
				tc = JkGfxColor.white();
			}
			else {
				tc = JkGfxColor.black();
			}
		}
		return tc;
	};
	JkWidgetCommonSidebarWidget.prototype.addLabelItem = function(text, bold, backgroundColor, textColor) {
		var v = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		var bgc = backgroundColor;
		if(bgc == null) {
			bgc = this.defaultLabelItemWidgetBackgroundColor;
		}
		var tc = this.determineTextColor(backgroundColor, textColor, this.defaultLabelItemWidgetTextColor, bgc);
		if(bgc != null) {
			v.addWidget((JkWidgetCanvasWidget.forColor(this.context, bgc)));
		}
		var mm3 = this.context.getHeightValue("3mm");
		var lbl = JkWidgetLabelWidget.forText(this.context, text);
		lbl.setWidgetFontSize(mm3);
		lbl.setWidgetTextColor(tc);
		lbl.setWidgetFontBold(bold);
		v.addWidget((JkWidgetLayerWidget.forWidget(this.context, lbl, mm3)));
		this.addToWidgetItems(v);
		return this;
	};
	JkWidgetCommonSidebarWidget.prototype.addActionItem = function(text, handler, bold, backgroundColor, textColor) {
		var v = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		var bgc = backgroundColor;
		if(bgc == null) {
			bgc = this.defaultActionItemWidgetBackgroundColor;
		}
		var tc = this.determineTextColor(backgroundColor, textColor, this.defaultActionItemWidgetTextColor, bgc);
		if(bgc != null) {
			v.addWidget((JkWidgetCanvasWidget.forColor(this.context, bgc)));
		}
		var mm3 = this.context.getHeightValue("3mm");
		var lbl = JkWidgetLabelWidget.forText(this.context, text);
		lbl.setWidgetFontSize(mm3);
		lbl.setWidgetTextColor(tc);
		lbl.setWidgetFontBold(bold);
		v.addWidget((JkWidgetLayerWidget.forWidget(this.context, lbl, mm3)));
		if(handler != null) {
			JkWidgetWidget.setWidgetClickHandler(v, handler);
		}
		JkUiHTMLDOM.setStyle(v.element, "cursor", "pointer");
		this.addToWidgetItems(v);
		return this;
	};
	JkWidgetCommonSidebarWidget.prototype.initializeWidget = function() {
		JkWidgetLayerWidget.prototype.initializeWidget.call(this);
		var wc = this.determineBackgroundColor();
		this.addWidget((JkWidgetCanvasWidget.forColor(this.context, wc)));
		var vbox = JkWidgetVerticalBoxWidget.forContext(this.context, 0, 0);
		if(JkLangVector.isEmpty(this.widgetItems) == false) {
			if(this.widgetItems != null) {
				var n = 0;
				var m = this.widgetItems.length;
				for(n = 0 ; n < m ; n++) {
					var item = this.widgetItems[n];
					if(item != null) {
						vbox.addWidget(item);
					}
				}
			}
		}
		this.applyScroller((JkWidgetLayerWidget.forWidgetAndWidth(this.context, vbox, (this.context.getWidthValue("50mm")))));
	};
	JkWidgetCommonSidebarWidget.prototype.applyScroller = function(widget) {
		if(!(widget != null)) {
			return;
		}
		if(!this.widgetScrollEnabled) {
			this.addWidget(widget);
		}
		else {
			var scroller = JkWidgetVerticalScrollerWidget.forWidget(this.context, widget);
			scroller.setWidgetScrollBarDisabled(true);
			this.addWidget(scroller);
		}
	};
	JkWidgetCommonSidebarWidget.prototype.getWidgetBackgroundColor = function() {
		return this.widgetBackgroundColor;
	};
	JkWidgetCommonSidebarWidget.prototype.setWidgetBackgroundColor = function(v) {
		this.widgetBackgroundColor = v;
		return this;
	};
	JkWidgetCommonSidebarWidget.prototype.getDefaultActionItemWidgetBackgroundColor = function() {
		return this.defaultActionItemWidgetBackgroundColor;
	};
	JkWidgetCommonSidebarWidget.prototype.setDefaultActionItemWidgetBackgroundColor = function(v) {
		this.defaultActionItemWidgetBackgroundColor = v;
		return this;
	};
	JkWidgetCommonSidebarWidget.prototype.getDefaultActionItemWidgetTextColor = function() {
		return this.defaultActionItemWidgetTextColor;
	};
	JkWidgetCommonSidebarWidget.prototype.setDefaultActionItemWidgetTextColor = function(v) {
		this.defaultActionItemWidgetTextColor = v;
		return this;
	};
	JkWidgetCommonSidebarWidget.prototype.getDefaultLabelItemWidgetBackgroundColor = function() {
		return this.defaultLabelItemWidgetBackgroundColor;
	};
	JkWidgetCommonSidebarWidget.prototype.setDefaultLabelItemWidgetBackgroundColor = function(v) {
		this.defaultLabelItemWidgetBackgroundColor = v;
		return this;
	};
	JkWidgetCommonSidebarWidget.prototype.getDefaultLabelItemWidgetTextColor = function() {
		return this.defaultLabelItemWidgetTextColor;
	};
	JkWidgetCommonSidebarWidget.prototype.setDefaultLabelItemWidgetTextColor = function(v) {
		this.defaultLabelItemWidgetTextColor = v;
		return this;
	};
	JkWidgetCommonSidebarWidget.prototype.getWidgetItems = function() {
		return this.widgetItems;
	};
	JkWidgetCommonSidebarWidget.prototype.setWidgetItems = function(v) {
		this.widgetItems = v;
		return this;
	};
	JkWidgetCommonSidebarWidget.prototype.getWidgetScrollEnabled = function() {
		return this.widgetScrollEnabled;
	};
	JkWidgetCommonSidebarWidget.prototype.setWidgetScrollEnabled = function(v) {
		this.widgetScrollEnabled = v;
		return this;
	};
	JkWidgetCommonSidebarWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonSidebarWidget"] === true;
	};
	let JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget = function() {
		JkWidgetHorizontalBoxWidget.call(this);
		this.widgetIndex = 0;
		this.widgetContainer = null;
		this.widgetColor = null;
		this.widgetOutLineColor = null;
		this.widgetText = null;
		this.widgetFontSize = 0;
		this.widgetFontResource = null;
		this.widgetFontFamily = null;
		this.widgetFontBold = false;
		this.widgetTextColor = null;
		this.enabled = true;
		this.radio = null;
		this.outline = null;
		this.canvas = null;
		this.label = null;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetHorizontalBoxWidget.prototype);
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.constructor = JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget;
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget" : true,
		"JkWidgetWidgetWithLayout" : true,
		"JkWidgetWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetHorizontalBoxWidget" : true
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype._tobj = JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget;
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget;
		return v.CTOR_JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.CTOR_JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget_JkUiGuiApplicationContext = function(context) {
		this.label = null;
		this.canvas = null;
		this.outline = null;
		this.radio = null;
		this.enabled = true;
		this.widgetTextColor = null;
		this.widgetFontBold = false;
		this.widgetFontFamily = null;
		this.widgetFontResource = null;
		this.widgetFontSize = 0;
		this.widgetText = null;
		this.widgetOutLineColor = null;
		this.widgetColor = null;
		this.widgetContainer = null;
		this.widgetIndex = 0;
		if(JkWidgetHorizontalBoxWidget.prototype.CTOR_JkWidgetHorizontalBoxWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.initializeWidget = function() {
		JkWidgetHorizontalBoxWidget.prototype.initializeWidget.call(this);
		this.label.setWidgetText(this.widgetText);
		this.label.setWidgetFontSize(this.widgetFontSize);
		if(this.widgetFontResource != null) {
			this.label.setWidgetFontResource(this.widgetFontResource);
		}
		if(this.widgetFontFamily != null) {
			this.label.setWidgetFontFamily(this.widgetFontFamily);
		}
		if(this.widgetFontBold) {
			this.label.setWidgetFontBold(true);
		}
		if(this.widgetTextColor != null) {
			this.label.setWidgetTextColor(this.widgetTextColor);
		}
		if(!(this.widgetOutLineColor != null)) {
			this.widgetOutLineColor = JkGfxColor.black();
		}
		this.outline.setWidgetColor(this.widgetOutLineColor);
		this.outline.setWidgetRoundingRadius1((this.context.getHeightValue("2000um")));
		this.canvas.setWidgetColor((JkGfxColor.white()));
		this.canvas.setWidgetRoundingRadius1((this.context.getHeightValue("1500um")));
		JkWidgetWidget.setWidgetClickHandler(this.radio, (function() {
			if(this.enabled) {
				this.widgetContainer.updateSelectedWidget(this.widgetIndex);
			}
		}.bind(this)));
		JkWidgetWidget.setWidgetClickHandler(this.label, (function() {
			if(this.enabled) {
				this.widgetContainer.updateSelectedWidget(this.widgetIndex);
			}
		}.bind(this)));
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.setWidgetEnabled = function(v) {
		this.enabled = v;
		if(!this.enabled) {
			JkWidgetWidget.setAlpha(this, 0.5);
		}
		else {
			JkWidgetWidget.setAlpha(this, 1.0);
		}
		return this;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.onSelected = function() {
		if(!(this.widgetColor != null)) {
			this.widgetColor = JkGfxColor.black();
		}
		this.canvas.setWidgetColor(this.widgetColor);
		this.canvas.setWidgetRoundingRadius1((this.context.getHeightValue("1500um")));
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.onDeSelected = function() {
		this.canvas.setWidgetColor((JkGfxColor.white()));
		this.canvas.setWidgetRoundingRadius1((this.context.getHeightValue("1500um")));
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.createWidget = function() {
		JkWidgetHorizontalBoxWidget.prototype.createWidget.call(this);
		var thisWidget = this;
		this.setWidgetSpacing((this.context.getHeightValue("2000um")));
		var widget = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.radio = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.radio.setWidgetHeightRequest((this.context.getHeightValue("4000um")));
		this.radio.setWidgetWidthRequest((this.context.getHeightValue("4000um")));
		this.outline = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.radio.addWidget(this.outline);
		var widget2 = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		widget2.setWidgetMargin((this.context.getHeightValue("500um")));
		this.canvas = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
		widget2.addWidget(this.canvas);
		this.radio.addWidget(widget2);
		widget.addWidget(this.radio);
		this.addWidget(widget);
		this.label = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.addWidget(this.label);
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.getWidgetIndex = function() {
		return this.widgetIndex;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.setWidgetIndex = function(v) {
		this.widgetIndex = v;
		return this;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.getWidgetContainer = function() {
		return this.widgetContainer;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.setWidgetContainer = function(v) {
		this.widgetContainer = v;
		return this;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.getWidgetColor = function() {
		return this.widgetColor;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.setWidgetColor = function(v) {
		this.widgetColor = v;
		return this;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.getWidgetOutLineColor = function() {
		return this.widgetOutLineColor;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.setWidgetOutLineColor = function(v) {
		this.widgetOutLineColor = v;
		return this;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.getWidgetText = function() {
		return this.widgetText;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.setWidgetText = function(v) {
		this.widgetText = v;
		return this;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.getWidgetFontSize = function() {
		return this.widgetFontSize;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.setWidgetFontSize = function(v) {
		this.widgetFontSize = v;
		return this;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.getWidgetFontResource = function() {
		return this.widgetFontResource;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.setWidgetFontResource = function(v) {
		this.widgetFontResource = v;
		return this;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.getWidgetFontFamily = function() {
		return this.widgetFontFamily;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.setWidgetFontFamily = function(v) {
		this.widgetFontFamily = v;
		return this;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.getWidgetFontBold = function() {
		return this.widgetFontBold;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.setWidgetFontBold = function(v) {
		this.widgetFontBold = v;
		return this;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.getWidgetTextColor = function() {
		return this.widgetTextColor;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.prototype.setWidgetTextColor = function(v) {
		this.widgetTextColor = v;
		return this;
	};
	JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget"] === true;
	};
	let JkWidgetCommonRadioButtonWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.selectedWidgetIndex = -1;
		this.vrb = null;
		this.widgetItems = null;
		this.widgetFontSize = 0;
		this.widgetFontResource = null;
		this.widgetFontFamily = null;
		this.widgetTextColor = null;
		this.widgetFontBold = false;
		this.widgetOnSelectedColor = null;
		this.widgetOutlineColor = null;
		this.widgetOrientation = JkWidgetCommonRadioButtonWidget.VERTICAL;
		this.widgetClickHandler = null;
	};
	JkWidgetCommonRadioButtonWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonRadioButtonWidget.prototype.constructor = JkWidgetCommonRadioButtonWidget;
	JkWidgetCommonRadioButtonWidget.prototype._t = {
		"JkWidgetCommonRadioButtonWidget" : true,
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetWidgetWithValue" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonRadioButtonWidget.prototype._tobj = JkWidgetCommonRadioButtonWidget;
	JkWidgetCommonRadioButtonWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonRadioButtonWidget;
		return v.CTOR_JkWidgetCommonRadioButtonWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonRadioButtonWidget.prototype.CTOR_JkWidgetCommonRadioButtonWidget_JkUiGuiApplicationContext = function(context) {
		this.widgetClickHandler = null;
		this.widgetOrientation = JkWidgetCommonRadioButtonWidget.VERTICAL;
		this.widgetOutlineColor = null;
		this.widgetOnSelectedColor = null;
		this.widgetFontBold = false;
		this.widgetTextColor = null;
		this.widgetFontFamily = null;
		this.widgetFontResource = null;
		this.widgetFontSize = 0;
		this.widgetItems = null;
		this.vrb = null;
		this.selectedWidgetIndex = -1;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonRadioButtonWidget.forGroup = function(context, items) {
		var v = JkWidgetCommonRadioButtonWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetItems(items);
		return v;
	};
	JkWidgetCommonRadioButtonWidget.prototype.initializeWidget = function() {
		JkWidgetLayerWidget.prototype.initializeWidget.call(this);
		this.vrb = new Array;
		var box = null;
		if(this.widgetOrientation == JkWidgetCommonRadioButtonWidget.HORIZONTAL) {
			box = JkWidgetHorizontalBoxWidget.forContext(this.context, (this.context.getHeightValue("2500um")), (this.context.getHeightValue("1500um")));
		}
		else {
			box = JkWidgetVerticalBoxWidget.forContext(this.context, (this.context.getHeightValue("2500um")), (this.context.getHeightValue("1500um")));
		}
		for(var i = 0 ; i < JkLangVector.getSize(this.widgetItems) ; i++) {
			var d = JkLangVector.get(this.widgetItems, i);
			if(!(d != null)) {
				continue;
			}
			var rb = JkWidgetCommonRadioButtonWidgetMyRadioButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
			rb.setWidgetText(d);
			rb.setWidgetIndex(i);
			rb.setWidgetContainer(this);
			rb.setWidgetFontSize(this.widgetFontSize);
			rb.setWidgetFontResource(this.widgetFontResource);
			rb.setWidgetFontFamily(this.widgetFontFamily);
			rb.setWidgetFontBold(this.widgetFontBold);
			rb.setWidgetTextColor(this.widgetTextColor);
			rb.setWidgetColor(this.widgetOnSelectedColor);
			rb.setWidgetOutLineColor(this.widgetOutlineColor);
			this.vrb.push(rb);
			if(this.widgetOrientation == JkWidgetCommonRadioButtonWidget.HORIZONTAL) {
				box.addWidget1(rb, 1.0);
			}
			else {
				box.addWidget(rb);
			}
		}
		this.addWidget(box);
	};
	JkWidgetCommonRadioButtonWidget.prototype.setWidgetEnabled = function(v) {
		if(this.vrb != null) {
			var n = 0;
			var m = this.vrb.length;
			for(n = 0 ; n < m ; n++) {
				var rb = this.vrb[n];
				if(rb != null) {
					rb.setWidgetEnabled(v);
				}
			}
		}
		return this;
	};
	JkWidgetCommonRadioButtonWidget.prototype.setWidgetValue = function(value) {
		this.setSelectWidgetValue((JkLangString.asString(value)));
	};
	JkWidgetCommonRadioButtonWidget.prototype.getWidgetValue = function() {
		var index = this.getSelectedWidgetIndex();
		if(!(this.widgetItems != null) || index < 0) {
			return null;
		}
		return JkLangVector.get(this.widgetItems, index);
	};
	JkWidgetCommonRadioButtonWidget.prototype.getSelectedWidgetIndex = function() {
		return this.selectedWidgetIndex;
	};
	JkWidgetCommonRadioButtonWidget.prototype.setSelectWidgetValue = function(selectedWidget) {
		this.updateSelectedWidget((this.findIndexForWidgetValue(selectedWidget)));
	};
	JkWidgetCommonRadioButtonWidget.prototype.setSelectedWidgetIndex = function(index) {
		this.updateSelectedWidget(index);
	};
	JkWidgetCommonRadioButtonWidget.prototype.updateSelectedWidget = function(index) {
		if(this.selectedWidgetIndex > -1) {
			var widget = JkLangVector.get(this.vrb, this.selectedWidgetIndex);
			if(widget != null) {
				widget.onDeSelected();
			}
		}
		var ww = JkLangVector.get(this.vrb, index);
		if(ww != null) {
			ww.onSelected();
		}
		this.selectedWidgetIndex = index;
		if(this.widgetClickHandler != null) {
			this.widgetClickHandler(index);
		}
	};
	JkWidgetCommonRadioButtonWidget.prototype.findIndexForWidgetValue = function(id) {
		var v = -1;
		if(this.widgetItems != null) {
			var n = 0;
			var it = JkLangVector.iterate(this.widgetItems);
			while(it != null){
				var item = it.next();
				if(item == null) {
					break;
				}
				if(item == id) {
					v = n;
					break;
				}
				n++;
			}
		}
		return v;
	};
	JkWidgetCommonRadioButtonWidget.prototype.getWidgetItems = function() {
		return this.widgetItems;
	};
	JkWidgetCommonRadioButtonWidget.prototype.setWidgetItems = function(v) {
		this.widgetItems = v;
		return this;
	};
	JkWidgetCommonRadioButtonWidget.prototype.getWidgetFontSize = function() {
		return this.widgetFontSize;
	};
	JkWidgetCommonRadioButtonWidget.prototype.setWidgetFontSize = function(v) {
		this.widgetFontSize = v;
		return this;
	};
	JkWidgetCommonRadioButtonWidget.prototype.getWidgetFontResource = function() {
		return this.widgetFontResource;
	};
	JkWidgetCommonRadioButtonWidget.prototype.setWidgetFontResource = function(v) {
		this.widgetFontResource = v;
		return this;
	};
	JkWidgetCommonRadioButtonWidget.prototype.getWidgetFontFamily = function() {
		return this.widgetFontFamily;
	};
	JkWidgetCommonRadioButtonWidget.prototype.setWidgetFontFamily = function(v) {
		this.widgetFontFamily = v;
		return this;
	};
	JkWidgetCommonRadioButtonWidget.prototype.getWidgetTextColor = function() {
		return this.widgetTextColor;
	};
	JkWidgetCommonRadioButtonWidget.prototype.setWidgetTextColor = function(v) {
		this.widgetTextColor = v;
		return this;
	};
	JkWidgetCommonRadioButtonWidget.prototype.getWidgetFontBold = function() {
		return this.widgetFontBold;
	};
	JkWidgetCommonRadioButtonWidget.prototype.setWidgetFontBold = function(v) {
		this.widgetFontBold = v;
		return this;
	};
	JkWidgetCommonRadioButtonWidget.prototype.getWidgetOnSelectedColor = function() {
		return this.widgetOnSelectedColor;
	};
	JkWidgetCommonRadioButtonWidget.prototype.setWidgetOnSelectedColor = function(v) {
		this.widgetOnSelectedColor = v;
		return this;
	};
	JkWidgetCommonRadioButtonWidget.prototype.getWidgetOutlineColor = function() {
		return this.widgetOutlineColor;
	};
	JkWidgetCommonRadioButtonWidget.prototype.setWidgetOutlineColor = function(v) {
		this.widgetOutlineColor = v;
		return this;
	};
	JkWidgetCommonRadioButtonWidget.prototype.getWidgetOrientation = function() {
		return this.widgetOrientation;
	};
	JkWidgetCommonRadioButtonWidget.prototype.setWidgetOrientation = function(v) {
		this.widgetOrientation = v;
		return this;
	};
	JkWidgetCommonRadioButtonWidget.prototype.getWidgetClickHandler = function() {
		return this.widgetClickHandler;
	};
	JkWidgetCommonRadioButtonWidget.prototype.setWidgetClickHandler = function(v) {
		this.widgetClickHandler = v;
		return this;
	};
	JkWidgetCommonRadioButtonWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonRadioButtonWidget"] === true;
	};
	JkWidgetCommonRadioButtonWidget.HORIZONTAL = 0;
	JkWidgetCommonRadioButtonWidget.VERTICAL = 1;
	let JkWidgetCommonTextAreaWidget = function() {
		JkWidgetWidget.call(this);
		this.widgetTextChangeHandler = null;
		this.widgetOnFocusHandler = null;
		this.widgetOnLoseFocusHandler = null;
		this.widgetOnEnterKeyPressed = null;
		this.widgetContext = null;
		this.widgetPlaceholder = null;
		this.widgetPaddingLeft = 0;
		this.widgetPaddingTop = 0;
		this.widgetPaddingRight = 0;
		this.widgetPaddingBottom = 0;
		this.widgetRows = 0;
		this.widgetTextColor = null;
		this.widgetBackgroundColor = null;
		this.widgetFontFamily = null;
		this.widgetFontResource = null;
		this.widgetFontSize = 0.0;
	};
	JkWidgetCommonTextAreaWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetWidget.prototype);
	JkWidgetCommonTextAreaWidget.prototype.constructor = JkWidgetCommonTextAreaWidget;
	JkWidgetCommonTextAreaWidget.prototype._t = {
		"JkWidgetCommonTextAreaWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetWidgetWithValue" : true
	};
	JkWidgetCommonTextAreaWidget.prototype._tobj = JkWidgetCommonTextAreaWidget;
	JkWidgetCommonTextAreaWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonTextAreaWidget;
		return v.CTOR_JkWidgetCommonTextAreaWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonTextAreaWidget.prototype.CTOR_JkWidgetCommonTextAreaWidget_JkUiGuiApplicationContext = function(context) {
		if(JkWidgetWidget.prototype.CTOR_JkWidgetWidget.call(this) == null) {
			return null;
		}
		this.widgetFontSize = 0.0;
		this.widgetFontResource = null;
		this.widgetFontFamily = null;
		this.widgetBackgroundColor = null;
		this.widgetTextColor = null;
		this.widgetRows = 0;
		this.widgetPaddingBottom = 0;
		this.widgetPaddingRight = 0;
		this.widgetPaddingTop = 0;
		this.widgetPaddingLeft = 0;
		this.widgetPlaceholder = null;
		this.widgetContext = null;
		this.widgetOnEnterKeyPressed = null;
		this.widgetOnLoseFocusHandler = null;
		this.widgetOnFocusHandler = null;
		this.widgetTextChangeHandler = null;
		JkUiHTMLDOM.setStyle(this.element, "outline-width", "0");
		this.widgetContext = context;
		this.setWidgetStyle("TextAreaWidget");
		return this;
	};
	JkWidgetCommonTextAreaWidget.forPlaceholder = function(context, placeholder, rows) {
		var v = JkWidgetCommonTextAreaWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetPlaceholder(placeholder);
		v.setWidgetRows(rows);
		return v;
	};
	JkWidgetCommonTextAreaWidget.prototype.createElement = function() {
		return JkUiHTMLDOM.createElement("textarea");
	};
	JkWidgetCommonTextAreaWidget.prototype.prepareElement = function(element) {
		JkWidgetWidget.prototype.prepareElement.call(this, element);
		JkUiHTMLDOM.setStyle(element, "box-sizing", "border-box");
		JkUiHTMLDOM.setStyle(element, "resize", "none");
		JkUiHTMLDOM.setStyle(element, "border", "none");
		JkUiHTMLDOM.removeStyle(element, "overflow");
		JkUiHTMLDOM.addEventListener(element, "input", (function() {
			this.onChangeListener();
		}.bind(this)));
		JkUiHTMLDOM.addEventListener(element, "focus", (function() {
			this.onFocusListener();
		}.bind(this)));
		JkUiHTMLDOM.addEventListener(element, "blur", (function() {
			this.onLoseFocusListener();
		}.bind(this)));
		this.element.addEventListener("keypress", (function(e) {
			var k = e.which || e.keyCode;
			if(k == 13 && !e.shiftKey) {
				this.onEnterKeyListener();
			}
		}.bind(this)));
		;
	};
	JkWidgetCommonTextAreaWidget.prototype.setWidgetStyle = function(style) {
		this.widgetFontFamily = this.widgetContext.getStyleString(style, "fontFamily", null);
		if(JkLangString.isEmpty(this.widgetFontFamily)) {
			this.widgetFontFamily = "Arial";
		}
		this.widgetFontSize = this.widgetContext.getStylePixels(style, "fontSize", null);
		if(this.widgetFontSize < 1.0) {
			this.widgetFontSize = this.widgetContext.getHeightValue("3mm");
		}
		this.widgetTextColor = this.widgetContext.getStyleColor(style, "textColor", null);
		this.widgetBackgroundColor = this.widgetContext.getStyleColor(style, "backgroundColor", null);
		this.setWidgetPadding1((this.widgetContext.getStylePixels(style, "padding", null)));
		this.updateWidgetFont();
		this.updateWidgetColors();
		return this;
	};
	JkWidgetCommonTextAreaWidget.prototype.configureMonospaceFont = function() {
		this.setWidgetFontFamily("monospace");
	};
	JkWidgetCommonTextAreaWidget.prototype.updateWidgetColors = function() {
		var textColor = this.widgetTextColor;
		if(!(textColor != null)) {
			if(this.widgetBackgroundColor != null) {
				if(this.widgetBackgroundColor.isLightColor()) {
					textColor = JkGfxColor.black();
				}
				else {
					textColor = JkGfxColor.white();
				}
			}
			else {
				textColor = JkGfxColor.black();
			}
		}
		if(!(this.widgetBackgroundColor != null)) {
			JkUiHTMLDOM.setStyle(this.element, "background-color", "rgba(0,0,0,0)");
		}
		else {
			JkUiHTMLDOM.setStyle(this.element, "background-color", (JkUiHTMLDOM.colorToRGBA(this.widgetBackgroundColor)));
		}
		JkUiHTMLDOM.setStyle(this.element, "color", (JkUiHTMLDOM.colorToRGBA(textColor)));
	};
	JkWidgetCommonTextAreaWidget.prototype.updateWidgetFont = function() {
		JkUiHTMLDOM.setFontFamily(this.element, this.widgetFontFamily);
		JkUiHTMLDOM.setStyle(this.element, "font-size", (JkLangString.safeString((JkLangString.forDouble(this.widgetFontSize))) + "px"));
	};
	JkWidgetCommonTextAreaWidget.prototype.focus = function() {
		console.log("[jk.widget.common.TextAreaWidget.focus] (TextAreaWidget.sling:560:3): Not implemented");
	};
	JkWidgetCommonTextAreaWidget.prototype.setWidgetFontFamily = function(family) {
		this.widgetFontFamily = family;
		this.updateWidgetFont();
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetCommonTextAreaWidget.prototype.setWidgetFontResource = function(res) {
		this.widgetFontResource = res;
		this.updateWidgetFont();
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetCommonTextAreaWidget.prototype.setWidgetFontSize = function(fontSize) {
		this.widgetFontSize = fontSize;
		this.updateWidgetFont();
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetCommonTextAreaWidget.prototype.setWidgetTextColor = function(color) {
		this.widgetTextColor = color;
		this.updateWidgetColors();
		return this;
	};
	JkWidgetCommonTextAreaWidget.prototype.getWidgetTextColor = function() {
		return this.widgetTextColor;
	};
	JkWidgetCommonTextAreaWidget.prototype.setWidgetBackgroundColor = function(color) {
		this.widgetBackgroundColor = color;
		this.updateWidgetColors();
		return this;
	};
	JkWidgetCommonTextAreaWidget.prototype.getWidgetBackgroundColor = function() {
		return this.widgetBackgroundColor;
	};
	JkWidgetCommonTextAreaWidget.prototype.setWidgetRows = function(row) {
		this.widgetRows = row;
		JkUiHTMLDOM.setAttribute(this.element, "rows", (JkLangString.forInteger(row)));
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetCommonTextAreaWidget.prototype.setWidgetText = function(text) {
		this.element.value = text;
		;
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetCommonTextAreaWidget.prototype.onEnterKeyListener = function() {
		if(this.widgetOnEnterKeyPressed != null) {
			this.widgetOnEnterKeyPressed();
		}
	};
	JkWidgetCommonTextAreaWidget.prototype.setWidgetPlaceholder = function(placeholder) {
		this.widgetPlaceholder = placeholder;
		JkUiHTMLDOM.setAttribute(this.element, "placeholder", placeholder);
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetCommonTextAreaWidget.prototype.setWidgetPadding1 = function(padding) {
		return this.setWidgetPadding3(padding, padding, padding, padding);
	};
	JkWidgetCommonTextAreaWidget.prototype.setWidgetPadding2 = function(lr, tb) {
		return this.setWidgetPadding3(lr, tb, lr, tb);
	};
	JkWidgetCommonTextAreaWidget.prototype.setWidgetPadding3 = function(l, t, r, b) {
		if(l < 0 || t < 0 || r < 0 || b < 0) {
			return this;
		}
		if(this.widgetPaddingLeft == l && this.widgetPaddingTop == t && this.widgetPaddingRight == r && this.widgetPaddingBottom == b) {
			return this;
		}
		this.widgetPaddingLeft = l;
		this.widgetPaddingTop = t;
		this.widgetPaddingRight = r;
		this.widgetPaddingBottom = b;
		this.updateWidgetPadding();
		return this;
	};
	JkWidgetCommonTextAreaWidget.prototype.updateWidgetPadding = function() {
		JkUiHTMLDOM.setStyle(this.element, "padding", (JkLangString.safeString((JkLangString.forInteger(this.widgetPaddingTop))) + "px" + " " + JkLangString.safeString((JkLangString.forInteger(this.widgetPaddingRight))) + "px" + " " + JkLangString.safeString((JkLangString.forInteger(this.widgetPaddingBottom))) + "px" + " " + JkLangString.safeString((JkLangString.forInteger(this.widgetPaddingLeft))) + "px"));
	};
	JkWidgetCommonTextAreaWidget.prototype.getWidgetText = function() {
		return this.element.value;
	};
	JkWidgetCommonTextAreaWidget.prototype.getWidgetPlaceholder = function() {
		return this.widgetPlaceholder;
	};
	JkWidgetCommonTextAreaWidget.prototype.setWidgetValue = function(value) {
		this.setWidgetText((JkLangString.asString(value)));
	};
	JkWidgetCommonTextAreaWidget.prototype.getWidgetValue = function() {
		return this.getWidgetText();
	};
	JkWidgetCommonTextAreaWidget.prototype.onChangeListener = function() {
		if(this.widgetTextChangeHandler != null) {
			this.widgetTextChangeHandler();
		}
	};
	JkWidgetCommonTextAreaWidget.prototype.onFocusListener = function() {
		if(this.widgetOnFocusHandler != null) {
			this.widgetOnFocusHandler();
		}
	};
	JkWidgetCommonTextAreaWidget.prototype.onLoseFocusListener = function() {
		if(this.widgetOnLoseFocusHandler != null) {
			this.widgetOnLoseFocusHandler();
		}
	};
	JkWidgetCommonTextAreaWidget.prototype.setWidgetMaxLength = function(v) {
		JkUiHTMLDOM.setAttribute(this.element, "maxlength", (JkLangString.forInteger(v)));
		return this;
	};
	JkWidgetCommonTextAreaWidget.prototype.getWidgetTextChangeHandler = function() {
		return this.widgetTextChangeHandler;
	};
	JkWidgetCommonTextAreaWidget.prototype.setWidgetTextChangeHandler = function(v) {
		this.widgetTextChangeHandler = v;
		return this;
	};
	JkWidgetCommonTextAreaWidget.prototype.getWidgetOnFocusHandler = function() {
		return this.widgetOnFocusHandler;
	};
	JkWidgetCommonTextAreaWidget.prototype.setWidgetOnFocusHandler = function(v) {
		this.widgetOnFocusHandler = v;
		return this;
	};
	JkWidgetCommonTextAreaWidget.prototype.getWidgetOnLoseFocusHandler = function() {
		return this.widgetOnLoseFocusHandler;
	};
	JkWidgetCommonTextAreaWidget.prototype.setWidgetOnLoseFocusHandler = function(v) {
		this.widgetOnLoseFocusHandler = v;
		return this;
	};
	JkWidgetCommonTextAreaWidget.prototype.getWidgetOnEnterKeyPressed = function() {
		return this.widgetOnEnterKeyPressed;
	};
	JkWidgetCommonTextAreaWidget.prototype.setWidgetOnEnterKeyPressed = function(v) {
		this.widgetOnEnterKeyPressed = v;
		return this;
	};
	JkWidgetCommonTextAreaWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonTextAreaWidget"] === true;
	};
	let JkWidgetCommonSpinnerWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.image = null;
		this.rotation = 0.0;
		this.active = false;
		this.imageWidget = null;
	};
	JkWidgetCommonSpinnerWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonSpinnerWidget.prototype.constructor = JkWidgetCommonSpinnerWidget;
	JkWidgetCommonSpinnerWidget.prototype._t = {
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetScreenAwareWidget" : true,
		"JkWidgetCommonSpinnerWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonSpinnerWidget.prototype._tobj = JkWidgetCommonSpinnerWidget;
	JkWidgetCommonSpinnerWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonSpinnerWidget;
		return v.CTOR_JkWidgetCommonSpinnerWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonSpinnerWidget.prototype.CTOR_JkWidgetCommonSpinnerWidget_JkUiGuiApplicationContext = function(context) {
		this.imageWidget = null;
		this.active = false;
		this.rotation = 0.0;
		this.image = null;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonSpinnerWidget.forImage = function(ctx, image) {
		var v = JkWidgetCommonSpinnerWidget.NEW_JkUiGuiApplicationContext(ctx);
		v.setImage(image);
		return v;
	};
	JkWidgetCommonSpinnerWidget.prototype.onWidgetRemovedFromScreen = function(screen) {
		this.active = false;
	};
	JkWidgetCommonSpinnerWidget.prototype.onWidgetAddedToScreen = function(screen) {
		this.imageWidget.setWidgetImage(this.image);
		this.active = true;
		this.doSpin();
	};
	JkWidgetCommonSpinnerWidget.prototype.doSpin = function() {
		if(!this.active) {
			return;
		}
		JkWidgetWidget.setRotation(this.imageWidget, this.rotation);
		this.rotation += JkMathMath.M_PI / 50.0;
		this.context.startTimer(100, (function() {
			this.doSpin();
		}.bind(this)));
	};
	JkWidgetCommonSpinnerWidget.prototype.createWidget = function() {
		JkWidgetLayerWidget.prototype.createWidget.call(this);
		var thisWidget = this;
		this.imageWidget = JkWidgetImageWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.imageWidget.setWidgetImageWidth((this.context.getWidthValue("15mm")));
		this.imageWidget.setWidgetImageHeight((this.context.getHeightValue("15mm")));
		this.addWidget(this.imageWidget);
	};
	JkWidgetCommonSpinnerWidget.prototype.getImage = function() {
		return this.image;
	};
	JkWidgetCommonSpinnerWidget.prototype.setImage = function(v) {
		this.image = v;
		return this;
	};
	JkWidgetCommonSpinnerWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonSpinnerWidget"] === true;
	};
	let JkWidgetCommonRangePickerWidgetSelectedControl = function() {
		this.widget = null;
		this.control = 0;
	};
	JkWidgetCommonRangePickerWidgetSelectedControl.prototype._t = { "JkWidgetCommonRangePickerWidgetSelectedControl" : true };
	JkWidgetCommonRangePickerWidgetSelectedControl.prototype._tobj = JkWidgetCommonRangePickerWidgetSelectedControl;
	JkWidgetCommonRangePickerWidgetSelectedControl.NEW = function() {
		var v = new JkWidgetCommonRangePickerWidgetSelectedControl;
		return v.CTOR_JkWidgetCommonRangePickerWidgetSelectedControl();
	};
	JkWidgetCommonRangePickerWidgetSelectedControl.prototype.CTOR_JkWidgetCommonRangePickerWidgetSelectedControl = function() {
		this.control = 0;
		this.widget = null;
		return this;
	};
	JkWidgetCommonRangePickerWidgetSelectedControl.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonRangePickerWidgetSelectedControl"] === true;
	};
	let JkWidgetCommonRangePickerWidgetRangeControlWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.outline = null;
		this.main = null;
	};
	JkWidgetCommonRangePickerWidgetRangeControlWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonRangePickerWidgetRangeControlWidget.prototype.constructor = JkWidgetCommonRangePickerWidgetRangeControlWidget;
	JkWidgetCommonRangePickerWidgetRangeControlWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetCommonRangePickerWidgetRangeControlWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonRangePickerWidgetRangeControlWidget.prototype._tobj = JkWidgetCommonRangePickerWidgetRangeControlWidget;
	JkWidgetCommonRangePickerWidgetRangeControlWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonRangePickerWidgetRangeControlWidget;
		return v.CTOR_JkWidgetCommonRangePickerWidgetRangeControlWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonRangePickerWidgetRangeControlWidget.prototype.CTOR_JkWidgetCommonRangePickerWidgetRangeControlWidget_JkUiGuiApplicationContext = function(context) {
		this.main = null;
		this.outline = null;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonRangePickerWidgetRangeControlWidget.prototype.setWidgetColor = function(color) {
		this.main.setWidgetColor(color);
	};
	JkWidgetCommonRangePickerWidgetRangeControlWidget.prototype.setWidgetRoundingRadius = function(radius) {
		this.outline.setWidgetRoundingRadius1(radius);
		this.main.setWidgetRoundingRadius1(radius);
	};
	JkWidgetCommonRangePickerWidgetRangeControlWidget.prototype.createWidget = function() {
		JkWidgetLayerWidget.prototype.createWidget.call(this);
		var thisWidget = this;
		this.setWidgetWidthRequest((this.context.getHeightValue("4mm")));
		this.setWidgetHeightRequest((this.context.getHeightValue("4mm")));
		this.outline = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.outline.setWidgetColor((JkGfxColor.instance("#C0C0C0")));
		this.outline.setWidgetRoundingRadius1((this.context.getHeightValue("800um")));
		this.addWidget(this.outline);
		var widget = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		widget.setWidgetMargin((this.context.getHeightValue("10um")));
		this.main = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.main.setWidgetColor((JkGfxColor.instance("#ffffff")));
		this.main.setWidgetRoundingRadius1((this.context.getHeightValue("800um")));
		widget.addWidget(this.main);
		this.addWidget(widget);
	};
	JkWidgetCommonRangePickerWidgetRangeControlWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonRangePickerWidgetRangeControlWidget"] === true;
	};
	let JkWidgetCommonRangePickerWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.widgetMaximumValue = 100;
		this.widgetLeftControlChangeListener = null;
		this.widgetRightControlChangeListener = null;
		this.widgetDisableLeftControl = false;
		this.selectedControl = null;
		this.refX = 0.0;
		this.firstLayoutDone = false;
		this.rangeValue = 0;
		this.leftValue = -1.0;
		this.rightValue = -1.0;
		this.con = null;
		this.background = null;
		this.range = null;
		this.outOfRangeColor = null;
		this.insideOfRangeColor = null;
		this.leftControl = null;
		this.rightControl = null;
	};
	JkWidgetCommonRangePickerWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonRangePickerWidget.prototype.constructor = JkWidgetCommonRangePickerWidget;
	JkWidgetCommonRangePickerWidget.prototype._t = {
		"JkWidgetResizeAwareWidget" : true,
		"JkWidgetWidgetWithValue" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true,
		"JkWidgetCommonRangePickerWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetParentAwareWidget" : true
	};
	JkWidgetCommonRangePickerWidget.prototype._tobj = JkWidgetCommonRangePickerWidget;
	JkWidgetCommonRangePickerWidget.NEW_JkUiGuiApplicationContext = function(ctx) {
		var v = new JkWidgetCommonRangePickerWidget;
		return v.CTOR_JkWidgetCommonRangePickerWidget_JkUiGuiApplicationContext(ctx);
	};
	JkWidgetCommonRangePickerWidget.prototype.CTOR_JkWidgetCommonRangePickerWidget_JkUiGuiApplicationContext = function(ctx) {
		this.rightControl = null;
		this.leftControl = null;
		this.insideOfRangeColor = null;
		this.outOfRangeColor = null;
		this.range = null;
		this.background = null;
		this.con = null;
		this.rightValue = -1.0;
		this.leftValue = -1.0;
		this.rangeValue = 0;
		this.firstLayoutDone = false;
		this.refX = 0.0;
		this.selectedControl = null;
		this.widgetDisableLeftControl = false;
		this.widgetRightControlChangeListener = null;
		this.widgetLeftControlChangeListener = null;
		this.widgetMaximumValue = 100;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, ctx) == null) {
			return null;
		}
		this.forceCreateWidget();
		return this;
	};
	JkWidgetCommonRangePickerWidget.prototype.initializeWidget = function() {
		JkWidgetLayerWidget.prototype.initializeWidget.call(this);
		if(this.widgetDisableLeftControl) {
			JkWidgetWidget.removeFromParent(this.leftControl);
		}
		JkWidgetWidget.setWidgetPointerHandlers(this.con, (function(x1, y1) {
			this.onStartHandler(x1, y1);
		}.bind(this)), (function(x3, y3) {
			this.onTouchHandler(x3, y3);
		}.bind(this)), (function(x5, y5) {
			this.onEndHandler(x5, y5);
		}.bind(this)));
	};
	JkWidgetCommonRangePickerWidget.prototype.isInside = function(x, y, widget) {
		var wx = JkWidgetWidget.getX(widget);
		var wy = JkWidgetWidget.getY(widget);
		return x >= wx && y >= wy && x <= wx + JkWidgetWidget.getWidth(widget) && y <= wy + JkWidgetWidget.getHeight(widget);
	};
	JkWidgetCommonRangePickerWidget.prototype.onStartHandler = function(x, y) {
		this.resetSelectedControl();
		if(this.isInside(x, y, this.leftControl)) {
			this.selectedControl.widget = this.leftControl;
			this.selectedControl.control = JkWidgetCommonRangePickerWidget.LEFT_CONTROL;
			this.refX = x;
		}
		else if(this.isInside(x, y, this.rightControl)) {
			this.selectedControl.widget = this.rightControl;
			this.selectedControl.control = JkWidgetCommonRangePickerWidget.RIGHT_CONTROL;
			this.refX = x;
		}
	};
	JkWidgetCommonRangePickerWidget.prototype.onTouchHandler = function(x, y) {
		if(!(this.selectedControl != null)) {
			return;
		}
		var dx = JkWidgetWidget.getX(this.selectedControl.widget) + ~(~(x - this.refX));
		this.moveControl(dx, this.selectedControl.control);
		this.refX = x;
	};
	JkWidgetCommonRangePickerWidget.prototype.onEndHandler = function(x, y) {
		this.resetSelectedControl();
	};
	JkWidgetCommonRangePickerWidget.prototype.calculateValueForX = function(x) {
		var y = x / this.rangeValue;
		return JkMathMath.round((y * this.widgetMaximumValue * 100)) / 100;
	};
	JkWidgetCommonRangePickerWidget.prototype.calculateXForValue = function(value) {
		var x = value / this.widgetMaximumValue;
		return x * this.rangeValue;
	};
	JkWidgetCommonRangePickerWidget.prototype.updateInsideOfRangeCanvas = function() {
		var x = JkWidgetWidget.getX(this.leftControl) + JkWidgetWidget.getWidth(this.leftControl) / 2;
		var width = JkWidgetWidget.getX(this.rightControl) + JkWidgetWidget.getWidth(this.rightControl) / 2 - x;
		JkWidgetWidget.setLayoutSize(this.insideOfRangeColor, width, (JkWidgetWidget.getHeight(this.insideOfRangeColor)));
		JkWidgetWidget.move(this.insideOfRangeColor, x, (JkWidgetWidget.getY(this.insideOfRangeColor)));
	};
	JkWidgetCommonRangePickerWidget.prototype.resetSelectedControl = function() {
		if(!(this.selectedControl != null)) {
			this.selectedControl = JkWidgetCommonRangePickerWidgetSelectedControl.NEW();
		}
		this.selectedControl.widget = null;
		this.selectedControl.control = -1;
	};
	JkWidgetCommonRangePickerWidget.prototype.moveLeftControlTo = function(value) {
		this.moveControl((this.calculateXForValue(value)), JkWidgetCommonRangePickerWidget.LEFT_CONTROL);
	};
	JkWidgetCommonRangePickerWidget.prototype.moveRightControlTo = function(value) {
		this.moveControl((this.calculateXForValue(value)), JkWidgetCommonRangePickerWidget.RIGHT_CONTROL);
	};
	JkWidgetCommonRangePickerWidget.prototype.moveControl = function(value, control) {
		if(!(control == JkWidgetCommonRangePickerWidget.LEFT_CONTROL || control == JkWidgetCommonRangePickerWidget.RIGHT_CONTROL)) {
			return;
		}
		this.resetSelectedControl();
		this.selectedControl.control = control;
		var x = value;
		if(control == JkWidgetCommonRangePickerWidget.LEFT_CONTROL) {
			this.selectedControl.widget = this.leftControl;
			var rx = JkWidgetWidget.getX(this.rightControl);
			x = x < 0 ? 0.0 : x;
			x = x > rx ? rx : x;
			if(this.widgetLeftControlChangeListener != null) {
				this.leftValue = this.calculateValueForX(x);
				this.widgetLeftControlChangeListener(this.leftValue);
			}
		}
		else if(control == JkWidgetCommonRangePickerWidget.RIGHT_CONTROL) {
			this.selectedControl.widget = this.rightControl;
			var mx = this.rangeValue;
			var lx = JkWidgetWidget.getX(this.leftControl);
			x = x > mx ? mx : x;
			x = x < lx ? lx : x;
			if(this.widgetRightControlChangeListener != null) {
				this.rightValue = this.calculateValueForX(x);
				this.widgetRightControlChangeListener(this.rightValue);
			}
		}
		JkWidgetWidget.move(this.selectedControl.widget, (~(~x)), (JkWidgetWidget.getY(this.selectedControl.widget)));
		this.updateInsideOfRangeCanvas();
	};
	JkWidgetCommonRangePickerWidget.prototype.setWidgetStyle = function(style) {
		this.setWidgetControlColor((this.context.getStyleColor(style, "controlColor", null)));
		this.setWidgetBackgroundColor((this.context.getStyleColor(style, "backgroundColor", null)));
		this.setWidgetOutOfRangeColor((this.context.getStyleColor(style, "outOfRangeColor", null)));
		this.setWidgetInsideOfRangeColor((this.context.getStyleColor(style, "insideOfRangeColor", null)));
		return this;
	};
	JkWidgetCommonRangePickerWidget.prototype.setWidgetBackgroundColor = function(color) {
		this.background.setWidgetColor(color);
	};
	JkWidgetCommonRangePickerWidget.prototype.setWidgetOutOfRangeColor = function(color) {
		this.outOfRangeColor.setWidgetColor(color);
	};
	JkWidgetCommonRangePickerWidget.prototype.setWidgetInsideOfRangeColor = function(color) {
		this.insideOfRangeColor.setWidgetColor(color);
	};
	JkWidgetCommonRangePickerWidget.prototype.setWidgetControlColor = function(color) {
		this.leftControl.setWidgetColor(color);
		this.rightControl.setWidgetColor(color);
	};
	JkWidgetCommonRangePickerWidget.prototype.setWidgetRoundingRadius = function(radius) {
		this.leftControl.setWidgetRoundingRadius(radius);
		this.rightControl.setWidgetRoundingRadius(radius);
	};
	JkWidgetCommonRangePickerWidget.prototype.onWidgetResized = function() {
		this.rangeValue = JkWidgetWidget.getWidth(this.range) - JkWidgetWidget.getWidth(this.rightControl);
		if(!this.firstLayoutDone) {
			this.firstLayoutDone = true;
		}
		if(this.leftValue < 0 || this.rightValue < 0) {
			return;
		}
		if(!this.widgetDisableLeftControl) {
			this.moveLeftControlTo(this.leftValue);
		}
		this.moveRightControlTo(this.rightValue);
	};
	JkWidgetCommonRangePickerWidget.prototype.setWidgetValue = function(value) {
		if(!(value != null)) {
			return;
		}
		if(!(typeof value === "string")) {
			return;
		}
		var v = JkLangString.split(value, ("-".charCodeAt()), 2);
		if(!this.firstLayoutDone) {
			this.leftValue = JkLangString.toDouble(v[0]);
			this.rightValue = JkLangString.toDouble(v[1]);
		}
		else {
			if(!this.widgetDisableLeftControl) {
				this.moveLeftControlTo((JkLangString.toDouble(v[0])));
			}
			this.moveRightControlTo((JkLangString.toDouble(v[1])));
		}
	};
	JkWidgetCommonRangePickerWidget.prototype.setWidgetValueForDynamicMap = function(value) {
		if(!(value != null)) {
			return;
		}
		this.moveLeftControlTo((value.getDouble("from", 0.0)));
		this.moveRightControlTo((value.getDouble("to", 0.0)));
	};
	JkWidgetCommonRangePickerWidget.prototype.setWidgetFromValue = function(fvalue) {
		this.moveLeftControlTo(fvalue);
	};
	JkWidgetCommonRangePickerWidget.prototype.setWidgetToValue = function(tvalue) {
		this.moveRightControlTo(tvalue);
	};
	JkWidgetCommonRangePickerWidget.prototype.getWidgetValue = function() {
		return JkLangString.safeString((JkLangString.forDouble(this.leftValue))) + "-" + JkLangString.safeString((JkLangString.forDouble(this.rightValue)));
	};
	JkWidgetCommonRangePickerWidget.prototype.getWidgetValueAsDynamicMap = function() {
		var v = JkLangDynamicMap.NEW();
		v.setDouble("from", this.leftValue);
		v.setDouble("to", this.rightValue);
		return v;
	};
	JkWidgetCommonRangePickerWidget.prototype.getWidgetFromValue = function() {
		return this.leftValue;
	};
	JkWidgetCommonRangePickerWidget.prototype.getWidgetToValue = function() {
		return this.rightValue;
	};
	JkWidgetCommonRangePickerWidget.prototype.createWidget = function() {
		JkWidgetLayerWidget.prototype.createWidget.call(this);
		var thisWidget = this;
		this.setWidgetHeightRequest((this.context.getHeightValue("4mm")));
		this.con = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.background = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.con.addWidget(this.background);
		var widget = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.range = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.range.setWidgetMarginLeft((this.context.getHeightValue("2mm")));
		this.range.setWidgetMarginRight((this.context.getHeightValue("2mm")));
		this.range.setWidgetHeightRequest((this.context.getHeightValue("1mm")));
		this.outOfRangeColor = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.outOfRangeColor.setWidgetColor((JkGfxColor.instance("#A9A9A9")));
		this.range.addWidget(this.outOfRangeColor);
		this.insideOfRangeColor = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.insideOfRangeColor.setWidgetColor((JkGfxColor.instance("#FF8C00")));
		this.range.addWidget(this.insideOfRangeColor);
		widget.addWidget1(this.range, 0.5, 0.5, true);
		this.leftControl = JkWidgetCommonRangePickerWidgetRangeControlWidget.NEW_JkUiGuiApplicationContext(this.context);
		widget.addWidget1(this.leftControl, 0.0, 0.5, false);
		this.rightControl = JkWidgetCommonRangePickerWidgetRangeControlWidget.NEW_JkUiGuiApplicationContext(this.context);
		widget.addWidget1(this.rightControl, 1.0, 0.5, false);
		this.con.addWidget(widget);
		this.addWidget(this.con);
	};
	JkWidgetCommonRangePickerWidget.prototype.getWidgetMaximumValue = function() {
		return this.widgetMaximumValue;
	};
	JkWidgetCommonRangePickerWidget.prototype.setWidgetMaximumValue = function(v) {
		this.widgetMaximumValue = v;
		return this;
	};
	JkWidgetCommonRangePickerWidget.prototype.getWidgetLeftControlChangeListener = function() {
		return this.widgetLeftControlChangeListener;
	};
	JkWidgetCommonRangePickerWidget.prototype.setWidgetLeftControlChangeListener = function(v) {
		this.widgetLeftControlChangeListener = v;
		return this;
	};
	JkWidgetCommonRangePickerWidget.prototype.getWidgetRightControlChangeListener = function() {
		return this.widgetRightControlChangeListener;
	};
	JkWidgetCommonRangePickerWidget.prototype.setWidgetRightControlChangeListener = function(v) {
		this.widgetRightControlChangeListener = v;
		return this;
	};
	JkWidgetCommonRangePickerWidget.prototype.getWidgetDisableLeftControl = function() {
		return this.widgetDisableLeftControl;
	};
	JkWidgetCommonRangePickerWidget.prototype.setWidgetDisableLeftControl = function(v) {
		this.widgetDisableLeftControl = v;
		return this;
	};
	JkWidgetCommonRangePickerWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonRangePickerWidget"] === true;
	};
	JkWidgetCommonRangePickerWidget.LEFT_CONTROL = 0;
	JkWidgetCommonRangePickerWidget.RIGHT_CONTROL = 1;
	let JkWidgetCommonPopupMenuMyContainerWidget = function() {
		JkWidgetContainerWidget.call(this);
		this.widget = null;
		this.menuWidth = 0;
	};
	JkWidgetCommonPopupMenuMyContainerWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetContainerWidget.prototype);
	JkWidgetCommonPopupMenuMyContainerWidget.prototype.constructor = JkWidgetCommonPopupMenuMyContainerWidget;
	JkWidgetCommonPopupMenuMyContainerWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetCommonPopupMenuMyContainerWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonPopupMenuMyContainerWidget.prototype._tobj = JkWidgetCommonPopupMenuMyContainerWidget;
	JkWidgetCommonPopupMenuMyContainerWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonPopupMenuMyContainerWidget;
		return v.CTOR_JkWidgetCommonPopupMenuMyContainerWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonPopupMenuMyContainerWidget.prototype.CTOR_JkWidgetCommonPopupMenuMyContainerWidget_JkUiGuiApplicationContext = function(context) {
		this.menuWidth = 0;
		this.widget = null;
		if(JkWidgetContainerWidget.prototype.CTOR_JkWidgetContainerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonPopupMenuMyContainerWidget.prototype.onWidgetHeightChanged = function(height) {
		var array = JkWidgetWidget.getChildren(this);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var child = array[n];
				if(child != null) {
					JkWidgetWidget.move(child, (JkWidgetWidget.getAbsoluteX(this.widget)), (JkWidgetWidget.getAbsoluteY(this.widget)));
				}
			}
		}
	};
	JkWidgetCommonPopupMenuMyContainerWidget.prototype.computeWidgetLayout = function(widthConstraint) {
		var w = this.menuWidth;
		if(w == 0) {
			w = widthConstraint;
		}
		var array = JkWidgetWidget.getChildren(this);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var child = array[n];
				if(child != null) {
					JkWidgetWidget.layout(child, w, false);
					JkWidgetWidget.move(child, (JkWidgetWidget.getAbsoluteX(this.widget)), (JkWidgetWidget.getAbsoluteY(this.widget)));
				}
			}
		}
		JkWidgetWidget.setLayoutSize(this, widthConstraint, (JkWidgetWidget.getHeight(this)));
	};
	JkWidgetCommonPopupMenuMyContainerWidget.prototype.getWidget = function() {
		return this.widget;
	};
	JkWidgetCommonPopupMenuMyContainerWidget.prototype.setWidget = function(v) {
		this.widget = v;
		return this;
	};
	JkWidgetCommonPopupMenuMyContainerWidget.prototype.getMenuWidth = function() {
		return this.menuWidth;
	};
	JkWidgetCommonPopupMenuMyContainerWidget.prototype.setMenuWidth = function(v) {
		this.menuWidth = v;
		return this;
	};
	JkWidgetCommonPopupMenuMyContainerWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonPopupMenuMyContainerWidget"] === true;
	};
	let JkWidgetCommonPopupMenu = function() {
	};
	JkWidgetCommonPopupMenu.prototype._t = { "JkWidgetCommonPopupMenu" : true };
	JkWidgetCommonPopupMenu.prototype._tobj = JkWidgetCommonPopupMenu;
	JkWidgetCommonPopupMenu.NEW = function() {
		var v = new JkWidgetCommonPopupMenu;
		return v.CTOR_JkWidgetCommonPopupMenu();
	};
	JkWidgetCommonPopupMenu.prototype.CTOR_JkWidgetCommonPopupMenu = function() {
		return this;
	};
	JkWidgetCommonPopupMenu.showBelow = function(ctx, w, menu, menuWidth, align) {
		if(!(w != null)) {
			return;
		}
		if(!(menu != null)) {
			return;
		}
		var widget = w;
		var context = ctx;
		var parentLayer = JkWidgetCommonPopupMenu.getParentLayer(context, widget);
		var vbox = JkWidgetCommonPopupMenu.initializeMenus(context, menu);
		var container = JkWidgetCommonPopupMenuMyContainerWidget.NEW_JkUiGuiApplicationContext(context);
		container.setWidget(widget);
		container.setMenuWidth(menuWidth);
		container.addWidget(vbox);
		parentLayer.addWidget(container);
		JkWidgetWidget.setWidgetClickHandler(parentLayer, (function() {
			var anim = JkWidgetWidgetAnimation.forDuration(context, 300);
			anim.addFadeOut(container, true);
			var parent = JkUiHTMLDOM.getParentElement((JkUiHTMLDOM.getParentElement(container.element)));
			anim.setEndListener((function() {
				JkUiHTMLDOM.remove(parent);
			}.bind(this)));
			anim.start();
		}.bind(this)));
		var destX = JkWidgetWidget.getAbsoluteX(widget);
		if(menuWidth > 0) {
			var mwidth = menuWidth;
			if(align == 0) {
				if(mwidth > 0) {
					destX -= mwidth / 2 - JkWidgetWidget.getWidth(widget) / 2;
				}
			}
			else if(align > 0) {
				if(mwidth > 0) {
					destX -= mwidth - JkWidgetWidget.getWidth(widget);
				}
			}
			else {
				;
			}
		}
		var dx = destX;
		var animationDestY = JkWidgetWidget.getAbsoluteY(widget);
		var ay = context.getHeightValue("3mm");
		JkWidgetWidget.move(vbox, destX, (~(~(animationDestY + ay))));
		var anim1 = JkWidgetWidgetAnimation.forDuration(context, 300);
		anim1.addCallback((function(completion1) {
			var bgf = completion1 * 1.5;
			if(bgf > 1.0) {
				bgf = 1.0;
			}
			JkWidgetWidget.move(vbox, dx, (~(~(animationDestY + ~(~((1.0 - completion1) * ay))))));
		}.bind(this)));
		anim1.start();
	};
	JkWidgetCommonPopupMenu.showBeside = function(ctx, w, menu) {
		if(!(w != null)) {
			return;
		}
		if(!(menu != null)) {
			return;
		}
		var widget = w;
		var context = ctx;
		var parentLayer = JkWidgetCommonPopupMenu.getParentLayer(context, widget);
		var vbox = JkWidgetCommonPopupMenu.initializeMenus(context, menu);
		var container = JkWidgetCommonPopupMenuMyContainerWidget.NEW_JkUiGuiApplicationContext(context);
		container.setWidget(widget);
		container.addWidget(vbox);
		parentLayer.addWidget(container);
		JkWidgetWidget.setWidgetClickHandler(parentLayer, (function() {
			var anim = JkWidgetWidgetAnimation.forDuration(context, 300);
			anim.addFadeOut(container, true);
			var parent = JkUiHTMLDOM.getParentElement((JkUiHTMLDOM.getParentElement(container.element)));
			anim.setEndListener((function() {
				JkUiHTMLDOM.remove(parent);
			}.bind(this)));
			anim.start();
		}.bind(this)));
		var animationDestY = JkWidgetWidget.getAbsoluteY(widget) - JkWidgetWidget.getHeight(widget);
		var ay = context.getHeightValue("3mm");
		JkWidgetWidget.move(vbox, (JkWidgetWidget.getAbsoluteX(widget)), (~(~(animationDestY + ay))));
		var anim1 = JkWidgetWidgetAnimation.forDuration(context, 300);
		anim1.addCallback((function(completion1) {
			var bgf = completion1 * 1.5;
			if(bgf > 1.0) {
				bgf = 1.0;
			}
			JkWidgetWidget.move(vbox, (JkWidgetWidget.getAbsoluteX(widget) + JkWidgetWidget.getWidth(widget)), (~(~(animationDestY + ~(~((1.0 - completion1) * ay))))));
		}.bind(this)));
		anim1.start();
	};
	JkWidgetCommonPopupMenu.getParentLayer = function(context, widget) {
		var parentLayer = null;
		var div = JkUiHTMLDOM.createElement("div");
		JkUiHTMLDOM.setStyle(div, "position", "fixed");
		JkUiHTMLDOM.setStyle(div, "bottom", "0px");
		JkUiHTMLDOM.setStyle(div, "top", "0px");
		JkUiHTMLDOM.setStyle(div, "left", "0px");
		JkUiHTMLDOM.setStyle(div, "right", "0px");
		JkUiHTMLDOM.setStyle(div, "width", "100%");
		JkUiHTMLDOM.setStyle(div, "height", "100%");
		JkUiHTMLDOM.setStyle(div, "z-index", "999");
		JkUiHTMLDOM.appendToBody(div);
		parentLayer = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(context);
		JkWidgetWidget.addToDomElement(parentLayer, div);
		return parentLayer;
	};
	JkWidgetCommonPopupMenu.initializeMenus = function(context, menu) {
		var textColor = context.getStyleColor("PopupMenu", "textColor", null);
		if(!(textColor != null)) {
			textColor = JkGfxColor.black();
		}
		var backgroundColor = context.getStyleColor("PopupMenu", "backgroundColor", null);
		if(!(backgroundColor != null)) {
			backgroundColor = JkGfxColor.white();
		}
		var padding = context.getStylePixels("PopupMenu", "padding", null);
		if(padding < 1) {
			padding = context.getHeightValue("1000um");
		}
		var fontSize = context.getStylePixels("PopupMenu", "fontSize", null);
		if(fontSize < 1) {
			fontSize = context.getHeightValue("2mm");
		}
		var vbox = JkWidgetVerticalBoxWidget.forContext(context, 0, 0);
		var array = menu.getEntries();
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var entry = array[n];
				if(entry != null) {
					var lbl = JkWidgetLabelWidget.forText(context, entry.title);
					lbl.setWidgetTextColor(textColor);
					var layer = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(context);
					layer.addWidget((JkWidgetCanvasWidget.forColor(context, backgroundColor)));
					layer.addWidget((JkWidgetLayerWidget.forWidget(context, lbl, padding)));
					JkWidgetWidget.setWidgetClickHandler(layer, entry.handler);
					vbox.addWidget(layer);
				}
			}
		}
		return vbox;
	};
	JkWidgetCommonPopupMenu.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonPopupMenu"] === true;
	};
	let JkWidgetCommonTextButtonWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.widgetContext = null;
		this.widgetClickHandler = null;
		this.widgetText = null;
		this.widgetRoundingRadius = 0.0;
		this.widgetBackgroundColor = null;
		this.widgetPressedBackgroundColor = null;
		this.widgetTextColor = null;
		this.widgetFontSize = 0;
		this.widgetFontFamily = "Arial";
		this.widgetFontResource = null;
		this.widgetPadding = -1;
		this.widgetPaddingHorizontal = -1;
	};
	JkWidgetCommonTextButtonWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonTextButtonWidget.prototype.constructor = JkWidgetCommonTextButtonWidget;
	JkWidgetCommonTextButtonWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetWidgetWithLayout" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetCommonTextButtonWidget" : true
	};
	JkWidgetCommonTextButtonWidget.prototype._tobj = JkWidgetCommonTextButtonWidget;
	JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext = function(ctx) {
		var v = new JkWidgetCommonTextButtonWidget;
		return v.CTOR_JkWidgetCommonTextButtonWidget_JkUiGuiApplicationContext(ctx);
	};
	JkWidgetCommonTextButtonWidget.prototype.CTOR_JkWidgetCommonTextButtonWidget_JkUiGuiApplicationContext = function(ctx) {
		this.widgetPaddingHorizontal = -1;
		this.widgetPadding = -1;
		this.widgetFontResource = null;
		this.widgetFontFamily = "Arial";
		this.widgetFontSize = 0;
		this.widgetTextColor = null;
		this.widgetPressedBackgroundColor = null;
		this.widgetBackgroundColor = null;
		this.widgetRoundingRadius = 0.0;
		this.widgetText = null;
		this.widgetClickHandler = null;
		this.widgetContext = null;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, ctx) == null) {
			return null;
		}
		this.widgetContext = ctx;
		this.setWidgetStyle("TextButtonWidget");
		return this;
	};
	JkWidgetCommonTextButtonWidget.forText = function(context, text, handler) {
		var v = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetText(text);
		if(handler != null) {
			v.setWidgetClickHandler(handler);
		}
		return v;
	};
	JkWidgetCommonTextButtonWidget.prototype.setWidgetClickHandler = function(handler) {
		this.widgetClickHandler = handler;
		return this;
	};
	JkWidgetCommonTextButtonWidget.prototype.getWidgetClickHandler = function() {
		return this.widgetClickHandler;
	};
	JkWidgetCommonTextButtonWidget.prototype.setWidgetStyle = function(style) {
		this.widgetRoundingRadius = this.context.getStylePixels(style, "roundingRadius", null);
		this.widgetBackgroundColor = this.context.getStyleColor(style, "backgroundColor", null);
		this.widgetPressedBackgroundColor = this.context.getStyleColor(style, "pressedColor", null);
		this.widgetTextColor = this.context.getStyleColor(style, "textColor", null);
		this.widgetFontSize = this.context.getStylePixels(style, "fontSize", null);
		this.widgetFontFamily = this.context.getStyleString(style, "fontFamily", null);
		this.widgetFontResource = this.context.getStyleString(style, "fontResource", null);
		this.widgetPadding = this.context.getStylePixels(style, "padding", null);
		return this;
	};
	JkWidgetCommonTextButtonWidget.prototype.initializeWidget = function() {
		JkWidgetLayerWidget.prototype.initializeWidget.call(this);
		var bgc = this.widgetBackgroundColor;
		if(!(bgc != null)) {
			bgc = JkGfxColor.forRGBDouble(0.6, 0.6, 0.6);
		}
		var canvas = JkWidgetCanvasWidget.forColor(this.context, bgc);
		canvas.setWidgetRoundingRadius1(this.widgetRoundingRadius);
		this.addWidget(canvas);
		var pbgc = this.widgetPressedBackgroundColor;
		if(!(pbgc != null)) {
			pbgc = this.createDefaultPressColor(bgc);
		}
		var cvn = canvas;
		var c1 = bgc;
		var c2 = pbgc;
		var thisWidget = this;
		JkWidgetWidget.setWidgetPointerHandlers(this, (function(x1, y1) {
			cvn.setWidgetColor(c2);
		}.bind(this)), null, (function(x3, y3) {
			if(this.widgetClickHandler != null && x3 <= JkWidgetWidget.getWidth(thisWidget) && y3 <= JkWidgetWidget.getHeight(thisWidget) && x3 >= 0 && y3 >= 0) {
				this.widgetClickHandler();
			}
			cvn.setWidgetColor(c1);
		}.bind(this)));
		var fgc = this.widgetTextColor;
		if(!(fgc != null)) {
			if(bgc.isLightColor()) {
				fgc = JkGfxColor.forRGB(0, 0, 0);
			}
			else {
				fgc = JkGfxColor.forRGB(0xff, 0xff, 0xff);
			}
		}
		var padding = this.widgetPadding;
		if(padding < 0) {
			padding = this.context.getHeightValue("2mm");
		}
		var label = JkWidgetLabelWidget.forText(this.context, this.widgetText);
		label.setWidgetTextColor(fgc);
		if(this.widgetFontResource != null) {
			label.setWidgetFontResource(this.widgetFontResource);
		}
		label.setWidgetFontFamily(this.widgetFontFamily);
		if(this.widgetFontSize > 0) {
			label.setWidgetFontSize(this.widgetFontSize);
		}
		var aw = JkWidgetAlignWidget.forWidget(this.context, label, 0.5, 0.5, padding);
		if(this.widgetPaddingHorizontal >= 0) {
			aw.setWidgetMarginLeft(this.widgetPaddingHorizontal);
			aw.setWidgetMarginRight(this.widgetPaddingHorizontal);
		}
		this.addWidget(aw);
		JkUiHTMLDOM.setStyle(this.element, "cursor", "pointer");
	};
	JkWidgetCommonTextButtonWidget.prototype.createDefaultPressColor = function(bg) {
		if(!(bg != null)) {
			return null;
		}
		var r = bg.getRedInt() * ~(~(1 - ~(~0.25)));
		var g = bg.getGreenInt() * ~(~(1 - ~(~0.25)));
		var b = bg.getBlueInt() * ~(~(1 - ~(~0.25)));
		return JkGfxColor.forRGB(r, g, b);
	};
	JkWidgetCommonTextButtonWidget.prototype.getWidgetText = function() {
		return this.widgetText;
	};
	JkWidgetCommonTextButtonWidget.prototype.setWidgetText = function(v) {
		this.widgetText = v;
		return this;
	};
	JkWidgetCommonTextButtonWidget.prototype.getWidgetRoundingRadius = function() {
		return this.widgetRoundingRadius;
	};
	JkWidgetCommonTextButtonWidget.prototype.setWidgetRoundingRadius = function(v) {
		this.widgetRoundingRadius = v;
		return this;
	};
	JkWidgetCommonTextButtonWidget.prototype.getWidgetBackgroundColor = function() {
		return this.widgetBackgroundColor;
	};
	JkWidgetCommonTextButtonWidget.prototype.setWidgetBackgroundColor = function(v) {
		this.widgetBackgroundColor = v;
		return this;
	};
	JkWidgetCommonTextButtonWidget.prototype.getWidgetPressedBackgroundColor = function() {
		return this.widgetPressedBackgroundColor;
	};
	JkWidgetCommonTextButtonWidget.prototype.setWidgetPressedBackgroundColor = function(v) {
		this.widgetPressedBackgroundColor = v;
		return this;
	};
	JkWidgetCommonTextButtonWidget.prototype.getWidgetTextColor = function() {
		return this.widgetTextColor;
	};
	JkWidgetCommonTextButtonWidget.prototype.setWidgetTextColor = function(v) {
		this.widgetTextColor = v;
		return this;
	};
	JkWidgetCommonTextButtonWidget.prototype.getWidgetFontSize = function() {
		return this.widgetFontSize;
	};
	JkWidgetCommonTextButtonWidget.prototype.setWidgetFontSize = function(v) {
		this.widgetFontSize = v;
		return this;
	};
	JkWidgetCommonTextButtonWidget.prototype.getWidgetFontFamily = function() {
		return this.widgetFontFamily;
	};
	JkWidgetCommonTextButtonWidget.prototype.setWidgetFontFamily = function(v) {
		this.widgetFontFamily = v;
		return this;
	};
	JkWidgetCommonTextButtonWidget.prototype.getWidgetFontResource = function() {
		return this.widgetFontResource;
	};
	JkWidgetCommonTextButtonWidget.prototype.setWidgetFontResource = function(v) {
		this.widgetFontResource = v;
		return this;
	};
	JkWidgetCommonTextButtonWidget.prototype.getWidgetPadding = function() {
		return this.widgetPadding;
	};
	JkWidgetCommonTextButtonWidget.prototype.setWidgetPadding = function(v) {
		this.widgetPadding = v;
		return this;
	};
	JkWidgetCommonTextButtonWidget.prototype.getWidgetPaddingHorizontal = function() {
		return this.widgetPaddingHorizontal;
	};
	JkWidgetCommonTextButtonWidget.prototype.setWidgetPaddingHorizontal = function(v) {
		this.widgetPaddingHorizontal = v;
		return this;
	};
	JkWidgetCommonTextButtonWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonTextButtonWidget"] === true;
	};
	let JkWidgetCommonNavigationFrameWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.contentArea = null;
		this.actionBar = null;
		this.dimWidget = null;
		this.sidebarWidget = null;
		this.sidebarSlotLeft = null;
		this.sidebarIsFixed = false;
		this.sidebarIsDisplayed = false;
		this.widgetEnableSidebar = true;
		this.widgetEnableActionBar = true;
		this.widgetActionBarIsFloating = false;
		this.widgetActionBarBackgroundColor = null;
		this.widgetActionBarTextColor = null;
		this.widgetActionBarMenuItemSpacing = 0;
		this.widgetBackgroundColor = null;
		this.widgetBurgerMenuImageResourceName = "burger";
	};
	JkWidgetCommonNavigationFrameWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonNavigationFrameWidget.prototype.constructor = JkWidgetCommonNavigationFrameWidget;
	JkWidgetCommonNavigationFrameWidget.prototype._t = {
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetCommonNavigationFrameWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetTitleContainerWidget" : true,
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonNavigationFrameWidget.prototype._tobj = JkWidgetCommonNavigationFrameWidget;
	JkWidgetCommonNavigationFrameWidget.NEW_JkUiGuiApplicationContext = function(ctx) {
		var v = new JkWidgetCommonNavigationFrameWidget;
		return v.CTOR_JkWidgetCommonNavigationFrameWidget_JkUiGuiApplicationContext(ctx);
	};
	JkWidgetCommonNavigationFrameWidget.prototype.CTOR_JkWidgetCommonNavigationFrameWidget_JkUiGuiApplicationContext = function(ctx) {
		this.widgetBurgerMenuImageResourceName = "burger";
		this.widgetBackgroundColor = null;
		this.widgetActionBarMenuItemSpacing = 0;
		this.widgetActionBarTextColor = null;
		this.widgetActionBarBackgroundColor = null;
		this.widgetActionBarIsFloating = false;
		this.widgetEnableActionBar = true;
		this.widgetEnableSidebar = true;
		this.sidebarIsDisplayed = false;
		this.sidebarIsFixed = false;
		this.sidebarSlotLeft = null;
		this.sidebarWidget = null;
		this.dimWidget = null;
		this.actionBar = null;
		this.contentArea = null;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, ctx) == null) {
			return null;
		}
		this.widgetActionBarBackgroundColor = JkGfxColor.black();
		this.widgetActionBarTextColor = JkGfxColor.white();
		return this;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.getActionBarMenuItems = function() {
		return null;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.getMenuHandler = function() {
		return null;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.getAppIconResource = function() {
		return null;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.getAppMenuHandler = function() {
		return null;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.getAppMenu = function() {
		return null;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.defaultLeftButtonConfiguration = function() {
		if(!(this.actionBar != null)) {
			return;
		}
		var handler = this.getMenuHandler();
		if(this.widgetEnableSidebar == false) {
			this.actionBar.configureLeftButton(null, null);
		}
		else if(handler == null) {
			if(this.sidebarIsFixed == false) {
				this.actionBar.configureLeftButton(this.widgetBurgerMenuImageResourceName, (function() {
					this.displaySidebarWidget(true);
				}.bind(this)));
			}
			else {
				this.actionBar.configureLeftButton(null, null);
			}
		}
		else {
			this.actionBar.configureLeftButton(this.widgetBurgerMenuImageResourceName, handler);
		}
	};
	JkWidgetCommonNavigationFrameWidget.prototype.updateMenuButton = function() {
		this.defaultLeftButtonConfiguration();
	};
	JkWidgetCommonNavigationFrameWidget.prototype.createSidebarWidget = function() {
		return null;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.enableFixedSidebar = function() {
		if(this.sidebarWidget == null || this.sidebarSlotLeft == null || this.sidebarIsFixed) {
			return;
		}
		this.hideSidebarWidget(false);
		this.sidebarIsFixed = true;
		this.sidebarSlotLeft.addWidget(this.sidebarWidget);
		this.updateMenuButton();
	};
	JkWidgetCommonNavigationFrameWidget.prototype.disableFixedSidebar = function() {
		if(this.sidebarIsDisplayed || this.sidebarIsFixed == false) {
			return;
		}
		JkWidgetWidget.removeFromParent(this.sidebarWidget);
		this.sidebarIsFixed = false;
		this.updateMenuButton();
	};
	JkWidgetCommonNavigationFrameWidget.prototype.updateSidebarWidthRequest = function(sz) {
		var v = 0;
		if(this.sidebarIsFixed == false && this.sidebarIsDisplayed && this.sidebarWidget != null) {
			var layer = (function(o) {
				if(JkWidgetLayerWidget.IS_INSTANCE && JkWidgetLayerWidget.IS_INSTANCE(o)) {
					return o;
				}
				return null;
			}.bind(this))((JkWidgetWidget.getParent(this.sidebarWidget)));
			if(layer != null) {
				v = ~(~(0.8 * ~(~sz)));
				layer.setWidgetMaximumWidthRequest(v);
			}
		}
		return v;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.computeWidgetLayout = function(widthConstraint) {
		if(widthConstraint > this.context.getWidthValue("200mm")) {
			this.enableFixedSidebar();
		}
		else {
			this.disableFixedSidebar();
		}
		JkWidgetLayerWidget.prototype.computeWidgetLayout.call(this, widthConstraint);
	};
	JkWidgetCommonNavigationFrameWidget.prototype.displaySidebarWidget = function(animated) {
		if(this.sidebarIsFixed || this.sidebarIsDisplayed || this.sidebarWidget == null) {
			return;
		}
		if(this.dimWidget == null) {
			this.dimWidget = JkWidgetCanvasWidget.forColor(this.context, (JkGfxColor.forRGBADouble(0.0, 0.0, 0.0, 0.8)));
		}
		this.addWidget(this.dimWidget);
		this.sidebarIsDisplayed = true;
		var box = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
		box.addWidget((JkWidgetLayerWidget.forWidget(this.context, this.sidebarWidget, 0)));
		var filler = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		JkWidgetWidget.setWidgetClickHandler(filler, (function() {
			this.hideSidebarWidget(true);
		}.bind(this)));
		box.addWidget1(filler, 1);
		var sidebarWidthRequest = this.updateSidebarWidthRequest((JkWidgetWidget.getWidth(this)));
		this.addWidget(box);
		if(animated) {
			JkWidgetWidget.setAlpha(box, 0.0);
			var sx = -sidebarWidthRequest;
			JkWidgetWidget.move(box, sx, (JkWidgetWidget.getY(box)));
			JkWidgetWidget.setAlpha(this.dimWidget, 0.0);
			var anim = JkWidgetWidgetAnimation.forDuration(this.context, 250);
			anim.addCallback((function(completion1) {
				var dx = ~(~(sx + ~(~((0 - sx) * completion1))));
				if(dx > 0) {
					dx = 0;
				}
				JkWidgetWidget.move(box, dx, (JkWidgetWidget.getY(box)));
				JkWidgetWidget.setAlpha(this.dimWidget, completion1);
				JkWidgetWidget.setAlpha(box, completion1);
			}.bind(this)));
			anim.start();
		}
	};
	JkWidgetCommonNavigationFrameWidget.prototype.hideSidebarWidget = function(animated) {
		if(this.sidebarIsDisplayed == false) {
			return;
		}
		this.sidebarIsDisplayed = false;
		var box = JkWidgetWidget.getParent((JkWidgetWidget.getParent(this.sidebarWidget)));
		if(animated) {
			var fx = -JkWidgetWidget.getWidth(this.sidebarWidget);
			var anim = JkWidgetWidgetAnimation.forDuration(this.context, 250);
			anim.addCallback((function(completion1) {
				var dx = ~(~(fx * completion1));
				JkWidgetWidget.move(box, dx, (JkWidgetWidget.getY(box)));
				JkWidgetWidget.setAlpha(this.dimWidget, (1.0 - completion1));
			}.bind(this)));
			anim.setEndListener((function() {
				JkWidgetWidget.removeFromParent(this.sidebarWidget);
				JkWidgetWidget.removeFromParent(box);
				JkWidgetWidget.removeFromParent(this.dimWidget);
			}.bind(this)));
			anim.start();
		}
		else {
			JkWidgetWidget.removeFromParent(this.sidebarWidget);
			JkWidgetWidget.removeFromParent(box);
			JkWidgetWidget.removeFromParent(this.dimWidget);
		}
	};
	JkWidgetCommonNavigationFrameWidget.prototype.createBackground = function() {
		var bgc = this.getWidgetBackgroundColor();
		if(bgc != null) {
			this.addWidget((JkWidgetCanvasWidget.forColor(this.context, bgc)));
		}
	};
	JkWidgetCommonNavigationFrameWidget.prototype.initializeWidget = function() {
		JkWidgetLayerWidget.prototype.initializeWidget.call(this);
		this.createBackground();
		var mainContainer = JkWidgetVerticalBoxWidget.forContext(this.context, 0, 0);
		if(this.widgetEnableActionBar) {
			this.actionBar = JkWidgetCommonActionBarWidget.NEW_JkUiGuiApplicationContext(this.context);
			this.actionBar.setWidgetBackgroundColor(this.widgetActionBarBackgroundColor);
			this.actionBar.setWidgetTextColor(this.widgetActionBarTextColor);
			this.actionBar.setWidgetMenuItemSpacing(this.widgetActionBarMenuItemSpacing);
			var appIcon = this.getAppIconResource();
			if(JkLangString.isEmpty(appIcon) == false) {
				var menu = this.getAppMenu();
				if(menu != null) {
					this.actionBar.configureRightButtonMenu(appIcon, menu);
				}
				else {
					var handler = this.getAppMenuHandler();
					if(handler != null) {
						this.actionBar.configureRightButton(appIcon, handler);
					}
				}
			}
		}
		if(this.actionBar != null && this.widgetActionBarIsFloating == false) {
			mainContainer.addWidget(this.actionBar);
		}
		this.contentArea = JkWidgetCommonSwitcherLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		if(this.actionBar != null && this.widgetActionBarIsFloating == true) {
			var ll = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
			ll.addWidget(this.contentArea);
			ll.addWidget((JkWidgetVerticalBoxWidget.forContext(this.context, 0, 0).addWidget1(this.actionBar, 0.0).addWidget1((JkWidgetContainerWidget.NEW_JkUiGuiApplicationContext(this.context)), 1.0)));
			mainContainer.addWidget1(ll, 1.0);
		}
		else {
			mainContainer.addWidget1(this.contentArea, 1.0);
		}
		var superMainContainer = JkWidgetHorizontalBoxWidget.forContext(this.context, 0, 0);
		this.sidebarSlotLeft = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		superMainContainer.addWidget(this.sidebarSlotLeft);
		superMainContainer.addWidget1(mainContainer, 1);
		this.addWidget(superMainContainer);
		this.sidebarWidget = this.createSidebarWidget();
		this.updateMenuButton();
	};
	JkWidgetCommonNavigationFrameWidget.prototype.updateWidgetTitle = function(title) {
		if(this.actionBar != null) {
			this.actionBar.setWidgetTitle(title);
		}
	};
	JkWidgetCommonNavigationFrameWidget.prototype.onCurrentWidgetChanged = function() {
		if(!(this.contentArea != null)) {
			return;
		}
		var widget = null;
		var widgets = JkWidgetWidget.getChildren(this.contentArea);
		if(widgets != null && JkLangVector.getSize(widgets) > 0) {
			widget = JkLangVector.get(widgets, (JkLangVector.getSize(widgets) - 1));
		}
		if(widget != null && (JkWidgetDisplayAwareWidget.IS_INSTANCE && JkWidgetDisplayAwareWidget.IS_INSTANCE(widget))) {
			widget.onWidgetDisplayed();
		}
		if(widget != null && (JkWidgetTitledWidget.IS_INSTANCE && JkWidgetTitledWidget.IS_INSTANCE(widget))) {
			this.updateWidgetTitle((widget.getWidgetTitle()));
		}
		else {
			this.updateWidgetTitle("");
		}
		if(widget != null && (JkWidgetCommonActionBarControlWidget.IS_INSTANCE && JkWidgetCommonActionBarControlWidget.IS_INSTANCE(widget))) {
			if(!(this.actionBar != null)) {
				return;
			}
			this.actionBar.removeOverlay();
			var customBar = widget.createActionBarOverlay(this.actionBar);
			if(customBar != null) {
				this.actionBar.addOverlay(customBar);
			}
			this.actionBar.clearMenuItems();
			var menuItems = widget.getActionBarItems();
			if(menuItems != null) {
				this.actionBar.configureMenuItems(menuItems);
			}
			widget.setActionBarBackgroundColor(this.actionBar);
		}
		else {
			if(this.actionBar != null) {
				this.actionBar.removeOverlay();
				this.actionBar.clearMenuItems();
				this.actionBar.setActionBarBackgroundColor(this.widgetActionBarBackgroundColor);
			}
			var menuItems1 = this.getActionBarMenuItems();
			if(menuItems1 != null) {
				this.actionBar.configureMenuItems(menuItems1);
			}
		}
		this.updateMenuButton();
	};
	JkWidgetCommonNavigationFrameWidget.prototype.createWidget = function() {
		JkWidgetLayerWidget.prototype.createWidget.call(this);
		var thisWidget = this;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.getWidgetEnableSidebar = function() {
		return this.widgetEnableSidebar;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.setWidgetEnableSidebar = function(v) {
		this.widgetEnableSidebar = v;
		return this;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.getWidgetEnableActionBar = function() {
		return this.widgetEnableActionBar;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.setWidgetEnableActionBar = function(v) {
		this.widgetEnableActionBar = v;
		return this;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.getWidgetActionBarIsFloating = function() {
		return this.widgetActionBarIsFloating;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.setWidgetActionBarIsFloating = function(v) {
		this.widgetActionBarIsFloating = v;
		return this;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.getWidgetActionBarBackgroundColor = function() {
		return this.widgetActionBarBackgroundColor;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.setWidgetActionBarBackgroundColor = function(v) {
		this.widgetActionBarBackgroundColor = v;
		return this;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.getWidgetActionBarTextColor = function() {
		return this.widgetActionBarTextColor;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.setWidgetActionBarTextColor = function(v) {
		this.widgetActionBarTextColor = v;
		return this;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.getWidgetActionBarMenuItemSpacing = function() {
		return this.widgetActionBarMenuItemSpacing;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.setWidgetActionBarMenuItemSpacing = function(v) {
		this.widgetActionBarMenuItemSpacing = v;
		return this;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.getWidgetBackgroundColor = function() {
		return this.widgetBackgroundColor;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.setWidgetBackgroundColor = function(v) {
		this.widgetBackgroundColor = v;
		return this;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.getWidgetBurgerMenuImageResourceName = function() {
		return this.widgetBurgerMenuImageResourceName;
	};
	JkWidgetCommonNavigationFrameWidget.prototype.setWidgetBurgerMenuImageResourceName = function(v) {
		this.widgetBurgerMenuImageResourceName = v;
		return this;
	};
	JkWidgetCommonNavigationFrameWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonNavigationFrameWidget"] === true;
	};
	let JkWidgetCommonActionBarControlWidget = {};
	JkWidgetCommonActionBarControlWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonActionBarControlWidget"] === true;
	};
	let JkWidgetCommonDynamicVerticalScrollerWidgetMyContainerWidget = function() {
		JkWidgetVerticalBoxWidget.call(this);
		this.widgetHeightChangeListener = null;
	};
	JkWidgetCommonDynamicVerticalScrollerWidgetMyContainerWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetVerticalBoxWidget.prototype);
	JkWidgetCommonDynamicVerticalScrollerWidgetMyContainerWidget.prototype.constructor = JkWidgetCommonDynamicVerticalScrollerWidgetMyContainerWidget;
	JkWidgetCommonDynamicVerticalScrollerWidgetMyContainerWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetCommonDynamicVerticalScrollerWidgetMyContainerWidget" : true,
		"JkWidgetVerticalBoxWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonDynamicVerticalScrollerWidgetMyContainerWidget.prototype._tobj = JkWidgetCommonDynamicVerticalScrollerWidgetMyContainerWidget;
	JkWidgetCommonDynamicVerticalScrollerWidgetMyContainerWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonDynamicVerticalScrollerWidgetMyContainerWidget;
		return v.CTOR_JkWidgetCommonDynamicVerticalScrollerWidgetMyContainerWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonDynamicVerticalScrollerWidgetMyContainerWidget.prototype.CTOR_JkWidgetCommonDynamicVerticalScrollerWidgetMyContainerWidget_JkUiGuiApplicationContext = function(context) {
		this.widgetHeightChangeListener = null;
		if(JkWidgetVerticalBoxWidget.prototype.CTOR_JkWidgetVerticalBoxWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonDynamicVerticalScrollerWidgetMyContainerWidget.prototype.onWidgetHeightChanged = function(height) {
		JkWidgetVerticalBoxWidget.prototype.onWidgetHeightChanged.call(this, height);
		if(this.widgetHeightChangeListener != null) {
			this.widgetHeightChangeListener(height);
		}
	};
	JkWidgetCommonDynamicVerticalScrollerWidgetMyContainerWidget.prototype.clear = function() {
		JkWidgetWidget.removeChildrenOf(this);
	};
	JkWidgetCommonDynamicVerticalScrollerWidgetMyContainerWidget.prototype.createWidget = function() {
		JkWidgetVerticalBoxWidget.prototype.createWidget.call(this);
		var thisWidget = this;
	};
	JkWidgetCommonDynamicVerticalScrollerWidgetMyContainerWidget.prototype.getWidgetHeightChangeListener = function() {
		return this.widgetHeightChangeListener;
	};
	JkWidgetCommonDynamicVerticalScrollerWidgetMyContainerWidget.prototype.setWidgetHeightChangeListener = function(v) {
		this.widgetHeightChangeListener = v;
		return this;
	};
	JkWidgetCommonDynamicVerticalScrollerWidgetMyContainerWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonDynamicVerticalScrollerWidgetMyContainerWidget"] === true;
	};
	let JkWidgetCommonDynamicVerticalScrollerWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.widgetProviderHandler = null;
		this.widgetProvider = null;
		this.widgetItemAddCount = 5;
		this.lastContainerHeight = -1;
		this.onScrollNearEndEventRaised = false;
		this.isAdding = false;
		this.scroller = null;
		this.container = null;
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonDynamicVerticalScrollerWidget.prototype.constructor = JkWidgetCommonDynamicVerticalScrollerWidget;
	JkWidgetCommonDynamicVerticalScrollerWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetCommonDynamicVerticalScrollerWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.prototype._tobj = JkWidgetCommonDynamicVerticalScrollerWidget;
	JkWidgetCommonDynamicVerticalScrollerWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonDynamicVerticalScrollerWidget;
		return v.CTOR_JkWidgetCommonDynamicVerticalScrollerWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.prototype.CTOR_JkWidgetCommonDynamicVerticalScrollerWidget_JkUiGuiApplicationContext = function(context) {
		this.container = null;
		this.scroller = null;
		this.isAdding = false;
		this.onScrollNearEndEventRaised = false;
		this.lastContainerHeight = -1;
		this.widgetItemAddCount = 5;
		this.widgetProvider = null;
		this.widgetProviderHandler = null;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.forHandler = function(context, handler) {
		var v = JkWidgetCommonDynamicVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetProviderHandler(handler);
		return v;
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.forProvider = function(context, provider) {
		var v = JkWidgetCommonDynamicVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetProvider(provider);
		return v;
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.forWidgets = function(context, widgets) {
		var v = JkWidgetCommonDynamicVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetProvider((JkWidgetStaticWidgetProvider.forWidgets(widgets)));
		return v;
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.prototype.setWidgetContainerSpacing = function(height) {
		if(!(this.container != null)) {
			this.forceCreateWidget();
		}
		this.container.setWidgetSpacing(height);
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.prototype.setWidgetContainerMargin = function(height) {
		if(!(this.container != null)) {
			this.forceCreateWidget();
		}
		this.container.setWidgetMargin(height);
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.prototype.initializeWidget = function() {
		JkWidgetLayerWidget.prototype.initializeWidget.call(this);
		this.scroller.setOnScrolledHandler((function(direction1) {
			this.onScroll(direction1);
		}.bind(this)));
		this.onAddWidget(this.container);
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.prototype.onScroll = function(direction) {
		if(!(this.scroller.isNearEnd() && !this.onScrollNearEndEventRaised)) {
			return;
		}
		this.onScrollNearEndEventRaised = true;
		var containerHeight = JkWidgetWidget.getHeight(this.container);
		if(!(containerHeight > JkWidgetWidget.getHeight(this.scroller) && this.lastContainerHeight != containerHeight)) {
			this.onScrollNearEndEventRaised = false;
			return;
		}
		this.lastContainerHeight = containerHeight;
		this.onScrollNearEnd();
		this.onScrollNearEndEventRaised = false;
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.prototype.onContainerHeightChanged = function(newHeight) {
		if(JkWidgetWidget.getHeight(this.scroller) * 2 > newHeight) {
			this.showNextWidgets();
		}
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.prototype.onScrollNearEnd = function() {
		this.showNextWidgets();
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.prototype.showNextWidgets = function() {
		if(!(!this.isAdding)) {
			return;
		}
		this.isAdding = true;
		var count = this.widgetItemAddCount;
		while(count > 0){
			this.onAddWidget(this.container);
			count--;
		}
		this.isAdding = false;
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.prototype.onAddWidget = function(container) {
		var widget = null;
		if(this.widgetProvider != null) {
			widget = this.widgetProvider.getNextWidget();
		}
		else if(this.widgetProviderHandler != null) {
			widget = this.widgetProviderHandler();
		}
		if(widget != null) {
			container.addWidget(widget);
		}
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.prototype.clear = function() {
		this.container.clear();
		if(this.widgetProvider != null) {
			this.widgetProvider.reset();
		}
		this.showNextWidgets();
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.prototype.createWidget = function() {
		JkWidgetLayerWidget.prototype.createWidget.call(this);
		var thisWidget = this;
		this.scroller = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.scroller.setWidgetScrollBarDisabled(true);
		this.container = JkWidgetCommonDynamicVerticalScrollerWidgetMyContainerWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.container.setWidgetHeightChangeListener((function(height1) {
			this.onContainerHeightChanged(height1);
		}.bind(this)));
		this.scroller.addWidget(this.container);
		this.addWidget(this.scroller);
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.prototype.getWidgetProviderHandler = function() {
		return this.widgetProviderHandler;
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.prototype.setWidgetProviderHandler = function(v) {
		this.widgetProviderHandler = v;
		return this;
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.prototype.getWidgetProvider = function() {
		return this.widgetProvider;
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.prototype.setWidgetProvider = function(v) {
		this.widgetProvider = v;
		return this;
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.prototype.getWidgetItemAddCount = function() {
		return this.widgetItemAddCount;
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.prototype.setWidgetItemAddCount = function(v) {
		this.widgetItemAddCount = v;
		return this;
	};
	JkWidgetCommonDynamicVerticalScrollerWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonDynamicVerticalScrollerWidget"] === true;
	};
	let JkWidgetCommonHyperLinkWidget = function() {
		JkWidgetWidget.call(this);
		this.widgetContext = null;
		this.widgetText = null;
		this.widgetTextColor = null;
		this.widgetFontSize = 0.0;
		this.widgetClickHandler = null;
		this.widgetUrl = null;
	};
	JkWidgetCommonHyperLinkWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetWidget.prototype);
	JkWidgetCommonHyperLinkWidget.prototype.constructor = JkWidgetCommonHyperLinkWidget;
	JkWidgetCommonHyperLinkWidget.prototype._t = {
		"JkWidgetWidget" : true,
		"JkWidgetCommonHyperLinkWidget" : true
	};
	JkWidgetCommonHyperLinkWidget.prototype._tobj = JkWidgetCommonHyperLinkWidget;
	JkWidgetCommonHyperLinkWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonHyperLinkWidget;
		return v.CTOR_JkWidgetCommonHyperLinkWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonHyperLinkWidget.prototype.CTOR_JkWidgetCommonHyperLinkWidget_JkUiGuiApplicationContext = function(context) {
		if(JkWidgetWidget.prototype.CTOR_JkWidgetWidget.call(this) == null) {
			return null;
		}
		this.widgetUrl = null;
		this.widgetClickHandler = null;
		this.widgetFontSize = 0.0;
		this.widgetTextColor = null;
		this.widgetText = null;
		this.widgetContext = null;
		this.widgetContext = context;
		this.setWidgetTextColor((JkGfxColor.forRGB(0, 0, 0xff)));
		this.setWidgetFontSize((context.getHeightValue("3mm")));
		return this;
	};
	JkWidgetCommonHyperLinkWidget.forText = function(context, text, handler) {
		var v = JkWidgetCommonHyperLinkWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetText(text);
		v.setWidgetClickHandler(handler);
		return v;
	};
	JkWidgetCommonHyperLinkWidget.prototype.createElement = function() {
		var v = JkUiHTMLDOM.createElement("a");
		JkUiHTMLDOM.setAttribute(v, "href", "javascript:void(0)");
		return v;
	};
	JkWidgetCommonHyperLinkWidget.prototype.prepareElement = function(v) {
		JkWidgetWidget.prototype.prepareElement.call(this, v);
		JkUiHTMLDOM.setStyle(v, "display", "block");
		JkUiHTMLDOM.setStyle(v, "font-size", "20px");
		JkUiHTMLDOM.setFontFamily(v, "Arial");
	};
	JkWidgetCommonHyperLinkWidget.prototype.setWidgetText = function(text) {
		this.widgetText = text;
		JkUiHTMLDOM.setTextContent(this.element, text);
	};
	JkWidgetCommonHyperLinkWidget.prototype.getWidgetText = function() {
		return this.widgetText;
	};
	JkWidgetCommonHyperLinkWidget.prototype.setWidgetTextColor = function(color) {
		this.widgetTextColor = color;
		JkUiHTMLDOM.setStyle(this.element, "color", (color.toRgbString()));
		return this;
	};
	JkWidgetCommonHyperLinkWidget.prototype.getWidgetTextColor = function() {
		return this.widgetTextColor;
	};
	JkWidgetCommonHyperLinkWidget.prototype.setWidgetFontSize = function(fontSize) {
		this.widgetFontSize = fontSize;
		JkUiHTMLDOM.setStyle(this.element, "font-size", (JkLangString.safeString((JkLangString.forDouble(fontSize))) + "px"));
	};
	JkWidgetCommonHyperLinkWidget.prototype.getFontSize = function() {
		return this.widgetFontSize;
	};
	JkWidgetCommonHyperLinkWidget.prototype.setWidgetClickHandler = function(handler) {
		this.widgetClickHandler = handler;
		JkWidgetWidget.setWidgetClickHandler(this, handler);
	};
	JkWidgetCommonHyperLinkWidget.prototype.setWidgetUrl = function(url) {
		this.widgetUrl = url;
		JkUiHTMLDOM.setAttribute(this.element, "href", url);
	};
	JkWidgetCommonHyperLinkWidget.prototype.getWidgetUrl = function() {
		return this.widgetUrl;
	};
	JkWidgetCommonHyperLinkWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonHyperLinkWidget"] === true;
	};
	let JkWidgetCommonMenuBarWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.box = null;
	};
	JkWidgetCommonMenuBarWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonMenuBarWidget.prototype.constructor = JkWidgetCommonMenuBarWidget;
	JkWidgetCommonMenuBarWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetCommonMenuBarWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonMenuBarWidget.prototype._tobj = JkWidgetCommonMenuBarWidget;
	JkWidgetCommonMenuBarWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonMenuBarWidget;
		return v.CTOR_JkWidgetCommonMenuBarWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonMenuBarWidget.prototype.CTOR_JkWidgetCommonMenuBarWidget_JkUiGuiApplicationContext = function(context) {
		this.box = null;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonMenuBarWidget.prototype.addMenu = function(title, menu) {
		var v = menu;
		if(!(v != null)) {
			v = JkWidgetMenu.NEW();
		}
		var m = v;
		var button = JkWidgetCommonTextButtonWidget.forText(this.context, title, null);
		button.setWidgetPadding((this.context.getHeightValue("1mm")));
		button.setWidgetPaddingHorizontal((this.context.getWidthValue("3mm")));
		button.setWidgetBackgroundColor((JkGfxColor.forString("#BBBBBB")));
		button.setWidgetClickHandler((function() {
			JkWidgetCommonPopupMenu.showBelow(this.context, button, m, (-1), (-1));
		}.bind(this)));
		this.box.addWidget(button);
		return v;
	};
	JkWidgetCommonMenuBarWidget.prototype.createWidget = function() {
		JkWidgetLayerWidget.prototype.createWidget.call(this);
		var thisWidget = this;
		var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
		widget.setWidgetColor((JkGfxColor.forString("#BBBBBB")));
		this.addWidget(widget);
		this.box = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.box.setWidgetSpacing((this.context.getWidthValue("300um")));
		this.box.setWidgetMargin((this.context.getWidthValue("300um")));
		this.addWidget(this.box);
	};
	JkWidgetCommonMenuBarWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonMenuBarWidget"] === true;
	};
	let JkWidgetCommonRouteNavigationWidgetRoute = function() {
		this.name = null;
		this.handler = null;
	};
	JkWidgetCommonRouteNavigationWidgetRoute.prototype._t = { "JkWidgetCommonRouteNavigationWidgetRoute" : true };
	JkWidgetCommonRouteNavigationWidgetRoute.prototype._tobj = JkWidgetCommonRouteNavigationWidgetRoute;
	JkWidgetCommonRouteNavigationWidgetRoute.NEW = function() {
		var v = new JkWidgetCommonRouteNavigationWidgetRoute;
		return v.CTOR_JkWidgetCommonRouteNavigationWidgetRoute();
	};
	JkWidgetCommonRouteNavigationWidgetRoute.prototype.CTOR_JkWidgetCommonRouteNavigationWidgetRoute = function() {
		this.handler = null;
		this.name = null;
		return this;
	};
	JkWidgetCommonRouteNavigationWidgetRoute.prototype.getName = function() {
		return this.name;
	};
	JkWidgetCommonRouteNavigationWidgetRoute.prototype.setName = function(v) {
		this.name = v;
		return this;
	};
	JkWidgetCommonRouteNavigationWidgetRoute.prototype.getHandler = function() {
		return this.handler;
	};
	JkWidgetCommonRouteNavigationWidgetRoute.prototype.setHandler = function(v) {
		this.handler = v;
		return this;
	};
	JkWidgetCommonRouteNavigationWidgetRoute.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonRouteNavigationWidgetRoute"] === true;
	};
	let JkWidgetCommonRouteNavigationWidget = function() {
		JkWidgetCommonNavigationFrameWidget.call(this);
		this.routes = null;
	};
	JkWidgetCommonRouteNavigationWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetCommonNavigationFrameWidget.prototype);
	JkWidgetCommonRouteNavigationWidget.prototype.constructor = JkWidgetCommonRouteNavigationWidget;
	JkWidgetCommonRouteNavigationWidget.prototype._t = {
		"JkUiRouterListener" : true,
		"JkWidgetCommonRouteNavigationWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true,
		"JkWidgetCommonNavigationFrameWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetTitleContainerWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetParentAwareWidget" : true
	};
	JkWidgetCommonRouteNavigationWidget.prototype._tobj = JkWidgetCommonRouteNavigationWidget;
	JkWidgetCommonRouteNavigationWidget.NEW_JkUiGuiApplicationContext = function(ctx) {
		var v = new JkWidgetCommonRouteNavigationWidget;
		return v.CTOR_JkWidgetCommonRouteNavigationWidget_JkUiGuiApplicationContext(ctx);
	};
	JkWidgetCommonRouteNavigationWidget.prototype.CTOR_JkWidgetCommonRouteNavigationWidget_JkUiGuiApplicationContext = function(ctx) {
		this.routes = null;
		if(JkWidgetCommonNavigationFrameWidget.prototype.CTOR_JkWidgetCommonNavigationFrameWidget_JkUiGuiApplicationContext.call(this, ctx) == null) {
			return null;
		}
		this.routes = new Map;
		return this;
	};
	JkWidgetCommonRouteNavigationWidget.prototype.initializeWidget = function() {
		JkWidgetCommonNavigationFrameWidget.prototype.initializeWidget.call(this);
		JkUiRouter.goToDefault();
	};
	JkWidgetCommonRouteNavigationWidget.prototype.onRouteChanged = function(route) {
		var w = this.getWidget(route);
		if(!(w != null)) {
			return;
		}
		JkWidgetWidget.removeChildrenOf(this.contentArea);
		this.contentArea.addWidget(w);
		if(JkWidgetDisplayAwareWidget.IS_INSTANCE && JkWidgetDisplayAwareWidget.IS_INSTANCE(w)) {
			w.onWidgetDisplayed();
		}
	};
	JkWidgetCommonRouteNavigationWidget.prototype.initializeRoutes = function(rs) {
		if(!(rs != null)) {
			return false;
		}
		if(rs != null) {
			var n = 0;
			var m2 = rs.length;
			for(n = 0 ; n < m2 ; n++) {
				var m = (function(o) {
					if(JkWidgetCommonRouteNavigationWidgetRoute.IS_INSTANCE && JkWidgetCommonRouteNavigationWidgetRoute.IS_INSTANCE(o)) {
						return o;
					}
					return null;
				}.bind(this))(rs[n]);
				if(m != null) {
					var route = m.getName();
					var widget = m.getHandler();
					this.addRoute(route, widget);
				}
			}
		}
		return true;
	};
	JkWidgetCommonRouteNavigationWidget.prototype.addRoute = function(route, callback) {
		if(!(this.routes != null)) {
			this.routes = new Map;
		}
		this.routes.set(route, callback);
	};
	JkWidgetCommonRouteNavigationWidget.prototype.getWidget = function(route) {
		var w = JkLangMap.getValue(this.routes, route);
		if(!(w != null)) {
			w = JkLangMap.getValue(this.routes, "*");
		}
		if(!(w != null)) {
			return null;
		}
		return w();
	};
	JkWidgetCommonRouteNavigationWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonRouteNavigationWidget"] === true;
	};
	let JkWidgetCommonAutoSuggestInputWidget = function() {
		JkWidgetCommonTextInputWidget.call(this);
		this.defaultNoRecordMessage = "No record found";
		this.widgetValueChangeHandler = null;
		this.widgetContext = null;
		this.widgetItems = null;
		this.container = null;
		this.myContainer = null;
		this.shown = false;
	};
	JkWidgetCommonAutoSuggestInputWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetCommonTextInputWidget.prototype);
	JkWidgetCommonAutoSuggestInputWidget.prototype.constructor = JkWidgetCommonAutoSuggestInputWidget;
	JkWidgetCommonAutoSuggestInputWidget.prototype._t = {
		"JkWidgetCommonAutoSuggestInputWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetCommonTextInputWidget" : true,
		"JkWidgetWidgetWithValue" : true
	};
	JkWidgetCommonAutoSuggestInputWidget.prototype._tobj = JkWidgetCommonAutoSuggestInputWidget;
	JkWidgetCommonAutoSuggestInputWidget.NEW_JkUiGuiApplicationContext = function(ctx) {
		var v = new JkWidgetCommonAutoSuggestInputWidget;
		return v.CTOR_JkWidgetCommonAutoSuggestInputWidget_JkUiGuiApplicationContext(ctx);
	};
	JkWidgetCommonAutoSuggestInputWidget.prototype.CTOR_JkWidgetCommonAutoSuggestInputWidget_JkUiGuiApplicationContext = function(ctx) {
		this.shown = false;
		this.myContainer = null;
		this.container = null;
		this.widgetItems = null;
		this.widgetContext = null;
		this.widgetValueChangeHandler = null;
		this.defaultNoRecordMessage = "No record found";
		if(JkWidgetCommonTextInputWidget.prototype.CTOR_JkWidgetCommonTextInputWidget_JkUiGuiApplicationContext.call(this, ctx) == null) {
			return null;
		}
		this.widgetContext = ctx;
		this.container = JkWidgetVerticalBoxWidget.forContext(this.widgetContext, 0, 0);
		this.setWidgetTextChangeHandler((function() {
			this.onWidgetTextChanged();
		}.bind(this)));
		return this;
	};
	JkWidgetCommonAutoSuggestInputWidget.prototype.isWidgetShown = function() {
		return this.shown;
	};
	JkWidgetCommonAutoSuggestInputWidget.prototype.clearItems = function() {
		if(!(this.container != null)) {
			return;
		}
		JkWidgetWidget.removeChildrenOf(this.container);
	};
	JkWidgetCommonAutoSuggestInputWidget.prototype.setWidgetItems = function(items) {
		this.widgetItems = items;
	};
	JkWidgetCommonAutoSuggestInputWidget.prototype.getWidgetItems = function() {
		return this.widgetItems;
	};
	JkWidgetCommonAutoSuggestInputWidget.prototype.createWidgetItem = function(title, isFirst, index) {
		var textColor = this.widgetContext.getStyleColor("AutoSuggestInputWidget", "textColor", null);
		if(!(textColor != null)) {
			textColor = JkGfxColor.black();
		}
		var backgroundColor = this.widgetContext.getStyleColor("AutoSuggestInputWidget", "backgroundColor", null);
		if(!(backgroundColor != null)) {
			backgroundColor = JkGfxColor.white();
		}
		var outlineColor = this.widgetContext.getStyleColor("AutoSuggestInputWidget", "outlineColor", null);
		if(!(outlineColor != null)) {
			outlineColor = JkGfxColor.black();
		}
		var outlineWidth = this.widgetContext.getStylePixels("AutoSuggestInputWidget", "outlineWidth", null);
		if(outlineWidth < 1) {
			outlineWidth = this.widgetContext.getHeightValue("1px");
		}
		var padding = this.widgetContext.getStylePixels("AutoSuggestInputWidget", "padding", null);
		if(padding < 1) {
			padding = this.widgetContext.getHeightValue("1000um");
		}
		var fontSize = this.widgetContext.getStylePixels("AutoSuggestInputWidget", "fontSize", null);
		if(fontSize < 1) {
			fontSize = this.widgetContext.getHeightValue("2mm");
		}
		var t = title;
		if(JkLangString.isEmpty(t)) {
			t = this.defaultNoRecordMessage;
		}
		var ttitle = t;
		var lbl = JkWidgetLabelWidget.forText(this.widgetContext, t);
		lbl.setWidgetTextColor(textColor);
		var layer = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.widgetContext);
		var canvas = JkWidgetCanvasWidget.forColor(this.widgetContext, backgroundColor);
		canvas.setWidgetOutlineColor(outlineColor);
		canvas.setWidgetOutlineWidth(outlineWidth);
		layer.addWidget(canvas);
		layer.addWidget((JkWidgetLayerWidget.forWidget(this.widgetContext, lbl, padding)));
		if(JkLangString.isNotEmpty(title)) {
			JkWidgetWidget.setWidgetClickHandler(layer, (function() {
				this.setWidgetText(ttitle);
				if(this.widgetValueChangeHandler != null) {
					this.widgetValueChangeHandler();
				}
				this.closePopup();
			}.bind(this)));
		}
		return layer;
	};
	JkWidgetCommonAutoSuggestInputWidget.prototype.showPopup = function() {
		if(!(this.container != null)) {
			return;
		}
		if(this.shown) {
			return;
		}
		var thisWidget = this;
		var parentLayer = null;
		var parent = JkWidgetWidget.getParent(thisWidget);
		while(parent != null){
			if(JkWidgetLayerWidget.IS_INSTANCE && JkWidgetLayerWidget.IS_INSTANCE(parent)) {
				parentLayer = parent;
			}
			parent = JkWidgetWidget.getParent(parent);
		}
		if(!(parentLayer != null)) {
			console.log("[jk.widget.common.AutoSuggestInputWidget.showPopup] (AutoSuggestInputWidget.sling:137:3): No LayerWidget was found in the widget tree. Cannot show suggestions dropdown!");
			return;
		}
		this.myContainer = JkWidgetCommonAutoSuggestInputWidgetMyContainerWidget.NEW_JkUiGuiApplicationContext(this.widgetContext);
		this.myContainer.setWidget(thisWidget);
		this.myContainer.addWidget(this.container);
		JkUiHTMLDOM.addEventListener((JkUiHTMLDOM.getDocument()), "click", (function() {
			this.closePopup();
		}.bind(this)));
		parentLayer.addWidget(this.myContainer);
		var animationDestY = JkWidgetWidget.getAbsoluteY(thisWidget);
		var ay = this.widgetContext.getHeightValue("3mm");
		JkWidgetWidget.move(this.container, (JkWidgetWidget.getAbsoluteX(thisWidget)), (~(~(animationDestY + ay))));
		var anim = JkWidgetWidgetAnimation.forDuration(this.widgetContext, 300);
		anim.addCallback((function(completion1) {
			var bgf = completion1 * 1.5;
			if(bgf > 1.0) {
				bgf = 1.0;
			}
			JkWidgetWidget.move(this.container, (JkWidgetWidget.getAbsoluteX(thisWidget)), (~(~(animationDestY + ~(~((1.0 - completion1) * ay))))));
		}.bind(this)));
		anim.start();
		this.shown = true;
	};
	JkWidgetCommonAutoSuggestInputWidget.prototype.closePopup = function() {
		if(!this.shown) {
			return;
		}
		var anim = JkWidgetWidgetAnimation.forDuration(this.widgetContext, 300);
		anim.addFadeOut(this.myContainer, true);
		anim.start();
		this.shown = false;
	};
	JkWidgetCommonAutoSuggestInputWidget.prototype.onWidgetTextChanged = function() {
		this.clearItems();
		if(JkLangString.getLength((this.getWidgetText())) < 3) {
			this.closePopup();
			return;
		}
		this.searchStringFromItems((this.getWidgetText()));
		this.showPopup();
	};
	JkWidgetCommonAutoSuggestInputWidget.prototype.searchStringFromItems = function(value) {
		if(!(this.widgetItems != null) || JkLangVector.isEmpty(this.widgetItems)) {
			this.addItemToList(null, false, 0);
		}
		if(this.widgetItems != null) {
			var n = 0;
			var m = this.widgetItems.length;
			for(n = 0 ; n < m ; n++) {
				var item = this.widgetItems[n];
				if(item != null) {
					if(JkLangString.contains((JkLangString.toLowerCase(item)), (JkLangString.toLowerCase(value)))) {
						this.addItemToList(item, false, 0);
					}
				}
			}
		}
		if(JkLangVector.getSize((JkWidgetWidget.getChildren(this.container))) < 1) {
			this.addItemToList(null, false, 0);
		}
	};
	JkWidgetCommonAutoSuggestInputWidget.prototype.addSuggestedItems = function() {
		if(!(this.widgetItems != null) || JkLangVector.isEmpty(this.widgetItems)) {
			this.addItemToList(null, false, 0);
		}
		var index = 0;
		var isFirst = true;
		if(this.widgetItems != null) {
			var n = 0;
			var m = this.widgetItems.length;
			for(n = 0 ; n < m ; n++) {
				var item = this.widgetItems[n];
				if(item != null) {
					this.addItemToList(item, isFirst, index);
					isFirst = false;
					index++;
				}
			}
		}
	};
	JkWidgetCommonAutoSuggestInputWidget.prototype.addItemToList = function(item, isFirst, index) {
		var v = this.createWidgetItem(item, isFirst, index);
		if(v != null) {
			this.container.addWidget(v);
		}
	};
	JkWidgetCommonAutoSuggestInputWidget.prototype.getDefaultNoRecordMessage = function() {
		return this.defaultNoRecordMessage;
	};
	JkWidgetCommonAutoSuggestInputWidget.prototype.setDefaultNoRecordMessage = function(v) {
		this.defaultNoRecordMessage = v;
		return this;
	};
	JkWidgetCommonAutoSuggestInputWidget.prototype.getWidgetValueChangeHandler = function() {
		return this.widgetValueChangeHandler;
	};
	JkWidgetCommonAutoSuggestInputWidget.prototype.setWidgetValueChangeHandler = function(v) {
		this.widgetValueChangeHandler = v;
		return this;
	};
	JkWidgetCommonAutoSuggestInputWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonAutoSuggestInputWidget"] === true;
	};
	let JkWidgetCommonRoundedTextBoxWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.outline = null;
		this.background = null;
		this.textInput = null;
	};
	JkWidgetCommonRoundedTextBoxWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonRoundedTextBoxWidget.prototype.constructor = JkWidgetCommonRoundedTextBoxWidget;
	JkWidgetCommonRoundedTextBoxWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetCommonRoundedTextBoxWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonRoundedTextBoxWidget.prototype._tobj = JkWidgetCommonRoundedTextBoxWidget;
	JkWidgetCommonRoundedTextBoxWidget.NEW_JkUiGuiApplicationContext = function(ctx) {
		var v = new JkWidgetCommonRoundedTextBoxWidget;
		return v.CTOR_JkWidgetCommonRoundedTextBoxWidget_JkUiGuiApplicationContext(ctx);
	};
	JkWidgetCommonRoundedTextBoxWidget.prototype.CTOR_JkWidgetCommonRoundedTextBoxWidget_JkUiGuiApplicationContext = function(ctx) {
		this.textInput = null;
		this.background = null;
		this.outline = null;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, ctx) == null) {
			return null;
		}
		this.forceCreateWidget();
		return this;
	};
	JkWidgetCommonRoundedTextBoxWidget.prototype.setWidgetEnabled = function(enable) {
		JkWidgetWidget.setEnabled(this.textInput, enable);
		return this;
	};
	JkWidgetCommonRoundedTextBoxWidget.prototype.setWidgetFontSize = function(fontsize) {
		this.textInput.setWidgetFontSize(fontsize);
		return this;
	};
	JkWidgetCommonRoundedTextBoxWidget.prototype.setWidgetPlaceholder = function(str) {
		this.textInput.setWidgetPlaceholder(str);
		return this;
	};
	JkWidgetCommonRoundedTextBoxWidget.prototype.setWidgetTextChangeHandler = function(handler) {
		if(!(handler != null)) {
			return null;
		}
		var hnd = handler;
		this.textInput.setWidgetTextChangeHandler((function() {
			hnd((this.textInput.getWidgetText()));
		}.bind(this)));
		return this;
	};
	JkWidgetCommonRoundedTextBoxWidget.prototype.setWidgetText = function(str) {
		this.textInput.setWidgetText(str);
		return this;
	};
	JkWidgetCommonRoundedTextBoxWidget.prototype.getWidgetText = function() {
		return this.textInput.getWidgetText();
	};
	JkWidgetCommonRoundedTextBoxWidget.prototype.createWidget = function() {
		JkWidgetLayerWidget.prototype.createWidget.call(this);
		var thisWidget = this;
		this.setWidgetMargin((this.context.getHeightValue("1px")));
		this.outline = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.outline.setWidgetColor((JkGfxColor.instance("#BCBEC0")));
		this.outline.setWidgetRoundingRadius1((this.context.getHeightValue("2000um")));
		this.addWidget(this.outline);
		var widget = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.background = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.background.setWidgetColor((JkGfxColor.white()));
		this.background.setWidgetRoundingRadius1((this.context.getHeightValue("2000um")));
		widget.addWidget(this.background);
		widget.setWidgetMargin((this.context.getHeightValue("1px")));
		var widget2 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
		var widget3 = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		widget3.setWidgetMargin((this.context.getHeightValue("3px")));
		this.textInput = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.textInput.setWidgetFontSize((this.context.getHeightValue("2000um")));
		widget3.addWidget(this.textInput);
		widget2.addWidget1(widget3, 0.0, 0.5, true);
		widget.addWidget(widget2);
		this.addWidget(widget);
	};
	JkWidgetCommonRoundedTextBoxWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonRoundedTextBoxWidget"] === true;
	};
	let JkWidgetCommonButtonWidget = function() {
		JkWidgetWidget.call(this);
		this.widgetContext = null;
		this.widgetText = null;
		this.widgetTextColor = null;
		this.widgetBackgroundColor = null;
		this.widgetIcon = null;
		this.widgetClickHandler = null;
		this.widgetFont = null;
		this.widgetFontSize = 0.0;
	};
	JkWidgetCommonButtonWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetWidget.prototype);
	JkWidgetCommonButtonWidget.prototype.constructor = JkWidgetCommonButtonWidget;
	JkWidgetCommonButtonWidget.prototype._t = {
		"JkWidgetWidget" : true,
		"JkWidgetCommonButtonWidget" : true
	};
	JkWidgetCommonButtonWidget.prototype._tobj = JkWidgetCommonButtonWidget;
	JkWidgetCommonButtonWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonButtonWidget;
		return v.CTOR_JkWidgetCommonButtonWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonButtonWidget.prototype.CTOR_JkWidgetCommonButtonWidget_JkUiGuiApplicationContext = function(context) {
		if(JkWidgetWidget.prototype.CTOR_JkWidgetWidget.call(this) == null) {
			return null;
		}
		this.widgetFontSize = 0.0;
		this.widgetFont = null;
		this.widgetClickHandler = null;
		this.widgetIcon = null;
		this.widgetBackgroundColor = null;
		this.widgetTextColor = null;
		this.widgetText = null;
		this.widgetContext = null;
		this.widgetContext = context;
		return this;
	};
	JkWidgetCommonButtonWidget.forText = function(context, text, handler) {
		var v = JkWidgetCommonButtonWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetText(text);
		v.setWidgetClickHandler(handler);
		return v;
	};
	JkWidgetCommonButtonWidget.prototype.createElement = function() {
		return JkUiHTMLDOM.createElement("button");
	};
	JkWidgetCommonButtonWidget.prototype.prepareElement = function(v) {
		JkWidgetWidget.prototype.prepareElement.call(this, v);
		JkUiHTMLDOM.setStyle(v, "font-size", "20px");
		JkUiHTMLDOM.setStyle(v, "padding", "8px");
		JkUiHTMLDOM.setStyle(v, "border", "none");
		JkUiHTMLDOM.setStyle(v, "cursor", "pointer");
	};
	JkWidgetCommonButtonWidget.prototype.setWidgetText = function(text) {
		this.widgetText = text;
		JkUiHTMLDOM.setTextContent(this.element, text);
	};
	JkWidgetCommonButtonWidget.prototype.getWidgetText = function() {
		return this.widgetText;
	};
	JkWidgetCommonButtonWidget.prototype.setWidgetTextColor = function(color) {
		this.widgetTextColor = color;
		if(color == null) {
			JkUiHTMLDOM.removeStyle(this.element, "background-color");
		}
		else {
			JkUiHTMLDOM.setStyle(this.element, "color", (JkUiHTMLDOM.colorToRGBA(color)));
		}
	};
	JkWidgetCommonButtonWidget.prototype.getWidgetTextColor = function() {
		return this.widgetTextColor;
	};
	JkWidgetCommonButtonWidget.prototype.setWidgetBackgroundColor = function(color) {
		this.widgetBackgroundColor = color;
		if(color == null) {
			JkUiHTMLDOM.removeStyle(this.element, "background-color");
		}
		else {
			JkUiHTMLDOM.setStyle(this.element, "background-color", (JkUiHTMLDOM.colorToRGBA(color)));
		}
	};
	JkWidgetCommonButtonWidget.prototype.getWidgetBackgroundColor = function() {
		return this.widgetBackgroundColor;
	};
	JkWidgetCommonButtonWidget.prototype.onWidgetClicked = function() {
		if(this.widgetClickHandler != null) {
			this.widgetClickHandler();
		}
	};
	JkWidgetCommonButtonWidget.prototype.setWidgetClickHandler = function(handler) {
		this.widgetClickHandler = handler;
		this.element.onclick = handler;
		;
	};
	JkWidgetCommonButtonWidget.prototype.setWidgetIcon = function(icon) {
		this.widgetIcon = icon;
		console.log("[jk.widget.common.ButtonWidget.setWidgetIcon] (ButtonWidget.sling:366:3): Not implemented");
	};
	JkWidgetCommonButtonWidget.prototype.getWidgetIcon = function() {
		return this.widgetIcon;
	};
	JkWidgetCommonButtonWidget.prototype.setWidgetFont = function(font) {
		this.widgetFont = font;
		JkUiHTMLDOM.setFontFamily(this.element, font);
	};
	JkWidgetCommonButtonWidget.prototype.setWidgetFontSize = function(fontSize) {
		this.widgetFontSize = fontSize;
		JkUiHTMLDOM.setStyle(this.element, "font-size", (JkLangString.safeString((JkLangString.forDouble(fontSize))) + "px"));
	};
	JkWidgetCommonButtonWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonButtonWidget"] === true;
	};
	let JkWidgetCommonDateSelectorWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.widgetContext = null;
		this.dayBox = null;
		this.monthBox = null;
		this.yearBox = null;
		this.value = null;
		this.skipYears = 0;
	};
	JkWidgetCommonDateSelectorWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonDateSelectorWidget.prototype.constructor = JkWidgetCommonDateSelectorWidget;
	JkWidgetCommonDateSelectorWidget.prototype._t = {
		"JkWidgetWidgetWithValue" : true,
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetCommonDateSelectorWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonDateSelectorWidget.prototype._tobj = JkWidgetCommonDateSelectorWidget;
	JkWidgetCommonDateSelectorWidget.NEW_JkUiGuiApplicationContext = function(ctx) {
		var v = new JkWidgetCommonDateSelectorWidget;
		return v.CTOR_JkWidgetCommonDateSelectorWidget_JkUiGuiApplicationContext(ctx);
	};
	JkWidgetCommonDateSelectorWidget.prototype.CTOR_JkWidgetCommonDateSelectorWidget_JkUiGuiApplicationContext = function(ctx) {
		this.skipYears = 0;
		this.value = null;
		this.yearBox = null;
		this.monthBox = null;
		this.dayBox = null;
		this.widgetContext = null;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, ctx) == null) {
			return null;
		}
		this.widgetContext = ctx;
		return this;
	};
	JkWidgetCommonDateSelectorWidget.forContext = function(context) {
		return JkWidgetCommonDateSelectorWidget.NEW_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonDateSelectorWidget.prototype.initializeWidget = function() {
		JkWidgetLayerWidget.prototype.initializeWidget.call(this);
		this.dayBox = JkWidgetCommonSelectWidget.forStringList1(this.context, ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]);
		this.monthBox = JkWidgetCommonSelectWidget.forKeyValueStrings1(this.context, ["1:January", "2:February", "3:March", "4:April", "5:May", "6:June", "7:July", "8:August", "9:September", "10:October", "11:November", "12:December"]);
		this.monthBox.setWidgetValueChangeHandler((function() {
			this.onChangeValues();
		}.bind(this)));
		var cy = JkTimeSystemClock.asDateTimeLocal().getYear();
		if(cy < 1) {
			cy = 2016;
		}
		cy -= this.skipYears;
		var yearOptions = JkLangKeyValueList.NEW();
		for(var i = cy ; i >= 1920 ; i--) {
			var str = JkLangString.forInteger(i);
			yearOptions.add(str, str);
		}
		this.yearBox = JkWidgetCommonSelectWidget.forKeyValueList(this.context, yearOptions);
		this.yearBox.setWidgetValueChangeHandler((function() {
			this.onChangeValues();
		}.bind(this)));
		var box = JkWidgetHorizontalBoxWidget.forContext(this.context, 0, 0);
		box.setWidgetSpacing((this.context.getHeightValue("1mm")));
		box.addWidget1(this.dayBox, 1);
		box.addWidget1(this.monthBox, 2);
		box.addWidget1(this.yearBox, 1);
		this.addWidget(box);
		this.applyValueToWidgets();
	};
	JkWidgetCommonDateSelectorWidget.prototype.applyValueToWidgets = function() {
		if(this.dayBox == null || this.monthBox == null || this.yearBox == null) {
			return;
		}
		if(!(this.value != null)) {
			return;
		}
		var year = JkLangString.getSubString(this.value, 0, 4);
		var month = JkLangString.getSubString(this.value, 4, 2);
		var day = JkLangString.getSubString(this.value, 6, 2);
		if(JkLangString.startsWith(day, "0", 0)) {
			day = JkLangString.getEndOfString(day, 1);
		}
		if(JkLangString.startsWith(month, "0", 0)) {
			month = JkLangString.getEndOfString(month, 1);
		}
		this.yearBox.setWidgetValue(year);
		this.monthBox.setWidgetValue(month);
		this.dayBox.setWidgetValue(day);
	};
	JkWidgetCommonDateSelectorWidget.prototype.getValueFromWidgets = function() {
		if(this.dayBox == null || this.monthBox == null || this.yearBox == null) {
			return;
		}
		var year = JkLangString.asString((this.yearBox.getWidgetValue()));
		var month = JkLangString.asString((this.monthBox.getWidgetValue()));
		var day = JkLangString.asString((this.dayBox.getWidgetValue()));
		var sb = JkLangStringBuilder.NEW();
		sb.appendString(year);
		if(JkLangString.getLength(month) == 1) {
			sb.appendCharacter(("0".charCodeAt()));
		}
		sb.appendString(month);
		if(JkLangString.getLength(day) == 1) {
			sb.appendCharacter(("0".charCodeAt()));
		}
		sb.appendString(day);
		this.value = sb.toString();
	};
	JkWidgetCommonDateSelectorWidget.prototype.setWidgetValue = function(value) {
		this.value = (function(o) {
			if(typeof o === "string") {
				return o;
			}
			return null;
		}.bind(this))(value);
		this.applyValueToWidgets();
	};
	JkWidgetCommonDateSelectorWidget.prototype.getWidgetValue = function() {
		this.getValueFromWidgets();
		return this.value;
	};
	JkWidgetCommonDateSelectorWidget.prototype.isLeapYear = function(year) {
		if(year != 0) {
			if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
				return true;
			}
		}
		return false;
	};
	JkWidgetCommonDateSelectorWidget.prototype.getNumberOfDays = function(month, year) {
		if(month == 4 || month == 6 || month == 9 || month == 11) {
			return 30;
		}
		else if(month == 2) {
			if(this.isLeapYear(year)) {
				return 29;
			}
			return 28;
		}
		return 31;
	};
	JkWidgetCommonDateSelectorWidget.prototype.onChangeValues = function() {
		if(!JkLangString.isNotEmpty((this.monthBox.getSelectedWidgetValue()))) {
			return;
		}
		if(!JkLangString.isNotEmpty((this.yearBox.getSelectedWidgetValue()))) {
			return;
		}
		var numberOfDays = this.getNumberOfDays((JkLangString.toInteger((this.monthBox.getSelectedWidgetValue()))), (JkLangString.toInteger((this.yearBox.getSelectedWidgetValue()))));
		var d = new Array;
		for(var x = 1 ; x <= numberOfDays ; x++) {
			d.push((JkLangString.forInteger(x)));
		}
		this.dayBox.setWidgetItemsAsStringList2(d);
	};
	JkWidgetCommonDateSelectorWidget.prototype.getSkipYears = function() {
		return this.skipYears;
	};
	JkWidgetCommonDateSelectorWidget.prototype.setSkipYears = function(v) {
		this.skipYears = v;
		return this;
	};
	JkWidgetCommonDateSelectorWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonDateSelectorWidget"] === true;
	};
	let JkWidgetCommonButtonWithImageWidget = function() {
		JkWidgetVerticalBoxWidget.call(this);
		this.image = null;
		this.label = null;
	};
	JkWidgetCommonButtonWithImageWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetVerticalBoxWidget.prototype);
	JkWidgetCommonButtonWithImageWidget.prototype.constructor = JkWidgetCommonButtonWithImageWidget;
	JkWidgetCommonButtonWithImageWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetCommonButtonWithImageWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetVerticalBoxWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonButtonWithImageWidget.prototype._tobj = JkWidgetCommonButtonWithImageWidget;
	JkWidgetCommonButtonWithImageWidget.NEW_JkUiGuiApplicationContext = function(ctx) {
		var v = new JkWidgetCommonButtonWithImageWidget;
		return v.CTOR_JkWidgetCommonButtonWithImageWidget_JkUiGuiApplicationContext(ctx);
	};
	JkWidgetCommonButtonWithImageWidget.prototype.CTOR_JkWidgetCommonButtonWithImageWidget_JkUiGuiApplicationContext = function(ctx) {
		this.label = null;
		this.image = null;
		if(JkWidgetVerticalBoxWidget.prototype.CTOR_JkWidgetVerticalBoxWidget_JkUiGuiApplicationContext.call(this, ctx) == null) {
			return null;
		}
		this.forceCreateWidget();
		return this;
	};
	JkWidgetCommonButtonWithImageWidget.prototype.setWidgetButtonImage = function(source) {
		this.image.setWidgetImageResource(source);
		return this;
	};
	JkWidgetCommonButtonWithImageWidget.prototype.setWidgetButtonTitle = function(title) {
		this.label.setWidgetText(title);
		return this;
	};
	JkWidgetCommonButtonWithImageWidget.prototype.setWidgetClickHandler = function(handler) {
		if(!(handler != null)) {
			return null;
		}
		JkWidgetWidget.setWidgetClickHandler(this, handler);
		return this;
	};
	JkWidgetCommonButtonWithImageWidget.prototype.setWidgetFontSize = function(size) {
		this.label.setWidgetFontSize(size);
		return this;
	};
	JkWidgetCommonButtonWithImageWidget.prototype.setWidgetImageSize = function(size) {
		this.image.setWidgetImageWidth(size);
		this.image.setWidgetImageHeight(size);
		return this;
	};
	JkWidgetCommonButtonWithImageWidget.prototype.createWidget = function() {
		JkWidgetVerticalBoxWidget.prototype.createWidget.call(this);
		var thisWidget = this;
		this.setWidgetSpacing((this.context.getHeightValue("1000um")));
		var widget = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.image = JkWidgetImageWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.image.setWidgetImageScaleMethod(JkWidgetImageWidget.FIT);
		this.image.setWidgetImageWidth((this.context.getHeightValue("4mm")));
		this.image.setWidgetImageHeight((this.context.getHeightValue("4mm")));
		widget.addWidget(this.image);
		this.addWidget1(widget, 1.0);
		this.label = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.label.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
		this.label.setWidgetFontSize((this.context.getHeightValue("2000um")));
		this.addWidget(this.label);
	};
	JkWidgetCommonButtonWithImageWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonButtonWithImageWidget"] === true;
	};
	let JkWidgetCommonImageButtonWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.widgetContext = null;
		this.widgetImage = null;
		this.widgetImageResource = null;
		this.widgetClickHandler = null;
		this.widgetImageScale = 0;
		this.widgetButtonWidth = 0;
		this.widgetButtonHeight = 0;
		this.imageWidget = null;
	};
	JkWidgetCommonImageButtonWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonImageButtonWidget.prototype.constructor = JkWidgetCommonImageButtonWidget;
	JkWidgetCommonImageButtonWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetCommonImageButtonWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonImageButtonWidget.prototype._tobj = JkWidgetCommonImageButtonWidget;
	JkWidgetCommonImageButtonWidget.NEW_JkUiGuiApplicationContext = function(ctx) {
		var v = new JkWidgetCommonImageButtonWidget;
		return v.CTOR_JkWidgetCommonImageButtonWidget_JkUiGuiApplicationContext(ctx);
	};
	JkWidgetCommonImageButtonWidget.prototype.CTOR_JkWidgetCommonImageButtonWidget_JkUiGuiApplicationContext = function(ctx) {
		this.imageWidget = null;
		this.widgetButtonHeight = 0;
		this.widgetButtonWidth = 0;
		this.widgetImageScale = 0;
		this.widgetClickHandler = null;
		this.widgetImageResource = null;
		this.widgetImage = null;
		this.widgetContext = null;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, ctx) == null) {
			return null;
		}
		this.widgetContext = ctx;
		return this;
	};
	JkWidgetCommonImageButtonWidget.forImage = function(context, image, handler) {
		var v = JkWidgetCommonImageButtonWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetImage(image);
		v.setWidgetClickHandler(handler);
		return v;
	};
	JkWidgetCommonImageButtonWidget.forImageResource = function(context, resName, handler) {
		var v = JkWidgetCommonImageButtonWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetImageResource(resName);
		v.setWidgetClickHandler(handler);
		return v;
	};
	JkWidgetCommonImageButtonWidget.prototype.setWidgetImage = function(image) {
		this.widgetImage = image;
		this.widgetImageResource = null;
		this.updateImageWidget();
		return this;
	};
	JkWidgetCommonImageButtonWidget.prototype.setWidgetImageResource = function(resName) {
		this.widgetImageResource = resName;
		this.widgetImage = null;
		this.updateImageWidget();
		return this;
	};
	JkWidgetCommonImageButtonWidget.prototype.setWidgetClickHandler = function(handler) {
		this.widgetClickHandler = handler;
		JkWidgetWidget.setWidgetClickHandler(this, handler);
		return this;
	};
	JkWidgetCommonImageButtonWidget.prototype.updateImageWidget = function() {
		if(!(this.imageWidget != null)) {
			return;
		}
		if(this.widgetImage != null) {
			this.imageWidget.setWidgetImage(this.widgetImage);
		}
		else {
			this.imageWidget.setWidgetImageResource(this.widgetImageResource);
		}
	};
	JkWidgetCommonImageButtonWidget.prototype.initializeWidget = function() {
		JkWidgetLayerWidget.prototype.initializeWidget.call(this);
		this.imageWidget = JkWidgetImageWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.imageWidget.setWidgetImageScaleMethod(this.widgetImageScale);
		this.imageWidget.setWidgetImageWidth(this.widgetButtonWidth);
		this.imageWidget.setWidgetImageHeight(this.widgetButtonHeight);
		this.addWidget(this.imageWidget);
		this.updateImageWidget();
		JkUiHTMLDOM.setStyle(this.element, "cursor", "pointer");
	};
	JkWidgetCommonImageButtonWidget.prototype.getWidgetImageScale = function() {
		return this.widgetImageScale;
	};
	JkWidgetCommonImageButtonWidget.prototype.setWidgetImageScale = function(v) {
		this.widgetImageScale = v;
		return this;
	};
	JkWidgetCommonImageButtonWidget.prototype.getWidgetButtonWidth = function() {
		return this.widgetButtonWidth;
	};
	JkWidgetCommonImageButtonWidget.prototype.setWidgetButtonWidth = function(v) {
		this.widgetButtonWidth = v;
		return this;
	};
	JkWidgetCommonImageButtonWidget.prototype.getWidgetButtonHeight = function() {
		return this.widgetButtonHeight;
	};
	JkWidgetCommonImageButtonWidget.prototype.setWidgetButtonHeight = function(v) {
		this.widgetButtonHeight = v;
		return this;
	};
	JkWidgetCommonImageButtonWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonImageButtonWidget"] === true;
	};
	let JkWidgetCommonSplashScreenWidgetSlide = function() {
		this.resource = null;
		this.delay = 0;
		this.backgroundColor = null;
	};
	JkWidgetCommonSplashScreenWidgetSlide.prototype._t = { "JkWidgetCommonSplashScreenWidgetSlide" : true };
	JkWidgetCommonSplashScreenWidgetSlide.prototype._tobj = JkWidgetCommonSplashScreenWidgetSlide;
	JkWidgetCommonSplashScreenWidgetSlide.NEW = function() {
		var v = new JkWidgetCommonSplashScreenWidgetSlide;
		return v.CTOR_JkWidgetCommonSplashScreenWidgetSlide();
	};
	JkWidgetCommonSplashScreenWidgetSlide.prototype.CTOR_JkWidgetCommonSplashScreenWidgetSlide = function() {
		this.backgroundColor = null;
		this.delay = 0;
		this.resource = null;
		return this;
	};
	JkWidgetCommonSplashScreenWidgetSlide.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonSplashScreenWidgetSlide"] === true;
	};
	let JkWidgetCommonSplashScreenWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.backgroundColor = null;
		this.slides = null;
		this.doneHandler = null;
		this.currentSlide = -1;
		this.currentImageWidget = null;
		this.imageWidgetWidth = "80mm";
		this.margin = "5mm";
		this.canvas = null;
	};
	JkWidgetCommonSplashScreenWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonSplashScreenWidget.prototype.constructor = JkWidgetCommonSplashScreenWidget;
	JkWidgetCommonSplashScreenWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetCommonSplashScreenWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonSplashScreenWidget.prototype._tobj = JkWidgetCommonSplashScreenWidget;
	JkWidgetCommonSplashScreenWidget.NEW_JkUiGuiApplicationContext = function(ctx) {
		var v = new JkWidgetCommonSplashScreenWidget;
		return v.CTOR_JkWidgetCommonSplashScreenWidget_JkUiGuiApplicationContext(ctx);
	};
	JkWidgetCommonSplashScreenWidget.prototype.CTOR_JkWidgetCommonSplashScreenWidget_JkUiGuiApplicationContext = function(ctx) {
		this.canvas = null;
		this.margin = "5mm";
		this.imageWidgetWidth = "80mm";
		this.currentImageWidget = null;
		this.currentSlide = -1;
		this.doneHandler = null;
		this.slides = null;
		this.backgroundColor = null;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, ctx) == null) {
			return null;
		}
		this.slides = new Array;
		return this;
	};
	JkWidgetCommonSplashScreenWidget.prototype.addSlide = function(resource, delay, bgColor) {
		var slide = JkWidgetCommonSplashScreenWidgetSlide.NEW();
		slide.resource = resource;
		slide.delay = delay;
		if(bgColor != null) {
			slide.backgroundColor = bgColor;
		}
		this.slides.push(slide);
	};
	JkWidgetCommonSplashScreenWidget.prototype.initializeWidget = function() {
		JkWidgetLayerWidget.prototype.initializeWidget.call(this);
		if(this.backgroundColor != null) {
			this.canvas = JkWidgetCanvasWidget.forColor(this.context, this.backgroundColor);
		}
		else {
			this.canvas = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
		}
		this.addWidget(this.canvas);
		this.nextImage();
	};
	JkWidgetCommonSplashScreenWidget.prototype.nextImage = function() {
		this.currentSlide++;
		var slide = JkLangVector.get(this.slides, this.currentSlide);
		if(slide == null) {
			var anim = JkWidgetWidgetAnimation.forDuration(this.context, 1000);
			anim.addFadeOut(this.currentImageWidget, true);
			anim.setEndListener((function() {
				this.onEnded();
			}.bind(this)));
			anim.start();
			return;
		}
		if(this.canvas != null && slide.backgroundColor != null) {
			this.canvas.setWidgetColor(slide.backgroundColor);
		}
		else if(!(slide.backgroundColor != null) && !(this.backgroundColor != null)) {
			this.canvas.setWidgetColor(null);
		}
		var imageWidget = JkWidgetImageWidget.forImageResource(this.context, slide.resource);
		JkWidgetWidget.setAlpha(imageWidget, 0);
		imageWidget.setWidgetImageWidth((this.context.getWidthValue(this.imageWidgetWidth)));
		var align = JkWidgetAlignWidget.forWidget(this.context, imageWidget, 0.5, 0.5, 0);
		var sz = this.context.getWidthValue(this.margin);
		if(sz > 0) {
			align.setWidgetMargin(sz);
		}
		this.addWidget(align);
		var anim1 = JkWidgetWidgetAnimation.forDuration(this.context, 1000);
		anim1.addCrossFade(this.currentImageWidget, imageWidget, true);
		anim1.start();
		this.currentImageWidget = imageWidget;
		this.context.startTimer(slide.delay, (function() {
			this.nextImage();
		}.bind(this)));
	};
	JkWidgetCommonSplashScreenWidget.prototype.onEnded = function() {
		if(this.doneHandler != null) {
			this.doneHandler();
		}
	};
	JkWidgetCommonSplashScreenWidget.prototype.getBackgroundColor = function() {
		return this.backgroundColor;
	};
	JkWidgetCommonSplashScreenWidget.prototype.setBackgroundColor = function(v) {
		this.backgroundColor = v;
		return this;
	};
	JkWidgetCommonSplashScreenWidget.prototype.getDoneHandler = function() {
		return this.doneHandler;
	};
	JkWidgetCommonSplashScreenWidget.prototype.setDoneHandler = function(v) {
		this.doneHandler = v;
		return this;
	};
	JkWidgetCommonSplashScreenWidget.prototype.getImageWidgetWidth = function() {
		return this.imageWidgetWidth;
	};
	JkWidgetCommonSplashScreenWidget.prototype.setImageWidgetWidth = function(v) {
		this.imageWidgetWidth = v;
		return this;
	};
	JkWidgetCommonSplashScreenWidget.prototype.getMargin = function() {
		return this.margin;
	};
	JkWidgetCommonSplashScreenWidget.prototype.setMargin = function(v) {
		this.margin = v;
		return this;
	};
	JkWidgetCommonSplashScreenWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonSplashScreenWidget"] === true;
	};
	let JkWidgetCommonSelectWidget = function() {
		JkWidgetWidget.call(this);
		this.widgetOnFocusHandler = null;
		this.widgetOnLoseFocusHandler = null;
		this.widgetContext = null;
		this.widgetItems = null;
		this.widgetValueChangeHandler = null;
		this.widgetBackgroundColor = null;
		this.widgetTextColor = null;
		this.widgetPadding = 0;
		this.widgetFontFamily = null;
		this.widgetFontResource = null;
		this.widgetFontSize = 0.0;
		this.widgetFontUnderline = false;
		this.widgetFontItalic = false;
		this.widgetFontBold = false;
		this.widgetIsEnabled = true;
	};
	JkWidgetCommonSelectWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetWidget.prototype);
	JkWidgetCommonSelectWidget.prototype.constructor = JkWidgetCommonSelectWidget;
	JkWidgetCommonSelectWidget.prototype._t = {
		"JkWidgetWidgetWithValue" : true,
		"JkWidgetCommonSelectWidget" : true,
		"JkWidgetWidget" : true
	};
	JkWidgetCommonSelectWidget.prototype._tobj = JkWidgetCommonSelectWidget;
	JkWidgetCommonSelectWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonSelectWidget;
		return v.CTOR_JkWidgetCommonSelectWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonSelectWidget.prototype.CTOR_JkWidgetCommonSelectWidget_JkUiGuiApplicationContext = function(context) {
		if(JkWidgetWidget.prototype.CTOR_JkWidgetWidget.call(this) == null) {
			return null;
		}
		this.widgetIsEnabled = true;
		this.widgetFontBold = false;
		this.widgetFontItalic = false;
		this.widgetFontUnderline = false;
		this.widgetFontSize = 0.0;
		this.widgetFontResource = null;
		this.widgetFontFamily = null;
		this.widgetPadding = 0;
		this.widgetTextColor = null;
		this.widgetBackgroundColor = null;
		this.widgetValueChangeHandler = null;
		this.widgetItems = null;
		this.widgetContext = null;
		this.widgetOnLoseFocusHandler = null;
		this.widgetOnFocusHandler = null;
		this.widgetContext = context;
		this.setWidgetStyle("SelectWidget");
		return this;
	};
	JkWidgetCommonSelectWidget.forKeyValueList = function(context, options) {
		var v = JkWidgetCommonSelectWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetItemsAsKeyValueList(options);
		return v;
	};
	JkWidgetCommonSelectWidget.forKeyValueStrings1 = function(context, options) {
		var v = JkWidgetCommonSelectWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetItemsAsKeyValueStrings2(options);
		return v;
	};
	JkWidgetCommonSelectWidget.forKeyValueStrings2 = function(context, options) {
		var v = JkWidgetCommonSelectWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetItemsAsKeyValueStrings1(options);
		return v;
	};
	JkWidgetCommonSelectWidget.forStringList1 = function(context, options) {
		var v = JkWidgetCommonSelectWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetItemsAsStringList3(options);
		return v;
	};
	JkWidgetCommonSelectWidget.forStringList2 = function(context, options) {
		var v = JkWidgetCommonSelectWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetItemsAsStringList2(options);
		return v;
	};
	JkWidgetCommonSelectWidget.forStringList3 = function(context, options) {
		var v = JkWidgetCommonSelectWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetItemsAsStringList1(options);
		return v;
	};
	JkWidgetCommonSelectWidget.prototype.createElement = function() {
		var v = JkUiHTMLDOM.createElement("select");
		var myObject = this;
		v.onchange = function() {
			myObject.onWidgetSelectionChanged();
		};
		;
		return v;
	};
	JkWidgetCommonSelectWidget.prototype.prepareElement = function(v) {
		JkWidgetWidget.prototype.prepareElement.call(this, v);
		JkUiHTMLDOM.addEventListener(this.element, "focus", (function() {
			this.onFocusListener();
		}.bind(this)));
		JkUiHTMLDOM.addEventListener(this.element, "blur", (function() {
			this.onLoseFocusListener();
		}.bind(this)));
	};
	JkWidgetCommonSelectWidget.prototype.setWidgetStyle = function(style) {
		this.widgetFontFamily = this.widgetContext.getStyleString(style, "fontFamily", null);
		if(JkLangString.isEmpty(this.widgetFontFamily)) {
			this.widgetFontFamily = "Arial";
		}
		this.widgetFontSize = this.widgetContext.getStylePixels(style, "fontSize", null);
		if(this.widgetFontSize < 1.0) {
			this.widgetFontSize = this.widgetContext.getHeightValue("3mm");
		}
		this.widgetFontResource = this.widgetContext.getStyleString(style, "fontResource", null);
		this.widgetTextColor = this.widgetContext.getStyleColor(style, "textColor", null);
		this.widgetBackgroundColor = this.widgetContext.getStyleColor(style, "backgroundColor", null);
		this.widgetPadding = this.widgetContext.getStylePixels(style, "padding", null);
		this.updateWidgetFont();
		this.updateWidgetAppearance(true);
		return this;
	};
	JkWidgetCommonSelectWidget.prototype.setWidgetFontFamily = function(family) {
		this.widgetFontFamily = family;
		this.updateWidgetFont();
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetCommonSelectWidget.prototype.setWidgetFontResource = function(res) {
		this.widgetFontResource = res;
		this.updateWidgetFont();
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetCommonSelectWidget.prototype.setWidgetFontSize = function(fontSize) {
		this.widgetFontSize = fontSize;
		this.updateWidgetFont();
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetCommonSelectWidget.prototype.setWidgetFontUnderline = function(underline) {
		this.widgetFontUnderline = underline;
		this.updateWidgetFont();
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetCommonSelectWidget.prototype.setWidgetFontItalic = function(italic) {
		this.widgetFontItalic = italic;
		this.updateWidgetFont();
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetCommonSelectWidget.prototype.setWidgetFontBold = function(bold) {
		this.widgetFontBold = bold;
		this.updateWidgetFont();
		JkWidgetWidget.onLayoutChanged(this);
		return this;
	};
	JkWidgetCommonSelectWidget.prototype.updateWidgetFont = function() {
		JkUiHTMLDOM.setFontFamily(this.element, this.widgetFontFamily);
		JkUiHTMLDOM.setStyle(this.element, "font-size", (JkLangString.safeString((JkLangString.forDouble(this.widgetFontSize))) + "px"));
		if(this.widgetFontBold) {
			JkUiHTMLDOM.setStyle(this.element, "font-weight", "bold");
		}
		if(this.widgetFontItalic) {
			JkUiHTMLDOM.setStyle(this.element, "font-style", "italic");
		}
		if(this.widgetFontUnderline) {
			JkUiHTMLDOM.setStyle(this.element, "text-decoration", "underline");
		}
	};
	JkWidgetCommonSelectWidget.prototype.setWidgetPadding = function(value) {
		this.widgetPadding = value;
		this.updateWidgetAppearance(true);
		return this;
	};
	JkWidgetCommonSelectWidget.prototype.getWidgetPadding = function() {
		return this.widgetPadding;
	};
	JkWidgetCommonSelectWidget.prototype.setWidgetTextColor = function(color) {
		this.widgetTextColor = color;
		this.updateWidgetAppearance(false);
		return this;
	};
	JkWidgetCommonSelectWidget.prototype.getWidgetTextColor = function() {
		return this.widgetTextColor;
	};
	JkWidgetCommonSelectWidget.prototype.setWidgetBackgroundColor = function(color) {
		this.widgetBackgroundColor = color;
		this.updateWidgetAppearance(false);
		return this;
	};
	JkWidgetCommonSelectWidget.prototype.getWidgetBackgroundColor = function() {
		return this.widgetBackgroundColor;
	};
	JkWidgetCommonSelectWidget.prototype.getActualWidgetTextColor = function() {
		var textColor = this.widgetTextColor;
		if(textColor == null) {
			if(this.widgetBackgroundColor != null) {
				if(this.widgetBackgroundColor.isLightColor()) {
					textColor = JkGfxColor.black();
				}
				else {
					textColor = JkGfxColor.white();
				}
			}
			else {
				textColor = JkGfxColor.black();
			}
		}
		return textColor;
	};
	JkWidgetCommonSelectWidget.prototype.updateWidgetAppearance = function(layoutChanged) {
		var textColor = this.getActualWidgetTextColor();
		if(this.widgetBackgroundColor != null || this.widgetTextColor != null || this.widgetPadding > 0) {
			if(this.widgetBackgroundColor == null) {
				JkUiHTMLDOM.setStyle(this.element, "background-color", "rgba(0,0,0,0)");
			}
			else {
				JkUiHTMLDOM.setStyle(this.element, "background-color", (JkUiHTMLDOM.colorToRGBA(this.widgetBackgroundColor)));
			}
			JkUiHTMLDOM.setStyle(this.element, "color", (JkUiHTMLDOM.colorToRGBA(textColor)));
			JkUiHTMLDOM.setStyle(this.element, "padding", (JkLangString.safeString((JkLangString.forInteger(this.widgetPadding))) + "px "));
			JkUiHTMLDOM.setStyle(this.element, "appearance", "none");
			JkUiHTMLDOM.setStyle(this.element, "-webkit-appearance", "none");
			JkUiHTMLDOM.setStyle(this.element, "-moz-appearance", "none");
			JkUiHTMLDOM.setStyle(this.element, "border", "0px");
			JkUiHTMLDOM.setStyle(this.element, "border-radius", "0px");
		}
		else {
			JkUiHTMLDOM.removeStyle(this.element, "appearance");
			JkUiHTMLDOM.removeStyle(this.element, "-webkit-appearance");
			JkUiHTMLDOM.removeStyle(this.element, "-moz-appearance");
			JkUiHTMLDOM.removeStyle(this.element, "border");
			JkUiHTMLDOM.removeStyle(this.element, "border-radius");
			JkUiHTMLDOM.removeStyle(this.element, "color");
			JkUiHTMLDOM.removeStyle(this.element, "padding");
		}
		if(layoutChanged) {
			JkWidgetWidget.onLayoutChanged(this);
		}
	};
	JkWidgetCommonSelectWidget.prototype.setWidgetItemsAsKeyValueList = function(items) {
		var selectedIndex = this.getSelectedWidgetIndex();
		this.widgetItems = items;
		JkUiHTMLDOM.setTextContent(this.element, "");
		if(this.widgetItems != null) {
			var it = this.widgetItems.iterate();
			while(it != null){
				var item = it.next();
				if(item == null) {
					break;
				}
				var option = JkUiHTMLDOM.createElement("option");
				JkUiHTMLDOM.setTextContent(option, item.value);
				JkUiHTMLDOM.setAttribute(option, "value", item.key);
				JkUiHTMLDOM.appendChild(this.element, option);
			}
		}
		this.setSelectedWidgetIndex(selectedIndex);
	};
	JkWidgetCommonSelectWidget.prototype.addWidgetItem1 = function(value) {
		this.addWidgetItem2(value, value);
	};
	JkWidgetCommonSelectWidget.prototype.addWidgetItem2 = function(k, v) {
		var list = this.widgetItems;
		if(!(list != null)) {
			list = JkLangKeyValueList.NEW();
		}
		list.add(k, v);
		this.setWidgetItemsAsKeyValueList(list);
	};
	JkWidgetCommonSelectWidget.prototype.removeWidgetItem = function(index) {
		if(!(this.widgetItems != null)) {
			return;
		}
		var list = this.widgetItems;
		var selectedIndex = this.getSelectedWidgetIndex();
		list.remove(index);
		this.setWidgetItemsAsKeyValueList(list);
		this.setSelectedWidgetIndex(selectedIndex);
	};
	JkWidgetCommonSelectWidget.prototype.setWidgetItemsAsKeyValueStrings1 = function(options) {
		var list = JkLangKeyValueList.NEW();
		if(options != null) {
			if(options != null) {
				var n = 0;
				var m = options.length;
				for(n = 0 ; n < m ; n++) {
					var option = options[n];
					if(option != null) {
						var comps = JkLangString.split(option, (":".charCodeAt()), 2);
						var kk = JkLangVector.get(comps, 0);
						var vv = JkLangVector.get(comps, 1);
						if(vv == null) {
							vv = kk;
						}
						list.add(kk, vv);
					}
				}
			}
		}
		this.setWidgetItemsAsKeyValueList(list);
	};
	JkWidgetCommonSelectWidget.prototype.setWidgetItemsAsKeyValueStrings2 = function(options) {
		var list = JkLangKeyValueList.NEW();
		if(options != null) {
			if(options != null) {
				var n = 0;
				var m = options.length;
				for(n = 0 ; n < m ; n++) {
					var option = (function(o) {
						if(typeof o === "string") {
							return o;
						}
						return null;
					}.bind(this))(options[n]);
					if(option != null) {
						var comps = JkLangString.split(option, (":".charCodeAt()), 2);
						var kk = JkLangVector.get(comps, 0);
						var vv = JkLangVector.get(comps, 1);
						if(vv == null) {
							vv = kk;
						}
						list.add(kk, vv);
					}
				}
			}
		}
		this.setWidgetItemsAsKeyValueList(list);
	};
	JkWidgetCommonSelectWidget.prototype.setWidgetItemsAsStringList1 = function(options) {
		var list = JkLangKeyValueList.NEW();
		if(options != null) {
			var array = options.toVector();
			if(array != null) {
				var n = 0;
				var m = array.length;
				for(n = 0 ; n < m ; n++) {
					var option = (function(o) {
						if(typeof o === "string") {
							return o;
						}
						return null;
					}.bind(this))(array[n]);
					if(option != null) {
						list.add(option, option);
					}
				}
			}
		}
		this.setWidgetItemsAsKeyValueList(list);
	};
	JkWidgetCommonSelectWidget.prototype.setWidgetItemsAsStringList2 = function(options) {
		var list = JkLangKeyValueList.NEW();
		if(options != null) {
			if(options != null) {
				var n = 0;
				var m = options.length;
				for(n = 0 ; n < m ; n++) {
					var option = options[n];
					if(option != null) {
						list.add(option, option);
					}
				}
			}
		}
		this.setWidgetItemsAsKeyValueList(list);
	};
	JkWidgetCommonSelectWidget.prototype.setWidgetItemsAsStringList3 = function(options) {
		var list = JkLangKeyValueList.NEW();
		if(options != null) {
			if(options != null) {
				var n = 0;
				var m = options.length;
				for(n = 0 ; n < m ; n++) {
					var option = (function(o) {
						if(typeof o === "string") {
							return o;
						}
						return null;
					}.bind(this))(options[n]);
					if(option != null) {
						list.add(option, option);
					}
				}
			}
		}
		this.setWidgetItemsAsKeyValueList(list);
	};
	JkWidgetCommonSelectWidget.prototype.adjustSelectedWidgetItemIndex = function(index) {
		if(this.widgetItems == null || this.widgetItems.count() < 1) {
			return -1;
		}
		if(index < 0) {
			return 0;
		}
		if(index >= this.widgetItems.count()) {
			return this.widgetItems.count() - 1;
		}
		return index;
	};
	JkWidgetCommonSelectWidget.prototype.findIndexForWidgetValue = function(id) {
		var v = -1;
		if(this.widgetItems != null) {
			var n = 0;
			var it = this.widgetItems.iterate();
			while(it != null){
				var item = it.next();
				if(item == null) {
					break;
				}
				if(item.key == id) {
					v = n;
					break;
				}
				n++;
			}
		}
		return v;
	};
	JkWidgetCommonSelectWidget.prototype.getWidgetItemCount = function() {
		if(this.widgetItems == null) {
			return 0;
		}
		return this.widgetItems.count();
	};
	JkWidgetCommonSelectWidget.prototype.getWidgetTextForIndex = function(index) {
		if(!(this.widgetItems != null)) {
			return null;
		}
		return this.widgetItems.getValue(index);
	};
	JkWidgetCommonSelectWidget.prototype.getSelectedWidgetIndex = function() {
		return this.element.selectedIndex;
	};
	JkWidgetCommonSelectWidget.prototype.setSelectedWidgetIndex = function(index) {
		var v = this.adjustSelectedWidgetItemIndex(index);
		this.element.selectedIndex = v;
		;
	};
	JkWidgetCommonSelectWidget.prototype.setSelectedWidgetValue = function(id) {
		this.setSelectedWidgetIndex((this.findIndexForWidgetValue(id)));
	};
	JkWidgetCommonSelectWidget.prototype.getSelectedWidgetValue = function() {
		var index = this.getSelectedWidgetIndex();
		if(this.widgetItems == null || index < 0) {
			return null;
		}
		return this.widgetItems.getKey(index);
	};
	JkWidgetCommonSelectWidget.prototype.setWidgetValue = function(value) {
		this.setSelectedWidgetValue((JkLangString.asString(value)));
	};
	JkWidgetCommonSelectWidget.prototype.getWidgetValue = function() {
		return this.getSelectedWidgetValue();
	};
	JkWidgetCommonSelectWidget.prototype.setWidgetValueChangeHandler = function(handler) {
		this.widgetValueChangeHandler = handler;
	};
	JkWidgetCommonSelectWidget.prototype.onWidgetSelectionChanged = function() {
		if(this.widgetValueChangeHandler != null) {
			this.widgetValueChangeHandler();
		}
	};
	JkWidgetCommonSelectWidget.prototype.getWidgetItems = function() {
		return this.widgetItems;
	};
	JkWidgetCommonSelectWidget.prototype.onFocusListener = function() {
		if(this.widgetOnFocusHandler != null) {
			this.widgetOnFocusHandler();
		}
	};
	JkWidgetCommonSelectWidget.prototype.onLoseFocusListener = function() {
		if(this.widgetOnLoseFocusHandler != null) {
			this.widgetOnLoseFocusHandler();
		}
	};
	JkWidgetCommonSelectWidget.prototype.setWidgetIsEnabled = function(v, background) {
		this.widgetIsEnabled = v;
		if(this.widgetIsEnabled) {
			JkUiHTMLDOM.setAttribute(this.element, "disabled", null);
			JkUiHTMLDOM.setStyle(this.element, "background-color", "rgba(0,0,0,0)");
		}
		else {
			JkUiHTMLDOM.setAttribute(this.element, "disabled", "disabled");
			JkUiHTMLDOM.setStyle(this.element, "background-color", (JkUiHTMLDOM.colorToRGBA(background)));
		}
	};
	JkWidgetCommonSelectWidget.prototype.getWidgetIsEnabled = function() {
		return this.widgetIsEnabled;
	};
	JkWidgetCommonSelectWidget.prototype.focus = function() {
		JkUiHTMLDOM.setFocus(this.element);
	};
	JkWidgetCommonSelectWidget.prototype.getWidgetOnFocusHandler = function() {
		return this.widgetOnFocusHandler;
	};
	JkWidgetCommonSelectWidget.prototype.setWidgetOnFocusHandler = function(v) {
		this.widgetOnFocusHandler = v;
		return this;
	};
	JkWidgetCommonSelectWidget.prototype.getWidgetOnLoseFocusHandler = function() {
		return this.widgetOnLoseFocusHandler;
	};
	JkWidgetCommonSelectWidget.prototype.setWidgetOnLoseFocusHandler = function(v) {
		this.widgetOnLoseFocusHandler = v;
		return this;
	};
	JkWidgetCommonSelectWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonSelectWidget"] === true;
	};
	let JkWidgetCommonRadioButtonGroupWidget = function() {
		JkWidgetWidget.call(this);
		this.radiobuttons = null;
		this.widgetContext = null;
		this.widgetName = null;
		this.widgetSelectedValue = null;
		this.widgetItems = null;
		this.selectedWidgetIndex = -1;
		this.widgetChangeHandler = null;
	};
	JkWidgetCommonRadioButtonGroupWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetWidget.prototype);
	JkWidgetCommonRadioButtonGroupWidget.prototype.constructor = JkWidgetCommonRadioButtonGroupWidget;
	JkWidgetCommonRadioButtonGroupWidget.prototype._t = {
		"JkWidgetWidgetWithValue" : true,
		"JkWidgetCommonRadioButtonGroupWidget" : true,
		"JkWidgetWidget" : true
	};
	JkWidgetCommonRadioButtonGroupWidget.prototype._tobj = JkWidgetCommonRadioButtonGroupWidget;
	JkWidgetCommonRadioButtonGroupWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonRadioButtonGroupWidget;
		return v.CTOR_JkWidgetCommonRadioButtonGroupWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonRadioButtonGroupWidget.prototype.CTOR_JkWidgetCommonRadioButtonGroupWidget_JkUiGuiApplicationContext = function(context) {
		if(JkWidgetWidget.prototype.CTOR_JkWidgetWidget.call(this) == null) {
			return null;
		}
		this.widgetChangeHandler = null;
		this.selectedWidgetIndex = -1;
		this.widgetItems = null;
		this.widgetSelectedValue = null;
		this.widgetName = null;
		this.widgetContext = null;
		this.radiobuttons = null;
		this.widgetContext = context;
		return this;
	};
	JkWidgetCommonRadioButtonGroupWidget.forGroup = function(context, group, items, orientation) {
		var v = JkWidgetCommonRadioButtonGroupWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetName(group);
		v.setWidgetOrientation(orientation);
		for(var i = 0 ; i < JkLangVector.getSize(items) ; i++) {
			v.addWidgetItem((JkLangVector.get(items, i)), i);
		}
		return v;
	};
	JkWidgetCommonRadioButtonGroupWidget.prototype.createElement = function() {
		return JkUiHTMLDOM.createElement("div");
	};
	JkWidgetCommonRadioButtonGroupWidget.prototype.addWidgetItem = function(text, index) {
		if(!(this.widgetItems != null)) {
			this.widgetItems = new Array;
		}
		this.widgetItems.push(text);
		var input = JkUiHTMLDOM.createElement("input");
		JkUiHTMLDOM.setAttribute(input, "type", "radio");
		JkUiHTMLDOM.setAttribute(input, "value", text);
		if(JkLangString.isEmpty(this.widgetName) == false) {
			JkUiHTMLDOM.setAttribute(input, "name", this.widgetName);
		}
		JkUiHTMLDOM.addEventListener(input, "click", (function() {
			this.widgetSelectedValue = JkUiHTMLDOM.getValue(input);
			this.onChangeSelectedItem();
		}.bind(this)));
		var label = JkUiHTMLDOM.createElement("label");
		JkUiHTMLDOM.setTextContent(label, text);
		JkUiHTMLDOM.setStyle(label, "margin-left", "5px");
		JkUiHTMLDOM.setStyle(label, "margin-right", "8px");
		var d = JkUiHTMLDOM.createElement("div");
		JkUiHTMLDOM.appendChild(d, input);
		JkUiHTMLDOM.appendChild(d, label);
		JkUiHTMLDOM.appendChild(this.element, d);
		if(this.radiobuttons == null) {
			this.radiobuttons = new Array;
		}
		this.radiobuttons.push(input);
	};
	JkWidgetCommonRadioButtonGroupWidget.prototype.setWidgetSelectedValue = function(indx) {
		this.widgetSelectedValue = null;
		var n = 0;
		if(this.radiobuttons != null) {
			var n2 = 0;
			var m = this.radiobuttons.length;
			for(n2 = 0 ; n2 < m ; n2++) {
				var button = this.radiobuttons[n2];
				if(button != null) {
					if(indx == n) {
						button.checked = true;
						;
						this.widgetSelectedValue = JkUiHTMLDOM.getValue(button);
					}
					else {
						button.checked = false;
						;
					}
					n++;
				}
			}
		}
	};
	JkWidgetCommonRadioButtonGroupWidget.prototype.setWidgetName = function(name) {
		this.widgetName = name;
		if(this.radiobuttons != null) {
			var n = 0;
			var m = this.radiobuttons.length;
			for(n = 0 ; n < m ; n++) {
				var o = this.radiobuttons[n];
				if(o != null) {
					JkUiHTMLDOM.setAttribute(o, "name", name);
				}
			}
		}
	};
	JkWidgetCommonRadioButtonGroupWidget.prototype.setWidgetOrientation = function(orientation) {
		if(orientation == JkWidgetCommonRadioButtonGroupWidget.HORIZONTAL) {
			var p = null;
			if(this.radiobuttons != null) {
				var n = 0;
				var m = this.radiobuttons.length;
				for(n = 0 ; n < m ; n++) {
					var rb = this.radiobuttons[n];
					if(rb != null) {
						p = JkUiHTMLDOM.getParentElement(rb);
						JkUiHTMLDOM.setStyle(p, "display", "inline-block");
					}
				}
			}
		}
		else if(orientation == JkWidgetCommonRadioButtonGroupWidget.VERTICAL) {
			var p1 = null;
			if(this.radiobuttons != null) {
				var n2 = 0;
				var m2 = this.radiobuttons.length;
				for(n2 = 0 ; n2 < m2 ; n2++) {
					var rb1 = this.radiobuttons[n2];
					if(rb1 != null) {
						p1 = JkUiHTMLDOM.getParentElement(rb1);
						JkUiHTMLDOM.setStyle(p1, "display", "block");
					}
				}
			}
		}
	};
	JkWidgetCommonRadioButtonGroupWidget.prototype.getWidgetSelectedValue = function() {
		return this.widgetSelectedValue;
	};
	JkWidgetCommonRadioButtonGroupWidget.prototype.onChangeSelectedItem = function() {
		if(this.widgetChangeHandler != null) {
			this.widgetChangeHandler();
		}
	};
	JkWidgetCommonRadioButtonGroupWidget.prototype.setWidgetValue = function(value) {
		var io = (function(o) {
			if(JkLangIntegerObject.IS_INSTANCE && JkLangIntegerObject.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))(value);
		if(io != null) {
			this.setWidgetSelectedValue((io.toInteger()));
		}
		else {
			this.setWidgetSelectedValue((-1));
		}
	};
	JkWidgetCommonRadioButtonGroupWidget.prototype.getWidgetValue = function() {
		return this.getWidgetSelectedValue();
	};
	JkWidgetCommonRadioButtonGroupWidget.prototype.getWidgetChangeHandler = function() {
		return this.widgetChangeHandler;
	};
	JkWidgetCommonRadioButtonGroupWidget.prototype.setWidgetChangeHandler = function(v) {
		this.widgetChangeHandler = v;
		return this;
	};
	JkWidgetCommonRadioButtonGroupWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonRadioButtonGroupWidget"] === true;
	};
	JkWidgetCommonRadioButtonGroupWidget.HORIZONTAL = 0;
	JkWidgetCommonRadioButtonGroupWidget.VERTICAL = 1;
	let JkWidgetCommonTableWidgetColumnInfo = function() {
		this.label = null;
		this.width = 0;
		this.align = 0.0;
		this.sortid = null;
	};
	JkWidgetCommonTableWidgetColumnInfo.prototype._t = { "JkWidgetCommonTableWidgetColumnInfo" : true };
	JkWidgetCommonTableWidgetColumnInfo.prototype._tobj = JkWidgetCommonTableWidgetColumnInfo;
	JkWidgetCommonTableWidgetColumnInfo.NEW = function() {
		var v = new JkWidgetCommonTableWidgetColumnInfo;
		return v.CTOR_JkWidgetCommonTableWidgetColumnInfo();
	};
	JkWidgetCommonTableWidgetColumnInfo.prototype.CTOR_JkWidgetCommonTableWidgetColumnInfo = function() {
		this.sortid = null;
		this.align = 0.0;
		this.width = 0;
		this.label = null;
		return this;
	};
	JkWidgetCommonTableWidgetColumnInfo.prototype.getLabel = function() {
		return this.label;
	};
	JkWidgetCommonTableWidgetColumnInfo.prototype.setLabel = function(v) {
		this.label = v;
		return this;
	};
	JkWidgetCommonTableWidgetColumnInfo.prototype.getWidth = function() {
		return this.width;
	};
	JkWidgetCommonTableWidgetColumnInfo.prototype.setWidth = function(v) {
		this.width = v;
		return this;
	};
	JkWidgetCommonTableWidgetColumnInfo.prototype.getAlign = function() {
		return this.align;
	};
	JkWidgetCommonTableWidgetColumnInfo.prototype.setAlign = function(v) {
		this.align = v;
		return this;
	};
	JkWidgetCommonTableWidgetColumnInfo.prototype.getSortid = function() {
		return this.sortid;
	};
	JkWidgetCommonTableWidgetColumnInfo.prototype.setSortid = function(v) {
		this.sortid = v;
		return this;
	};
	JkWidgetCommonTableWidgetColumnInfo.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonTableWidgetColumnInfo"] === true;
	};
	let JkWidgetCommonTableWidgetRowWidget = function() {
		JkWidgetLayerWithBackgroundColorWidget.call(this);
		this.childWidgets = null;
		this.widgetTextColor = null;
		this.box = null;
	};
	JkWidgetCommonTableWidgetRowWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWithBackgroundColorWidget.prototype);
	JkWidgetCommonTableWidgetRowWidget.prototype.constructor = JkWidgetCommonTableWidgetRowWidget;
	JkWidgetCommonTableWidgetRowWidget.prototype._t = {
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetLayerWithBackgroundColorWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetCommonTableWidgetRowWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonTableWidgetRowWidget.prototype._tobj = JkWidgetCommonTableWidgetRowWidget;
	JkWidgetCommonTableWidgetRowWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonTableWidgetRowWidget;
		return v.CTOR_JkWidgetCommonTableWidgetRowWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonTableWidgetRowWidget.prototype.CTOR_JkWidgetCommonTableWidgetRowWidget_JkUiGuiApplicationContext = function(context) {
		this.box = null;
		this.widgetTextColor = null;
		this.childWidgets = null;
		if(JkWidgetLayerWithBackgroundColorWidget.prototype.CTOR_JkWidgetLayerWithBackgroundColorWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonTableWidgetRowWidget.forTextValues = function(context, data) {
		var v = JkWidgetCommonTableWidgetRowWidget.NEW_JkUiGuiApplicationContext(context);
		if(data != null) {
			var n = 0;
			var m = data.length;
			for(n = 0 ; n < m ; n++) {
				var str = data[n];
				if(str != null) {
					v.addText(str, 0.0, 0);
				}
			}
		}
		return v;
	};
	JkWidgetCommonTableWidgetRowWidget.prototype.initializeWidget = function() {
		JkWidgetLayerWithBackgroundColorWidget.prototype.initializeWidget.call(this);
		if(this.childWidgets != null) {
			var n = 0;
			var m = this.childWidgets.length;
			for(n = 0 ; n < m ; n++) {
				var widget = this.childWidgets[n];
				if(widget != null) {
					this.box.addWidget1(widget, (widget.getCellWeight()));
				}
			}
		}
	};
	JkWidgetCommonTableWidgetRowWidget.prototype.reset = function() {
		this.childWidgets = null;
		if(this.getInitialized()) {
			JkWidgetWidget.removeChildrenOf(this.box);
		}
	};
	JkWidgetCommonTableWidgetRowWidget.prototype.addText = function(text, align, width) {
		this.addCellWidget((JkWidgetLabelWidget.forText(this.context, text).setWidgetTextColor(this.widgetTextColor)), align, width);
	};
	JkWidgetCommonTableWidgetRowWidget.prototype.addClickableText = function(text, clickid, clickHandler, align, width) {
		var ch = clickHandler;
		var cl = clickid;
		var handler = function() {
			if(ch != null) {
				ch(cl);
			}
		}.bind(this);
		this.addCellWidget((JkWidgetCommonHyperLinkWidget.forText(this.context, text, handler).setWidgetTextColor(this.widgetTextColor)), align, width);
	};
	JkWidgetCommonTableWidgetRowWidget.prototype.addCellWidget = function(widget, align, width) {
		if(!(widget != null)) {
			return;
		}
		var cell = JkWidgetCommonTableWidgetCellWidget.forWidget(this.context, widget, align);
		cell.setCellWidth(width);
		if(!(this.childWidgets != null)) {
			this.childWidgets = new Array;
		}
		this.childWidgets.push(cell);
		if(this.getInitialized()) {
			this.box.addWidget1(cell, (cell.getCellWeight()));
		}
	};
	JkWidgetCommonTableWidgetRowWidget.prototype.getCellWidgets = function() {
		return this.childWidgets;
	};
	JkWidgetCommonTableWidgetRowWidget.prototype.createWidget = function() {
		JkWidgetLayerWithBackgroundColorWidget.prototype.createWidget.call(this);
		var thisWidget = this;
		this.box = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.box.setWidgetMargin((this.context.getStylePixels("jkwidget", "table-spacing", "2mm")));
		this.box.setWidgetSpacing((this.context.getStylePixels("jkwidget", "table-spacing", "2mm")));
		this.addWidget(this.box);
	};
	JkWidgetCommonTableWidgetRowWidget.prototype.getWidgetTextColor = function() {
		return this.widgetTextColor;
	};
	JkWidgetCommonTableWidgetRowWidget.prototype.setWidgetTextColor = function(v) {
		this.widgetTextColor = v;
		return this;
	};
	JkWidgetCommonTableWidgetRowWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonTableWidgetRowWidget"] === true;
	};
	let JkWidgetCommonTableWidgetCellWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.contentWidget = null;
		this.contentWidgetAlign = 0.5;
		this.contentWidgetWidth = 0;
		this.contentWidgetWeight = 0.0;
		this.align = null;
	};
	JkWidgetCommonTableWidgetCellWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonTableWidgetCellWidget.prototype.constructor = JkWidgetCommonTableWidgetCellWidget;
	JkWidgetCommonTableWidgetCellWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetCommonTableWidgetCellWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonTableWidgetCellWidget.prototype._tobj = JkWidgetCommonTableWidgetCellWidget;
	JkWidgetCommonTableWidgetCellWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonTableWidgetCellWidget;
		return v.CTOR_JkWidgetCommonTableWidgetCellWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonTableWidgetCellWidget.prototype.CTOR_JkWidgetCommonTableWidgetCellWidget_JkUiGuiApplicationContext = function(context) {
		this.align = null;
		this.contentWidgetWeight = 0.0;
		this.contentWidgetWidth = 0;
		this.contentWidgetAlign = 0.5;
		this.contentWidget = null;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonTableWidgetCellWidget.forWidget = function(ctx, widget, align) {
		var v = JkWidgetCommonTableWidgetCellWidget.NEW_JkUiGuiApplicationContext(ctx);
		v.setContentWidget(widget, align);
		return v;
	};
	JkWidgetCommonTableWidgetCellWidget.prototype.initializeWidget = function() {
		JkWidgetLayerWidget.prototype.initializeWidget.call(this);
		this.updateWidget();
	};
	JkWidgetCommonTableWidgetCellWidget.prototype.getCellWeight = function() {
		return this.contentWidgetWeight;
	};
	JkWidgetCommonTableWidgetCellWidget.prototype.updateWidget = function() {
		if(!this.getInitialized()) {
			return;
		}
		JkWidgetWidget.removeChildrenOf(this.align);
		if(this.contentWidget != null) {
			this.align.addWidget1(this.contentWidget, this.contentWidgetAlign, 0.5, false);
		}
		if(this.contentWidgetWidth > 0) {
			this.setWidgetWidthRequest(this.contentWidgetWidth);
		}
		var parent = (function(o) {
			if(JkWidgetHorizontalBoxWidget.IS_INSTANCE && JkWidgetHorizontalBoxWidget.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))((JkWidgetWidget.getParent(this)));
		if(parent != null) {
			parent.setWidgetWeight(this, this.contentWidgetWeight);
		}
	};
	JkWidgetCommonTableWidgetCellWidget.prototype.setContentWidget = function(widget, vv) {
		this.contentWidget = widget;
		this.contentWidgetAlign = vv;
		this.updateWidget();
	};
	JkWidgetCommonTableWidgetCellWidget.prototype.setCellWidth = function(width) {
		this.contentWidgetWidth = width;
		if(this.contentWidgetWidth < 1) {
			this.contentWidgetWeight = 1.0;
		}
		else {
			this.contentWidgetWeight = 0.0;
		}
		this.updateWidget();
	};
	JkWidgetCommonTableWidgetCellWidget.prototype.setCellAlign = function(vv) {
		this.contentWidgetAlign = vv;
		this.updateWidget();
	};
	JkWidgetCommonTableWidgetCellWidget.prototype.createWidget = function() {
		JkWidgetLayerWidget.prototype.createWidget.call(this);
		var thisWidget = this;
		this.align = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.addWidget(this.align);
	};
	JkWidgetCommonTableWidgetCellWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonTableWidgetCellWidget"] === true;
	};
	let JkWidgetCommonTableWidget = function() {
		JkWidgetVerticalBoxWidget.call(this);
		this.widgetSortHandler = null;
		this.rowWidgets = null;
		this.columns = null;
		this.data = null;
		this.header = null;
		this.scrollerLayer = null;
	};
	JkWidgetCommonTableWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetVerticalBoxWidget.prototype);
	JkWidgetCommonTableWidget.prototype.constructor = JkWidgetCommonTableWidget;
	JkWidgetCommonTableWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetCommonTableWidget" : true,
		"JkWidgetVerticalBoxWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonTableWidget.prototype._tobj = JkWidgetCommonTableWidget;
	JkWidgetCommonTableWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonTableWidget;
		return v.CTOR_JkWidgetCommonTableWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonTableWidget.prototype.CTOR_JkWidgetCommonTableWidget_JkUiGuiApplicationContext = function(context) {
		this.scrollerLayer = null;
		this.header = null;
		this.data = null;
		this.columns = null;
		this.rowWidgets = null;
		this.widgetSortHandler = null;
		if(JkWidgetVerticalBoxWidget.prototype.CTOR_JkWidgetVerticalBoxWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonTableWidget.prototype.initializeWidget = function() {
		JkWidgetVerticalBoxWidget.prototype.initializeWidget.call(this);
		this.updateWidgetColumns();
		this.updateDataWidgets();
	};
	JkWidgetCommonTableWidget.prototype.parseColumnInfo = function(value) {
		var v = JkWidgetCommonTableWidgetColumnInfo.NEW();
		if(!(value != null)) {
			return v;
		}
		var array = JkLangString.split(value, (",".charCodeAt()), 0);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var comp = array[n];
				if(comp != null) {
					var vals = JkLangString.split(comp, ("=".charCodeAt()), 2);
					var key = JkLangVector.get(vals, 0);
					var val = JkLangVector.get(vals, 1);
					if(key == "label") {
						v.setLabel(val);
					}
					else if(key == "width") {
						v.setWidth((this.context.getWidthValue(val)));
					}
					else if(key == "align") {
						if(val == "left") {
							v.setAlign(0.0);
						}
						else if(val == "center") {
							v.setAlign(0.5);
						}
						else if(val == "right") {
							v.setAlign(1.0);
						}
						else {
							v.setAlign(0.0);
						}
					}
					else if(key == "sortid") {
						v.setSortid(val);
					}
				}
			}
		}
		return v;
	};
	JkWidgetCommonTableWidget.prototype.onSort = function(sortid) {
		if(this.widgetSortHandler != null) {
			this.widgetSortHandler(sortid);
		}
	};
	JkWidgetCommonTableWidget.prototype.setWidgetHasHeader = function(value) {
		JkWidgetWidget.setVisible(this.header, value);
	};
	JkWidgetCommonTableWidget.prototype.setWidgetColumns = function(columns) {
		this.columns = columns;
		if(this.getInitialized()) {
			this.updateWidgetColumns();
		}
	};
	JkWidgetCommonTableWidget.prototype.updateWidgetColumns = function() {
		this.header.reset();
		if(this.columns != null) {
			var n = 0;
			var m = this.columns.length;
			for(n = 0 ; n < m ; n++) {
				var cc = this.columns[n];
				if(cc != null) {
					var column = JkLangString.asString(cc);
					var ci = this.parseColumnInfo(column);
					var sortid = ci.getSortid();
					if(JkLangString.isNotEmpty(sortid)) {
						var handler = function(vv1) {
							this.onSort(vv1);
						}.bind(this);
						this.header.addClickableText((ci.getLabel()), sortid, handler, (ci.getAlign()), (ci.getWidth()));
					}
					else {
						this.header.addText((ci.getLabel()), (ci.getAlign()), (ci.getWidth()));
					}
				}
			}
		}
		if(this.rowWidgets != null) {
			var n2 = 0;
			var m2 = this.rowWidgets.length;
			for(n2 = 0 ; n2 < m2 ; n2++) {
				var row = (function(o) {
					if(JkWidgetCommonTableWidgetRowWidget.IS_INSTANCE && JkWidgetCommonTableWidgetRowWidget.IS_INSTANCE(o)) {
						return o;
					}
					return null;
				}.bind(this))(this.rowWidgets[n2]);
				if(row != null) {
					this.updateCellProperties(row);
				}
			}
		}
	};
	JkWidgetCommonTableWidget.prototype.getColumnInfo = function(idx) {
		if(!(this.columns != null)) {
			return JkWidgetCommonTableWidgetColumnInfo.NEW();
		}
		if(idx < 0 || idx >= this.columns.length) {
			return JkWidgetCommonTableWidgetColumnInfo.NEW();
		}
		return this.parseColumnInfo((JkLangString.asString(this.columns[idx])));
	};
	JkWidgetCommonTableWidget.prototype.updateCellProperties = function(row) {
		if(!(row != null)) {
			return;
		}
		var cells = row.getCellWidgets();
		if(!(cells != null)) {
			return;
		}
		var n = 0;
		while(n < JkLangVector.getSize(cells)){
			var cell = JkLangVector.get(cells, n);
			if(cell != null) {
				var ci = this.getColumnInfo(n);
				cell.setCellWidth((ci.getWidth()));
				cell.setCellAlign((ci.getAlign()));
			}
			n++;
		}
	};
	JkWidgetCommonTableWidget.prototype.setWidgetData = function(data) {
		this.data = data;
		if(this.getInitialized()) {
			this.updateDataWidgets();
		}
	};
	JkWidgetCommonTableWidget.prototype.setRowStyle = function(row) {
		row.setWidgetColor((this.context.getStyleColor("jkwidget", "table-row-color", "#EEEEEE")));
		row.setWidgetTextColor((this.context.getStyleColor("jkwidget", "table-row-text-color", "#000000")));
	};
	JkWidgetCommonTableWidget.prototype.updateDataWidgets = function() {
		var widgets = new Array;
		if(this.data != null) {
			var n = 0;
			var m = this.data.length;
			for(n = 0 ; n < m ; n++) {
				var entry = this.data[n];
				if(entry != null) {
					var v = JkWidgetCommonTableWidgetRowWidget.NEW_JkUiGuiApplicationContext(this.context);
					this.setRowStyle(v);
					if(entry != null) {
						var n2 = 0;
						var m2 = entry.length;
						for(n2 = 0 ; n2 < m2 ; n2++) {
							var cell = entry[n2];
							if(cell != null) {
								if(JkWidgetWidget.IS_INSTANCE && JkWidgetWidget.IS_INSTANCE(cell)) {
									v.addCellWidget(cell, 0.0, 0);
								}
								else {
									v.addText((JkLangString.asString(cell)), 0.0, 0);
								}
							}
						}
					}
					widgets.push(v);
				}
			}
		}
		this.rowWidgets = widgets;
		if(widgets != null) {
			var n3 = 0;
			var m3 = widgets.length;
			for(n3 = 0 ; n3 < m3 ; n3++) {
				var row = (function(o) {
					if(JkWidgetCommonTableWidgetRowWidget.IS_INSTANCE && JkWidgetCommonTableWidgetRowWidget.IS_INSTANCE(o)) {
						return o;
					}
					return null;
				}.bind(this))(widgets[n3]);
				if(row != null) {
					this.updateCellProperties(row);
				}
			}
		}
		var original = JkLangVector.get((JkWidgetWidget.getChildren(this.scrollerLayer)), 0);
		var scroller = JkWidgetCommonDynamicVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
		scroller.setWidgetContainerSpacing((this.context.getHeightValue("1mm")));
		scroller.setWidgetContainerMargin((this.context.getHeightValue("1mm")));
		scroller.setWidgetProvider((JkWidgetStaticWidgetProvider.forWidgets(widgets)));
		scroller.clear();
		JkWidgetWidget.setVisible(scroller, false);
		this.scrollerLayer.addWidget(scroller);
		if(original != null) {
			var o1 = original;
			var s = scroller;
			this.context.startTimer(0, (function() {
				JkWidgetWidget.removeFromParent(o1);
				JkWidgetWidget.setVisible(s, true);
			}.bind(this)));
		}
	};
	JkWidgetCommonTableWidget.prototype.createWidget = function() {
		JkWidgetVerticalBoxWidget.prototype.createWidget.call(this);
		var thisWidget = this;
		this.header = JkWidgetCommonTableWidgetRowWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.header.setWidgetColor((this.context.getStyleColor("jkwidget", "table-header-color", "#777777")));
		this.header.setWidgetTextColor((this.context.getStyleColor("jkwidget", "table-header-text-color", "#FFFFFF")));
		this.addWidget(this.header);
		this.scrollerLayer = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.addWidget1(this.scrollerLayer, 1.0);
	};
	JkWidgetCommonTableWidget.prototype.getWidgetSortHandler = function() {
		return this.widgetSortHandler;
	};
	JkWidgetCommonTableWidget.prototype.setWidgetSortHandler = function(v) {
		this.widgetSortHandler = v;
		return this;
	};
	JkWidgetCommonTableWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonTableWidget"] === true;
	};
	let JkWidgetCommonActionBarWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.widgetBackgroundColor = null;
		this.widgetTextColor = null;
		this.widgetMenuItemSpacing = 0;
		this.widgetTitle = null;
		this.widgetLeftIconResource = null;
		this.widgetLeftAction = null;
		this.widgetRightIconResource = null;
		this.widgetRightAction = null;
		this.widgetTitleContainer = null;
		this.label = null;
		this.leftButton = null;
		this.rightButton = null;
		this.box = null;
		this.menuItems = null;
		this.overlayWidget = null;
		this.canvas = null;
	};
	JkWidgetCommonActionBarWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonActionBarWidget.prototype.constructor = JkWidgetCommonActionBarWidget;
	JkWidgetCommonActionBarWidget.prototype._t = {
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetScreenAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetCommonActionBarWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonActionBarWidget.prototype._tobj = JkWidgetCommonActionBarWidget;
	JkWidgetCommonActionBarWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonActionBarWidget;
		return v.CTOR_JkWidgetCommonActionBarWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonActionBarWidget.prototype.CTOR_JkWidgetCommonActionBarWidget_JkUiGuiApplicationContext = function(context) {
		this.canvas = null;
		this.overlayWidget = null;
		this.menuItems = null;
		this.box = null;
		this.rightButton = null;
		this.leftButton = null;
		this.label = null;
		this.widgetTitleContainer = null;
		this.widgetRightAction = null;
		this.widgetRightIconResource = null;
		this.widgetLeftAction = null;
		this.widgetLeftIconResource = null;
		this.widgetTitle = null;
		this.widgetMenuItemSpacing = 0;
		this.widgetTextColor = null;
		this.widgetBackgroundColor = null;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonActionBarWidget.prototype.setWidgetTitle = function(value) {
		this.widgetTitle = value;
		if(this.label != null) {
			this.label.setWidgetText(this.widgetTitle);
		}
		JkWidgetWidget.setLayoutSize(this.label, (-1), (JkWidgetWidget.getHeight(this.label)));
		return this;
	};
	JkWidgetCommonActionBarWidget.prototype.setWidgetTitleAlignment = function(align) {
		if(!(this.widgetTitleContainer != null)) {
			return;
		}
		this.widgetTitleContainer.setAlignForIndex(0, align, 0.5);
	};
	JkWidgetCommonActionBarWidget.prototype.setActionBarMargin = function(margin) {
		if(!(this.box != null)) {
			return;
		}
		this.box.setWidgetMargin(margin);
	};
	JkWidgetCommonActionBarWidget.prototype.setActionBarMarginLeft = function(margin) {
		if(!(this.box != null)) {
			return;
		}
		this.box.setWidgetMarginLeft(margin);
	};
	JkWidgetCommonActionBarWidget.prototype.setActionBarMarginRight = function(margin) {
		if(!(this.box != null)) {
			return;
		}
		this.box.setWidgetMarginRight(margin);
	};
	JkWidgetCommonActionBarWidget.prototype.setActionBarMarginTop = function(margin) {
		if(!(this.box != null)) {
			return;
		}
		this.box.setWidgetMarginTop(margin);
	};
	JkWidgetCommonActionBarWidget.prototype.setActionBarMarginBottom = function(margin) {
		if(!(this.box != null)) {
			return;
		}
		this.box.setWidgetMarginBottom(margin);
	};
	JkWidgetCommonActionBarWidget.prototype.getWidgetTitleLabel = function() {
		return this.label;
	};
	JkWidgetCommonActionBarWidget.prototype.getWidgetTitle = function() {
		return this.widgetTitle;
	};
	JkWidgetCommonActionBarWidget.prototype.configureLeftButton = function(iconResource, action) {
		this.widgetLeftIconResource = iconResource;
		this.widgetLeftAction = action;
		this.updateLeftButton();
	};
	JkWidgetCommonActionBarWidget.prototype.configureRightButton = function(iconResource, action) {
		this.widgetRightIconResource = iconResource;
		this.widgetRightAction = action;
		this.updateRightButton();
	};
	JkWidgetCommonActionBarWidget.prototype.configureRightButtonMenu = function(iconResource, menu) {
		this.widgetRightIconResource = iconResource;
		var m = menu;
		this.widgetRightAction = function() {
			JkWidgetCommonPopupMenu.showBelow(this.context, this.rightButton, m, (this.context.getWidthValue("50mm")), 1);
		}.bind(this);
		this.updateRightButton();
	};
	JkWidgetCommonActionBarWidget.prototype.updateLeftButton = function() {
		if(!(this.leftButton != null)) {
			return;
		}
		if(JkLangString.isNotEmpty(this.widgetLeftIconResource)) {
			this.leftButton.setWidgetImageResource(this.widgetLeftIconResource);
			this.leftButton.setWidgetClickHandler(this.widgetLeftAction);
		}
		else {
			this.leftButton.setWidgetImageResource(null);
			this.leftButton.setWidgetClickHandler(null);
		}
	};
	JkWidgetCommonActionBarWidget.prototype.updateRightButton = function() {
		if(!(this.rightButton != null)) {
			return;
		}
		if(JkLangString.isNotEmpty(this.widgetRightIconResource)) {
			this.rightButton.setWidgetImageResource(this.widgetRightIconResource);
			this.rightButton.setWidgetClickHandler(this.widgetRightAction);
		}
		else {
			this.rightButton.setWidgetImageResource(null);
			this.rightButton.setWidgetClickHandler(null);
		}
	};
	JkWidgetCommonActionBarWidget.prototype.getWidgetTextColor = function() {
		var wtc = this.widgetTextColor;
		if(!(wtc != null)) {
			wtc = JkGfxColor.forRGB(255, 255, 255);
		}
		return wtc;
	};
	JkWidgetCommonActionBarWidget.prototype.onWidgetAddedToScreen = function(screen) {
	};
	JkWidgetCommonActionBarWidget.prototype.onWidgetRemovedFromScreen = function(screen) {
	};
	JkWidgetCommonActionBarWidget.prototype.configureMenuItems = function(items) {
		if(!(items != null)) {
			return;
		}
		if(!(this.menuItems != null)) {
			return;
		}
		if(items != null) {
			var n = 0;
			var m = items.length;
			for(n = 0 ; n < m ; n++) {
				var widget = items[n];
				if(widget != null) {
					this.menuItems.addWidget(widget);
				}
			}
		}
	};
	JkWidgetCommonActionBarWidget.prototype.setActionBarBackgroundColor = function(color) {
		if(this.canvas != null) {
			this.canvas.setWidgetColor(color);
		}
	};
	JkWidgetCommonActionBarWidget.prototype.addOverlay = function(widget) {
		if(this.overlayWidget != null) {
			this.overlayWidget.addWidget(widget);
		}
	};
	JkWidgetCommonActionBarWidget.prototype.removeOverlay = function() {
		if(!(this.overlayWidget != null)) {
			return false;
		}
		JkWidgetWidget.removeChildrenOf(this.overlayWidget);
		return true;
	};
	JkWidgetCommonActionBarWidget.prototype.clearMenuItems = function() {
		if(this.menuItems != null) {
			JkWidgetWidget.removeChildrenOf(this.menuItems);
		}
	};
	JkWidgetCommonActionBarWidget.prototype.initializeWidget = function() {
		JkWidgetLayerWidget.prototype.initializeWidget.call(this);
		var bgc = this.widgetBackgroundColor;
		if(bgc != null) {
			this.canvas = JkWidgetCanvasWidget.forColor(this.context, bgc);
			this.addWidget(this.canvas);
		}
		var tml = JkWidgetCommonTopMarginLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.label = JkWidgetLabelWidget.forText(this.context, this.widgetTitle);
		this.label.setWidgetFontFamily("Arial");
		var wtc = this.getWidgetTextColor();
		this.label.setWidgetTextColor(wtc);
		this.box = JkWidgetHorizontalBoxWidget.forContext(this.context, 0, 0);
		this.box.setWidgetMargin((this.context.getWidthValue("1mm")));
		this.box.setWidgetSpacing((this.context.getWidthValue("1mm")));
		this.leftButton = JkWidgetCommonImageButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.leftButton.setWidgetButtonHeight((this.context.getHeightValue("6mm")));
		this.box.addWidget(this.leftButton);
		this.updateLeftButton();
		this.widgetTitleContainer = JkWidgetAlignWidget.forWidget(this.context, this.label, 0.5, 0.5, 0);
		this.box.addWidget1(this.widgetTitleContainer, 1.0);
		var spacing = this.widgetMenuItemSpacing;
		if(spacing < 0) {
			spacing = this.context.getWidthValue("1mm");
		}
		this.menuItems = JkWidgetHorizontalBoxWidget.forContext(this.context, (this.context.getWidthValue("1mm")), spacing);
		this.box.addWidget(this.menuItems);
		this.rightButton = JkWidgetCommonImageButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.rightButton.setWidgetButtonHeight((this.context.getHeightValue("6mm")));
		this.box.addWidget(this.rightButton);
		this.updateRightButton();
		tml.addWidget(this.box);
		this.overlayWidget = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		tml.addWidget(this.overlayWidget);
		this.addWidget(tml);
	};
	JkWidgetCommonActionBarWidget.prototype.getWidgetBackgroundColor = function() {
		return this.widgetBackgroundColor;
	};
	JkWidgetCommonActionBarWidget.prototype.setWidgetBackgroundColor = function(v) {
		this.widgetBackgroundColor = v;
		return this;
	};
	JkWidgetCommonActionBarWidget.prototype.setWidgetTextColor = function(v) {
		this.widgetTextColor = v;
		return this;
	};
	JkWidgetCommonActionBarWidget.prototype.getWidgetMenuItemSpacing = function() {
		return this.widgetMenuItemSpacing;
	};
	JkWidgetCommonActionBarWidget.prototype.setWidgetMenuItemSpacing = function(v) {
		this.widgetMenuItemSpacing = v;
		return this;
	};
	JkWidgetCommonActionBarWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonActionBarWidget"] === true;
	};
	let JkWidgetCommonCheckBoxWidget = function() {
		JkWidgetWidget.call(this);
		this.widgetContext = null;
		this.widgetText = null;
		this.widgetTextColor = null;
		this.widgetFontResource = null;
		this.widgetFontFamily = null;
		this.widgetCheckHandler = null;
	};
	JkWidgetCommonCheckBoxWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetWidget.prototype);
	JkWidgetCommonCheckBoxWidget.prototype.constructor = JkWidgetCommonCheckBoxWidget;
	JkWidgetCommonCheckBoxWidget.prototype._t = {
		"JkWidgetWidgetWithValue" : true,
		"JkWidgetWidget" : true,
		"JkWidgetCommonCheckBoxWidget" : true
	};
	JkWidgetCommonCheckBoxWidget.prototype._tobj = JkWidgetCommonCheckBoxWidget;
	JkWidgetCommonCheckBoxWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonCheckBoxWidget;
		return v.CTOR_JkWidgetCommonCheckBoxWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonCheckBoxWidget.prototype.CTOR_JkWidgetCommonCheckBoxWidget_JkUiGuiApplicationContext = function(context) {
		if(JkWidgetWidget.prototype.CTOR_JkWidgetWidget.call(this) == null) {
			return null;
		}
		this.widgetCheckHandler = null;
		this.widgetFontFamily = null;
		this.widgetFontResource = null;
		this.widgetTextColor = null;
		this.widgetText = null;
		this.widgetContext = null;
		this.widgetContext = context;
		this.widgetFontFamily = "Arial";
		this.widgetTextColor = JkGfxColor.black();
		this.setWidgetTextColor(this.widgetTextColor);
		return this;
	};
	JkWidgetCommonCheckBoxWidget.forText = function(context, text) {
		var v = JkWidgetCommonCheckBoxWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetText(text);
		return v;
	};
	JkWidgetCommonCheckBoxWidget.prototype.createElement = function() {
		var v = JkUiHTMLDOM.createElement("div");
		var input = JkUiHTMLDOM.createElement("input");
		JkUiHTMLDOM.setAttribute(input, "type", "checkbox");
		JkUiHTMLDOM.addEventListener(input, "change", (function() {
			this.onCheckChangeListener();
		}.bind(this)));
		var label = JkUiHTMLDOM.createElement("label");
		JkUiHTMLDOM.setStyle(label, "margin-left", "5px");
		JkUiHTMLDOM.setStyle(label, "font-size", "14px");
		JkUiHTMLDOM.setStyle(input, "cursor", "pointer");
		JkUiHTMLDOM.appendChild(v, input);
		JkUiHTMLDOM.appendChild(v, label);
		return v;
	};
	JkWidgetCommonCheckBoxWidget.prototype.setWidgetText = function(text) {
		this.widgetText = text;
		var child = JkUiHTMLDOM.getChild(this.element, 1);
		JkUiHTMLDOM.setTextContent(child, text);
	};
	JkWidgetCommonCheckBoxWidget.prototype.getWidgetText = function() {
		return this.widgetText;
	};
	JkWidgetCommonCheckBoxWidget.prototype.setWidgetTextColor = function(color) {
		this.widgetTextColor = color;
		this.updateWidgetFont();
		return this;
	};
	JkWidgetCommonCheckBoxWidget.prototype.getWidgetTextColor = function() {
		return this.widgetTextColor;
	};
	JkWidgetCommonCheckBoxWidget.prototype.setWidgetFontFamily = function(font) {
		this.widgetFontFamily = font;
		this.updateWidgetFont();
		return this;
	};
	JkWidgetCommonCheckBoxWidget.prototype.setWidgetFontResource = function(res) {
		this.widgetFontResource = res;
		this.updateWidgetFont();
		return this;
	};
	JkWidgetCommonCheckBoxWidget.prototype.updateWidgetFont = function() {
		var child = JkUiHTMLDOM.getChild(this.element, 1);
		JkUiHTMLDOM.setStyle(child, "color", (JkUiHTMLDOM.colorToRGBA(this.widgetTextColor)));
		JkUiHTMLDOM.setFontFamily(this.element, this.widgetFontFamily);
	};
	JkWidgetCommonCheckBoxWidget.prototype.getWidgetChecked = function() {
		return this.element.firstChild.checked;
	};
	JkWidgetCommonCheckBoxWidget.prototype.setWidgetChecked = function(x) {
		var child = JkUiHTMLDOM.getChild(this.element, 0);
		if(x == true) {
			child.checked = true;
			;
		}
		else {
			child.checked = false;
			;
		}
	};
	JkWidgetCommonCheckBoxWidget.prototype.setWidgetValue = function(value) {
		this.setWidgetChecked((JkLangBoolean.asBoolean(value, false)));
	};
	JkWidgetCommonCheckBoxWidget.prototype.getWidgetValue = function() {
		return JkLangBoolean.asObject((this.getWidgetChecked()));
	};
	JkWidgetCommonCheckBoxWidget.prototype.onCheckChangeListener = function() {
		if(this.widgetCheckHandler != null) {
			this.widgetCheckHandler();
		}
	};
	JkWidgetCommonCheckBoxWidget.prototype.getWidgetCheckHandler = function() {
		return this.widgetCheckHandler;
	};
	JkWidgetCommonCheckBoxWidget.prototype.setWidgetCheckHandler = function(v) {
		this.widgetCheckHandler = v;
		return this;
	};
	JkWidgetCommonCheckBoxWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonCheckBoxWidget"] === true;
	};
	let JkWidgetCommonSwitcherLayerWidget = function() {
		JkWidgetContainerWidget.call(this);
		this.margin = 0;
	};
	JkWidgetCommonSwitcherLayerWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetContainerWidget.prototype);
	JkWidgetCommonSwitcherLayerWidget.prototype.constructor = JkWidgetCommonSwitcherLayerWidget;
	JkWidgetCommonSwitcherLayerWidget.prototype._t = {
		"JkWidgetCommonSwitcherLayerWidget" : true,
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonSwitcherLayerWidget.prototype._tobj = JkWidgetCommonSwitcherLayerWidget;
	JkWidgetCommonSwitcherLayerWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonSwitcherLayerWidget;
		return v.CTOR_JkWidgetCommonSwitcherLayerWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonSwitcherLayerWidget.prototype.CTOR_JkWidgetCommonSwitcherLayerWidget_JkUiGuiApplicationContext = function(context) {
		this.margin = 0;
		if(JkWidgetContainerWidget.prototype.CTOR_JkWidgetContainerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonSwitcherLayerWidget.findTopMostLayerWidget = function(widget) {
		var v = null;
		var pp = widget;
		while(pp != null){
			if(JkWidgetCommonSwitcherLayerWidget.IS_INSTANCE && JkWidgetCommonSwitcherLayerWidget.IS_INSTANCE(pp)) {
				v = pp;
			}
			pp = JkWidgetWidget.getParent(pp);
		}
		return v;
	};
	JkWidgetCommonSwitcherLayerWidget.forMargin = function(context, margin) {
		var v = JkWidgetCommonSwitcherLayerWidget.NEW_JkUiGuiApplicationContext(context);
		v.margin = margin;
		return v;
	};
	JkWidgetCommonSwitcherLayerWidget.forWidget = function(context, widget, margin) {
		var v = JkWidgetCommonSwitcherLayerWidget.NEW_JkUiGuiApplicationContext(context);
		v.margin = margin;
		v.addWidget(widget);
		return v;
	};
	JkWidgetCommonSwitcherLayerWidget.forWidgets = function(context, widgets, margin) {
		var v = JkWidgetCommonSwitcherLayerWidget.NEW_JkUiGuiApplicationContext(context);
		v.margin = margin;
		if(widgets != null) {
			var n = 0;
			var m = widgets.length;
			for(n = 0 ; n < m ; n++) {
				var widget = widgets[n];
				if(widget != null) {
					v.addWidget(widget);
				}
			}
		}
		return v;
	};
	JkWidgetCommonSwitcherLayerWidget.prototype.onWidgetHeightChanged = function(height) {
		JkWidgetContainerWidget.prototype.onWidgetHeightChanged.call(this, height);
		var children = JkWidgetWidget.getChildren(this);
		if(children != null) {
			var topmost = JkLangVector.get(children, (JkLangVector.getSize(children) - 1));
			if(topmost != null) {
				JkWidgetWidget.resizeHeight(topmost, (height - this.margin - this.margin));
			}
		}
	};
	JkWidgetCommonSwitcherLayerWidget.prototype.computeWidgetLayout = function(widthConstraint) {
		var children = JkWidgetWidget.getChildren(this);
		if(!(children != null)) {
			return;
		}
		var childCount = JkLangVector.getSize(children);
		var wc = -1;
		if(widthConstraint >= 0) {
			wc = widthConstraint - this.margin - this.margin;
			if(wc < 0) {
				wc = 0;
			}
		}
		var mw = 0;
		var mh = 0;
		var n = 0;
		var array = JkWidgetWidget.getChildren(this);
		if(array != null) {
			var n2 = 0;
			var m = array.length;
			for(n2 = 0 ; n2 < m ; n2++) {
				var child = array[n2];
				if(child != null) {
					if(n == childCount - 1) {
						JkWidgetWidget.layout(child, wc, false);
						mw = JkWidgetWidget.getWidth(child);
						mh = JkWidgetWidget.getHeight(child);
						JkWidgetWidget.move(child, this.margin, this.margin);
					}
					else {
						var ww = JkWidgetWidget.getWidth(child);
						JkWidgetWidget.move(child, (-ww), this.margin);
					}
					n++;
				}
			}
		}
		JkWidgetWidget.setLayoutSize(this, (mw + this.margin + this.margin), (mh + this.margin + this.margin));
	};
	JkWidgetCommonSwitcherLayerWidget.prototype.removeAllChildren = function() {
		JkWidgetWidget.removeChildrenOf(this);
	};
	JkWidgetCommonSwitcherLayerWidget.prototype.getChildWidget = function(index) {
		var children = JkWidgetWidget.getChildren(this);
		if(!(children != null)) {
			return null;
		}
		return JkLangVector.get(children, index);
	};
	JkWidgetCommonSwitcherLayerWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonSwitcherLayerWidget"] === true;
	};
	let JkWidgetCommonPopupWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.widgetContext = null;
		this.widgetContainerBackgroundColor = null;
		this.widgetContainer = null;
		this.widgetContent = null;
		this.animationDestY = 0;
		this.popupShowAnimationEndHandler = null;
		this.popupHideAnimationEndHandler = null;
		this.widgetModal = true;
	};
	JkWidgetCommonPopupWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonPopupWidget.prototype.constructor = JkWidgetCommonPopupWidget;
	JkWidgetCommonPopupWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetCommonPopupWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonPopupWidget.prototype._tobj = JkWidgetCommonPopupWidget;
	JkWidgetCommonPopupWidget.NEW_JkUiGuiApplicationContext = function(ctx) {
		var v = new JkWidgetCommonPopupWidget;
		return v.CTOR_JkWidgetCommonPopupWidget_JkUiGuiApplicationContext(ctx);
	};
	JkWidgetCommonPopupWidget.prototype.CTOR_JkWidgetCommonPopupWidget_JkUiGuiApplicationContext = function(ctx) {
		this.widgetModal = true;
		this.popupHideAnimationEndHandler = null;
		this.popupShowAnimationEndHandler = null;
		this.animationDestY = 0;
		this.widgetContent = null;
		this.widgetContainer = null;
		this.widgetContainerBackgroundColor = null;
		this.widgetContext = null;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, ctx) == null) {
			return null;
		}
		this.widgetContext = ctx;
		return this;
	};
	JkWidgetCommonPopupWidget.forContentWidget = function(context, widget) {
		var v = JkWidgetCommonPopupWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetContent(widget);
		return v;
	};
	JkWidgetCommonPopupWidget.prototype.setWidgetContainerBackgroundColor = function(color) {
		if(color != null) {
			this.widgetContainerBackgroundColor = JkWidgetCanvasWidget.forColor(this.widgetContext, color);
		}
	};
	JkWidgetCommonPopupWidget.prototype.setWidgetContent = function(widget) {
		if(widget != null) {
			this.widgetContent = widget;
		}
	};
	JkWidgetCommonPopupWidget.prototype.getWidgetContainerBackgroundColor = function() {
		return this.widgetContainerBackgroundColor;
	};
	JkWidgetCommonPopupWidget.prototype.getWidgetContent = function() {
		return this.widgetContent;
	};
	JkWidgetCommonPopupWidget.prototype.initializeWidget = function() {
		JkWidgetLayerWidget.prototype.initializeWidget.call(this);
		if(this.widgetContainerBackgroundColor == null) {
			this.widgetContainerBackgroundColor = JkWidgetCanvasWidget.forColor(this.widgetContext, (JkGfxColor.forRGBADouble(0, 0, 0, 0.8)));
			JkWidgetWidget.setWidgetClickHandler(this.widgetContainerBackgroundColor, (function() {
				if(!this.widgetModal) {
					this.hidePopup();
				}
			}.bind(this)));
		}
		this.addWidget(this.widgetContainerBackgroundColor);
		if(this.widgetContent != null) {
			this.addWidget((JkWidgetAlignWidget.forWidget(this.widgetContext, this.widgetContent, 0.5, 0.5, 0)));
		}
	};
	JkWidgetCommonPopupWidget.prototype.onWidgetHeightChanged = function(height) {
		JkWidgetLayerWidget.prototype.onWidgetHeightChanged.call(this, height);
		this.animationDestY = JkWidgetWidget.getY(this.widgetContent);
	};
	JkWidgetCommonPopupWidget.prototype.computeWidgetLayout = function(widthConstraint) {
		JkWidgetLayerWidget.prototype.computeWidgetLayout.call(this, widthConstraint);
		this.animationDestY = JkWidgetWidget.getY(this.widgetContent);
	};
	JkWidgetCommonPopupWidget.prototype.showPopup = function(widget) {
		var parentLayer = null;
		var div = JkUiHTMLDOM.createElement("div");
		JkUiHTMLDOM.setStyle(div, "position", "fixed");
		JkUiHTMLDOM.setStyle(div, "bottom", "0px");
		JkUiHTMLDOM.setStyle(div, "top", "0px");
		JkUiHTMLDOM.setStyle(div, "left", "0px");
		JkUiHTMLDOM.setStyle(div, "right", "0px");
		JkUiHTMLDOM.setStyle(div, "width", "100%");
		JkUiHTMLDOM.setStyle(div, "height", "100%");
		JkUiHTMLDOM.setStyle(div, "z-index", "999");
		JkUiHTMLDOM.appendToBody(div);
		parentLayer = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		parentLayer.setAllowResize(false);
		JkWidgetWidget.addToDomElement(parentLayer, div);
		this.widgetContainer = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.widgetContainer.setWidgetScrollBarDisabled(true);
		this.widgetContainer.addWidget(this);
		parentLayer.addWidget(this.widgetContainer);
		JkWidgetWidget.setAlpha(this.widgetContainerBackgroundColor, 0);
		JkWidgetWidget.setAlpha(this.widgetContent, 0);
		this.animationDestY = JkWidgetWidget.getY(this.widgetContent);
		var ay = this.context.getHeightValue("3mm");
		JkWidgetWidget.move(this.widgetContent, (JkWidgetWidget.getX(this.widgetContent)), (~(~(this.animationDestY + ay))));
		var anim = JkWidgetWidgetAnimation.forDuration(this.context, 300);
		anim.addCallback((function(completion1) {
			var bgf = completion1 * 1.5;
			if(bgf > 1.0) {
				bgf = 1.0;
			}
			JkWidgetWidget.setAlpha(this.widgetContainerBackgroundColor, bgf);
			JkWidgetWidget.setAlpha(this.widgetContent, completion1);
			JkWidgetWidget.move(this.widgetContent, (JkWidgetWidget.getX(this.widgetContent)), (~(~(this.animationDestY + ~(~((1.0 - completion1) * ay))))));
		}.bind(this)));
		anim.setEndListener((function() {
			if(this.popupShowAnimationEndHandler != null) {
				this.popupShowAnimationEndHandler();
			}
		}.bind(this)));
		anim.start();
	};
	JkWidgetCommonPopupWidget.prototype.hidePopup = function() {
		var anim = JkWidgetWidgetAnimation.forDuration(this.context, 300);
		anim.addFadeOut(this.widgetContainer, true);
		var parent = JkUiHTMLDOM.getParentElement((JkUiHTMLDOM.getParentElement(this.widgetContainer.element)));
		anim.setEndListener((function() {
			if(this.popupHideAnimationEndHandler != null) {
				this.popupHideAnimationEndHandler();
			}
			JkUiHTMLDOM.remove(parent);
		}.bind(this)));
		anim.start();
	};
	JkWidgetCommonPopupWidget.prototype.getPopupShowAnimationEndHandler = function() {
		return this.popupShowAnimationEndHandler;
	};
	JkWidgetCommonPopupWidget.prototype.setPopupShowAnimationEndHandler = function(v) {
		this.popupShowAnimationEndHandler = v;
		return this;
	};
	JkWidgetCommonPopupWidget.prototype.getPopupHideAnimationEndHandler = function() {
		return this.popupHideAnimationEndHandler;
	};
	JkWidgetCommonPopupWidget.prototype.setPopupHideAnimationEndHandler = function(v) {
		this.popupHideAnimationEndHandler = v;
		return this;
	};
	JkWidgetCommonPopupWidget.prototype.getWidgetModal = function() {
		return this.widgetModal;
	};
	JkWidgetCommonPopupWidget.prototype.setWidgetModal = function(v) {
		this.widgetModal = v;
		return this;
	};
	JkWidgetCommonPopupWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonPopupWidget"] === true;
	};
	let JkWidgetCommonLoadingWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.loading = null;
		this.animation = null;
	};
	JkWidgetCommonLoadingWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonLoadingWidget.prototype.constructor = JkWidgetCommonLoadingWidget;
	JkWidgetCommonLoadingWidget.prototype._t = {
		"JkWidgetCommonLoadingWidget" : true,
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonLoadingWidget.prototype._tobj = JkWidgetCommonLoadingWidget;
	JkWidgetCommonLoadingWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonLoadingWidget;
		return v.CTOR_JkWidgetCommonLoadingWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonLoadingWidget.prototype.CTOR_JkWidgetCommonLoadingWidget_JkUiGuiApplicationContext = function(context) {
		this.animation = null;
		this.loading = null;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonLoadingWidget.initializeWithText = function(text) {
		JkWidgetCommonLoadingWidget.displayText = text;
		JkWidgetCommonLoadingWidget.displayImage = null;
	};
	JkWidgetCommonLoadingWidget.initializeWithImage = function(image) {
		JkWidgetCommonLoadingWidget.displayText = null;
		JkWidgetCommonLoadingWidget.displayImage = image;
	};
	JkWidgetCommonLoadingWidget.openPopup = function(context, widget) {
		var v = JkWidgetCommonLoadingWidget.NEW_JkUiGuiApplicationContext(context);
		if(v.showPopup(widget) == false) {
			v = null;
		}
		return v;
	};
	JkWidgetCommonLoadingWidget.closePopup = function(widget) {
		if(widget != null) {
			widget.stop();
			JkWidgetWidget.removeFromParent(widget);
		}
		return null;
	};
	JkWidgetCommonLoadingWidget.prototype.initializeWidget = function() {
		JkWidgetLayerWidget.prototype.initializeWidget.call(this);
		var background = JkWidgetCanvasWidget.forColor(this.context, (JkGfxColor.forRGBADouble(0, 0, 0, 0.8)));
		JkWidgetWidget.setWidgetClickHandler(background, (function() {
			;
		}.bind(this)));
		this.addWidget(background);
		if(JkWidgetCommonLoadingWidget.displayImage != null) {
			var img = JkWidgetImageWidget.forImage(this.context, JkWidgetCommonLoadingWidget.displayImage);
			img.setWidgetImageHeight((this.context.getHeightValue("20mm")));
			this.loading = img;
		}
		else {
			var text = JkWidgetCommonLoadingWidget.displayText;
			if(JkLangString.isEmpty(text)) {
				text = "Loading ..";
			}
			var lt = JkWidgetLabelWidget.forText(this.context, text);
			lt.setWidgetTextColor((JkGfxColor.white()));
			lt.setWidgetFontSize((this.context.getHeightValue("3mm")));
			this.loading = lt;
		}
		this.addWidget((JkWidgetAlignWidget.forWidget(this.context, this.loading, 0.5, 0.5, 0)));
		this.start();
	};
	JkWidgetCommonLoadingWidget.prototype.start = function() {
		this.animation = JkWidgetWidgetAnimation.forDuration(this.context, 1000);
		this.animation.addFadeOutIn(this.loading);
		this.animation.setShouldLoop(true);
		this.animation.start();
	};
	JkWidgetCommonLoadingWidget.prototype.stop = function() {
		if(this.animation != null) {
			this.animation.setShouldStop(true);
			this.animation = null;
		}
	};
	JkWidgetCommonLoadingWidget.prototype.showPopup = function(target) {
		var topmost = JkWidgetLayerWidget.findTopMostLayerWidget(target);
		if(topmost == null) {
			return false;
		}
		topmost.addWidget(this);
		return true;
	};
	JkWidgetCommonLoadingWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonLoadingWidget"] === true;
	};
	JkWidgetCommonLoadingWidget.displayText = null;
	JkWidgetCommonLoadingWidget.displayImage = null;
	let JkWidgetCommonProgressBarWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.widgetProgressBarColor = JkGfxColor.black();
		this.minimumPercentage = 0;
		this.maximumPercentage = 100;
		this.currentPercentage = 0;
		this.totalPercentage = 0;
		this.widgetWidth = 0;
		this.layer = null;
		this.hbox = null;
		this.container = null;
		this.canvas = null;
	};
	JkWidgetCommonProgressBarWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonProgressBarWidget.prototype.constructor = JkWidgetCommonProgressBarWidget;
	JkWidgetCommonProgressBarWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetCommonProgressBarWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonProgressBarWidget.prototype._tobj = JkWidgetCommonProgressBarWidget;
	JkWidgetCommonProgressBarWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonProgressBarWidget;
		return v.CTOR_JkWidgetCommonProgressBarWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonProgressBarWidget.prototype.CTOR_JkWidgetCommonProgressBarWidget_JkUiGuiApplicationContext = function(context) {
		this.canvas = null;
		this.container = null;
		this.hbox = null;
		this.layer = null;
		this.widgetWidth = 0;
		this.totalPercentage = 0;
		this.currentPercentage = 0;
		this.maximumPercentage = 100;
		this.minimumPercentage = 0;
		this.widgetProgressBarColor = JkGfxColor.black();
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonProgressBarWidget.prototype.updateProgress = function(value) {
		this.currentPercentage = value;
		var percentage = 100 / this.maximumPercentage * this.currentPercentage;
		if(percentage < this.minimumPercentage) {
			percentage = this.minimumPercentage;
		}
		this.totalPercentage = percentage;
		this.widgetWidth = JkWidgetWidget.getWidth(this.layer) / this.maximumPercentage * percentage;
		if(this.totalPercentage <= 100) {
			if(this.totalPercentage < 1) {
				this.totalPercentage = 0;
				this.canvas.setWidgetColor((JkGfxColor.white()));
			}
			else {
				this.canvas.setWidgetColor(this.widgetProgressBarColor);
			}
			this.container.setWidgetWidthRequest(this.widgetWidth);
		}
	};
	JkWidgetCommonProgressBarWidget.prototype.createWidget = function() {
		JkWidgetLayerWidget.prototype.createWidget.call(this);
		var thisWidget = this;
		this.setWidgetHeightRequest((this.context.getHeightValue("10mm")));
		this.layer = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.layer.setWidgetMargin((this.context.getHeightValue("1px")));
		var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
		widget.setWidgetOutlineColor((JkGfxColor.black()));
		widget.setWidgetOutlineWidth((this.context.getHeightValue("1px")));
		this.layer.addWidget(widget);
		this.hbox = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.container = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.canvas = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.container.addWidget(this.canvas);
		this.hbox.addWidget(this.container);
		this.layer.addWidget(this.hbox);
		this.addWidget(this.layer);
	};
	JkWidgetCommonProgressBarWidget.prototype.getWidgetProgressBarColor = function() {
		return this.widgetProgressBarColor;
	};
	JkWidgetCommonProgressBarWidget.prototype.setWidgetProgressBarColor = function(v) {
		this.widgetProgressBarColor = v;
		return this;
	};
	JkWidgetCommonProgressBarWidget.prototype.getMinimumPercentage = function() {
		return this.minimumPercentage;
	};
	JkWidgetCommonProgressBarWidget.prototype.setMinimumPercentage = function(v) {
		this.minimumPercentage = v;
		return this;
	};
	JkWidgetCommonProgressBarWidget.prototype.getMaximumPercentage = function() {
		return this.maximumPercentage;
	};
	JkWidgetCommonProgressBarWidget.prototype.setMaximumPercentage = function(v) {
		this.maximumPercentage = v;
		return this;
	};
	JkWidgetCommonProgressBarWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonProgressBarWidget"] === true;
	};
	let JkWidgetCommonNavigationWidget = function() {
		JkWidgetCommonNavigationFrameWidget.call(this);
		this.widgetBackImageResourceName = "backarrow";
		this.widgetStack = null;
		this.contentWidget = null;
	};
	JkWidgetCommonNavigationWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetCommonNavigationFrameWidget.prototype);
	JkWidgetCommonNavigationWidget.prototype.constructor = JkWidgetCommonNavigationWidget;
	JkWidgetCommonNavigationWidget.prototype._t = {
		"JkUiKeyListener" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetTitleContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true,
		"JkWidgetCommonNavigationFrameWidget" : true,
		"JkWidgetCommonNavigationWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetParentAwareWidget" : true
	};
	JkWidgetCommonNavigationWidget.prototype._tobj = JkWidgetCommonNavigationWidget;
	JkWidgetCommonNavigationWidget.NEW_JkUiGuiApplicationContext = function(ctx) {
		var v = new JkWidgetCommonNavigationWidget;
		return v.CTOR_JkWidgetCommonNavigationWidget_JkUiGuiApplicationContext(ctx);
	};
	JkWidgetCommonNavigationWidget.prototype.CTOR_JkWidgetCommonNavigationWidget_JkUiGuiApplicationContext = function(ctx) {
		this.contentWidget = null;
		this.widgetStack = null;
		this.widgetBackImageResourceName = "backarrow";
		if(JkWidgetCommonNavigationFrameWidget.prototype.CTOR_JkWidgetCommonNavigationFrameWidget_JkUiGuiApplicationContext.call(this, ctx) == null) {
			return null;
		}
		this.widgetStack = JkLangStack.NEW();
		return this;
	};
	JkWidgetCommonNavigationWidget.switchToContainer = function(widget, newWidget) {
		var ng = null;
		var pp = JkWidgetWidget.getParent(widget);
		while(pp != null){
			if(JkWidgetCommonNavigationWidget.IS_INSTANCE && JkWidgetCommonNavigationWidget.IS_INSTANCE(pp)) {
				ng = pp;
				break;
			}
			pp = JkWidgetWidget.getParent(pp);
		}
		if(!(ng != null)) {
			return false;
		}
		return ng.switchWidget(newWidget);
	};
	JkWidgetCommonNavigationWidget.pushToContainer = function(widget, newWidget) {
		var ng = null;
		var pp = JkWidgetWidget.getParent(widget);
		while(pp != null){
			if(JkWidgetCommonNavigationWidget.IS_INSTANCE && JkWidgetCommonNavigationWidget.IS_INSTANCE(pp)) {
				ng = pp;
				break;
			}
			pp = JkWidgetWidget.getParent(pp);
		}
		if(!(ng != null)) {
			return false;
		}
		return ng.pushWidget(newWidget);
	};
	JkWidgetCommonNavigationWidget.popFromContainer = function(widget) {
		var ng = null;
		var pp = JkWidgetWidget.getParent(widget);
		while(pp != null){
			if(JkWidgetCommonNavigationWidget.IS_INSTANCE && JkWidgetCommonNavigationWidget.IS_INSTANCE(pp)) {
				ng = pp;
				break;
			}
			pp = JkWidgetWidget.getParent(pp);
		}
		if(!(ng != null)) {
			return null;
		}
		return ng.popWidget();
	};
	JkWidgetCommonNavigationWidget.findNavigationWidget = function(widget) {
		var pp = JkWidgetWidget.getParent(widget);
		while(pp != null){
			if(JkWidgetCommonNavigationWidget.IS_INSTANCE && JkWidgetCommonNavigationWidget.IS_INSTANCE(pp)) {
				return pp;
			}
			pp = JkWidgetWidget.getParent(pp);
		}
		return null;
	};
	JkWidgetCommonNavigationWidget.prototype.createMainWidget = function() {
		return null;
	};
	JkWidgetCommonNavigationWidget.prototype.initializeWidget = function() {
		JkWidgetCommonNavigationFrameWidget.prototype.initializeWidget.call(this);
		var main = this.contentWidget;
		if(!(main != null)) {
			main = this.createMainWidget();
		}
		if(main != null) {
			this.pushWidget(main);
		}
	};
	JkWidgetCommonNavigationWidget.prototype.updateMenuButton = function() {
		if(!(this.actionBar != null)) {
			return;
		}
		var handler = this.getMenuHandler();
		if(this.widgetStack != null && this.widgetStack.getSize() > 1) {
			this.actionBar.configureLeftButton(this.widgetBackImageResourceName, (function() {
				this.popWidget();
			}.bind(this)));
		}
		else {
			this.defaultLeftButtonConfiguration();
		}
	};
	JkWidgetCommonNavigationWidget.prototype.onKeyEvent = function(event) {
		if(event.isKeyPress(JkUiKeyEvent.KEY_BACK)) {
			if(this.widgetStack != null && this.widgetStack.getSize() > 1) {
				if(this.popWidget() != null) {
					event.consume();
				}
			}
		}
	};
	JkWidgetCommonNavigationWidget.prototype.setWidgetContent = function(widget) {
		if(!(widget != null)) {
			return;
		}
		if(this.widgetStack.getSize() > 0) {
			return;
		}
		if(!(this.contentArea != null)) {
			this.contentWidget = widget;
			return;
		}
		this.pushWidget(widget);
	};
	JkWidgetCommonNavigationWidget.prototype.pushWidget = function(widget) {
		if(this.contentArea == null || widget == null) {
			return false;
		}
		this.widgetStack.push(widget);
		this.contentArea.addWidget(widget);
		this.onCurrentWidgetChanged();
		return true;
	};
	JkWidgetCommonNavigationWidget.prototype.switchWidget = function(widget) {
		if(!(widget != null)) {
			return false;
		}
		this.popWidget();
		return this.pushWidget(widget);
	};
	JkWidgetCommonNavigationWidget.prototype.popWidget = function() {
		if(!(this.contentArea != null)) {
			return null;
		}
		var topmost = this.widgetStack.pop();
		if(!(topmost != null)) {
			return null;
		}
		JkWidgetWidget.removeFromParent(topmost);
		this.onCurrentWidgetChanged();
		return topmost;
	};
	JkWidgetCommonNavigationWidget.prototype.peekWidget = function() {
		return this.widgetStack.peek();
	};
	JkWidgetCommonNavigationWidget.prototype.getWidgetBackImageResourceName = function() {
		return this.widgetBackImageResourceName;
	};
	JkWidgetCommonNavigationWidget.prototype.setWidgetBackImageResourceName = function(v) {
		this.widgetBackImageResourceName = v;
		return this;
	};
	JkWidgetCommonNavigationWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonNavigationWidget"] === true;
	};
	let JkWidgetCommonSelectSearchWidgetMyContainerWidget = function() {
		JkWidgetContainerWidget.call(this);
		this.widget = null;
	};
	JkWidgetCommonSelectSearchWidgetMyContainerWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetContainerWidget.prototype);
	JkWidgetCommonSelectSearchWidgetMyContainerWidget.prototype.constructor = JkWidgetCommonSelectSearchWidgetMyContainerWidget;
	JkWidgetCommonSelectSearchWidgetMyContainerWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetCommonSelectSearchWidgetMyContainerWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonSelectSearchWidgetMyContainerWidget.prototype._tobj = JkWidgetCommonSelectSearchWidgetMyContainerWidget;
	JkWidgetCommonSelectSearchWidgetMyContainerWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonSelectSearchWidgetMyContainerWidget;
		return v.CTOR_JkWidgetCommonSelectSearchWidgetMyContainerWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonSelectSearchWidgetMyContainerWidget.prototype.CTOR_JkWidgetCommonSelectSearchWidgetMyContainerWidget_JkUiGuiApplicationContext = function(context) {
		this.widget = null;
		if(JkWidgetContainerWidget.prototype.CTOR_JkWidgetContainerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonSelectSearchWidgetMyContainerWidget.prototype.onWidgetHeightChanged = function(height) {
		var array = JkWidgetWidget.getChildren(this);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var child = array[n];
				if(child != null) {
					JkWidgetWidget.move(child, (JkWidgetWidget.getAbsoluteX(this.widget)), (JkWidgetWidget.getAbsoluteY(this.widget)));
				}
			}
		}
	};
	JkWidgetCommonSelectSearchWidgetMyContainerWidget.prototype.computeWidgetLayout = function(widthConstraint) {
		var array = JkWidgetWidget.getChildren(this);
		if(array != null) {
			var n = 0;
			var m = array.length;
			for(n = 0 ; n < m ; n++) {
				var child = array[n];
				if(child != null) {
					JkWidgetWidget.layout(child, (JkWidgetWidget.getWidth(this.widget)), false);
					JkWidgetWidget.move(child, (JkWidgetWidget.getAbsoluteX(this.widget)), (JkWidgetWidget.getAbsoluteY(this.widget)));
				}
			}
		}
		JkWidgetWidget.setLayoutSize(this, widthConstraint, (JkWidgetWidget.getHeight(this)));
	};
	JkWidgetCommonSelectSearchWidgetMyContainerWidget.prototype.getWidget = function() {
		return this.widget;
	};
	JkWidgetCommonSelectSearchWidgetMyContainerWidget.prototype.setWidget = function(v) {
		this.widget = v;
		return this;
	};
	JkWidgetCommonSelectSearchWidgetMyContainerWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonSelectSearchWidgetMyContainerWidget"] === true;
	};
	let JkWidgetCommonSelectSearchWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.defaultNoRecordMessage = "No record found";
		this.widgetOutlineColor = null;
		this.widgetItems = null;
		this.widgetValueChangeHandler = null;
		this.itemscontainer = null;
		this.myContainer = null;
		this.container = null;
		this.shown = false;
		this.background = null;
		this.label = null;
		this.icon = null;
	};
	JkWidgetCommonSelectSearchWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonSelectSearchWidget.prototype.constructor = JkWidgetCommonSelectSearchWidget;
	JkWidgetCommonSelectSearchWidget.prototype._t = {
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetWidgetWithLayout" : true,
		"JkWidgetWidgetWithValue" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetCommonSelectSearchWidget" : true
	};
	JkWidgetCommonSelectSearchWidget.prototype._tobj = JkWidgetCommonSelectSearchWidget;
	JkWidgetCommonSelectSearchWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonSelectSearchWidget;
		return v.CTOR_JkWidgetCommonSelectSearchWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonSelectSearchWidget.prototype.CTOR_JkWidgetCommonSelectSearchWidget_JkUiGuiApplicationContext = function(context) {
		this.icon = null;
		this.label = null;
		this.background = null;
		this.shown = false;
		this.container = null;
		this.myContainer = null;
		this.itemscontainer = null;
		this.widgetValueChangeHandler = null;
		this.widgetItems = null;
		this.widgetOutlineColor = null;
		this.defaultNoRecordMessage = "No record found";
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonSelectSearchWidget.prototype.initializeWidget = function() {
		JkWidgetLayerWidget.prototype.initializeWidget.call(this);
		this.itemscontainer = JkWidgetVerticalBoxWidget.forContext(this.context, 0, 0);
		var input = JkWidgetCommonTextInputWidget.forType(this.context, JkWidgetCommonTextInputWidget.TYPE_DEFAULT, "Search");
		input.setWidgetPadding1((this.context.getHeightValue("1000um")));
		input.setWidgetTextChangeHandler((function() {
			this.onWidgetTextChanged((input.getWidgetText()));
		}.bind(this)));
		var canvas = JkWidgetCanvasWidget.forColor(this.context, (JkGfxColor.white()));
		canvas.setWidgetOutlineWidth((this.context.getHeightValue("100um")));
		if(this.widgetOutlineColor != null) {
			this.background.setWidgetOutlineColor(this.widgetOutlineColor);
			canvas.setWidgetOutlineColor(this.widgetOutlineColor);
		}
		else {
			canvas.setWidgetOutlineColor((JkGfxColor.black()));
		}
		var vbox = JkWidgetVerticalBoxWidget.forContext(this.context, 0, 0);
		vbox.addWidget((JkWidgetLayerWidget.forWidget(this.context, input, (this.context.getHeightValue("500um")))));
		vbox.addWidget((JkWidgetLayerWidget.forWidget(this.context, this.itemscontainer, (this.context.getHeightValue("500um")))));
		this.container = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.container.addWidget(canvas);
		this.container.addWidget(vbox);
		JkWidgetWidget.setWidgetClickHandler(this, (function() {
			if(!this.shown) {
				this.showPopup();
			}
			else {
				this.closePopup();
			}
		}.bind(this)));
	};
	JkWidgetCommonSelectSearchWidget.prototype.setWidgetPlaceholder = function(text) {
		this.label.setWidgetText(text);
		return this;
	};
	JkWidgetCommonSelectSearchWidget.prototype.setWidgetImageResource = function(resource) {
		this.icon.setWidgetImageResource(resource);
		return this;
	};
	JkWidgetCommonSelectSearchWidget.prototype.setWidgetBackgroundColor = function(color) {
		this.background.setWidgetColor(color);
		return this;
	};
	JkWidgetCommonSelectSearchWidget.prototype.onWidgetTextChanged = function(value) {
		this.clearItems();
		this.searchStringFromItems(value);
	};
	JkWidgetCommonSelectSearchWidget.prototype.searchStringFromItems = function(value) {
		if(!(this.widgetItems != null) || this.widgetItems.count() < 1) {
			this.addItemToList(null);
		}
		var isEmpty = false;
		if(JkLangString.isEmpty(value)) {
			isEmpty = true;
		}
		var it = this.widgetItems.iterate();
		while(it != null){
			var item = it.next();
			if(!(item != null)) {
				break;
			}
			if(!isEmpty) {
				if(JkLangString.contains((JkLangString.toLowerCase(item.value)), (JkLangString.toLowerCase(value)))) {
					this.addItemToList(item.value);
				}
			}
			else {
				this.addItemToList(item.value);
			}
		}
		if(JkLangVector.getSize((JkWidgetWidget.getChildren(this.itemscontainer))) < 1) {
			this.addItemToList(null);
		}
	};
	JkWidgetCommonSelectSearchWidget.prototype.clearItems = function() {
		if(!(this.itemscontainer != null)) {
			return;
		}
		JkWidgetWidget.removeChildrenOf(this.itemscontainer);
	};
	JkWidgetCommonSelectSearchWidget.prototype.setWidgetItems = function(items) {
		this.widgetItems = items;
		if(!(this.widgetItems != null)) {
			return;
		}
		var it = this.widgetItems.iterate();
		while(it != null){
			var item = it.next();
			if(!(item != null)) {
				break;
			}
			this.addItemToList(item.value);
		}
	};
	JkWidgetCommonSelectSearchWidget.prototype.createWidgetItem = function(title) {
		var textColor = this.context.getStyleColor("SelectSearchWidget", "textColor", null);
		if(!(textColor != null)) {
			textColor = JkGfxColor.black();
		}
		var backgroundColor = this.context.getStyleColor("SelectSearchWidget", "itemBackgroundColor", null);
		if(!(backgroundColor != null)) {
			backgroundColor = JkGfxColor.white();
		}
		var padding = this.context.getStylePixels("SelectSearchWidget", "padding", null);
		if(padding < 1) {
			padding = this.context.getHeightValue("1000um");
		}
		var fontSize = this.context.getStylePixels("SelectSearchWidget", "fontSize", null);
		if(fontSize < 1) {
			fontSize = this.context.getHeightValue("2mm");
		}
		var t = title;
		if(JkLangString.isEmpty(t)) {
			t = this.defaultNoRecordMessage;
		}
		var ttitle = t;
		var lbl = JkWidgetLabelWidget.forText(this.context, ttitle);
		lbl.setWidgetTextColor(textColor);
		var layer = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		layer.addWidget((JkWidgetCanvasWidget.forColor(this.context, backgroundColor)));
		layer.addWidget((JkWidgetLayerWidget.forWidget(this.context, lbl, padding)));
		if(JkLangString.isNotEmpty(title)) {
			JkWidgetWidget.setWidgetClickHandler(layer, (function() {
				this.label.setWidgetText(ttitle);
				this.closePopup();
				this.onWidgetSelectionChanged();
			}.bind(this)));
		}
		return layer;
	};
	JkWidgetCommonSelectSearchWidget.prototype.onWidgetSelectionChanged = function() {
		if(this.widgetValueChangeHandler != null) {
			this.widgetValueChangeHandler();
		}
	};
	JkWidgetCommonSelectSearchWidget.prototype.showPopup = function() {
		if(!(this.container != null)) {
			return;
		}
		if(this.shown) {
			return;
		}
		var thisWidget = this;
		var parentLayer = null;
		var parent = JkWidgetWidget.getParent(thisWidget);
		while(parent != null){
			if(JkWidgetLayerWidget.IS_INSTANCE && JkWidgetLayerWidget.IS_INSTANCE(parent)) {
				parentLayer = parent;
			}
			parent = JkWidgetWidget.getParent(parent);
		}
		if(!(parentLayer != null)) {
			console.log("[jk.widget.common.SelectSearchWidget.showPopup] (SelectSearchWidget.sling:234:3): No LayerWidget was found in the widget tree. Cannot show suggestions dropdown!");
			return;
		}
		this.myContainer = JkWidgetCommonSelectSearchWidgetMyContainerWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.myContainer.setWidget(thisWidget);
		this.myContainer.addWidget(this.container);
		parentLayer.addWidget(this.myContainer);
		var animationDestY = JkWidgetWidget.getAbsoluteY(thisWidget);
		var ay = this.context.getHeightValue("3mm");
		JkWidgetWidget.move(this.container, (JkWidgetWidget.getAbsoluteX(thisWidget)), (~(~(animationDestY + ay))));
		var anim = JkWidgetWidgetAnimation.forDuration(this.context, 300);
		anim.addCallback((function(completion1) {
			var bgf = completion1 * 1.5;
			if(bgf > 1.0) {
				bgf = 1.0;
			}
			JkWidgetWidget.move(this.container, (JkWidgetWidget.getAbsoluteX(thisWidget)), (~(~(animationDestY + ~(~((1.0 - completion1) * ay))))));
		}.bind(this)));
		anim.start();
		this.shown = true;
	};
	JkWidgetCommonSelectSearchWidget.prototype.closePopup = function() {
		if(!this.shown) {
			return;
		}
		var anim = JkWidgetWidgetAnimation.forDuration(this.context, 300);
		anim.addFadeOut(this.myContainer, true);
		anim.start();
		this.shown = false;
	};
	JkWidgetCommonSelectSearchWidget.prototype.addItemToList = function(item) {
		var v = this.createWidgetItem(item);
		if(v != null) {
			this.itemscontainer.addWidget(v);
		}
	};
	JkWidgetCommonSelectSearchWidget.prototype.findIndexForWidgetValue = function(value) {
		var v = -1;
		if(this.widgetItems != null) {
			var n = 0;
			var it = this.widgetItems.iterate();
			while(it != null){
				var item = it.next();
				if(!(item != null)) {
					break;
				}
				if(item.value == value) {
					v = n;
					break;
				}
				n++;
			}
		}
		return v;
	};
	JkWidgetCommonSelectSearchWidget.prototype.getSelectedWidgetValue = function() {
		var index = this.findIndexForWidgetValue((this.label.getWidgetText()));
		if(!(this.widgetItems != null) || index < 0) {
			return null;
		}
		return this.widgetItems.getKey(index);
	};
	JkWidgetCommonSelectSearchWidget.prototype.setSelectedWidgetValue = function(value) {
		this.label.setWidgetText(value);
	};
	JkWidgetCommonSelectSearchWidget.prototype.setWidgetValue = function(value) {
		this.setSelectedWidgetValue((JkLangString.asString(value)));
	};
	JkWidgetCommonSelectSearchWidget.prototype.getWidgetValue = function() {
		return this.getSelectedWidgetValue();
	};
	JkWidgetCommonSelectSearchWidget.prototype.setWidgetValueChangeHandler = function(handler) {
		this.widgetValueChangeHandler = handler;
	};
	JkWidgetCommonSelectSearchWidget.prototype.createWidget = function() {
		JkWidgetLayerWidget.prototype.createWidget.call(this);
		var thisWidget = this;
		this.background = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.background.setWidgetColor((JkGfxColor.white()));
		this.background.setWidgetOutlineWidth((this.context.getHeightValue("100um")));
		this.background.setWidgetOutlineColor((JkGfxColor.black()));
		this.addWidget(this.background);
		var widget = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		widget.setWidgetMarginLeft((this.context.getHeightValue("1000um")));
		var widget2 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.label = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.label.setWidgetText("Select");
		widget2.addWidget1(this.label, 0.0, 0.5, false);
		widget.addWidget(widget2);
		this.addWidget(widget);
		var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.icon = JkWidgetImageWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.icon.setWidgetImageResource("arrow_down");
		this.icon.setWidgetImageWidth((this.context.getHeightValue("7000um")));
		this.icon.setWidgetImageHeight((this.context.getHeightValue("7000um")));
		widget3.addWidget1(this.icon, 1.0, 0.5, false);
		this.addWidget(widget3);
	};
	JkWidgetCommonSelectSearchWidget.prototype.getDefaultNoRecordMessage = function() {
		return this.defaultNoRecordMessage;
	};
	JkWidgetCommonSelectSearchWidget.prototype.setDefaultNoRecordMessage = function(v) {
		this.defaultNoRecordMessage = v;
		return this;
	};
	JkWidgetCommonSelectSearchWidget.prototype.getWidgetOutlineColor = function() {
		return this.widgetOutlineColor;
	};
	JkWidgetCommonSelectSearchWidget.prototype.setWidgetOutlineColor = function(v) {
		this.widgetOutlineColor = v;
		return this;
	};
	JkWidgetCommonSelectSearchWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonSelectSearchWidget"] === true;
	};
	let JkWidgetCommonCustomScrollBarWidget = function() {
		JkWidgetRenderableWidget.call(this);
		this.widgetOnScrollCallback = null;
		this.widgetMaximumValueY = 1000.0;
		this.widgetVisibleHeight = 40.0;
		this.widgetScrollableHeight = 100.0;
		this.widgetSpeedY = 0.5;
		this.valueY = 0.0;
		this.scrollBarY = 0.0;
		this.scrollBarHeight = 0.0;
	};
	JkWidgetCommonCustomScrollBarWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetRenderableWidget.prototype);
	JkWidgetCommonCustomScrollBarWidget.prototype.constructor = JkWidgetCommonCustomScrollBarWidget;
	JkWidgetCommonCustomScrollBarWidget.prototype._t = {
		"JkWidgetResizeAwareWidget" : true,
		"JkWidgetRenderableWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetCommonCustomScrollBarWidget" : true,
		"JkWidgetParentAwareWidget" : true
	};
	JkWidgetCommonCustomScrollBarWidget.prototype._tobj = JkWidgetCommonCustomScrollBarWidget;
	JkWidgetCommonCustomScrollBarWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonCustomScrollBarWidget;
		return v.CTOR_JkWidgetCommonCustomScrollBarWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonCustomScrollBarWidget.prototype.CTOR_JkWidgetCommonCustomScrollBarWidget_JkUiGuiApplicationContext = function(context) {
		this.scrollBarHeight = 0.0;
		this.scrollBarY = 0.0;
		this.valueY = 0.0;
		this.widgetSpeedY = 0.5;
		this.widgetScrollableHeight = 100.0;
		this.widgetVisibleHeight = 40.0;
		this.widgetMaximumValueY = 1000.0;
		this.widgetOnScrollCallback = null;
		if(JkWidgetRenderableWidget.prototype.CTOR_JkWidgetRenderableWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonCustomScrollBarWidget.prototype.onWidgetResized = function() {
		this.computeScrollBarLayout();
		JkWidgetRenderableWidget.prototype.onWidgetResized.call(this);
	};
	JkWidgetCommonCustomScrollBarWidget.prototype.render = function(ctx) {
		ctx.clearRect(0, 0, (JkWidgetWidget.getWidth(this)), (JkWidgetWidget.getHeight(this)));
		ctx.setFillStyle((JkGfxColor.forString("red")));
		ctx.fillRect(0, this.scrollBarY, (JkWidgetWidget.getWidth(this)), this.scrollBarHeight);
		this.valueY = this.scrollBarY / (JkWidgetWidget.getHeight(this) - ~(~this.scrollBarHeight)) * this.widgetMaximumValueY;
	};
	JkWidgetCommonCustomScrollBarWidget.prototype.computeScrollBarLayout = function() {
		this.scrollBarHeight = this.widgetVisibleHeight / this.widgetScrollableHeight * JkWidgetWidget.getHeight(this);
		this.scrollBarY = this.valueY / this.widgetMaximumValueY * (JkWidgetWidget.getHeight(this) - ~(~this.scrollBarHeight));
	};
	JkWidgetCommonCustomScrollBarWidget.prototype.prepareElement = function(element) {
		JkWidgetRenderableWidget.prototype.prepareElement.call(this, element);
		JkUiHTMLDOM.addEventListenerWithParameterInCallback(element, "wheel", (function(e1) {
			this.onWheel(e1);
		}.bind(this)));
	};
	JkWidgetCommonCustomScrollBarWidget.prototype.onWheel = function(e) {
		var h = JkWidgetWidget.getHeight(this);
		var newY = this.scrollBarY - this.widgetSpeedY * e.wheelDeltaY;
		if(newY > h - ~(~this.scrollBarHeight)) {
			newY = h - ~(~this.scrollBarHeight);
		}
		else if(newY < 0) {
			newY = 0;
		}
		if(this.scrollBarY != newY) {
			this.scrollBarY = newY;
			this.redraw();
			this.onScroll(0, this.scrollBarY);
		}
	};
	JkWidgetCommonCustomScrollBarWidget.prototype.onScroll = function(scrollX, scrollY) {
		if(this.widgetOnScrollCallback != null) {
			this.widgetOnScrollCallback(scrollX, scrollY);
		}
	};
	JkWidgetCommonCustomScrollBarWidget.prototype.getWidgetOnScrollCallback = function() {
		return this.widgetOnScrollCallback;
	};
	JkWidgetCommonCustomScrollBarWidget.prototype.setWidgetOnScrollCallback = function(v) {
		this.widgetOnScrollCallback = v;
		return this;
	};
	JkWidgetCommonCustomScrollBarWidget.prototype.getWidgetMaximumValueY = function() {
		return this.widgetMaximumValueY;
	};
	JkWidgetCommonCustomScrollBarWidget.prototype.setWidgetMaximumValueY = function(v) {
		this.widgetMaximumValueY = v;
		return this;
	};
	JkWidgetCommonCustomScrollBarWidget.prototype.getWidgetVisibleHeight = function() {
		return this.widgetVisibleHeight;
	};
	JkWidgetCommonCustomScrollBarWidget.prototype.setWidgetVisibleHeight = function(v) {
		this.widgetVisibleHeight = v;
		return this;
	};
	JkWidgetCommonCustomScrollBarWidget.prototype.getWidgetScrollableHeight = function() {
		return this.widgetScrollableHeight;
	};
	JkWidgetCommonCustomScrollBarWidget.prototype.setWidgetScrollableHeight = function(v) {
		this.widgetScrollableHeight = v;
		return this;
	};
	JkWidgetCommonCustomScrollBarWidget.prototype.getWidgetSpeedY = function() {
		return this.widgetSpeedY;
	};
	JkWidgetCommonCustomScrollBarWidget.prototype.setWidgetSpeedY = function(v) {
		this.widgetSpeedY = v;
		return this;
	};
	JkWidgetCommonCustomScrollBarWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonCustomScrollBarWidget"] === true;
	};
	let JkWidgetCommonToolbarWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.defaultActionItemWidgetBackgroundColor = null;
		this.defaultActionItemWidgetTextColor = null;
		this.widgetBackgroundColor = null;
		this.widgetItems = null;
		this.overlayWidget = null;
	};
	JkWidgetCommonToolbarWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonToolbarWidget.prototype.constructor = JkWidgetCommonToolbarWidget;
	JkWidgetCommonToolbarWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetCommonToolbarWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetCommonToolbarWidget.prototype._tobj = JkWidgetCommonToolbarWidget;
	JkWidgetCommonToolbarWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetCommonToolbarWidget;
		return v.CTOR_JkWidgetCommonToolbarWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetCommonToolbarWidget.prototype.CTOR_JkWidgetCommonToolbarWidget_JkUiGuiApplicationContext = function(context) {
		this.overlayWidget = null;
		this.widgetItems = null;
		this.widgetBackgroundColor = null;
		this.defaultActionItemWidgetTextColor = null;
		this.defaultActionItemWidgetBackgroundColor = null;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetCommonToolbarWidget.forItems = function(ctx, items, color) {
		var v = JkWidgetCommonToolbarWidget.NEW_JkUiGuiApplicationContext(ctx);
		v.setWidgetItems(items);
		v.setWidgetBackgroundColor(color);
		return v;
	};
	JkWidgetCommonToolbarWidget.prototype.addToWidgetItems = function(widget) {
		if(!(widget != null)) {
			return;
		}
		if(!(this.widgetItems != null)) {
			this.widgetItems = new Array;
		}
		this.widgetItems.push(widget);
	};
	JkWidgetCommonToolbarWidget.prototype.determineBackgroundColor = function() {
		var wc = this.widgetBackgroundColor;
		if(!(wc != null)) {
			wc = JkGfxColor.white();
		}
		return wc;
	};
	JkWidgetCommonToolbarWidget.prototype.determineTextColor = function(backgroundColor, textColor, defaultTextColor) {
		var tc = textColor;
		if(!(tc != null)) {
			tc = defaultTextColor;
		}
		if(!(tc != null)) {
			var cc = this.determineBackgroundColor();
			if(cc.isDarkColor()) {
				tc = JkGfxColor.white();
			}
			else {
				tc = JkGfxColor.black();
			}
		}
		return tc;
	};
	JkWidgetCommonToolbarWidget.prototype.addActionItem = function(text, resName, handler, textColor) {
		var iconWidget = JkWidgetImageWidget.forImageResource(this.context, resName);
		iconWidget.setWidgetImageScaleMethod(JkWidgetImageWidget.FIT);
		iconWidget.setWidgetImageHeight((this.context.getHeightValue("5mm")));
		iconWidget.setWidgetImageWidth((this.context.getWidthValue("5mm")));
		var tc = this.determineTextColor(this.widgetBackgroundColor, textColor, this.defaultActionItemWidgetTextColor);
		var mm2 = this.context.getHeightValue("2mm");
		var lbl = JkWidgetLabelWidget.forText(this.context, text);
		lbl.setWidgetFontSize(mm2);
		lbl.setWidgetTextColor(tc);
		var vbox = JkWidgetVerticalBoxWidget.forContext(this.context, 0, (this.context.getHeightValue("1mm")));
		vbox.addWidget((JkWidgetAlignWidget.forWidget(this.context, iconWidget, 0.5, 0.5, 0)));
		vbox.addWidget((JkWidgetAlignWidget.forWidget(this.context, lbl, 0.5, 0.5, 0)));
		if(handler != null) {
			JkWidgetWidget.setWidgetClickHandler(vbox, handler);
		}
		this.addToWidgetItems(vbox);
		return this;
	};
	JkWidgetCommonToolbarWidget.prototype.addOverlay = function(widget) {
		this.overlayWidget.addWidget(widget);
	};
	JkWidgetCommonToolbarWidget.prototype.removeOverlay = function() {
		if(!(this.overlayWidget != null)) {
			return false;
		}
		JkWidgetWidget.removeChildrenOf(this.overlayWidget);
		return true;
	};
	JkWidgetCommonToolbarWidget.prototype.initializeWidget = function() {
		JkWidgetLayerWidget.prototype.initializeWidget.call(this);
		this.overlayWidget = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		var bgc = this.widgetBackgroundColor;
		if(!(bgc != null)) {
			bgc = this.defaultActionItemWidgetBackgroundColor;
		}
		if(bgc != null) {
			this.addWidget((JkWidgetCanvasWidget.forColor(this.context, bgc)));
		}
		var hbox = JkWidgetHorizontalBoxWidget.forContext(this.context, 0, 0);
		if(this.widgetItems != null) {
			var n = 0;
			var m = this.widgetItems.length;
			for(n = 0 ; n < m ; n++) {
				var w = this.widgetItems[n];
				if(w != null) {
					hbox.addWidget1((JkWidgetAlignWidget.forWidget(this.context, w, 0.5, 0.5, 0)), 1.0);
				}
			}
		}
		this.addWidget((JkWidgetLayerWidget.forWidget(this.context, hbox, (this.context.getHeightValue("1mm")))));
		this.addWidget(this.overlayWidget);
	};
	JkWidgetCommonToolbarWidget.prototype.getDefaultActionItemWidgetBackgroundColor = function() {
		return this.defaultActionItemWidgetBackgroundColor;
	};
	JkWidgetCommonToolbarWidget.prototype.setDefaultActionItemWidgetBackgroundColor = function(v) {
		this.defaultActionItemWidgetBackgroundColor = v;
		return this;
	};
	JkWidgetCommonToolbarWidget.prototype.getDefaultActionItemWidgetTextColor = function() {
		return this.defaultActionItemWidgetTextColor;
	};
	JkWidgetCommonToolbarWidget.prototype.setDefaultActionItemWidgetTextColor = function(v) {
		this.defaultActionItemWidgetTextColor = v;
		return this;
	};
	JkWidgetCommonToolbarWidget.prototype.getWidgetBackgroundColor = function() {
		return this.widgetBackgroundColor;
	};
	JkWidgetCommonToolbarWidget.prototype.setWidgetBackgroundColor = function(v) {
		this.widgetBackgroundColor = v;
		return this;
	};
	JkWidgetCommonToolbarWidget.prototype.getWidgetItems = function() {
		return this.widgetItems;
	};
	JkWidgetCommonToolbarWidget.prototype.setWidgetItems = function(v) {
		this.widgetItems = v;
		return this;
	};
	JkWidgetCommonToolbarWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonToolbarWidget"] === true;
	};
	let JkWidgetCommonPopupDialogManager = function() {
		this.context = null;
		this.parent = null;
		this.backgroundColor = null;
		this.headerBackgroundColor = null;
		this.headerTextColor = null;
		this.messageTextColor = null;
		this.positiveButtonColor = null;
		this.negativeButtonColor = null;
	};
	JkWidgetCommonPopupDialogManager.prototype._t = { "JkWidgetCommonPopupDialogManager" : true };
	JkWidgetCommonPopupDialogManager.prototype._tobj = JkWidgetCommonPopupDialogManager;
	JkWidgetCommonPopupDialogManager.NEW_JkUiGuiApplicationContextJkWidgetWidget = function(context, parent) {
		var v = new JkWidgetCommonPopupDialogManager;
		return v.CTOR_JkWidgetCommonPopupDialogManager_JkUiGuiApplicationContextJkWidgetWidget(context, parent);
	};
	JkWidgetCommonPopupDialogManager.prototype.CTOR_JkWidgetCommonPopupDialogManager_JkUiGuiApplicationContextJkWidgetWidget = function(context, parent) {
		this.negativeButtonColor = null;
		this.positiveButtonColor = null;
		this.messageTextColor = null;
		this.headerTextColor = null;
		this.headerBackgroundColor = null;
		this.backgroundColor = null;
		this.parent = null;
		this.context = null;
		this.context = context;
		this.parent = parent;
		this.positiveButtonColor = JkGfxColor.forRGB(0x80, 0xcc, 0x80);
		this.negativeButtonColor = JkGfxColor.forRGB(0xcc, 0x80, 0x80);
		this.backgroundColor = null;
		this.headerBackgroundColor = null;
		this.headerTextColor = null;
		this.messageTextColor = null;
		return this;
	};
	JkWidgetCommonPopupDialogManager.prototype.setButtonColor = function(color) {
		this.positiveButtonColor = color;
		this.negativeButtonColor = color;
		return this;
	};
	JkWidgetCommonPopupDialogManager.prototype.showTextInputDialog = function(title, prompt, callback) {
		this.checkForDefaultColors();
		var mm2 = this.context.getWidthValue("2mm");
		var mm3 = this.context.getWidthValue("3mm");
		var widget = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		widget.setWidgetWidthRequest((this.context.getWidthValue("100mm")));
		widget.addWidget((JkWidgetCanvasWidget.forColor(this.context, this.backgroundColor)));
		var titleLabel = JkWidgetLabelWidget.forText(this.context, title);
		titleLabel.setWidgetFontSize(mm3);
		titleLabel.setWidgetTextColor(this.headerTextColor);
		titleLabel.setWidgetFontBold(true);
		var box = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
		box.addWidget((JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context).addWidget((JkWidgetCanvasWidget.forColor(this.context, this.headerBackgroundColor))).addWidget((JkWidgetAlignWidget.forWidget(this.context, titleLabel, 0, 0.5, 0).setWidgetMargin(mm3)))));
		var sbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
		sbox.setWidgetMargin(mm3);
		sbox.setWidgetSpacing(mm3);
		var messageLabel = JkWidgetLabelWidget.forText(this.context, prompt);
		messageLabel.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
		messageLabel.setWidgetFontSize(mm3);
		messageLabel.setWidgetTextColor(this.messageTextColor);
		sbox.addWidget(messageLabel);
		var input = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
		input.setWidgetBackgroundColor((JkGfxColor.forRGB(200, 200, 200)));
		input.setWidgetPadding1((this.context.getHeightValue("2mm")));
		input.setWidgetFontSize((this.context.getHeightValue("3000um")));
		sbox.addWidget(input);
		var buttons = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
		buttons.setWidgetSpacing(mm3);
		var padding = this.context.getHeightValue("2000um");
		var noButton = JkWidgetCommonTextButtonWidget.forText(this.context, "Cancel", null);
		noButton.setWidgetBackgroundColor(this.negativeButtonColor);
		noButton.setWidgetPadding(padding);
		buttons.addWidget1(noButton, 1.0);
		var yesButton = JkWidgetCommonTextButtonWidget.forText(this.context, "OK", null);
		yesButton.setWidgetBackgroundColor(this.positiveButtonColor);
		yesButton.setWidgetPadding(padding);
		buttons.addWidget1(yesButton, 1.0);
		sbox.addWidget(buttons);
		box.addWidget(sbox);
		widget.addWidget(box);
		var pp = JkWidgetCommonPopupWidget.forContentWidget(this.context, (JkWidgetLayerWidget.forWidget(this.context, widget, mm2)));
		var cb = callback;
		pp.showPopup(this.parent);
		yesButton.setWidgetClickHandler((function() {
			pp.hidePopup();
			if(cb != null) {
				cb((input.getWidgetText()));
			}
		}.bind(this)));
		noButton.setWidgetClickHandler((function() {
			pp.hidePopup();
			if(cb != null) {
				cb(null);
			}
		}.bind(this)));
	};
	JkWidgetCommonPopupDialogManager.prototype.showMessageDialog = function(title, message, callback) {
		this.checkForDefaultColors();
		var mm2 = this.context.getWidthValue("2mm");
		var mm3 = this.context.getWidthValue("3mm");
		var widget = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		widget.setWidgetWidthRequest((this.context.getWidthValue("100mm")));
		widget.addWidget((JkWidgetCanvasWidget.forColor(this.context, (JkGfxColor.white()))));
		var titleLabel = JkWidgetLabelWidget.forText(this.context, title);
		titleLabel.setWidgetFontSize(mm3);
		titleLabel.setWidgetTextColor(this.headerTextColor);
		titleLabel.setWidgetFontBold(true);
		var box = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
		box.addWidget((JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context).addWidget((JkWidgetCanvasWidget.forColor(this.context, this.headerBackgroundColor))).addWidget((JkWidgetAlignWidget.forWidget(this.context, titleLabel, 0, 0.5, 0).setWidgetMargin(mm3)))));
		var sbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
		sbox.setWidgetMargin(mm3);
		sbox.setWidgetSpacing(mm3);
		var messageLabel = JkWidgetLabelWidget.forText(this.context, message);
		messageLabel.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
		messageLabel.setWidgetFontSize(mm3);
		messageLabel.setWidgetTextColor(this.messageTextColor);
		sbox.addWidget(messageLabel);
		var buttons = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
		buttons.setWidgetSpacing(mm3);
		var okButton = JkWidgetCommonTextButtonWidget.forText(this.context, "OK", null);
		okButton.setWidgetBackgroundColor(this.positiveButtonColor);
		okButton.setWidgetPadding((this.context.getHeightValue("2000um")));
		buttons.addWidget1(okButton, 1.0);
		sbox.addWidget(buttons);
		box.addWidget(sbox);
		widget.addWidget(box);
		var pp = JkWidgetCommonPopupWidget.forContentWidget(this.context, (JkWidgetLayerWidget.forWidget(this.context, widget, mm2)));
		var cb = callback;
		pp.showPopup(this.parent);
		okButton.setWidgetClickHandler((function() {
			pp.hidePopup();
			if(cb != null) {
				cb();
			}
		}.bind(this)));
	};
	JkWidgetCommonPopupDialogManager.prototype.showConfirmDialog = function(title, message, okcallback, cancelcallback) {
		this.checkForDefaultColors();
		var mm2 = this.context.getWidthValue("2mm");
		var mm3 = this.context.getWidthValue("3mm");
		var widget = JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context);
		widget.setWidgetWidthRequest((this.context.getWidthValue("100mm")));
		widget.addWidget((JkWidgetCanvasWidget.forColor(this.context, (JkGfxColor.white()))));
		var titleLabel = JkWidgetLabelWidget.forText(this.context, title);
		titleLabel.setWidgetFontSize(mm3);
		titleLabel.setWidgetTextColor(this.headerTextColor);
		titleLabel.setWidgetFontBold(true);
		var box = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
		box.addWidget((JkWidgetLayerWidget.NEW_JkUiGuiApplicationContext(this.context).addWidget((JkWidgetCanvasWidget.forColor(this.context, this.headerBackgroundColor))).addWidget((JkWidgetAlignWidget.forWidget(this.context, titleLabel, 0, 0.5, 0).setWidgetMargin(mm3)))));
		var sbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
		sbox.setWidgetMargin(mm3);
		sbox.setWidgetSpacing(mm3);
		var messageLabel = JkWidgetLabelWidget.forText(this.context, message);
		messageLabel.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
		messageLabel.setWidgetFontSize(mm3);
		messageLabel.setWidgetTextColor(this.messageTextColor);
		sbox.addWidget(messageLabel);
		var buttons = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
		buttons.setWidgetSpacing(mm3);
		var padding = this.context.getHeightValue("2000um");
		var noButton = JkWidgetCommonTextButtonWidget.forText(this.context, "NO", null);
		noButton.setWidgetBackgroundColor(this.negativeButtonColor);
		noButton.setWidgetPadding(padding);
		buttons.addWidget1(noButton, 1.0);
		var yesButton = JkWidgetCommonTextButtonWidget.forText(this.context, "YES", null);
		yesButton.setWidgetBackgroundColor(this.positiveButtonColor);
		yesButton.setWidgetPadding(padding);
		buttons.addWidget1(yesButton, 1.0);
		sbox.addWidget(buttons);
		box.addWidget(sbox);
		widget.addWidget(box);
		var pp = JkWidgetCommonPopupWidget.forContentWidget(this.context, (JkWidgetLayerWidget.forWidget(this.context, widget, mm2)));
		var okcb = okcallback;
		var cancelcb = cancelcallback;
		pp.showPopup(this.parent);
		yesButton.setWidgetClickHandler((function() {
			pp.hidePopup();
			if(okcb != null) {
				okcb();
			}
		}.bind(this)));
		noButton.setWidgetClickHandler((function() {
			pp.hidePopup();
			if(cancelcb != null) {
				cancelcb();
			}
		}.bind(this)));
	};
	JkWidgetCommonPopupDialogManager.prototype.showErrorDialog = function(message, callback) {
		this.showMessageDialog("Error", message, callback);
	};
	JkWidgetCommonPopupDialogManager.prototype.checkForDefaultColors = function() {
		var bgc = this.backgroundColor;
		if(bgc == null) {
			this.backgroundColor = JkGfxColor.white();
		}
		var hbg = this.headerBackgroundColor;
		if(hbg == null) {
			this.headerBackgroundColor = JkGfxColor.black();
		}
		var htc = this.headerTextColor;
		if(htc == null) {
			if(this.headerBackgroundColor.isDarkColor()) {
				this.headerTextColor = JkGfxColor.white();
			}
			else {
				this.headerTextColor = JkGfxColor.black();
			}
		}
		var mtc = this.messageTextColor;
		if(mtc == null) {
			if(this.backgroundColor.isDarkColor()) {
				this.messageTextColor = JkGfxColor.white();
			}
			else {
				this.messageTextColor = JkGfxColor.black();
			}
		}
	};
	JkWidgetCommonPopupDialogManager.prototype.getContext = function() {
		return this.context;
	};
	JkWidgetCommonPopupDialogManager.prototype.setContext = function(v) {
		this.context = v;
		return this;
	};
	JkWidgetCommonPopupDialogManager.prototype.getParent = function() {
		return this.parent;
	};
	JkWidgetCommonPopupDialogManager.prototype.setParent = function(v) {
		this.parent = v;
		return this;
	};
	JkWidgetCommonPopupDialogManager.prototype.getBackgroundColor = function() {
		return this.backgroundColor;
	};
	JkWidgetCommonPopupDialogManager.prototype.setBackgroundColor = function(v) {
		this.backgroundColor = v;
		return this;
	};
	JkWidgetCommonPopupDialogManager.prototype.getHeaderBackgroundColor = function() {
		return this.headerBackgroundColor;
	};
	JkWidgetCommonPopupDialogManager.prototype.setHeaderBackgroundColor = function(v) {
		this.headerBackgroundColor = v;
		return this;
	};
	JkWidgetCommonPopupDialogManager.prototype.getHeaderTextColor = function() {
		return this.headerTextColor;
	};
	JkWidgetCommonPopupDialogManager.prototype.setHeaderTextColor = function(v) {
		this.headerTextColor = v;
		return this;
	};
	JkWidgetCommonPopupDialogManager.prototype.getMessageTextColor = function() {
		return this.messageTextColor;
	};
	JkWidgetCommonPopupDialogManager.prototype.setMessageTextColor = function(v) {
		this.messageTextColor = v;
		return this;
	};
	JkWidgetCommonPopupDialogManager.prototype.getPositiveButtonColor = function() {
		return this.positiveButtonColor;
	};
	JkWidgetCommonPopupDialogManager.prototype.setPositiveButtonColor = function(v) {
		this.positiveButtonColor = v;
		return this;
	};
	JkWidgetCommonPopupDialogManager.prototype.getNegativeButtonColor = function() {
		return this.negativeButtonColor;
	};
	JkWidgetCommonPopupDialogManager.prototype.setNegativeButtonColor = function(v) {
		this.negativeButtonColor = v;
		return this;
	};
	JkWidgetCommonPopupDialogManager.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonPopupDialogManager"] === true;
	};
	let JkWidgetCommonRoundedImageWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.widgetScaleSize = 0;
		this.imageWidget = null;
	};
	JkWidgetCommonRoundedImageWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetCommonRoundedImageWidget.prototype.constructor = JkWidgetCommonRoundedImageWidget;
	JkWidgetCommonRoundedImageWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetWidgetWithLayout" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetCommonRoundedImageWidget" : true
	};
	JkWidgetCommonRoundedImageWidget.prototype._tobj = JkWidgetCommonRoundedImageWidget;
	JkWidgetCommonRoundedImageWidget.NEW_JkUiGuiApplicationContext = function(ctx) {
		var v = new JkWidgetCommonRoundedImageWidget;
		return v.CTOR_JkWidgetCommonRoundedImageWidget_JkUiGuiApplicationContext(ctx);
	};
	JkWidgetCommonRoundedImageWidget.prototype.CTOR_JkWidgetCommonRoundedImageWidget_JkUiGuiApplicationContext = function(ctx) {
		this.imageWidget = null;
		this.widgetScaleSize = 0;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, ctx) == null) {
			return null;
		}
		this.forceCreateWidget();
		return this;
	};
	JkWidgetCommonRoundedImageWidget.prototype.setWidgetSize = function(sz) {
		this.setWidgetHeightRequest(sz);
		this.setWidgetWidthRequest(sz);
		return this;
	};
	JkWidgetCommonRoundedImageWidget.prototype.setWidgetImageResource = function(src) {
		var image = JkUiImageUtil.createCircularImageSync((this.context.getResourceImage(src)));
		this.imageWidget.setWidgetImage(image);
		return this;
	};
	JkWidgetCommonRoundedImageWidget.prototype.setWidgetImage = function(image) {
		var img = JkUiImageUtil.createCircularImageSync(image);
		this.imageWidget.setWidgetImage(img);
		return this;
	};
	JkWidgetCommonRoundedImageWidget.prototype.createWidget = function() {
		JkWidgetLayerWidget.prototype.createWidget.call(this);
		var thisWidget = this;
		this.imageWidget = JkWidgetImageWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.imageWidget.setWidgetImageScaleMethod(JkWidgetImageWidget.FILL);
		this.addWidget(this.imageWidget);
	};
	JkWidgetCommonRoundedImageWidget.prototype.getWidgetScaleSize = function() {
		return this.widgetScaleSize;
	};
	JkWidgetCommonRoundedImageWidget.prototype.setWidgetScaleSize = function(v) {
		this.widgetScaleSize = v;
		return this;
	};
	JkWidgetCommonRoundedImageWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetCommonRoundedImageWidget"] === true;
	};
	let JkWidgetWebAsynchronousImageWidget = function() {
		JkWidgetLayerWidget.call(this);
		this.overlay = null;
		this.widgetImageWidth = 0;
		this.widgetImageHeight = 0;
		this.widgetImageScaleMethod = 0;
		this.widgetPlaceholderImage = null;
	};
	JkWidgetWebAsynchronousImageWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	JkWidgetWebAsynchronousImageWidget.prototype.constructor = JkWidgetWebAsynchronousImageWidget;
	JkWidgetWebAsynchronousImageWidget.prototype._t = {
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetWebAsynchronousImageWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	JkWidgetWebAsynchronousImageWidget.prototype._tobj = JkWidgetWebAsynchronousImageWidget;
	JkWidgetWebAsynchronousImageWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetWebAsynchronousImageWidget;
		return v.CTOR_JkWidgetWebAsynchronousImageWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetWebAsynchronousImageWidget.prototype.CTOR_JkWidgetWebAsynchronousImageWidget_JkUiGuiApplicationContext = function(context) {
		this.widgetPlaceholderImage = null;
		this.widgetImageScaleMethod = 0;
		this.widgetImageHeight = 0;
		this.widgetImageWidth = 0;
		this.overlay = null;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetWebAsynchronousImageWidget.prototype.configureImageWidgetProperties = function(imageWidget) {
		imageWidget.setWidgetImageWidth(this.widgetImageWidth);
		imageWidget.setWidgetImageHeight(this.widgetImageHeight);
		imageWidget.setWidgetImageScaleMethod(this.widgetImageScaleMethod);
	};
	JkWidgetWebAsynchronousImageWidget.prototype.onStartLoading = function(useOverlay) {
		this.removeAllChildren();
		var v = JkWidgetImageWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.configureImageWidgetProperties(v);
		if(this.widgetPlaceholderImage != null) {
			v.setWidgetImage(this.widgetPlaceholderImage);
		}
		this.addWidget(v);
		if(useOverlay) {
			this.overlay = JkWidgetCanvasWidget.forColor(this.context, (JkGfxColor.forRGBA(0, 0, 0, 200)));
			this.addWidget(this.overlay);
		}
		return v;
	};
	JkWidgetWebAsynchronousImageWidget.prototype.onEndLoading = function() {
		if(this.overlay != null) {
			JkWidgetWidget.removeFromParent(this.overlay);
			this.overlay = null;
		}
	};
	JkWidgetWebAsynchronousImageWidget.prototype.getWidgetImageWidth = function() {
		return this.widgetImageWidth;
	};
	JkWidgetWebAsynchronousImageWidget.prototype.setWidgetImageWidth = function(v) {
		this.widgetImageWidth = v;
		return this;
	};
	JkWidgetWebAsynchronousImageWidget.prototype.getWidgetImageHeight = function() {
		return this.widgetImageHeight;
	};
	JkWidgetWebAsynchronousImageWidget.prototype.setWidgetImageHeight = function(v) {
		this.widgetImageHeight = v;
		return this;
	};
	JkWidgetWebAsynchronousImageWidget.prototype.getWidgetImageScaleMethod = function() {
		return this.widgetImageScaleMethod;
	};
	JkWidgetWebAsynchronousImageWidget.prototype.setWidgetImageScaleMethod = function(v) {
		this.widgetImageScaleMethod = v;
		return this;
	};
	JkWidgetWebAsynchronousImageWidget.prototype.getWidgetPlaceholderImage = function() {
		return this.widgetPlaceholderImage;
	};
	JkWidgetWebAsynchronousImageWidget.prototype.setWidgetPlaceholderImage = function(v) {
		this.widgetPlaceholderImage = v;
		return this;
	};
	JkWidgetWebAsynchronousImageWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetWebAsynchronousImageWidget"] === true;
	};
	let JkWidgetWebCachingWebImageWidgetCachedImage = function() {
		this.image = null;
		this.timeStamp = 0;
		this.ttl = 0;
		this.queue = null;
	};
	JkWidgetWebCachingWebImageWidgetCachedImage.prototype._t = { "JkWidgetWebCachingWebImageWidgetCachedImage" : true };
	JkWidgetWebCachingWebImageWidgetCachedImage.prototype._tobj = JkWidgetWebCachingWebImageWidgetCachedImage;
	JkWidgetWebCachingWebImageWidgetCachedImage.NEW = function() {
		var v = new JkWidgetWebCachingWebImageWidgetCachedImage;
		return v.CTOR_JkWidgetWebCachingWebImageWidgetCachedImage();
	};
	JkWidgetWebCachingWebImageWidgetCachedImage.prototype.CTOR_JkWidgetWebCachingWebImageWidgetCachedImage = function() {
		this.queue = null;
		this.ttl = 0;
		this.timeStamp = 0;
		this.image = null;
		this.queue = new Array;
		this.timeStamp = JkTimeSystemClock.asSeconds();
		return this;
	};
	JkWidgetWebCachingWebImageWidgetCachedImage.prototype.isAvailable = function() {
		return this.image != null && JkTimeSystemClock.asSeconds() - this.timeStamp < this.ttl;
	};
	JkWidgetWebCachingWebImageWidgetCachedImage.prototype.push = function(callback) {
		JkLangVector.append(this.queue, callback);
	};
	JkWidgetWebCachingWebImageWidgetCachedImage.prototype.pop = function() {
		return JkLangVector.popFirst(this.queue);
	};
	JkWidgetWebCachingWebImageWidgetCachedImage.prototype.checkTTL = function() {
		if(JkTimeSystemClock.asSeconds() - this.timeStamp >= this.ttl) {
			this.timeStamp = JkTimeSystemClock.asSeconds();
			this.image = null;
		}
	};
	JkWidgetWebCachingWebImageWidgetCachedImage.prototype.getImage = function() {
		return this.image;
	};
	JkWidgetWebCachingWebImageWidgetCachedImage.prototype.setImage = function(v) {
		this.image = v;
		return this;
	};
	JkWidgetWebCachingWebImageWidgetCachedImage.prototype.getTimeStamp = function() {
		return this.timeStamp;
	};
	JkWidgetWebCachingWebImageWidgetCachedImage.prototype.setTimeStamp = function(v) {
		this.timeStamp = v;
		return this;
	};
	JkWidgetWebCachingWebImageWidgetCachedImage.prototype.getTtl = function() {
		return this.ttl;
	};
	JkWidgetWebCachingWebImageWidgetCachedImage.prototype.setTtl = function(v) {
		this.ttl = v;
		return this;
	};
	JkWidgetWebCachingWebImageWidgetCachedImage.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetWebCachingWebImageWidgetCachedImage"] === true;
	};
	let JkWidgetWebWebImageWidget = function() {
		JkWidgetWebAsynchronousImageWidget.call(this);
		this.widgetImage = null;
		this.widgetUseOverlay = false;
	};
	JkWidgetWebWebImageWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetWebAsynchronousImageWidget.prototype);
	JkWidgetWebWebImageWidget.prototype.constructor = JkWidgetWebWebImageWidget;
	JkWidgetWebWebImageWidget.prototype._t = {
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetWidgetWithLayout" : true,
		"JkWidgetWebAsynchronousImageWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWebWebImageWidget" : true
	};
	JkWidgetWebWebImageWidget.prototype._tobj = JkWidgetWebWebImageWidget;
	JkWidgetWebWebImageWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetWebWebImageWidget;
		return v.CTOR_JkWidgetWebWebImageWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetWebWebImageWidget.prototype.CTOR_JkWidgetWebWebImageWidget_JkUiGuiApplicationContext = function(context) {
		this.widgetUseOverlay = false;
		this.widgetImage = null;
		if(JkWidgetWebAsynchronousImageWidget.prototype.CTOR_JkWidgetWebAsynchronousImageWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetWebWebImageWidget.forPlaceholderImage = function(context, image) {
		var v = JkWidgetWebWebImageWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetPlaceholderImage(image);
		return v;
	};
	JkWidgetWebWebImageWidget.prototype.setWidgetImageResource = function(resName) {
		var img = this.onStartLoading(false);
		if(img != null) {
			img.setWidgetImageResource(resName);
		}
		this.onEndLoading();
	};
	JkWidgetWebWebImageWidget.prototype.getWidgetImage = function() {
		return this.widgetImage;
	};
	JkWidgetWebWebImageWidget.prototype.setWidgetImage = function(image) {
		var img = this.onStartLoading(false);
		this.widgetImage = image;
		if(img != null) {
			img.setWidgetImage(image);
		}
		this.onEndLoading();
	};
	JkWidgetWebWebImageWidget.prototype.setWidgetImageUrl1 = function(url, callback) {
		this.setWidgetImageUrl2(url, null, null, callback);
	};
	JkWidgetWebWebImageWidget.prototype.setWidgetImageUrl2 = function(url, headers, body, callback) {
		JkLogLog.debug(this.context, ("WebImageWidget" + ": Start loading image: `" + JkLangString.safeString(url) + "'"));
		var img = this.onStartLoading(this.widgetUseOverlay);
		if(!(headers != null)) {
			var path = url;
			var imgo = JkUiImageForBrowser.NEW();
			var image = null;
			image = new Image();
			image.src = path;
			;
			imgo.image = image;
			img.setWidgetImage(imgo);
			this.widgetImage = imgo;
			return;
		}
		JkWidgetWebWebImageWidget.doQueryImage(this.context, url, headers, body, (function(imgo2) {
			this.onEndLoading();
			this.widgetImage = imgo2;
			img.setWidgetImage(imgo2);
		}.bind(this)), callback);
	};
	JkWidgetWebWebImageWidget.doQueryImage = function(context, url, headers, body, callback, errorCallback) {
		var client = JkWebNativeWebClient.instance();
		if(!(client != null)) {
			JkLogLog.error(context, "Failed to create web client.");
			if(errorCallback != null) {
				errorCallback((JkLangError.forCode("noWebClient", null)));
			}
			return;
		}
		var uu = url;
		var cb = callback;
		var ecb = errorCallback;
		var contextf = context;
		client.query("GET", url, headers, body, (function(rcode1, rheaders1, rbody1) {
			if(rbody1 == null || JkLangBuffer.getSize(rbody1) < 1) {
				JkLogLog.error(contextf, ("WebImageWidget" + ": FAILED loading image: `" + JkLangString.safeString(uu) + "'"));
				if(ecb != null) {
					ecb((JkLangError.forCode("failedToDownload", null)));
				}
				return;
			}
			var mimeType = null;
			var hdrv = rheaders1.asVector();
			if(hdrv != null) {
				var n = 0;
				var m = hdrv.length;
				for(n = 0 ; n < m ; n++) {
					var hdr = hdrv[n];
					if(hdr != null) {
						if(JkLangString.equalsIgnoreCase(hdr.key, "content-type")) {
							var vv = hdr.value;
							if(vv != null) {
								var sc = JkLangString.getIndexOfCharacter(vv, (";".charCodeAt()), 0);
								if(sc < 0) {
									mimeType = vv;
								}
								else {
									mimeType = JkLangString.getEndOfString(vv, sc);
								}
							}
						}
					}
				}
			}
			contextf.getImageForBuffer(rbody1, mimeType, (function(imgo1) {
				if(!(imgo1 != null)) {
					JkLogLog.error(contextf, ("WebImageWidget" + ": Failed to create image from the returned data"));
					if(ecb != null) {
						ecb((JkLangError.forCode("failedToCreateImage", null)));
					}
					return;
				}
				cb(imgo1);
			}.bind(this)));
		}.bind(this)));
	};
	JkWidgetWebWebImageWidget.prototype.getWidgetUseOverlay = function() {
		return this.widgetUseOverlay;
	};
	JkWidgetWebWebImageWidget.prototype.setWidgetUseOverlay = function(v) {
		this.widgetUseOverlay = v;
		return this;
	};
	JkWidgetWebWebImageWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetWebWebImageWidget"] === true;
	};
	let JkWidgetWebWebWidget = function() {
		JkWidgetWidget.call(this);
		this.widgetContext = null;
		this.widgetUrl = null;
		this.widgetHtmlString = null;
		this.customUrlHandler = null;
	};
	JkWidgetWebWebWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetWidget.prototype);
	JkWidgetWebWebWidget.prototype.constructor = JkWidgetWebWebWidget;
	JkWidgetWebWebWidget.prototype._t = {
		"JkWidgetWidget" : true,
		"JkWidgetWebWebWidget" : true
	};
	JkWidgetWebWebWidget.prototype._tobj = JkWidgetWebWebWidget;
	JkWidgetWebWebWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetWebWebWidget;
		return v.CTOR_JkWidgetWebWebWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetWebWebWidget.prototype.CTOR_JkWidgetWebWebWidget_JkUiGuiApplicationContext = function(context) {
		if(JkWidgetWidget.prototype.CTOR_JkWidgetWidget.call(this) == null) {
			return null;
		}
		this.customUrlHandler = null;
		this.widgetHtmlString = null;
		this.widgetUrl = null;
		this.widgetContext = null;
		this.widgetContext = context;
		return this;
	};
	JkWidgetWebWebWidget.forUrl = function(context, url) {
		var v = JkWidgetWebWebWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetUrl(url);
		return v;
	};
	JkWidgetWebWebWidget.forHtmlString = function(context, html) {
		var v = JkWidgetWebWebWidget.NEW_JkUiGuiApplicationContext(context);
		v.setWidgetHtmlString(html);
		return v;
	};
	JkWidgetWebWebWidget.prototype.createElement = function() {
		var v = JkUiHTMLDOM.createElement("iframe");
		JkUiHTMLDOM.setAttribute(v, "sandbox", "allow-forms allow-scripts allow-modals allow-popups allow-same-origin");
		return v;
	};
	JkWidgetWebWebWidget.prototype.overrideWidgetUrlLoading = function(url) {
		if(this.customUrlHandler != null) {
			return this.customUrlHandler(url);
		}
		return false;
	};
	JkWidgetWebWebWidget.prototype.setWebCustomUserAgent = function(customUserAgent) {
		var cua = customUserAgent;
		var web = this;
		return this;
	};
	JkWidgetWebWebWidget.prototype.setWidgetHtmlString = function(html) {
		this.widgetHtmlString = html;
		this.widgetUrl = null;
		this.updateWidgetContent();
		return this;
	};
	JkWidgetWebWebWidget.prototype.getWidgetHtmlString = function() {
		return this.widgetHtmlString;
	};
	JkWidgetWebWebWidget.prototype.setWidgetUrl = function(url) {
		this.widgetUrl = url;
		this.widgetHtmlString = null;
		this.updateWidgetContent();
		return this;
	};
	JkWidgetWebWebWidget.prototype.getWidgetUrl = function() {
		return this.widgetUrl;
	};
	JkWidgetWebWebWidget.prototype.updateWidgetContent = function() {
		var url = this.widgetUrl;
		if(url != null) {
			this.element.src = url;
			;
		}
		else {
			var htmlString = this.widgetHtmlString;
			this.element.srcdoc = htmlString;
			if(!this.element.hasAttribute("srcdoc")) {
				this.element.setAttribute("htmlDoc", htmlString);
				var jsUrl = "javascript: window.frameElement.getAttribute('htmlDoc')";
				this.element.setAttribute("src", jsUrl);
			}
			;
		}
	};
	JkWidgetWebWebWidget.prototype.getCustomUrlHandler = function() {
		return this.customUrlHandler;
	};
	JkWidgetWebWebWidget.prototype.setCustomUrlHandler = function(v) {
		this.customUrlHandler = v;
		return this;
	};
	JkWidgetWebWebWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetWebWebWidget"] === true;
	};
	let JkWidgetWebJSONAPIClientWithGui = function() {
		JkWebJsonJSONAPIClient.call(this);
		this.context = null;
		this.parentWidget = null;
		this.loadingWidget = null;
		this.requestCounter = 0;
	};
	JkWidgetWebJSONAPIClientWithGui.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWebJsonJSONAPIClient.prototype);
	JkWidgetWebJSONAPIClientWithGui.prototype.constructor = JkWidgetWebJSONAPIClientWithGui;
	JkWidgetWebJSONAPIClientWithGui.prototype._t = {
		"JkWebJsonJSONAPIClient" : true,
		"JkWidgetWebJSONAPIClientWithGui" : true
	};
	JkWidgetWebJSONAPIClientWithGui.prototype._tobj = JkWidgetWebJSONAPIClientWithGui;
	JkWidgetWebJSONAPIClientWithGui.NEW = function() {
		var v = new JkWidgetWebJSONAPIClientWithGui;
		return v.CTOR_JkWidgetWebJSONAPIClientWithGui();
	};
	JkWidgetWebJSONAPIClientWithGui.prototype.CTOR_JkWidgetWebJSONAPIClientWithGui = function() {
		this.requestCounter = 0;
		this.loadingWidget = null;
		this.parentWidget = null;
		this.context = null;
		if(JkWebJsonJSONAPIClient.prototype.CTOR_JkWebJsonJSONAPIClient.call(this) == null) {
			return null;
		}
		return this;
	};
	JkWidgetWebJSONAPIClientWithGui.prototype.onStartSendRequest = function() {
		JkWebJsonJSONAPIClient.prototype.onStartSendRequest.call(this);
		if(this.loadingWidget == null) {
			this.loadingWidget = JkWidgetCommonLoadingWidget.openPopup(this.context, this.parentWidget);
		}
		this.requestCounter++;
	};
	JkWidgetWebJSONAPIClientWithGui.prototype.onEndSendRequest = function() {
		JkWebJsonJSONAPIClient.prototype.onEndSendRequest.call(this);
		this.requestCounter--;
		if(this.requestCounter < 1) {
			this.loadingWidget = JkWidgetCommonLoadingWidget.closePopup(this.loadingWidget);
		}
	};
	JkWidgetWebJSONAPIClientWithGui.prototype.onDefaultErrorHandler = function(error) {
		if(error == null || this.context == null) {
			return;
		}
		this.context.showErrorDialog((error.toString()), null);
	};
	JkWidgetWebJSONAPIClientWithGui.prototype.getContext = function() {
		return this.context;
	};
	JkWidgetWebJSONAPIClientWithGui.prototype.setContext = function(v) {
		this.context = v;
		return this;
	};
	JkWidgetWebJSONAPIClientWithGui.prototype.getParentWidget = function() {
		return this.parentWidget;
	};
	JkWidgetWebJSONAPIClientWithGui.prototype.setParentWidget = function(v) {
		this.parentWidget = v;
		return this;
	};
	JkWidgetWebJSONAPIClientWithGui.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetWebJSONAPIClientWithGui"] === true;
	};
	let JkWidgetWebCachingWebImageWidget = function() {
		JkWidgetWebWebImageWidget.call(this);
		this.widgetImageRounded = false;
	};
	JkWidgetWebCachingWebImageWidget.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetWebWebImageWidget.prototype);
	JkWidgetWebCachingWebImageWidget.prototype.constructor = JkWidgetWebCachingWebImageWidget;
	JkWidgetWebCachingWebImageWidget.prototype._t = {
		"JkWidgetWebCachingWebImageWidget" : true,
		"JkWidgetWebAsynchronousImageWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true,
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetWidget" : true,
		"JkWidgetWebWebImageWidget" : true
	};
	JkWidgetWebCachingWebImageWidget.prototype._tobj = JkWidgetWebCachingWebImageWidget;
	JkWidgetWebCachingWebImageWidget.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new JkWidgetWebCachingWebImageWidget;
		return v.CTOR_JkWidgetWebCachingWebImageWidget_JkUiGuiApplicationContext(context);
	};
	JkWidgetWebCachingWebImageWidget.prototype.CTOR_JkWidgetWebCachingWebImageWidget_JkUiGuiApplicationContext = function(context) {
		this.widgetImageRounded = false;
		if(JkWidgetWebWebImageWidget.prototype.CTOR_JkWidgetWebWebImageWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	JkWidgetWebCachingWebImageWidget.setTTL = function(seconds) {
		if(!(seconds >= 60)) {
			return;
		}
		JkWidgetWebCachingWebImageWidget.ttl = seconds;
	};
	JkWidgetWebCachingWebImageWidget.removeCachedImage = function(url, rounded) {
		if(!(JkWidgetWebCachingWebImageWidget.cacheMap != null && JkLangString.isNotEmpty(url))) {
			return;
		}
		var key = rounded ? JkLangString.safeString(url) + "_rounded" : JkLangString.safeString(url) + "_raw";
		JkWidgetWebCachingWebImageWidget.cacheMap.remove(key);
	};
	JkWidgetWebCachingWebImageWidget.queryImage = function(context, url, headers, body, rounded, callback, errorCallback) {
		if(!(JkWidgetWebCachingWebImageWidget.cacheMap != null)) {
			JkWidgetWebCachingWebImageWidget.cacheMap = JkLangDynamicMap.NEW();
		}
		var key = rounded ? JkLangString.safeString(url) + "_rounded" : JkLangString.safeString(url) + "_raw";
		var cachedImage = (function(o) {
			if(JkWidgetWebCachingWebImageWidgetCachedImage.IS_INSTANCE && JkWidgetWebCachingWebImageWidgetCachedImage.IS_INSTANCE(o)) {
				return o;
			}
			return null;
		}.bind(this))((JkWidgetWebCachingWebImageWidget.cacheMap.get(key)));
		if(!(cachedImage != null)) {
			cachedImage = JkWidgetWebCachingWebImageWidgetCachedImage.NEW();
			cachedImage.setTtl(JkWidgetWebCachingWebImageWidget.ttl);
			JkWidgetWebCachingWebImageWidget.cacheMap.setObject(key, cachedImage);
		}
		cachedImage.checkTTL();
		if(cachedImage.isAvailable()) {
			callback((cachedImage.getImage()));
			return;
		}
		cachedImage.push(callback);
		var client = JkWebNativeWebClient.instance();
		if(!(client != null)) {
			JkLogLog.error(context, "Failed to create web client.");
			if(errorCallback != null) {
				errorCallback((JkLangError.forCode("noWebClient", null)));
			}
			return;
		}
		JkLogLog.debug(context, ("CachingWebImageWidget" + ": Start loading image: `" + JkLangString.safeString(url) + "'"));
		var cif = cachedImage;
		var roundedf = rounded;
		var invokeCallback = function(cache1) {
			if(!(cache1 != null)) {
				return;
			}
			while(true){
				var cb = cache1.pop();
				if(!(cb != null)) {
					break;
				}
				cb((cache1.getImage()));
			}
		}.bind(this);
		JkWidgetWebWebImageWidget.doQueryImage(context, url, headers, body, (function(image1) {
			if(roundedf) {
				JkUiImageUtil.createCircularImage(image1, (function(newImage1) {
					cif.setImage(newImage1);
					invokeCallback(cif);
				}.bind(this)));
			}
			else {
				cif.setImage(image1);
				invokeCallback(cif);
			}
		}.bind(this)), errorCallback);
	};
	JkWidgetWebCachingWebImageWidget.prototype.setWidgetImageUrl2 = function(url, headers, body, callback) {
		var img = this.onStartLoading((this.getWidgetUseOverlay()));
		var cb = callback;
		JkWidgetWebCachingWebImageWidget.queryImage(this.context, url, headers, body, this.widgetImageRounded, (function(imgo1) {
			this.onEndLoading();
			img.setWidgetImage(imgo1);
		}.bind(this)), (function(error1) {
			this.onEndLoading();
			if(cb != null) {
				cb(error1);
			}
		}.bind(this)));
	};
	JkWidgetWebCachingWebImageWidget.prototype.getWidgetImageRounded = function() {
		return this.widgetImageRounded;
	};
	JkWidgetWebCachingWebImageWidget.prototype.setWidgetImageRounded = function(v) {
		this.widgetImageRounded = v;
		return this;
	};
	JkWidgetWebCachingWebImageWidget.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["JkWidgetWebCachingWebImageWidget"] === true;
	};
	JkWidgetWebCachingWebImageWidget.cacheMap = null;
	JkWidgetWebCachingWebImageWidget.ttl = 60 * 5;
	let AppAPIClient = function() {
		JkWidgetWebJSONAPIClientWithGui.call(this);
		this.widgetDefaultErrorHandler = null;
	};
	AppAPIClient.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetWebJSONAPIClientWithGui.prototype);
	AppAPIClient.prototype.constructor = AppAPIClient;
	AppAPIClient.prototype._t = {
		"JkWebJsonJSONAPIClient" : true,
		"AppAPIClient" : true,
		"JkWidgetWebJSONAPIClientWithGui" : true
	};
	AppAPIClient.prototype._tobj = AppAPIClient;
	AppAPIClient.NEW = function() {
		var v = new AppAPIClient;
		return v.CTOR_AppAPIClient();
	};
	AppAPIClient.prototype.CTOR_AppAPIClient = function() {
		this.widgetDefaultErrorHandler = null;
		if(JkWidgetWebJSONAPIClientWithGui.prototype.CTOR_JkWidgetWebJSONAPIClientWithGui.call(this) == null) {
			return null;
		}
		return this;
	};
	AppAPIClient.getInstance = function() {
		return AppAPIClient.instance;
	};
	AppAPIClient.create = function(context, parentWidget) {
		if(!(context != null)) {
			return null;
		}
		AppAPIClient.instance = AppAPIClient.NEW();
		AppAPIClient.instance.setApiUrl("http://ec2-54-169-156-128.ap-southeast-1.compute.amazonaws.com:30300");
		AppAPIClient.instance.setContext(context);
		if(parentWidget != null) {
			AppAPIClient.instance.setParentWidget(parentWidget);
		}
		return AppAPIClient.instance;
	};
	AppAPIClient.prototype.onError1 = function(error, callback) {
		if(!(callback != null)) {
			this.onDefaultErrorHandler(error);
			return;
		}
		JkWidgetWebJSONAPIClientWithGui.prototype.onError1.call(this, error, callback);
	};
	AppAPIClient.prototype.onDefaultErrorHandler = function(error) {
		var context = this.getContext();
		if(!(context != null)) {
			return;
		}
		if(!(error != null)) {
			return;
		}
		if(!(this.widgetDefaultErrorHandler != null)) {
			context.showErrorDialog((error.toString()), null);
			return;
		}
		this.widgetDefaultErrorHandler(error);
	};
	AppAPIClient.prototype.addTask = function(data, callback, errorCallback) {
		this.doPost("/task/", data, callback, errorCallback);
	};
	AppAPIClient.prototype.updateTask = function(id, data, callback, errorCallback) {
		this.doPut(("/task/" + JkLangString.safeString(id)), data, callback, errorCallback);
	};
	AppAPIClient.prototype.deleteTask = function(id, callback, errorCallback) {
		this.doDelete(("/task/" + JkLangString.safeString(id)), callback, errorCallback);
	};
	AppAPIClient.prototype.getTasks = function(callback, errorCallback) {
		this.doGet("/task/", callback, errorCallback);
	};
	AppAPIClient.prototype.getWidgetDefaultErrorHandler = function() {
		return this.widgetDefaultErrorHandler;
	};
	AppAPIClient.prototype.setWidgetDefaultErrorHandler = function(v) {
		this.widgetDefaultErrorHandler = v;
		return this;
	};
	AppAPIClient.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["AppAPIClient"] === true;
	};
	AppAPIClient.instance = null;
	let AppTasklist = function() {
		JkWidgetLayerWidget.call(this);
		this.container = null;
		this.list = null;
	};
	AppTasklist.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetLayerWidget.prototype);
	AppTasklist.prototype.constructor = AppTasklist;
	AppTasklist.prototype._t = {
		"JkWidgetHeightAwareWidget" : true,
		"JkWidgetParentAwareWidget" : true,
		"JkWidgetWidget" : true,
		"AppTasklist" : true,
		"JkWidgetLayerWidget" : true,
		"JkWidgetTitledWidget" : true,
		"JkWidgetContainerWidget" : true,
		"JkWidgetWidgetWithLayout" : true
	};
	AppTasklist.prototype._tobj = AppTasklist;
	AppTasklist.NEW_JkUiGuiApplicationContext = function(context) {
		var v = new AppTasklist;
		return v.CTOR_AppTasklist_JkUiGuiApplicationContext(context);
	};
	AppTasklist.prototype.CTOR_AppTasklist_JkUiGuiApplicationContext = function(context) {
		this.list = null;
		this.container = null;
		if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
			return null;
		}
		return this;
	};
	AppTasklist.prototype.initializeWidget = function() {
		JkWidgetLayerWidget.prototype.initializeWidget.call(this);
		AppAPIClient.getInstance().getTasks((function(response1) {
			var data = response1.getDynamicMap("data");
			if(!(data != null)) {
				return;
			}
			var records = data.getDynamicVector("records");
			if(!(records != null) || records.getSize() < 1) {
				this.list.addWidget1((JkWidgetAlignWidget.forWidget(this.context, (JkWidgetLabelWidget.forText(this.context, "hmmmm")), 0.5, 0.5, 0)), 1.0);
			}
			else {
				var array = records.toVector();
				if(array != null) {
					var n = 0;
					var m = array.length;
					for(n = 0 ; n < m ; n++) {
						var record = (function(o) {
							if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
								return o;
							}
							return null;
						}.bind(this))(array[n]);
						if(record != null) {
							var task = JkLangString.safeString((record.getString("name", null))) + " - " + JkLangString.safeString((record.getString("description", null)));
							var lblTask = JkWidgetLabelWidget.forText(this.context, task);
							var hbox = JkWidgetHorizontalBoxWidget.forContext(this.context, 0, (this.context.getHeightValue("0.5mm")));
							hbox.addWidget(lblTask);
							this.list.addWidget1((JkWidgetAlignWidget.forWidget(this.context, hbox, 0.5, 0.5, 0)), 1.0);
						}
					}
				}
			}
		}.bind(this)), null);
	};
	AppTasklist.prototype.getWidgetTitle = function() {
		return "Task list";
	};
	AppTasklist.prototype.createWidget = function() {
		JkWidgetLayerWidget.prototype.createWidget.call(this);
		var thisWidget = this;
		var widget = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
		widget.setWidgetScrollBarDisabled(true);
		this.container = JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.container.setWidgetColor((JkGfxColor.white()));
		this.list = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.list.setWidgetMargin((this.context.getHeightValue("5mm")));
		this.list.setWidgetSpacing((this.context.getHeightValue("5mm")));
		this.container.addWidget(this.list);
		widget.addWidget(this.container);
		this.addWidget(widget);
	};
	AppTasklist.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["AppTasklist"] === true;
	};
	let AppMainScreen = function() {
		JkWidgetScreenForWidget.call(this);
		this.navi = null;
	};
	AppMainScreen.prototype = (function(o) {
		function F() {
		}
		;
		F.prototype = o;
		return new F();
	})(JkWidgetScreenForWidget.prototype);
	AppMainScreen.prototype.constructor = AppMainScreen;
	AppMainScreen.prototype._t = {
		"JkUiScreen" : true,
		"JkUiScreenWithContext" : true,
		"AppMainScreen" : true,
		"JkWidgetScreenForWidget" : true
	};
	AppMainScreen.prototype._tobj = AppMainScreen;
	AppMainScreen.NEW = function() {
		var v = new AppMainScreen;
		return v.CTOR_AppMainScreen();
	};
	AppMainScreen.prototype.CTOR_AppMainScreen = function() {
		this.navi = null;
		if(JkWidgetScreenForWidget.prototype.CTOR_JkWidgetScreenForWidget.call(this) == null) {
			return null;
		}
		return this;
	};
	AppMainScreen.prototype.initialize = function() {
		JkWidgetScreenForWidget.prototype.initialize.call(this);
		this.navi = JkWidgetCommonNavigationWidget.NEW_JkUiGuiApplicationContext(this.context);
		this.navi.setWidgetEnableActionBar(false);
		this.setWidget(this.navi);
		AppAPIClient.create(this.context, this.navi);
		this.navi.pushWidget((AppTasklist.NEW_JkUiGuiApplicationContext(this.context)));
	};
	AppMainScreen.main = function(args) {
		var context = JkUiGuiApplicationContextForHTML.NEW();
		var resources = [];
		context.prepareResources(resources, (function() {
			var main = AppMainScreen.NEW();
			if(JkUiScreenWithContext.IS_INSTANCE && JkUiScreenWithContext.IS_INSTANCE(main)) {
				main.setContext(context);
			}
			main.initialize();
		}.bind(this)));
		return 0;
	};
	AppMainScreen.IS_INSTANCE = function(o) {
		return o != null && o._t != null && o._t["AppMainScreen"] === true;
	};
	AppMainScreen.main();
}
