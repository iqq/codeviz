
k 	= long('0000000000000000000000000000000000010000000000000000000000000000', 2)
km 	= long('0000000000000000001010000100010000000000010001000010100000000000', 2)
wp 	= long('0000000000000000000000000000000000010000000001000010000000000000', 2)
kkm = k | km
kms = kkm ^ wp

print '{0:064b}'.format(kms)