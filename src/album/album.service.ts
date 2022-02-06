import { Injectable } from '@nestjs/common';

@Injectable()
export class AlbumService {
  find() {
    // Find one or many album(s)
    return;
  }

  create() {
    // Check if the upcoming album is not registered
    // if not registered then we can create a new record
    // if already registered then send a error
    return;
  }

  update() {
    // update album record
    return;
  }

  delete() {
    // remove a album based on its id
    return;
  }
}
