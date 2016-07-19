/// <reference path="../typings/tsd.d.ts" />

import {Component, OnInit, OnDestroy} from 'angular2/core';
import {PostService} from "./post.service";
import {HTTP_PROVIDERS} from 'angular2/http'

@Component({
    selector: 'my-app',
    template: `
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>       
    `,
    providers: [PostService, HTTP_PROVIDERS]
})

export class AppComponent implements OnInit {
    isLoading = true;

    constructor( private _postService: PostService ) {

    }

    ngOnInit() {
        this._postService.getPosts()
            .subscribe( posts => {
                this.isLoading = false;
                console.log(posts[0].id);
            })
    }
}