---
title: Announcement
---

Use the Announcement

## Announcement

<section class="lbh-announcement lbh-announcement--site">
  <div class="lbh-container">
    <h3 class="lbh-announcement__title">Site-wide announcement</h3>
    <div class="lbh-announcement__content"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p></div>
  </div>
</section>

### HTML

```html
<section class="lbh-announcement lbh-announcement--site">
  <div class="lbh-container">
    <h3 class="lbh-announcement__title">Site-wide announcement</h3>
    <div class="lbh-announcement__content">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit.
      </p>
    </div>
  </div>
</section>
```

### Nunjucks

```
{% from "lbh-input/macro.njk" import lbhInput %}

{{ lbhInput({
  "label": { "text": "National Insurance number" },
  "id": "input-example",
  "name": "test-name"
}) }}
```

## Announcement Site-wide with link

<section class="lbh-announcement lbh-announcement--site">
  <div class="lbh-container">
    <h3 class="lbh-announcement__title">Site-wide announcement</h3>
    <div class="lbh-announcement__content"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <a href="#">Nemo enim</a> ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p></div>
  </div>
</section>

### HTML

```html
<section class="lbh-announcement lbh-announcement--site">
  <div class="lbh-container">
    <h3 class="lbh-announcement__title">Site-wide announcement</h3>
    <div class="lbh-announcement__content">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. <a href="#">Nemo enim</a> ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit.
      </p>
    </div>
  </div>
</section>
```

### Nunjucks

```
{% from "lbh-announcement/macro.njk" import lbhAnnouncement %}

{{ lbhAnnouncement({
  "title": "Site-wide announcement",
  "content": "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <a href=\"#\">Nemo enim</a> ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>",
  "isSiteWide": true
}) }}
```