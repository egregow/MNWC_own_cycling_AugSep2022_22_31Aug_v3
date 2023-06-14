

title = 'Surface significance test'

framec='OliveDrab'

v[0] = ['sign']
t[0] = ['Significance']
v[1] = ['00000000']
t[1] = ['00000000']
v[2] = ['00000000']
t[2] = ['ALL']
v[3] = ['ALL'] ;
t[3] = v[3] ;
v[4] = ['PS','FF','GX','DD','TT','TTHA','TN','TX','TD','TDD','RH','QQ','NN','N75','LC','CH','PE1','PE3','PE6','VI']
t[4] = ['Mslp','U10m','Max Wind Gust','Wind direction','T2m','T2m, height corr.','Min T2m','Max T2m','Td2m','Td2m deficit','Rh2m','Q2m','Cloud cover','clouds <7500m','Low clouds','Cloud base','1h Precipitation','3h Precipitation','6h Precipitation','Visibility']
v[5] = [0]
v[5] = v[5].reverse()
t[5] = v[5]
v[6] = ['Prod_EC_cyc_2h','Prod_EC_cyc_3h']
t[6] = ['Prod_EC_cyc_2h','Prod_EC_cyc_3h']
v[7] = ['ALL'] ;
t[7] = v[7] ;

mname = ['Type','Period','Station','Selection','Parameter','Level','Exp','Initial time']
loc = ['l','l','t','t','l','l','t','l']
spec_name =[0,1,2,3,7,6,4,5]
do_debug = false ;
pdir ='Surface/'
ext='1.png'
help = 'Observation verification comparison'; hide_help = false ;
do_send = true ;
do_show_remember = true ;
do_remember = true ;
my_con_txt=['Graphics','Quality control','Stat','Stations']
my_con=['All','Surface/quality_[1].html','Surface/TABLE_LL_[1]_[3].html','Surface/[4]_[1].xml']
