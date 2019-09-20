export class API_URL {
        
        private static readonly domain  = 'http://192.168.43.49:3020'
        public static readonly BASE = API_URL.domain+'/api';
        public static readonly USER = API_URL.BASE+'/user';
        public static readonly GARBAGE = API_URL.BASE+'/garbage';
        public static readonly ALT_GARBAGE = API_URL.BASE+'/alt/garbage';
        public static readonly AUTH = API_URL.BASE+'/auth';       

}

export class APP_STATIC_DATA {
        
        public static readonly FAKE_USER_ID = '5d59b3c598b8bd3920fc43ad' 
}
