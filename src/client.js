import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({

    projectId: 'm4ijzce2',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skjmd0YnViBU2bYaJQIUT8VO5TqnQ9MXpx2aalyZsq2i3i8isQnGYULKmaOYHgwmjaqdK4yQwHuVWU7pa7YGfthd99cSglHcwQ42PDf3gwk7G3Cc3drmBxKZynuJb6F2YelHk9kfbs38g3eCMZcBYKAoImEYcaOa41W3PlSaC4SLkneJNsGw',

});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);