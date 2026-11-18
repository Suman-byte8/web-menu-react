import { Link, useParams } from 'react-router'
import {
  DishHero,
  DishIngredients,
  DishSummary,
  FavouriteButton,
  InfoTile,
  RelatedDishes,
  ServiceNote,
} from '../components/dish/index.js'
import { ROUTES } from '../data/site.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { getDish, getRelatedDishes } from '../lib/dishes.js'
import BackButton from '../shared/BackButton.jsx'
import MinimalHeader from '../shared/MinimalHeader.jsx'
import PageLayout from '../shared/PageLayout.jsx'
import { EmptyState } from '../UI/index.js'

const WIDE = 'lg:max-w-4xl'

function DishNotFound() {
  useDocumentTitle('Dish not found — SILK INN Malda')

  return (
    <PageLayout withDock={false} header={<MinimalHeader leading={<BackButton />} trailing={<span className="size-9" />} />}>
      <EmptyState icon="restaurant_menu" title="Dish not found">
        This dish may have left the menu.{' '}
        <Link to={ROUTES.home} className="font-semibold underline underline-offset-2">
          Browse all menus
        </Link>
      </EmptyState>
    </PageLayout>
  )
}

function DishDetails({ dish }) {
  useDocumentTitle(`${dish.name} — SILK INN Malda`)
  const related = getRelatedDishes(dish)

  return (
    <PageLayout
      withDock={false}
      mainClassName={`gap-6 ${WIDE}`}
      header={
        <MinimalHeader
          containerClassName={WIDE}
          leading={<BackButton history to={dish.menu.route} label="Return to previous menu" />}
          trailing={<FavouriteButton dishId={dish.id} dishName={dish.name} />}
        />
      }
    >
      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-12 lg:items-start lg:gap-8">
        {/* key: reset the photo's error state when moving between dishes */}
        <DishHero key={dish.id} dish={dish} />

        <div className="flex flex-col gap-5 lg:col-span-6">
          <DishSummary dish={dish} />
          <DishIngredients ingredients={dish.ingredients} />

          <section className="grid grid-cols-2 gap-3">
            <InfoTile icon="skillet" iconClassName="text-vibrant-orange" label="Style" value={dish.style} />
            <InfoTile
              icon="room_service"
              iconClassName="text-soft-gold"
              label="Availability"
              value={dish.availability}
            />
          </section>

          <ServiceNote>
            Freshly prepared to order by the SILK INN culinary team. Please inform your server or dial 9 for room
            service regarding any dietary notes.
          </ServiceNote>
        </div>
      </div>

      <RelatedDishes dishes={related} menu={dish.menu} />
    </PageLayout>
  )
}

function DishPage() {
  const { dishId } = useParams()
  const dish = getDish(dishId)

  return dish ? <DishDetails dish={dish} /> : <DishNotFound />
}

export default DishPage
