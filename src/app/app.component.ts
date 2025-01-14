import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';
import {AppRate} from '@ionic-native/app-rate/ngx';
import {EmailComposer} from '@ionic-native/email-composer/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    public pages = [
        {
            title: 'navigation.history',
            url: '/history',
            icon: 'assets/images/nav_icons/history.png',
        },
        {
            title: 'navigation.closest-point-of-interest',
            url: '/closest-point',
            icon: 'assets/images/nav_icons/closest_point_of_interest.png',
        },
        {
            title: 'navigation.archeology_remains',
            url: '/archeology_remains',
            icon: 'assets/images/nav_icons/archeology_remains.png',
        },
        {
            title: 'navigation.churches',
            url: '/churches',
            icon: 'assets/images/nav_icons/churches.png',
        },
        {
            title: 'navigation.monasteries',
            url: '/monasteries',
            icon: 'assets/images/nav_icons/monasteries.png',
        },
        {
            title: 'navigation.places',
            url: '/places',
            icon: 'assets/images/nav_icons/places.png',
        },
        {
            title: 'navigation.forts',
            url: '/forts',
            icon: 'assets/images/nav_icons/forts.png',
        },
        {
            title: 'navigation.ethnos',
            url: '/ethno',
            icon: 'assets/images/nav_icons/ethno.png',
        },
        {
            title: 'navigation.tours',
            url: '/tours',
            icon: 'assets/images/nav_icons/tours.png',
        },
        {
            title: 'navigation.about',
            url: '/about',
            icon: 'assets/images/nav_icons/about.png',
        },
    ];

    lang: string;

    constructor(
        public translate: TranslateService,
        private router: Router,
        private socialSharing: SocialSharing,
        private appRate: AppRate,
        private emailComposer: EmailComposer
    ) {
        this.getLanguage();
    }

    share(): void {
        this.socialSharing
            .share('Download Visit Krk Android/iOS application: https://www.visitkrk.com/hr',
                'Visit Krk Island')
            .then(() => {
                // Success!
            })
            .catch(() => {
                // Error!
            });
    }

    rate(): void {
        this.appRate.setPreferences({
            storeAppURL: {
                ios: '<visit-krk>',
            }
        });

        this.appRate.promptForRating(true);
    }

    sendEmail(): void {
        const email = {
            to: 'tz.otok.krk@gmail.hr'
        };
        this.emailComposer.open(email);
    }

    getLanguage(): void {
        const currentLanguage = localStorage.getItem('language');

        if (currentLanguage === '' || currentLanguage === undefined) {
            localStorage.setItem('language', 'eng');
            this.router.navigateByUrl('');
            return;
        }

        this.translate.use(currentLanguage);

    }

    goToTwitter = () => window.location.href = 'https://mobile.twitter.com/visitkrk_island';
    goToYoutube = () => window.location.href = 'https://www.youtube.com/user/IslandKrkTB/';
    goToFacebook = () => window.location.href = 'https://m.facebook.com/krk.otok.isola.insel.island';
    goToLinkedIn = () => window.location.href = 'https://www.linkedin.com/company/the-island-of-krk-tourist-board/about/';

}
