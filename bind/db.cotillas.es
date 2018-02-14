; BIND reverse data file for empty rfc1918 zone
;
; DO NOT EDIT THIS FILE - it is used for multiple zones.
; Instead, copy it, edit named.conf, and use that copy.
;
$TTL	86400
@	IN	SOA	cotillas.es. root.cotillas.es. (
			      1		; Serial
			 604800		; Refresh
			  86400		; Retry
			2419200		; Expire
			  86400 )	; Negative Cache TTL
;
@	IN	NS	ns1.cotillas.es.
@	IN	NS	ns2.cotillas.es.
@	IN	MX	10	ns1.cotillas.es.
ns1	IN	A	210.34.2.2
ns1			AAAA	2002:CAFE:FE0::2
ns2	IN	A	210.34.3.2
ns2			AAAA	2002:CAFE:FE0:2::2
asterisk	IN	A	210.34.2.5
asterisk			AAAA	2002:CAFE:FE0::5
asterisk-madrid	IN	A	210.34.0.5
asterisk-madrid			AAAA	2002:CAFE:FE0:1::5
lists	IN	A	210.34.2.2
ftp	IN	A	210.34.3.4
